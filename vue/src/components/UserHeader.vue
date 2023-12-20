<template>
    <el-menu
        :default-active='activeIndex2'
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#FF6666"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
      <!--顶部背景图片-->
      <div class="topImage">
        <img src= "../assets/topBackground.jpg"  style="width: 100%;position: relative"  alt="">
        <img src= "../assets/红色党徽.png"  style="width: 100px;position: absolute;top:30px;left: 130px"  alt="">
<!--        <h1 style="position: absolute;top:80px;left: 300px">井冈山大学统战系统</h1>-->
        <div style="position: absolute;top:48px;left: 240px">
          <span style="font-size: 30px;color: #e30303;font-weight:bold">井冈山大学统战系统</span><br/>
          <span style="font-size: 15px;font-family: 'Times New Roman';color: #e30303;font-weight:bold">Jinggangshan University United Front System</span>
        </div>
      </div>
      <!--导航菜单-->
      <el-menu-item index="/userHomePage/homePage">学生首页</el-menu-item>
      <el-menu-item index="/userHomePage/newsInformation" >新闻动态</el-menu-item>
      <el-menu-item index="/userHomePage/unitedFrontKnowledge">统战知识</el-menu-item>
      <el-menu-item index="/userHomePage/offerAdvice" >建言献策</el-menu-item>
      <el-menu-item index="/userHomePage/feedBack" >意见反馈</el-menu-item>
      <el-submenu index="2" style="margin-left: 760px">
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
           邹聪波
        </template>
        <el-menu-item index="2-1">个人信息</el-menu-item>
        <el-menu-item index="2-2">修改密码</el-menu-item>
        <el-menu-item index="/">退出</el-menu-item>
      </el-submenu>
    </el-menu>

</template>

<script>
export default {
  name: "UserHeader",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      username:'',
      student:{}
    };
  },
  created() {
    this.student = JSON.parse(window.sessionStorage.getItem("student"))
    this.username = this.student.name
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>