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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup(){
    const sports = ref(['举铁', '有氧'])
    const selectedSport = ref('')
    const onSelectSport = (sports)=>{
      selectedSport.value = sports
      console.log(selectedSport.value);
    }

    return { 
      sports,
      selectedSport,
      onSelectSport
    }
  }
});
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
