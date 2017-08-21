<template>
<div class="page-user ng-scope">
  <div class="page-login" >
    <header class="page-header">
        <div class="header-wrap">
            <h3>登录</h3>
            <a href="javascript:window.history.back();" class="nav-left"><i class="icon-back"></i></a>
            <a href="#/clbregister1" class="nav-right">注册</a>
        </div>
    </header>
    <div class="mod-form-wrap mt20">
        <div class="mod-form">
            <label>账号</label><input type="text" class="inp ng-pristine ng-untouched ng-valid ng-empty"  v-model="userName" placeholder="请输入昵称或手机号码">
        </div>
        <div class="mod-form">
            <label>密码</label><input  type="password" class="inp ng-pristine ng-untouched ng-valid ng-empty"  v-model="password" placeholder="请输入密码">
            <router-link :to="clbForgetUserPass"  class="tip-r">忘记密码</router-link>
        </div>
    </div>
    <div class="pt30 pl15 pr15">
        <button v-on:click="login()" class="btn btn-blue">登录</button>
    </div>
</div>
</div>

</template>

<script>
   import vFooter from '../footer/footer.vue';
   import {setCookie,getCookie} from '../../assets/js/cookie.js';
   import {mapState} from 'vuex';
      export default {
          name: 'v-clblogin',
           data(){
              return{
                toast:false,
                toastMsg:'',
                topTitle:'登录',
                loginType:'passLogin',
                userName:'',
                password:'',
                codeNum:'',
                timer:60,
                getVerifyCodeMsg:'获取验证码',
                disb:true
              }
          },
         // 方法
          methods: {
           back(){
               this.$router.back();
           },
           login: function() {
                 if(this.userName==''){
                     this.toastMsg='手机或邮箱不能为空';
                    this.$Message.error(this.toastMsg);
                     return false;
                   }
                   if(this.password==''){
                    this.toastMsg='密码不能为空';
                    this.$Message.info({
                       content: this.toastMsg,
                       duration: 2
                   });
                     return false;
                  }
                  this.$http.post('/sso/yztz_user_login_check.json', {
                  authencationType:'AJAX',
                  device:1,
                  remeber:true,
                  username:this.userName,
                  password:this.password
                  }, {emulateJSON: true})
                    .then(function (response) {
                    let data=response.body;
                    if(data.authenticated){
                      this.$store.commit('UPDATE_token', true);
                       setCookie('username',this.userName,1000*60);
                        this.$router.push({
                                           name: 'clbindex'
                                       });
                    }else{
                    this.$Message.error(data.resultMsg);
                    return false;
                    }
                    }).then(function (error) {
                    })
               }
          }
      };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl";
  @import "../../common/css/icon.styl";
  @import "../../common/css/header.styl";
  @import 'clblogin.styl';

</style>
