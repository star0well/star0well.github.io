<template>
  <div class="windDemo">
    <Brother :reset="reset"></Brother>
  </div>
</template>
<script setup>
import Brother from "@/components/three/brother.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const reset = computed(() => store.state.collapsed);
</script>
<style scoped lang="scss">
.windDemo {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
