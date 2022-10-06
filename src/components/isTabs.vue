<template>
  <div>
    <el-tabs type="card" class="flex1" closable v-model="activeName" @tab-click="tabsClick" @edit="handleTabsEdit">
      <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.title" :name="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {
    activeName: {
      get() {
        return this.$store.getters.activeName;
      },
      set(val) {
        this.$store.commit("tabs/activeChange", val);
      },
    },
    tabList: {
      get() {
        return this.$store.getters.tabList;
      },
      set(val) {
        this.$store.commit("tabs/removeList", val);
      },
    },
  },
  methods: {
    tabsClick(val) {
      this.$router.push(val);
    },

    handleTabsEdit(targetName, action) {
      if (targetName === "homes") return;
      if (action === "remove") {
        let tabs = this.tabList;
        let activeName = this.activeName;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.activeName = activeName;
        this.$router.push(activeName)
        this.tabList = tabs.filter((tab) => tab.name !== targetName);
      }
    },
  },
};
</script>

<style></style>
