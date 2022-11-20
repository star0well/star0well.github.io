<template>
  <div class="windDemo">
    <div class="nav">
      <div>风机运行情况监测</div>
      <div class="opration">
        <a-input v-model:value.number="speed" placeholder="输入当前风速 m/s" />
        <a-button @click="hanldeClick">测试</a-button>
        <a-button @click="hanldeStop">停止</a-button>
        <a-button @click="rotationLeft">机舱左转</a-button>
        <a-button @click="rotationRight">机场右转</a-button>
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
      :rotationDir="rotationDir.value"
      :reset="reset"
    ></ThreeDemo>
  </div>
</template>
<script setup>
import ThreeDemo from "@/components/three/three-demo.vue";
import {useStore} from "vuex";
import {computed, reactive, ref} from "vue";
import gsap from "gsap";
const currentItem = ref({});
const position = ref({});
const speed = ref(0);

const store = useStore();
const reset = computed(() => store.state.collapsed);
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

const rotationDir = reactive({
  value: 0
});
const rotationLeft = () => {
  const value = rotationDir.value + 0.2;
  gsap.to(rotationDir, {duration: 1, value: value});
};
const rotationRight = () => {
  const value = rotationDir.value - 0.2;
  gsap.to(rotationDir, {duration: 1, value: value});
};
defineExpose({
  rotationDir
});
</script>
<style scoped lang="scss">
.windDemo {
  width: 100%;
  height: 100%;
  position: relative;
}
.detail {
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: rgba(#bb9387, 0.5);
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  transform: translate(-50%, -50%);
}
.nav {
  position: absolute;
  text-align: center;
  width: 500px;
}
.opration {
  display: flex;
  color: #fff;
  width: 50%;
  flex-wrap: wrap;
}
</style>
