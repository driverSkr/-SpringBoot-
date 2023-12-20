<template>
  <div>

    <!-- 增删、导入导出   -->
    <div style="margin: 10px 0">
      txt文本上传：
      <el-upload action="http://localhost:9090/user/import" :show-file-list="false" accept="xlsx" :on-success="handleExcelImportSuccess" style="display: inline-block">
        <el-button type="primary" class="ml-5">导入 <i class="el-icon-bottom"></i></el-button>
      </el-upload>
    </div>
    <el-divider></el-divider>
    <div style="width: 500px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="新闻标题">
          <el-input v-model="form.title" placeholder="请填写标题"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" placeholder="请填写作者"></el-input>
        </el-form-item>
        <el-form-item label="发表时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="新闻内容">
          <el-input type="textarea" v-model="form.text" placeholder="文本不超过500字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即上传</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>

import request from "@/utils/request";
export default {
  name: "adminNewsUpload",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      request.post("/admin/upload",this.form).then(res =>{
        if (res.msg == "success"){
          this.$message.success("上传成功")
        }else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>