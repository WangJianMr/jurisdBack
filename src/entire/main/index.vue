<template>
  <div class="main">
    <div class="df">
      <div class="icon">
        <i :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="isCollapseChange"></i>
      </div>
      <isTabs class="flex1" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import isTabs from "../../components/isTabs.vue";
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  components: {
    isTabs,
  },
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations({
      listPu: "tabs/listPu",
    }),

    isCollapseChange() {
      let flag = !this.isCollapse;
      this.$emit("isCollapseChange", flag);
    },
  },
  watch: {
    $route: {
      handler(newVal) {
        this.listPu(newVal);
        this.activeNames = this.activeName;
      },
      immediate: true,
    },
  },
};
</script>

<style>
.main {
  width: 100%;
  height: 100%;
}
.mainTop {
  width: 100%;
  height: 40px;
  border-bottom: 0.5px solid #e4e7ed;
}
.icon {
  width: 40px;
  height: 41px;
  background-color: #eaedf1;
  text-align: center;
  line-height: 45px;
}
.icon i {
  font-size: 25px;
}
.df {
  display: flex;
}
.flex1 {
  flex: 1;
}
</style>
