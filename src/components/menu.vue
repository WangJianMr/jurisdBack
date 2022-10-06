<template>
  <div>
    <el-menu :default-active="active" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <menuItem :tabList="tabList" />
    </el-menu>
  </div>
</template>

<script>
import menuItem from './menuItem.vue'
export default {
    name:'menus',
    components:{
        menuItem,
    },
    props:{
        tabList:{
            type:Array,
            default:()=>[]
        },
        isCollapse:{
            type:Boolean,
            default:false
        },
        active:{
          type:String,
        },
    },
    computed:{
    },
}
</script>

<style>
.el-menu{
  border-right: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 211px;
}
</style>