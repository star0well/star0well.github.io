<template>
  <div class="nav">
    <div>风机运行情况监测</div>
    <div class="opration">
      <input v-model.number="speed" placeholder="输入当前风速 m/s" />
      <div @click="hanldeClick">测试</div>
      <div @click="hanldeStop">停止</div>
      <div @click="rotationLeft">机舱左转</div>
      <div @click="rotationRight">机场右转</div>
    </div>
  </div>
  <div
    class="detail"
    :style="{top: position.y + 'px', left: position.x + 'px', opacity: position.opacity}"
  >
    <div>
      {{ position.name }}
    </div>
  </div>
  <ThreeDemo
    @focus="hanldeShow"
    :rotation="rotation"
    @onClick="handleDetail"
    :speed="speed"
    :rotationDir="rotationDir"
  ></ThreeDemo>
</template>
<script setup>
import ThreeDemo from "@/components/three/three-demo.vue";
import {ref} from "vue";
const currentItem = ref({});
const position = ref({});
const speed = ref(null);
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

const rotationDir = ref(0);
const rotationLeft = () => {
  rotationDir.value += 0.1;
};
const rotationRight = () => {
  rotationDir.value -= 0.1;
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
.nav {
  position: fixed;
  text-align: center;
  width: 300px;
}
.opration {
  position: fixed;
  top: 20px;
  left: 50px;
  display: flex;
  color: #fff;
  > div {
    margin: 0 20px;
  }
}
</style>
