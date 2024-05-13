import { ref } from 'vue';

export function useVisible(initValue = false) {
  const visible = ref(initValue);
  const setVisible = (value: boolean) => {
    visible.value = value;
  };
  const toggle = () => {
    visible.value = !visible.value;
  };
  return {
    visible,
    setVisible,
    toggle,
  };
}
