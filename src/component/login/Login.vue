<template>

      <el-form label-position="left" label-width="80px" :model="formLabelAlign" ref="ruleForm" class="login">

        <el-form-item label="用戶名" prop="uname">
          <el-input v-model="formLabelAlign.uname"></el-input>
        </el-form-item>

        <el-form-item label="密碼" prop="upwd">
          <el-input v-model="formLabelAlign.upwd"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登錄</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>

</template>
  
 <script>
  export default {


      //驗證賬號
      data() {
        function unameFn(rule, value, callback) {
          if (value == '') {
            callback(new Error("賬號不能為空"));
          } else {
            callback();
          }
        }
        function upwdFn(rule, value, callback) {
          if (value == '') {
            callback(new Error("密碼不能為空"));
          } else {
            callback();
          }
        }

        return {
          formLabelAlign: {
            uname: '',
            upwd: ''
          }
        }
      },

      // 组件初始化完毕, 自动调用
      created() {
        // 测试
        this.$http.get(this.$api.islogin).then(res => {
          console.log(res.data);
        });
      },
      methods: {

        // 登陆
        login() {
          this.$http.post(this.$api.login, this.formLabelAlign).then(res => {
            if (res.data.status == 0) {
              this.$router.push({name:'admin'});
            } else {
              this.$alert(res.data.message);
            }
          });
        },

        // 表单提交
        submitForm(formName) {
          this.$refs[formName].validate(result => {
            if (result) {
              this.login();
            } else {
              this.$alert('你傻啊');
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
  }
  
 </script>

 <style scoped>
    .login{
      width: 600px;
      height: 300px;
      margin: 0 auto;
      position: relative;
      top: 30%;
      transform: rotateY(-50%);
      padding: 25px;
      border: 1px solid #dfffff;
    }

 </style>
