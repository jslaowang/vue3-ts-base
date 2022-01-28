<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h2>11</h2>
    <div>22</div>
  </div>
  <div>
    <button v-for="item in sports" :key="item" @click="onSelectSport(item)">{{ item }}</button>
    <div>你选择的运动：{{ selectedSport }}</div>
  </div>
  <div>
    <button @click="overAction"> 点击 </button>
    <div>{{ overText }}</div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  watch,
} from "vue";

export default {
  name: "App",
  setup() {
    interface DataProps {
      sports: string[];
      selectedSport: string;
      onSelectSport: (index: string) => void;
    }
    const data: DataProps = reactive({
      sports: ["举铁", "有氧"],
      selectedSport: "",
      onSelectSport: (sports: string) => {
        data.selectedSport = sports;
      },
    });

    const refData = toRefs(data);

    const overText = ref("红浪漫");
    const overAction = () => {
      overText.value = overText.value + "1 |";
    };
    watch(overText, (newVal, oldVal)=>{
      document.title = overText.value;
    })

    return { ...refData, overText, overAction };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
