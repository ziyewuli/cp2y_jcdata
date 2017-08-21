<template lang="html">
  <div class="page-user ng-scope">
    <div class="page-login" >
      <header class="page-header">
          <div class="header-wrap">
              <h3>登录</h3>
              <a href="javascript:window.history.back();" class="nav-left"><i class="icon-back"></i></a>
              <a href="#/register1" class="nav-right">注册</a>
          </div>
      </header>
      <el-card class="box-card">
     <el-form label-width="100px" class="demo-ruleForm" v-bind:rules="rules" ref="ruleForm" v-bind:model="ruleForm">
      <div class="mod-form-wrap mt20" >
          <el-form-item label="账号" prop="name" class="mod-form">
              <el-input type="text"  auto-complete="off" v-model="ruleForm.name" placeholder="请输入昵称或手机号码"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input type="password" auto-complete="off" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
           </el-form-item>
      </div>
      <el-form-item>
              <el-button type="primary" v-on:click="handleSubmit"  class=" btn-blue">登录</el-button>
            </el-form-item>
            </el-form>
      </el-card>
  </div>
  </div>

</template>

<script>
export default {
  // 进入路由时判断当前登录状态，已登录则跳转到首页
  beforeRouteEnter (to, from, next) {
    next(VM => {
      if (VM.$AV.User.current()) {
        console.log('当前登录')
        VM.$router.push('/')
      } else {
        console.log('当前未登录')
      }
    })
  },
  data () {
    // 验证名字
    let validatorName = function (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入账号'))
      } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(value) || value.length < 6) {
        callback(new Error('账号只能是6位以上中英文或者数字'))
      } else {
        callback()
      }
    }
    // 验证密码
    let validatorPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else if (!/^[A-Za-z0-9]+$/.test(value) || value.length < 6) {
        callback(new Error('密码只能是6位以上英文或者数字'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { validator: validatorName, trigger: 'blur' }
        ],
        password: [
          { validator: validatorPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 表单提交
    handleSubmit () {
      // 验证表单
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('验证通过')
          // 调用SDK登录方法，执行登录过程

          this.$AV.User.logIn(this.ruleForm.name, this.ruleForm.password).then(loginedUser => {
            console.log(loginedUser)
            this.$message('成功登录')
            // 登录成功跳转到首页
            this.$router.push('/clbindex')
          }, error => {
            console.log(error)
            this.$message('登录失败，请重试')
            // 登录失败清空表单
            this.handleReset()
          })
        } else {
          console.log('验证不通过')
        }
      })
    },
    // 重置表单
    handleReset () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl";
  @import "../../common/css/icon.styl";
  @import "../../common/css/header.styl";
  @import 'clblogin.styl';
  .el-card__body
    padding:0!important
  .el-form-item
    label
      width:45px!important
  .el-form-item__content
    margin-left:0.45rem!important
</style>

