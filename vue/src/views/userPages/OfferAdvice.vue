<template>
  <div style="width: 100%;background-color: #f5f5f7;padding-top: 40px;padding-bottom: 40px">
    <div style="width: 50%;background-color: white;margin: auto;padding: 20px">
      <div style="margin: auto;width: 380px;padding-bottom: 20px">
        <div style="text-align: center;padding-bottom: 20px">
          <p style="font-family: 方正粗黑宋简体;font-size: 25px;color: #039ce3">井冈山大学建言献策系统</p>
        </div>
        <div >
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名">
              <el-input v-model="ruleForm.name" placeholder="请输入您的姓名" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="ruleForm.title" placeholder="(最多25个字符)" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="ruleForm.phone" placeholder="请填写正确的手机号" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="建议类型">
              <el-select v-model="ruleForm.type" placeholder="请选择类型">
                <el-option label="纠错误" value="纠政策错误"></el-option>
                <el-option label="发表建议" value="发表建议"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否匿名">
              <el-switch v-model="ruleForm.anonymous"></el-switch>
            </el-form-item>
            <el-form-item label="政治面貌" prop="outlook">
              <el-radio-group v-model="ruleForm.outlook">
                <el-radio label="共产党员"></el-radio>
                <el-radio label="中共预备党员"></el-radio>
                <el-radio label="共青团员"></el-radio>
                <el-radio label="群众"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="正文">
              <el-input type="textarea" v-model="ruleForm.text" placeholder="(最多500个字符)" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: "OfferAdvice",
  data() {
    return {
      ruleForm: {
        dialogVisible: false,
        disabled: false
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        title:[
          {required:true,message:'请输入标题'}
        ],
        text:[
          {required:true,message:'请输入正文内容内容'}
        ],
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.ruleForm = {}
      //this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      if (formName.name==null||formName.title==null||formName.text==null||formName.phone==null||formName.type==null||formName.outlook==null||formName.anonymous==null){
        this.$message.warning("未填完必填内容")
      }else {
        request.post("/advice/post",formName).then(res =>{
          if (res.msg == 'success'){
            this.$message.success("提交成功！");
            this.resetForm('ruleForm');
          }
          else {
            this.$message.error(res.msg)
            this.resetForm('ruleForm');
          }
        })
      }
    },
  }
}
</script>

<style scoped>

</style>