<template>
  <el-container>
    <!--  header  -->
    <el-header height="275px">
      <user-header/>
    </el-header>

    <el-main>
      <!--表示当前页面的子路由会<router-view/>在里面展示-->
      <router-view/>
    </el-main>

    <!--  footer  -->
    <el-footer>
      <user-footer/>
    </el-footer>
  </el-container>
</template>

<script>

import UserHeader from "@/components/UserHeader";
import UserFooter from "@/components/UserFooter";

export default {
  name: "UserHomePage",
  components: {
    UserFooter,
    UserHeader
  },
}
</script>

<style scoped>

</style>