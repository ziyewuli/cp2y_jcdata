<template>
<div class="page-index">
  <header class="page-header">
      <div class="header-wrap">
          <h3>策略宝</h3>
          <a href="#/help" class="nav-left"><i class="icon-msg"></i></a>
          <a href="#/guide" class="nav-right">新手指引</a>
      </div>
  </header>
  <div class="mod-slide">
      <swiper :options="swiperOption"  ref="mySwiper">
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide v-for="item in bannerItems">
		   <router-link :to="'https://clb.yztz.cn/'+ item[5]">
				<img :src="'https://clb.yztz.cn/'+ item[3]" class="index_img">
			</router-link>
          </swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
  <div class="mod-index-tab mt15">
      <a href="#/oneYuanIntroduce" title="">
          <div class="nav-oneYuan">
              <p class="txt-s14">新人专享</p>
              <p class="txt-s12 txt-gray">一元玩恒指</p>
          </div>
      </a>
      <a href="#/outerTrade/CL/1" title="">
          <div class="nav-simulate">
              <p class="txt-s14">模拟练习</p>
              <p class="txt-s12 txt-gray">成就高手</p>
          </div>
      </a>
      <a href="#/activityCenter" title="">
          <div class="nav-package">
              <p class="txt-s14">领红包</p>
              <p class="txt-s12 txt-gray">惊喜不断</p>
          </div>
      </a>
  </div>
  <div class="mod-index-list">
    <div class="wrap">
      <div class="title">
          <span>实盘交易</span>
      </div>
      <div class="mod-menu">
        <a href="#/outerTrade/CL/2" class="CL clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-CL.png"></span>
            <div class="tit">
                <p class="txt-s14">美原油 <span class="desc">T+0</span></p>

                <p class="desc">国际大宗 23小时交易</p>
            </div>
            <!-- ngIf: future['CL'].rote>0 -->
            <!-- ngIf: future['CL'].rote==0 -->
            <!-- ngIf: future['CL'].rote<0 --><span ng-if="future['CL'].rote<0" class="fr txt-green ng-binding ng-scope">47.27<br>-0.11%</span><!-- end ngIf: future['CL'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
        <a href="#/outerTrade/GC/2" class="GC clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-GC.png"></span>
            <div class="tit">
                <p class="txt-s14">美黄金 <span class="desc">T+0</span></p>

                <p class="desc">多空双赢 全球热门品种</p>
            </div>
            <!-- ngIf: future['GC'].rote>0 -->
            <!-- ngIf: future['GC'].rote==0 -->
            <!-- ngIf: future['GC'].rote<0 --><span ng-if="future['GC'].rote<0" class="fr txt-green ng-binding ng-scope">1237.1<br>-0.39%</span><!-- end ngIf: future['GC'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
        <a href="#/outerTrade/SI/2" class="SI clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-SI.png"></span>

            <div class="tit">
                <p class="txt-s14">美白银 <span class="desc">T+0</span></p>

                <p class="desc">投资者青睐的避险品种</p>
            </div>
            <!-- ngIf: future['SI'].rote>0 -->
            <!-- ngIf: future['SI'].rote==0 -->
            <!-- ngIf: future['SI'].rote<0 --><span ng-if="future['SI'].rote<0" class="fr txt-green ng-binding ng-scope">16.175<br>-0.75%</span><!-- end ngIf: future['SI'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
        <a href="#/outerTrade/HSI/2" class="HSI clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-HSI.png"></span>

            <div class="tit">
                <p class="txt-s14">恒指 <span class="desc">T+0</span></p>

                <p class="desc">香港恒生指数 每点50港元</p>
            </div>
            <!-- ngIf: future['HSI'].rote>0 --><span ng-if="future['HSI'].rote>0" class="fr txt-red ng-binding ng-scope">26746<br>+0.27%</span><!-- end ngIf: future['HSI'].rote>0 -->
            <!-- ngIf: future['HSI'].rote==0 -->
            <!-- ngIf: future['HSI'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
        <a href="#/outerTrade/MHI/2" class="MHI clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-MHI.png"></span>
            <div class="tit">
                <p class="txt-s14">小恒指 <span class="desc">T+0</span></p>
                <p class="desc">200起投 玩赚外盘</p>
            </div>
            <!-- ngIf: future['MHI'].rote>0 --><span ng-if="future['MHI'].rote>0" class="fr txt-red ng-binding ng-scope">26746<br>+0.27%</span><!-- end ngIf: future['MHI'].rote>0 -->
            <!-- ngIf: future['MHI'].rote==0 -->
            <!-- ngIf: future['MHI'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
        <a href="#/outerTrade/CN/2" class="CN clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-CN.png"></span>

            <div class="tit">
                <p class="txt-s14">富时A50 <span class="desc">T+0</span></p>

                <p class="desc">A股市场风险对冲利器</p>
            </div>
            <!-- ngIf: future['CN'].rote>0 --><span ng-if="future['CN'].rote>0" class="fr txt-red ng-binding ng-scope">11905.0<br>+0.19%</span><!-- end ngIf: future['CN'].rote>0 -->
            <!-- ngIf: future['CN'].rote==0 -->
            <!-- ngIf: future['CN'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
        <a href="#/outerTrade/DAX/2" class="DAX clearfix">
            <span class="title-icon"><img src="https://clb.yztz.cn/app/images/icons/icon-DAX.png"></span>

            <div class="tit">
                <p class="txt-s14">德指 <span class="desc">T+0</span></p>

                <p class="desc">德国法兰克福指数 收益高</p>
            </div>
            <!-- ngIf: future['DAX'].rote>0 --><span ng-if="future['DAX'].rote>0" class="fr txt-red ng-binding ng-scope">12530.5<br>+0.79%</span><!-- end ngIf: future['DAX'].rote>0 -->
            <!-- ngIf: future['DAX'].rote==0 -->
            <!-- ngIf: future['DAX'].rote<0 -->
            <i class="mod-arrow-r"></i>
        </a>
    </div>
    </div>
  </div>
  <div class="pt15 pb15 txt-center txt-s12 txt-grey">投资有风险 入市需谨慎</div>
  <div class="mod-app-download">
      <a href="/app/download.html" class="clearfix">
          <div class="fl">
              <img src="https://clb.yztz.cn/app/images/logo.png">
          </div>
          <div class="fl desc">
              策略宝手机客户端<br>操作更流畅，交易更便捷！
          </div>
          <div class="fr">
              <button class="btn btn-blue">立即下载</button>
          </div>
      </a>
  </div>
  <v-footer :show="footerMenuShow"></v-footer>
</div>
</template>

<script>
   import vFooter from '../footer/footer.vue';
   import {mapState} from 'vuex';
   import bannerData from 'common/json/banner.json';
   import futuresQuoteData from 'common/json/getFuturesQuote.json';
   import { swiper, swiperSlide } from 'vue-awesome-swiper';
   import  X  from 'assets/js/base.js';
      export default {
          name: 'v-clbindex',
          components: {
              vFooter,
              swiper,
              swiperSlide
          },
          data() {
              return {
			  bannerItems: {},
			  futuresQuoteOject: {},
              //items: [ 'https://clb.yztz.cn/app/images/banner/banner20.png', 'https://clb.yztz.cn/app/images/banner/banner14.png' ],
                  swiperOption: {
                  notNextTick: true,
                  pagination: '.swiper-pagination',
                  slidesPerView: 'auto',
                  centeredSlides: true,
                  paginationClickable: true,
                  spaceBetween: 30,
                      onSlideChangeEnd: swiper => {
                          this.page = swiper.realIndex + 1;
                          this.index = swiper.realIndex;
                      }
                  },
              };
          },
           created () {
            this.intervalid1 = setInterval(() => {
                   this.getfuturesQuote();
                  }, 2000)
          },
           methods: {
              getfuturesQuote:function(){
              this.$http.get('/futuresquote/getFuturesQuote.json', {
                commodityNo:'CL,GC,HSI,SI,DAX,CN',
                type:'simpleReal'
                }, {emulateJSON: true})
                  .then(function (response) {
                  let data=response.body;
                  if(data.code){
                    console.log(Data.data);
                  }else{
                  this.$Message.error(data.resultMsg);
                  return false;
                  }
                  }).then(function (error) {
                  })
              }
           },
          computed: {
              swiper() {
                return this.$refs.mySwiper.swiper;
              },
              ...mapState([
                 'footerMenuShow'
              ])
          },
          mounted () {
              this.swiper.slideTo(0, 0, false);
			 // this.$http.get('/home/header.json?device=1').then((response) => {
			//	let bannerD=response.data;

		//	});
			  let bannerD=bannerData.data; // banner数据
        this.bannerItems=bannerD;
			let futuresQuoteD=futuresQuoteData.data; // futuresQuote数据
			futuresQuoteD=futuresQuoteD.split(';');
			for(let fqitem in futuresQuoteD) {
				let fqD=futuresQuoteD[fqitem].split(',');
				let ob={};
				ob['Percentage']=fqD['2'];
				ob['rote']=fqD['1'];
				this.futuresQuoteOject[fqD['0']]=ob;
			}
			console.log(this.futuresQuoteOject);
			//this.bannerItems=bannerD;
      },
      beforeDestroy() {
        clearInterval(this.intervalid1);
      }
      };
</script>
<style lang=
"stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl";
  @import "../../common/css/icon.styl";
  @import "../../common/css/header.styl";
  @import 'clbindex.styl';

</style>
