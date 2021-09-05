<template>
  <div class="table">
    <!-- 功能区 -->
    <div class="btns">
      <el-button type="primary" size="default" @click="">新增</el-button>
      <el-button type="primary" size="default" @click="">删除</el-button>
      <el-button type="primary" size="default" @click="">导出</el-button>
    </div>

    <!-- 搜索区 -->
    <div class="search-box">
      <el-input v-model="search" size="normal" placeholder="请输入关键字"/>
      <el-button type="primary" size="default" @click="">搜索</el-button>
    </div>

    <!-- 表格区 -->
    <el-table :data="tableData" stripe border>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
          <el-popconfirm title="确认删除吗?">
            <template #reference>
              <el-button type="text">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区 -->
    <div class="page-selection">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:"Home",
  components:{

  },
  data(){
    return{
      search:'', // 搜索关键字
      currentPage:1, // 当前页数
      total:10, // 总数
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    handleEdit(){

    }
  }
}
</script>

<style lang="less" scoped>
  .table{
    width: 100%;
    padding: 10px;

    .btns{
      margin: 10px 0;
    }

    .search-box{
      margin: 10px 0;

      .el-input{
        width: 20%;
      }

      .el-button{
        margin-left: 10px;
      }
    }
  }
</style>
