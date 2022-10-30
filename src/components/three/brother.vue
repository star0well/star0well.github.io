<template>
  <div class="canvas-box" ref="boxRef">
    <canvas class="webgl" ref="canvasRef"></canvas>
  </div>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {useThree} from "@/hooks/useThree";
const props = defineProps({
  rotation: {
    type: Boolean,
    default: false
  },
  speed: {
    type: Number,
    default: 0
  },
  rotationDir: {
    type: Number,
    default: 0
  },
  size: {
    type: Object,
    default: () => ({})
  },
  reset: {
    type: Boolean,
    default: false
  }
});

onMounted(() => {
  initBox();

  init();
});
const canvasRef = ref(null);
const boxRef = ref(null);
const sizes = ref({});
const offset = ref({});
const initBox = () => {
  const boxPostion = boxRef.value.getBoundingClientRect();
  sizes.value.height = boxPostion.height;
  sizes.value.width = boxPostion.width;

  offset.value = {
    offsetLeft: boxPostion.left,
    offsetTop: boxPostion.top
  };
};
const init = () => {
  const {scene, camera, renderer, textureLoader, gltfLoader, hanldeResize} = useThree(
    canvasRef.value,
    sizes.value,
    boxRef.value
  );

  watch(
    () => props.reset,
    () => hanldeResize()
  );

  const bakedTexture = textureLoader.load("model/texxxxx.jpg");
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;

  //纹理

  const bakedMaterial = new THREE.MeshBasicMaterial({map: bakedTexture});
  scene.background = new THREE.Color(0xbfe3dd);
  gltfLoader.load(
    "model/threeBrather.glb",
    (gltf) => {
      gltf.scene.children.forEach((item) => (item.material = bakedMaterial));

      scene.add(gltf.scene);
    },
    (XHR) => {
      console.log("XHR", XHR);
    }
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 5;

  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvasRef.value);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2.2;
  renderer.outputEncoding = THREE.sRGBEncoding;

  /**
   * Animate
   */

  const tick = () => {
    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
};
</script>
<style lang="scss" scoped>
.canvas-box {
  width: 100%;
  height: 100%;
}
</style>
