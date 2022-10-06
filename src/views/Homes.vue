<template>
  <div class="homes">
    <el-row >
      <el-col :span="12">
          <homes num="0" text="今日支付订单" styles="background-color:#00c0ef"/>
      </el-col>
      <el-col :span="12">
          <homes num="0" text="今日代发货" styles="background-color:#00c0ef"/>
      </el-col>
    </el-row>
     <el-row>
      <el-col :span="12">
          <homes num="0" text="今日已发货订单" styles="background-color:#00c0ef"/>
      </el-col>
      <el-col :span="12">
          <homes num="0" text="今日异常" styles="background-color:#dd4b39" stylese="background-color:#c64333"/>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import homes from '../components/homes.vue'
export default {
  components:{
    homes
  },

};
</script>

<style>
.homes{
  margin-top: 10px;
}
.el-row {
  margin-bottom: 20px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-light {
  background: #e5e9f2;
}

</style>
