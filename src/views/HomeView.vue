<template>
  <div class="opration">
    <div @click="hanldeClick">旋转</div>
    <div @click="hanldeStop">停止</div>
  </div>
  <div
    class="detail"
    :style="{top: position.y + 'px', left: position.x + 'px', opacity: position.opacity}"
  >
    <div>
      {{ position.name }}
    </div>
  </div>
  <ThreeDemo @focus="hanldeShow" :rotation="rotation" @onClick="handleDetail"></ThreeDemo>
</template>
<script setup>
import ThreeDemo from "@/components/three/three-demo.vue";
import {ref} from "vue";
const currentItem = ref({});
const position = ref({});
const hanldeShow = (e) => {
  if (!e) {
    position.value = {opacity: 0};
    return;
  }
  position.value = e;
};

const handleDetail = () => {
  if (position.value.opacity == 0) return;
  currentItem.value = position.value;
};
const rotation = ref(false);
const hanldeClick = () => {
  rotation.value = true;
};
const hanldeStop = () => {
  rotation.value = false;
};
</script>
<style scoped lang="scss">
.detail {
  position: fixed;
  width: 100px;
  height: 50px;
  background-color: rgba(#bb9387, 0.5);
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  transform: translate(-50%, -50%);
}
.opration {
  position: fixed;
  top: 20px;
  left: 50px;
  display: flex;
}
</style>
