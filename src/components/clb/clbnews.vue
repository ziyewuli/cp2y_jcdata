<template>
<div class="page-index">
  <header class="page-header">
      <div class="header-wrap">
          <h3>资讯直播</h3>
      </div>
  </header>
  <div class="mod-news-wrap">
    <div class="timecon">
      <ul class="livecon">
        <li ng-repeat="news in newsList" class="flash " id="">
            <div>
                <div class="timeline">
                    <div class="dotbg">
                        <div class="dot"></div>
                    </div>
                    <div class="time ng-binding">17:32:44</div>
                </div>
                <!-- ngIf: news.type==0 --><div ng-if="news.type==0" class="live-c onlytxt ng-scope">
                    <div class="txt">
                        <div ng-bind-html="news.content" class="ng-binding">瑞银：假使出现流动性危机，意大利债务比率将上升至150%。</div>
                        <!-- ngIf: news.showImgIcon -->
                    </div>
                </div><!-- end ngIf: news.type==0 -->
                <!-- ngIf: news.type==1 -->
            </div>
        </li>
      </ul>
    </div>
  </div>
  <v-footer :show="footerMenuShow"></v-footer>
</div>
</template>

<script>
   import vFooter from '../footer/footer.vue';
   import {mapState} from 'vuex';
      export default {
          name: 'v-clbnews',
          components: {
              vFooter
          },
          computed: {
              ...mapState([
                 'footerMenuShow'
              ])
          }
      };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl";
  @import "../../common/css/icon.styl";
  @import "../../common/css/header.styl";
  @import 'clbnews.styl';

</style>
