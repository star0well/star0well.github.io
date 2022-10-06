import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";
export const useThree = (element) => {
  const canvas = element;
  const scene = new THREE.Scene();
  const textureLoader = new THREE.TextureLoader();

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("draco/");
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  const hanldeResize = () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  hanldeResize();

  window.addEventListener("resize", hanldeResize);

  return {scene, camera, renderer, textureLoader, gltfLoader};
};
