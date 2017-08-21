<template>
<div class="page-user">
  <div class="page-my">
    <header class="page-header">
        <div class="header-wrap">
            <h3 class="ng-binding">{{userInfo.username}}</h3>
            <a href="#/help?backURL=/myHome" class="nav-left"><i class="icon-msg"></i></a>
            <a href="#/myInfo" class="nav-right"><i class="icon-setting"></i></a>
        </div>
    </header>
    <div class="mod-userinfo">
        <div class="balance-wrap">
            <p>账户余额</p>
            <p class="txt-s40 ng-binding">{{balance.balance | money}}</p>
        </div>
        <ul class="pay-wrap">
            <li class="pr15">
                <a href="#/payType?backURL=/myHome">充值</a>
            </li>
            <li class="pl15">
                <a ng-click="doWithdraw();">提现</a>
            </li>
        </ul>
    </div>
    <div class="mod-menu">
        <a href="#/fund" class="link-trade-list">
            资金明细<i class="mod-arrow-r"></i>
        </a>
        <a href="#/myPacket" class="link-packet">
            我的红包<i class="mod-arrow-r"></i>
        </a>
    </div>
    <div class="mod-menu mt10 mb15">
        <a href="#/attentionWechat" class="link-wechat">
            关注微信<span class="fr pr20 txt-s12 txt-redgold">关注领红包</span> <i class="mod-arrow-r"></i>
        </a>

    </div>
  </div>
   <v-footer :show="footerMenuShow"></v-footer>
</div>
</template>

<script>
   import vFooter from '../footer/footer.vue';
   import {mapState} from 'vuex';
   import Vue from 'vue';
   Vue.filter('money', function(val) {
     val = val.toString().replace(/\$|\,/g,'');
     if(isNaN(val)) {
       val = "0";
     }
     let sign = (val == (val = Math.abs(val)));
     val = Math.floor(val*100+0.50000000001);
     let cents = val%100;
     val = Math.floor(val/100).toString();
     if(cents<10) {
       cents = "0" + cents
     }
     for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
       val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
     }

     return (((sign)?'':'-') + val + '.' + cents);
   })
      export default {
          name: 'v-clbmyHome',
           data(){
              return{
                userInfo:[],
                balance:[]
              }
          },
          created(){
                 this.getUserInfo();
                 this.getBalance();
          },
          components: {
              vFooter
          },
          computed: {
              ...mapState([
                 'footerMenuShow'
              ])
          },
           methods:{
                  getUserInfo(){
                        this.$http.post('/user/userInfo/getUserInfo.json', {
                                         device:1
                                         }, {emulateJSON: true})
                                           .then(function (response) {
                                           let data=response.body;
                                           if(data.code==100){
                                             this.userInfo=data.data;
                                             console.log( this.userInfo);
                                           }else{
                                           this.$Message.error(data.resultMsg);
                                           return false;
                                           }
                                           }).then(function (error) {
                                           })
                  },
                  getBalance(){
                      this.$http.post('/pay/global/assets/getBalance.json', {
                                       device:1
                                       }, {emulateJSON: true})
                                         .then(function (response) {
                                         let data=response.body;
                                         if(data.code==100){
                                           this.balance=data.data;
                                         }else if(data.code==405){
                                         this.$router.push({
                                                name: 'clblogin'
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
  @import 'clbmyHome.styl';

</style>
