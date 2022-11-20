<template>
  <a-layout>
    <a-layout-sider class="left" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <left-menu :menus="menus"></left-menu>
    </a-layout-sider>
    <div class="drawer">
      <a-drawer
        class="drawer"
        width="40%"
        title="菜单"
        placement="left"
        :visible="visible"
        @close="() => (visible = !visible)"
      >
        <left-menu :menus="menus"></left-menu>
      </a-drawer>
    </div>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <layout-header class="showHeader" @collapsed="handleCollapsed"></layout-header>
        <layout-header class="hiddenHeader" @collapsed="handlevisibale"></layout-header>
      </a-layout-header>
      <a-layout-content
        :style="{margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'}"
      >
        <div class="color"></div>
        <router-view v-slot="{Component}">
          <keep-alive include="threeBrother,windDemo">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import {ref} from "vue";
import LeftMenu from "@/components/left-menu/leftMenu.vue";
import LayoutHeader from "@/components/layout-header/layoutHeader.vue";
const collapsed = ref(false);
const visible = ref(false);
const menus = ref([
  {
    name: "风电演示demo",
    type: 1,
    path: "/main/windDemo"
  },
  {
    name: "萌宠三兄弟",
    type: 1,
    path: "/main/threeBrother"
  }
]);
const handleCollapsed = (e) => {
  console.log("e", e);
  collapsed.value = e;
};
const handlevisibale = () => {
  visible.value = true;
};
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

@media screen and (max-width: 600px) {
  .hiddenHeader {
    display: none;
  }
  .showHeader {
    display: inline-block;
  }
}
@media screen and (max-width: 500px) {
  .left {
    display: none;
  }
  .showHeader {
    display: none;
  }
  .hiddenHeader {
    display: inline-block;
  }
}
</style>
