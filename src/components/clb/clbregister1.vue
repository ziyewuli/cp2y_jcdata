<template>
<div class="page-user ng-scope">
  <div class="page-login" >
    <header class="page-header">
        <div class="header-wrap">
            <h3>注册</h3>
            <a href="javascript:window.history.back();" class="nav-left"><i class="icon-back"></i></a>
        </div>
    </header>
    <div class="mod-form-wrap mt20">
        <div class="mod-form">
            <label>手机号</label><input type="text" class="inp ng-pristine ng-untouched ng-valid ng-empty"  v-model="userName" placeholder="请输入手机号">
        </div>
        <div class="mod-form">
            <span :disabled="disabled || timer > 0" class="tip-r ng-scope" v-on:click="getImgCode();">{{text}}</span>
            <label>验证码</label><input ng-model="checkCode" type="tel" class="inp ng-pristine ng-untouched ng-valid ng-empty" placeholder="验证码" style="width: 0.9rem">
        </div>
    </div>
    <div class="pt30 pl15 pr15">
        <button v-on:click="login()" class="btn btn-blue">注册</button>
    </div>
</div>
</div>

</template>

<script>
   import vFooter from '../footer/footer.vue';
   import {mapState} from 'vuex';
      export default {
          name: 'v-clbregister1',
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
           getImgCode:function(){
               if(this.userName==''){
                 this.toastMsg='请输入手机号';
                this.$Message.error(this.toastMsg);
                 return false;
               }
               this.$http.post('/sso/register/getRegisterCode.json', {
               checkCode:'0094',
               device:1,
               mobile:this.userName
               }, {emulateJSON: true})
                 .then(function (response) {
                 let data=response.body;
                 if(data.code==100){
                    this.$Message.success('验证码已发送至手机，请注意查收');
                    this.timer=60;
                    this.timerFun();
                 }else{
                 this.$Message.error(data.resultMsg);
                 return false;
                 }
                 }).then(function (error) {
                 })
           },
           timerFun:function(){
               if (this.timer > 0) {
                  this.timer--;
                  setTimeout(this.timer, 1000);
              }else{
               this.disabled = false;
              }
           }
          },
          computed:{
               text: function () {
                          return this.timer > 0 ? this.timer + 's 后重获取' : '获取验证码';
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
