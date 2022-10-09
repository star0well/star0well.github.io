<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <left-menu :menus="menus"></left-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <layout-header @collapsed="(e) => (collapsed = e)"></layout-header>
      </a-layout-header>
      <a-layout-content
        :style="{margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'}"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import {ref} from "vue";
import LeftMenu from "@/components/left-menu/leftMenu.vue";
import LayoutHeader from "@/components/layout-header/layoutHeader.vue";
const collapsed = ref(false);
const menus = ref([
  {
    name: "风电演示demo",
    type: 1,
    path: "/main/windDemo"
  }
]);
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout {
  height: 100%;
}
</style>
