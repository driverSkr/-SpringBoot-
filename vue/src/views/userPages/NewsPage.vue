<template>
  <div style="width: 1200px;height:800px;margin: auto;padding-top: 20px;padding-bottom: 30px">
    <div style="border-bottom: 2px solid #2518dc;padding-bottom: 10px;margin-bottom: 15px">
      <h1 style="text-align: center;font-size: 28px;font-family: 宋体;color: #0737c7">{{title}}</h1>
    </div>
    <div style="display: flex ">
      <div style="width: 50%;flex: 1">
        <p class="el-icon-time"> 发布时间：{{createTime}}</p>
      </div>
      <div style="width: 50%;flex: 1">
        <p class="el-icon-s-custom"> 作者：{{author}}</p>
      </div>
    </div>
    <el-divider></el-divider>
    <p v-html="text" style="font-size: 20px;line-height: 40px"></p>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
  data(){
    return{
      id:this.$route.query.id,
      news:[],
      text:'',
      title:'',
      createTime:'',
      author:''
    }
  },
  created() {
    this.news = JSON.parse(window.sessionStorage.getItem('news'))
    for (let i = 0; i < this.news.length; i++) {
      if (this.news[i].id == this.id){
        this.text = this.news[i].text
        this.title = this.news[i].title
        this.createTime = this.news[i].createTime
        this.author = this.news[i].author
      }
    }
  }
}
</script>

<style scoped>

</style>