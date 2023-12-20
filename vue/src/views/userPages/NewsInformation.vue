<template>
  <div style="width: 1200px;margin: auto;padding-top: 20px;padding-bottom: 30px">
    <!--  各学院统战工作  -->
    <div style="width: 855px;float: left;height: 500px;padding-left: 10px;padding-right: 10px">
      <div style="height: 70px;padding-bottom: 20px;margin-bottom: 10px;border-bottom: 1px #909399 dashed;border-top: 10px #5a8ef1 groove">
        <h1 style="font-family: 'Javanese Text';color: #039ce3;margin-top: 20px">各学院统战工作</h1>
      </div>
      <div>
        <el-table :data="tableData" border stripe :header-cell-class-name="headerBg">
          <el-table-column prop="id" label="序号" width="55"></el-table-column>
          <el-table-column prop="title" label="标题">
            <template scope="scope">
              <el-link :href='"/userHomePage/newsPage?id="+scope.row.id' target="_self" style="text-decoration: none">{{scope.row.title}}</el-link>
            </template>
          </el-table-column>
          <el-table-column prop="author" label="作者" width="65"></el-table-column>
          <el-table-column prop="createTime" label="日期" width="150"></el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[10, 15, 20, 25]"
            :page-size="pageSize"
            :total="total"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
    </div>
    <!--  热点关注  -->
    <div style="width: 325px;float: right;height: 600px">
<!--      &lt;!&ndash;  右标题    &ndash;&gt;
      <div style="height: 60px;background-color: #21518e;text-align: center;color: #fff;padding: 15px 8px 8px 8px;">
        <p style="font-family: 宋体;font-size: 28px">热点关注</p>
      </div>
      &lt;!&ndash;   热点列表   &ndash;&gt;
      <div style="background-color: rgba(102,102,102,0.17);height: 540px;padding: 15px 20px;">
      </div>-->
      <el-table :data="listData" border header-cell-style="background-color: #21518e;height:60px;font-size:18px;font-family: 宋体 ;color: white" style="width: 100%;">
        <el-table-column prop="title" label="热点关注" header-align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>


import request from "@/utils/request";

export default {
  name: "NewsInformation",
  data() {
    return {
      tableData: [],
      listData:[],
      headerBg: 'headerBg',
      pageSize: 10,
      pageNum: 1,
      total: 0
    }
  },
  created(){
    //请求分页查询数据
    this.load();
    this.list();
  },
  methods: {
    load(){
      //请求分页查询数据(axios版)  /*不用写前缀http://localhost:9090是因为在request.js里配置了baseURL*/
      request.get("/news/page",{
        params:{
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      }).then(res =>{
        console.log(res.data)
        this.tableData = res.data.records
        this.total = res.data.total
        sessionStorage.setItem("news",JSON.stringify(res.data.records)) // 存储用户信息
      })
    },
    list(){
      request.get("/news/list").then(res =>{
        this.listData = res.data
        //sessionStorage.setItem("list",JSON.stringify(res.data)) // 存储用户信息
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.load()
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.load()
    }
  }
}
</script>

<style scoped>

</style>