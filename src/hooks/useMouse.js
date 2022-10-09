// mouse.js
import {ref} from "vue";
import {useEventListener} from "./useEventListener";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });
  console.log("x ", x.value);
  return {x, y};
}
