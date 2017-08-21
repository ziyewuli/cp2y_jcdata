<template>
  <footer class="page-footer">
      <div class="footer-wrap">
          <ul>
              <li v-for='menu in footerMenus' @click="updateHeader(FOOTERMENU_CONVERT[menu], menu)">
                   <router-link class="icon-quanbu iconfont item border-1px" :to="menu">
                       <i class="iconfont"></i><br>{{FOOTERMENU_CONVERT[menu]}}
                    </router-link>
              </li>
          </ul>
      </div>
  </footer>
</template>

<script>
  import { mapState } from 'vuex';
  const FOOTERMENU_CONVERT = { 'clbindex': '首页', 'clbtrade': '交易', 'clbnews': '资讯', 'clbdiscover': '发现', 'clbmyHome': '我的' };
  export default
    {
      name: 'v-footer',
      props: {
        show: {
          type: Boolean
        }
      },
      data() {
        return {
          FOOTERMENU_CONVERT: FOOTERMENU_CONVERT
        };
      },
      computed: {
      ...mapState([
        'footerMenus'
      ])
      },
      methods: {
        updateHeader(title, menu) {
          this.$store.commit('UPDATE_FOOTERTITLE', title);
        }
      }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'footer.styl';
</style>
