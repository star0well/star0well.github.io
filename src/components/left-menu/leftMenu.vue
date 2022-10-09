<template>
  <div class="left-menu">
    <div class="logo">VUE-THREEJS</div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <template v-for="item of props.menus">
        <a-menu-item v-if="item.type == 1" :key="item.path" @click="hanldeItemClick(item)">
          <user-outlined />
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="item">
          <template #title>
            <span>
              <span>{{ item.name }}</span>
            </span>
          </template>

          <a-menu-item
            v-for="item of item.children"
            :key="item.path"
            @click="hanldeItemClick(item)"
          >
            <VideoCameraOutlined />
            {{ item.name }}</a-menu-item
          >
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script setup>
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons-vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {firstMenu} from "@/utils/map-menu";
const props = defineProps({
  menus: {
    type: Array,
    default: () => []
  }
});
const router = useRouter();
const selectedKeys = ref([firstMenu]);
const hanldeItemClick = (item) => {
  router.push({
    path: item.path
  });
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #fff;
  margin: 16px;
}
</style>
