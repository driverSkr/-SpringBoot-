<template>
  <div style="width: 1200px;margin: auto;padding-top: 20px;padding-bottom: 30px">
    <!--  理论园地  -->
    <div style="width: 855px;float: left;height: 500px;padding-left: 10px;padding-right: 10px">
      <div style="height: 70px;padding-bottom: 20px;margin-bottom: 10px;border-bottom: 1px #909399 dashed;border-top: 10px #5a8ef1 groove">
        <h1 style="font-family: 'Javanese Text';color: #039ce3;margin-top: 20px">理论园地</h1>
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
            :page-sizes="[15,20,25,30]"
            :page-size="pageSize"
            :total="total"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
    </div>
    <!--  经典论述  -->
    <div style="width: 325px;float: right;height: 1000px">
      <div style="margin-bottom: 20px">
        <img src="../../assets/经典论述.jpg" style="width: 325px;height: 85px">
      </div>
      <div style="height: 400px;margin-bottom: 25px">
<!--        <div style="height: 60px;background-color: #21518e;text-align: center;color: #fff;padding: 15px 8px 8px 8px;">
          <p style="font-family: 宋体;font-size: 28px">统战春秋</p>
        </div>
        <div style="background-color: #cccccc;height: 440px">
          <h1>列表内容</h1>
        </div>-->
        <el-table :data="listData1" border header-cell-style="background-color: #21518e;height:60px;font-size:18px;font-family: 宋体 ;color: white" style="width: 100%;">
          <el-table-column prop="titleB" label="统战春秋" header-align="center"></el-table-column>
        </el-table>
      </div>
      <div style="height: 350px;">
<!--        <div style="height: 60px;background-color: #21518e;text-align: center;color: #fff;padding: 15px 8px 8px 8px;">
          <p style="font-family: 宋体;font-size: 28px">政策资料</p>
        </div>-->
        <el-table :data="listData2" border header-cell-style="background-color: #21518e;height:60px;font-size:18px;font-family: 宋体 ;color: white" style="width: 100%">
          <el-table-column prop="titleC" label="政策资料" header-align="center"></el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<script>


import request from "@/utils/request";

export default {
  name: "UnitedFrontKnowledge",
  data() {
    return {
      tableData: [],
      listData1:[],
      listData2:[],
      headerBg: 'headerBg',
      pageSize: 20,
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
      request.get("/knowledge/list").then(res =>{
        this.listData1 = res.data
        this.listData2 = res.data
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