<template>
  <canvas class="webgl" ref="canvasRef"></canvas>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {useThree} from "@/hooks/useThree";
import {useRaycaster} from "@/hooks/useRaycaster";
import {degToRad} from "three/src/math/MathUtils";
const canvasRef = ref(null);
const emits = defineEmits(["focus"]);
const props = defineProps({
  rotation: {
    type: Boolean,
    default: false
  }
});
onMounted(() => {
  init();
});
const init = () => {
  const {scene, camera, renderer, textureLoader, gltfLoader} = useThree(canvasRef.value);
  let rotateMesh;
  watch(
    () => props.rotation,
    (newValue) => {
      if (!newValue) return;
      rotateMesh = scene.children[1].children.find((item) => item.name == "立方体001");
    }
  );

  const {raycaster, pointer} = useRaycaster();
  const bakedTexture = textureLoader.load("model/GENXIN.jpg");
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;

  const bakedMaterial = new THREE.MeshBasicMaterial({map: bakedTexture});
  gltfLoader.load("model/test.glb", (gltf) => {
    gltf.scene.children.forEach((item) => (item.material = bakedMaterial));
    scene.add(gltf.scene);
  });
  camera.position.x = 4;
  camera.position.y = 2;
  camera.position.z = 4;

  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvasRef.value);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2.2;
  renderer.outputEncoding = THREE.sRGBEncoding;

  //处理光纤追踪的物体
  let INTERSECTED;
  const portalLightMaterial = new THREE.MeshBasicMaterial({color: 0xfff000});
  const hanldeRaycaster = (intersects) => {
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        if (INTERSECTED) INTERSECTED.material = INTERSECTED?.currentMaterial;
        INTERSECTED = intersects[0].object;
        INTERSECTED.currentMaterial = INTERSECTED?.material?.clone();
        INTERSECTED.material = portalLightMaterial;
        //创建一个3D坐标
        var vector = new THREE.Vector3();
        //获取模型
        vector = vector.setFromMatrixPosition(INTERSECTED.matrixWorld).project(camera);
        var halfWidth = window.innerWidth / 2;
        var halfHeight = window.innerHeight / 2;
        var result = {
          x: Math.round(vector.x * halfWidth + halfWidth),
          y: Math.round(-vector.y * halfHeight + halfHeight)
        };
        //2D坐标
        emits("focus", {...INTERSECTED, ...result});
      }
    } else {
      if (INTERSECTED) INTERSECTED.material = INTERSECTED.currentMaterial;
      INTERSECTED = null;
      emits("focus", null);
    }
  };
  /**
   * Animate
   */

  const tick = () => {
    // Update controls
    controls.update();
    //光线投影
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    // 计算物体和射线的焦点
    const model = scene.children.find((item) => item.name == "Scene");
    if (model) {
      const intersects = raycaster.intersectObject(model);
      hanldeRaycaster(intersects);
    }
    props.rotation && rotateMesh.rotateY(degToRad(1));
    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
};
</script>
<style lang="scss" scoped></style>
