<template>
  <div style="width: 100%;background-color: #f5f5f7;padding-top: 40px;padding-bottom: 40px">
    <div class="feedback" style="width: 50%;background-color: white;margin: auto;">
      <div style="margin: auto;width: 380px;padding-bottom: 20px">
        <div style="margin-bottom: 20px;padding-top: 20px">
          <p style="font-family: 方正粗黑宋简体;font-size: 25px;color: #039ce3">井冈山大学意见反馈</p>
        </div>
        <el-divider></el-divider><!--分割线-->
        <div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入您的姓名" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="留言标题" prop="title">
              <el-input v-model="ruleForm.title" placeholder="请输入留言标题" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="留言内容" prop="text">
              <el-input type="textarea" v-model="ruleForm.text" placeholder="请输入留言内容" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="email">
              <el-input v-model="ruleForm.email" placeholder="请输入电子邮箱" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="附件">
              <el-upload
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                  <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                    <i class="el-icon-download"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="意见类型" prop="type">
              <el-select v-model="ruleForm.type" placeholder="请选择意见类型">
                <el-option label="界面体验" value="界面体验"></el-option>
                <el-option label="功能建议" value="功能建议"></el-option>
                <el-option label="BUG反馈" value="BUG反馈"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
<!--            <el-form-item label="匿名" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>-->
            <el-form-item label="政治面貌" prop="outlook">
              <el-radio-group v-model="ruleForm.outlook">
                <el-radio label="共产党员"></el-radio>
                <el-radio label="中共预备党员"></el-radio>
                <el-radio label="共青团员"></el-radio>
                <el-radio label="群众"></el-radio>
              </el-radio-group>
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
  name: "FeedBack",
  data() {
    return {
      ruleForm: {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        title:[
          {required:true,message:'请输入标题'}
        ],
        text:[
          {required:true,message:'请输入留言内容'}
        ],
        email:[
          {required:true,message:'请输入邮箱'}
        ],
        phone:[
          {required:true,message:'请输入手机号'}
        ],
        type: [
          { required: true, message: '请至少选择一个一件类型'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      if (formName.name==null||formName.title==null||formName.text==null||formName.email==null||formName.phone==null||formName.type==null||formName.outlook==null){
        this.$message.warning("未填完必填内容")
      }else {
        request.post("/opinions/post",formName).then(res =>{
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>

</style>