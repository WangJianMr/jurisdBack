<template>
  <div>
    <menus :tabList="tabList" :isCollapse="isCollapse" :active="rouer" />
  </div>
</template>

<script>
import menus from "../../components/menu.vue";
export default {
  components: {
    menus,
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
  computed: {
    rouer() {
      return this.$route.path;
    },
    tabList(){
      return this.$store.getters.menuList
    },
  },
  methods: {
  },
  created() {
  },
};
</script>

<style></style>
