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
import {useRaycaster, useGetMeshCenter} from "@/hooks/useRaycaster";
import {degToRad} from "three/src/math/MathUtils";
const emits = defineEmits(["focus"]);
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
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const environmentMapTexture = cubeTextureLoader.load([
    "model/texture/px.jpg",
    "model/texture/nx.jpg",
    "model/texture/py.jpg",
    "model/texture/ny.jpg",
    "model/texture/pz.jpg",
    "model/texture/nz.jpg"
  ]);
  scene.background = environmentMapTexture;

  scene.fog = new THREE.Fog(0xffffff, 0, 750);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  let rotateMesh, rotateMeshList;
  let timer = 0;
  watch(
    () => props.rotation,
    (newValue) => {
      if (!newValue || timer == 1) return;
      timer = 1;
      const jichang = scene.children[2].children.find((item) => item.name.indexOf("机舱") != -1);
      const zhaoke = scene.children[2].children.find((item) => item.name.indexOf("罩壳") != -1);
      const positionCenter = jichang.position.clone();
      const axisArray = Object.values(positionCenter);
      rotateMeshList = scene.children[2].children.filter((item) => item.name.indexOf("扇叶") != -1);
      rotateMeshList.forEach((item) => {
        item.position.set(
          item.position.x - axisArray[0],
          item.position.y - axisArray[1],
          item.position.z - axisArray[2]
        );
        group.add(item);
      });
      group.add(jichang);
      group.add(zhaoke);
      group.name = "旋转";
      jichang.position.set(0, 0, 0);
      zhaoke.position.set(
        zhaoke.position.x - axisArray[0],
        zhaoke.position.y - axisArray[1],
        zhaoke.position.z - axisArray[2]
      );

      group.position.set(axisArray[0], axisArray[1], axisArray[2]);
      scene.add(group);
    }
  );

  const {raycaster, pointer} = useRaycaster(sizes.value, offset.value);
  const bakedTexture = textureLoader.load("model/GENXIN.jpg");
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;
  const portalLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

  //纹理

  const colorTexture = textureLoader.load("model/texture1.png");
  const colorTexture2 = textureLoader.load("model/texture2.jpg");

  const tatongMaterial = new THREE.MeshBasicMaterial({map: colorTexture});
  const jiahcangMaterial = new THREE.MeshBasicMaterial({map: colorTexture2});
  colorTexture2.wrapS = THREE.MirroredRepeatWrapping;
  colorTexture2.wrapT = THREE.MirroredRepeatWrapping;
  colorTexture2.repeat.x = 4;

  colorTexture2.rotation = Math.PI * 0.5;

  colorTexture2.generateMipmaps = false;
  colorTexture2.minFilter = THREE.NearestFilter;
  colorTexture2.magFilter = THREE.NearestFilter;
  // const bakedMaterial = new THREE.MeshBasicMaterial({map: bakedTexture});

  const group = new THREE.Group();
  gltfLoader.load("model/wind.glb", (gltf) => {
    for (const item of gltf.scene.children) {
      if (item.name == "平面") {
        item.material = new THREE.MeshBasicMaterial({color: 0x8d8a35});
      }
      if (item.name == "塔筒") {
        item.material = tatongMaterial;
      }
      if (item.name == "机舱") {
        item.material = jiahcangMaterial;
      }
      if (item.name == "罩壳") {
        item.material = new THREE.MeshBasicMaterial({color: 0xdab2a2});
        rotateMesh = item;
      }
      if (item.name.indexOf("扇") != -1) {
        console.log("SHANYE");
        item.material = new THREE.MeshBasicMaterial({color: 0x0070b2});
      }
    }

    group.name = "旋转";

    scene.add(gltf.scene);
  });
  camera.position.x = -94;
  camera.position.y = 45;
  camera.position.z = -55;

  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvasRef.value);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2.2;
  renderer.outputEncoding = THREE.sRGBEncoding;

  //处理光纤追踪的物体
  let INTERSECTED;
  const hanldeRaycaster = (intersects) => {
    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        if (INTERSECTED) INTERSECTED.material = INTERSECTED?.currentMaterial;
        INTERSECTED = intersects[0].object;
        INTERSECTED.currentMaterial = INTERSECTED?.material?.clone();
        INTERSECTED.material = portalLightMaterial;

        const result = useGetMeshCenter(INTERSECTED, camera, sizes.value);
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

  const rotateAction = () => {
    const pix = props.speed / 13;
    const lastSpeed = pix * 5;

    rotateMesh.rotateX(degToRad(lastSpeed));
    rotateMeshList.forEach((item) => {
      item.rotateX(degToRad(lastSpeed));
    });
    // group.position.set(7.13713, 26.6228, -11.1367);

    // group.rotation.y += 0.01;
    // const axios = new THREE.Vector3(7.13713, 26.6228, -11.1367);
    // group.rotateOnAxis(axios, Math.PI / 100);
    // group.rotateY(degToRad(props.rotationDir));
  };
  const tick = () => {
    // Update controls
    controls.update();
    //光线投影
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    // 计算物体和射线的焦点
    const model = scene.children.filter((item) => item.name == "Scene" || item.name == "旋转");
    if (model) {
      const intersects = raycaster.intersectObjects(model);
      hanldeRaycaster(intersects);
    }
    props.rotation && rotateAction();

    group.rotation.y = Math.PI * props.rotationDir;

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
