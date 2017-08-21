<template>
<section class="index-wrap">
     <div class="index-notice">
        <span class="notice-tle">最新中奖：</span>
        <div id="notice">
        </div>
    </div>
</section>
</template>
<script>
import {savaToLocal} from '../../common/js/store';
    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'welfare'
                });
                savaToLocal('gank', 'wecome', true);
            }, 2000);
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .slider-container{
    margin:0!important;
    width:100%!important;
  }
  .index-wrap{
      padding-bottom:0.5rem;
  }
  .index-wrap h2{
      height:0.30rem;
      line-height:0.30rem;
      font-size:0.12rem;
      padding:0 0.1rem;
      color:#656565;
  }
  .index-wrap h2 .l_text{
      float:left;
  }
  .index-wrap h2 .r_text{
      float:right;
      position: relative;
      padding-right:0.1rem;
  }
  .index-bnner {
      width: 100%;
      height: 150px;
      overflow: hidden;
      position: relative;
  }

  .index-bnner .slider {
      width: 100%;
      height: 100%;
  }

  .index-bnner .slider .item {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 150px;
      background: #fff;
      margin: 0
  }

  .index-bnner .slider .item a{
      display: inline-block;
  }
  .index-bnner .slider .item img {
      width: 100%;
      height: 150px
  }

  .iosSliderButtons  {
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 100;
      height: 15px;
      text-align: center;
      width: 100%
  }

  .iosSliderButtons  .button {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #b7b7b7;
      border-radius: 50%
  }

  .iosSliderButtons .selected {
      background: #646464
  }

  .index-bnner i {
      display: none!important
  }
  .index-notice{
      height:0.38rem;
      line-height:0.38rem;
      font-size:0.13rem;
      color:#323232;
      padding:0 0.1rem 0 1.1rem;
      background-size:0.15rem 0.17rem;
      position: relative;
      overflow: hidden;
  }
  .index-notice .notice-tle{
      position: absolute;
      top:0;
      left:0.44rem;
  }
  .index-notice #notice{
      padding:0;
      margin: 0.05rem 0;
      height:0.28rem;
      line-height:0.28rem;
      overflow: hidden;
     /* transition:margin 0.5s linear;
      -webkit-transition:margin 0.5s linear;
      -moz-transition:margin 0.5s linear;*/
  }
  .index-notice #notice ul{
    /* transition:margin 0.4s ease-in-out 0s;
      -webkit-transition:margin 0.4s ease-in-out 0s;
      -moz-transition:margin 0.4s ease-in-out 0s;
      animation-iteration-count:infinite*/

  }
  .index-notice #notice li{
      height:0.38rem;
      overflow: hidden;
  }
  .index-soonful{
      background:#fff;
  }
  .index-soonful .l_text{
      padding-left: 0.2rem;
      background-size: 0.14rem 0.13rem;
  }
  .index-soonful .r_text .w-bar-ext{
      position: absolute;
      top:-0.01rem;
      right:0;
  }
  .index-soonful .r_text .ico-next{
      width: 0.06rem;
      height: 0.06rem;
  }
  .index-soonful .soonful-con{
      height:1.60rem;
      overflow: scroll;
  }
  .w-goods{
      padding:0.12rem;
      overflow: hidden;
      float: left;
      overflow: hidden;
  }
  .soonful-con .w-goods{
      width:1.42rem;
      display: inline-block;
      float: none;
  }
  .soonful-con .w-goods .w-goods-info{
      height:0.52rem;
  }
  .w-goods .w-goods-pic{
      text-align: center;
      width:100%;
      height:0.8rem;
  }
  .w-goods .w-goods-pic img{
      width:100%;
      height:100%;
  }
  .w-goods  .w-progressBar .wrap {
      margin-bottom: 8px;
  }

  .w-goods  .w-goods-shortFunc {
      position: absolute;
      right: 5px;
      bottom: 18px;
  }
  .w-goods .w-goods-title{
      font-size:0.14rem;
      color:#656565;
      white-space: nowrap;
      height:0.2rem;
      line-height:0.2rem;
      overflow: hidden;
  }

  .w-goods .w-goods-number .btn{
      width:0.38rem;
      height: 0.16rem;
      line-height:0.14rem;
      -webkit-border-radius:0.02rem;
      -moz-border-radius:0.02rem;
      border-radius:0.02rem;
      float: right;
  }
  .index-hot .w-goods-info{
      position: relative;
  }
  .index-hot .w-goods-info .w-goods-number{
      position: relative;
  }
  .index-hot .hot-tle{
      height:0.34rem;
      line-height:0.34rem;
      border-bottom:1px solid #EAEAEA;
      font-size:0.16rem;
      color:#323232;
      display: box;
      display: -moz-box;
      display: -webkit-box;
      display: -ms-flexbox;
      width: 100%;
      position: relative;
  }
  .index-hot .hot-tle li{
      box-flex: 1;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      width: 50px;
      text-align: center;
  }
  .index-hot .hot-tle .ico {
      margin-top: -2px;
      margin-left: 3px;
  }
  .index-hot .hot-tle .selected.up .ico-sort2Arrow:before {
      border-color: #DB4040
  }
  .index-hot .hot-tle .selected.down .ico-sort2Arrow:after {
      border-color: #DB4040
  }
  .index-hot .hot-tle .tab-trim{
      left:4%;
      width:0.63rem;
  }
  .hot-list{
      overflow: hidden;
  }
  .hot-list .w-goods{
      width:50%;
  }
  .hot-list .w-goods .w-goods-title{
      margin-top:0.06rem;
  }
  .hot-list .w-goods .w-goods-pic{
      height:1.14rem;
  }
  .hot-list .w-goods  .w-progressBar{
      margin:0.02rem 0.4rem 0.04rem 0;
  }
  .hot-list .w-goods .w-progressBar .wrap{
      margin-bottom:0;
  }


</style>
