import { ref } from 'vue'

const count = ref(1);
const onCountClick = () => {
  count.value++
};

export { count, onCountClick };