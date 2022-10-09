import * as THREE from "three";

/**
 *
 * @param {*} sizes canvas渲染窗口大小
 * @param {*} offset canvas距离屏幕左上角偏移
 * @returns
 */
export const useRaycaster = (sizes, offset) => {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function onPointerMove(event) {
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    pointer.x = ((event.clientX - offset.offsetLeft) / sizes.width) * 2 - 1;
    pointer.y = -((event.clientY - offset.offsetTop) / sizes.height) * 2 + 1;
  }
  window.addEventListener("pointermove", onPointerMove);
  return {raycaster, pointer};
};
export const useGetMeshCenter = (object3D, camera, sizes) => {
  //创建一个3D坐标
  var vector = new THREE.Vector3();
  //获取模型
  vector = vector.setFromMatrixPosition(object3D.matrixWorld).project(camera);
  var halfWidth = sizes.width / 2;
  var halfHeight = sizes.height / 2;
  var result = {
    x: Math.round(vector.x * halfWidth + halfWidth),
    y: Math.round(-vector.y * halfHeight + halfHeight)
  };
  return result;
};
