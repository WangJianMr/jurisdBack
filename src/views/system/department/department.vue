<template>
  <div class="depart">
    <isForm v-model.sync="form" :formList="formList">
      <template v-slot:but>
        <el-button icon="el-icon-search">查询</el-button>
        <el-button style="color:#ff7670" icon="el-icon-close">重置</el-button>
        <el-button icon="el-icon-plus" type="primary" @click="newAdd">新增</el-button>
      </template>
    </isForm>

    <isTable :allList="departmentList" :headClassList="headClassList">
      <template v-slot:btn="scope">
        <el-button size="mini" type="primary">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </template>
    </isTable>

    <isDialog :dialogVisible.sync="dialogVisible" :title="title" :dialoWidth="dialoWidth">
      <template v-slot:form>
        <isForm v-model="dialogForm" :formList="dialogFormList" :labelWidth="labelWidth" :rules="rules" @treeFocus="treeFocus"/>
      </template>
      <template v-slot:but>
        <el-button type="danger" @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
      </template>
    </isDialog>

    <isDialog :dialogVisible.sync="treeVisible" :dialoWidth="TreedialoWidth" :title="treeTitle">
      <template v-slot:tree>
        <isTree :treeList="treeList" :defaultProps="defaultProps"/>
      </template>
      <template v-slot:but>
        <el-button type="danger" @click="treeVisible=false">取 消</el-button>
        <el-button type="primary" @click="treeVisible=false">确 定</el-button>
      </template>
    </isDialog>
  </div>
</template>

<script>
import { getDepartmentList,getDeparmentTreeList } from "../../../api/department";
import isForm from "../../../components/queryForm.vue";
import isTable from "../../../components/isTable.vue";
import isDialog from '../../../components/isDialog.vue';
import isTree from '../../../components/isTree.vue'
export default {
  components: {
    isForm,
    isTable,
    isDialog,
    isTree
  },
  data() {
    return {
      //搜索表单绑定v-model
      form: {
        name: "",
      },
      //表单渲染数据
      formList: [
        {
          type: "input",
          prop: "name",
          placeholder: "请输入部门名称",
          size: "small",
          width: "width:200px",
        },
        {
          type: "slot",
          prop: "but",
        },
      ],
      //table渲染数据
      departmentList: [],
      //表格组件
      headClassList: [
        {
          label: "部门名称",
          prop: "name",
        },
        {
          label: "部门编码",
          prop: "deptCode",
        },
        {
          label: "部门电话",
          prop: "deptPhone",
        },
        {
          label: "部门地址",
          prop: "deptAddress",
        },
        {
          label: "序号",
          prop: "orderNum",
        },
      ],
      //模态框状态
      dialogVisible: false,
      //树形模态框状态
      treeVisible:false,
      //模态框标题
      title:'',
      //模态框绑定form
      dialogForm:{
        parentName:'',
        name:'',
        deptCode:'',
        deptPhone:'',
        manager:'',
        deptAddress:'',
        orderNum:'',
      },
      dialogFormList:[
        {
          type:'input',
          prop:'parentName',
          size: "small",
          label:"上级部门",
          width: "width:200px",
        },
        {
          type:'input',
          prop:'name',
          size: "small",
          width: "width:200px",
          label:"部门名称",
        },
        {
          type:'input',
          prop:'deptCode',
          size: "small",
          width: "width:200px",
          label:"部门编码",
        },
        {
          type:'input',
          prop:'deptPhone',
          size: "small",
          width: "width:200px",
          label:"部门电话",
        },
        {
          type:'input',
          prop:'manager',
          size: "small",
          width: "width:200px",
          label:"部门经理",
        },
        {
          type:'input',
          prop:'deptAddress',
          size: "small",
          width: "width:200px",
          label:"部门地址",
        },
        {
          type:'input',
          prop:'orderNum',
          size: "small",
          width: "width:200px",
          label:"部门序号",
        },
      ],
      //input和边的距离
      labelWidth:'80px',
      //模态框宽
      dialoWidth:'620px',
      TreedialoWidth:'300px',
      treeTitle:'',
      //表单校验
       rules: {
          parentName: [
            { required: true, message: '请输入上级部门', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入部门名称', trigger: 'blur' },
          ],
       },
       //树形数据
       treeList:[],
       //树形结构
       defaultProps:{
        children: 'children',
          label: 'name'
       }
    };
  },
  methods: {
    async handelList() {
      try {
        const { data } = await getDepartmentList();

        console.log(data);
        this.departmentList = data;
      } catch (error) {
        console.log(error);
      }
    },
    //新增按钮
    newAdd(){
      this.dialogVisible=true
      this.title='新增部门'
    },
    //聚焦事件
    treeFocus(){
      this.treeVisible=true
      this.treeTitle='选择上级机构'
      this.handelTreeList()
    },
    async handelTreeList(){
      try {
        const {data} = await getDeparmentTreeList()
        this.treeList= data
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.handelList();
  },
};
</script>

<style lang="scss" scoped>
.depart {
  padding: 0 20px;
}

</style>