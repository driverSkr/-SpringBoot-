<template>
  <div class="big">
    <div class="login-box">
      <div class="left">
        <img src= "../assets/党徽.jpg" alt="" style="width: 200px">
      </div>
      <div class="right">
        <div class="login-title">
          <span id="Chie">井冈山大学统战系统</span><br />
          <span id="English" style="font-size: 15px">Jinggangshan University United Front System</span>
        </div>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="账号" prop="id">
            <el-input type="text" prefix-icon="el-icon-user" placeholder="请输入学号" v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="onSubmit">登录</el-button>
            <el-button type="warning" @click="dialogFormVisible = true">注册</el-button>
            <div>
              <el-radio v-model="radio" label="false">学生端</el-radio>
              <el-radio v-model="radio" label="true">管理员</el-radio>
            </div>
          </el-form-item>
        </el-form>

        <el-dialog
            title="温馨提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
          <span>请输入账号和密码</span>
          <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
        </el-dialog>
      </div>

    </div>
    <el-dialog title="用户注册" :visible.sync="dialogFormVisible" class="customWidth">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="学号" prop="id">
          <el-input v-model="ruleForm.id" placeholder="请输入学号" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" prop="outlook">
          <el-select v-model="ruleForm.outlook" placeholder="请选择">
            <el-option label="共产党员" value="共产党员"></el-option>
            <el-option label="中共预备党员" value="中共预备党员"></el-option>
            <el-option label="共青团员" value="共青团员"></el-option>
            <el-option label="群众" value="群众"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="无性别人士"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学院" prop="academy">
          <el-input v-model="ruleForm.academy" placeholder="请输入学院名称" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-input v-model="ruleForm.className" placeholder="请输入班级名称" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleForm)">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="exit('ruleForm')">退出</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

import request from "@/utils/request";

  export default {
    name: "Login",
    data() {
      return {
        form: {
          id:'',
          password: ''
        },
        radio: 'false',
        ruleForm:{
          delivery: false,
        },
        student:{
          id:'',
          name: '',
          password: '',
          gender:'',
          age:'',
          academy:'',
          className:'',
          outlook:''
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          id: [
            {required: true, message: '学号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ],

        },
        dialogFormVisible: false,
        formLabelWidth: '150px',
        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      //登录方法
      onSubmit() {
          this.form.type = this.radio
          request.post("/student/login", this.form).then(res => {
          if (res.data && this.radio=="false"){
            this.$message.success("登录成功")
            localStorage.setItem("student",JSON.stringify(res.data)) //存储用户信息到浏览器
            this.$router.push("/userHomePage") //登录后进行页面跳转，跳转到主页
          }else if (res.data && this.radio=="true"){
            this.$message.success("登录成功")
            this.$router.push("/admin") //登录后进行页面跳转，跳转到主页
          } else {
            this.$message.error(res.data)
            this.form = {username: '',password: ''}
          }
        })
      },
      //注册方法
      submitForm(formName) {
        if (formName.id==null||formName.name==null||formName.password==null||formName.outlook==null||formName.gender==null||formName.academy==null||formName.className==null){
          this.$message.warning("请将信息完整填完")
        }else {
          request.post("/student/register",formName).then(res =>{
            console.log(res)
            if (res){
              this.$message.success("注册成功！");
              this.exit('ruleForm');
            }
            else {
              this.$message.error("注册失败")
              this.resetForm('ruleForm');
            }
          })
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      exit(formName){
        this.$refs[formName].resetFields();
        this.dialogFormVisible=false
      }
    }
  }
</script>

<style  scoped>

.customWidth{
  width: 65% !important;
  margin: auto;
  /*min-width: 100px !important;*/
}

.login-box {
  border: 1px solid #DCDFE6;
  width: 650px;
  height: 450px;
  margin: 150px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background-color: rgba(255, 255, 255, 0.95)
}

.login-title {
  text-align: center;
  margin: 45px 0px 75px 0px;
  color: #303133;
}
.right{
  float: left;
  display: block;
  width: 60%;
  height: 100%;
}
.left{
  float: left;
  display: block;
  width: 40%;
  height: 100%;
}
#Chie {
  font-size: 30px;
  letter-spacing: 6px;
  FILTER: shadow(color #af2dco);
  WIDTH: 100%;
  LINE-HEIGHT: 100%;
}
#English {
  font-size: 22px;
}

.big {
  height: 100vh;
  //background-image: linear-gradient(to bottom right, #FC466B , #3F5EFB);
  overflow: hidden;
  background-image: url("../assets/redFlag.png");
}
</style>