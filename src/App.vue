<template>
  <div id="app" style="height:100%" class="iconfont">
    <view-box body-padding-bottom="50px" ref="viewbox">
      <transition name="view" enter-active-class="animated fadeInLeft">
        <router-view></router-view>
      </transition>
      <tabbar slot="bottom">
        <tabbar-item link="/" :selected="active==0">
          <span slot="icon" class="iconfont">&#xe6b0;</span>
          <span slot="label">保险</span>
        </tabbar-item>
        <tabbar-item link="/find" :selected="active==1">
          <span slot="icon" class="iconfont">&#xe6b9;</span>
          <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item link="/user" :selected="active==2">
          <span slot="icon" class="iconfont">&#xe6af;</span>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
    
  </div>
</template>

<script>
import {ViewBox,Tabbar,TabbarItem} from 'vux';
export default {
  name: 'app',
  components:{
    ViewBox,
    Tabbar,
    TabbarItem
  },
  computed:{
    active (){
      return this.$store.state.tabbarInd;
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/close.less';
  @import '~vux/src/styles/1px.less';
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  html{
    font-size: 10px;
  }
</style>
