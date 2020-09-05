<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <i class="iconfont icongallery-view" slot="item-icon"></i>
      <i class="iconfont icongallery-view" slot="item-icon-active"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="search" activeColor="deeppink">
      <i class="iconfont iconexchangerate" slot="item-icon"></i>
      <i class="iconfont iconexchangerate" slot="item-icon-active"></i>
      <div slot="item-text">搜索</div>
    </tab-bar-item>
    <tab-bar-item path="order" activeColor="deeppink">
      <i class="iconfont iconcart-full-fill" slot="item-icon"></i>
      <i class="iconfont iconcart-full-fill" slot="item-icon-active"></i>
      <div slot="item-text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="deeppink">
      <i class="iconfont iconbussiness-man-fill" slot="item-icon"></i>
      <i class="iconfont iconbussiness-man-fill" slot="item-icon-active"></i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style></style>
