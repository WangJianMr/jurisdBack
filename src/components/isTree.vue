<template>
  <div>
    <el-tree :data="treeList" :props="defaultProps" default-expand-all></el-tree>
  </div>
</template>

<script>
export default {
    props:{
        treeList:{
            type:Array,
            default:()=>[]
        },
        defaultProps:{
            type:Object,
            default:()=>{}
        },
    },

}
</script>

<style>

</style>