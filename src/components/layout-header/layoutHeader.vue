<template>
  <div class="layout-header">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="hanldeClick" />
    <menu-fold-outlined v-else class="trigger" @click="hanldeClick" />
  </div>
</template>

<script setup>
import {ref, nextTick} from "vue";
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons-vue";
import {useStore} from "vuex";
const emit = defineEmits(["collapsed"]);
const store = useStore();
const collapsed = ref(false);
const hanldeClick = async () => {
  collapsed.value = !collapsed.value;

  emit("collapsed", collapsed.value);
  await nextTick();
  setTimeout(() => store.commit("changeCollapsed", collapsed.value), 200);
};
</script>

<style scoped></style>
