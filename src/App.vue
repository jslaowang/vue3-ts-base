<template>
  <div>{{ count }}</div>
  <div>
    <button @click="onCountClick">增加</button>
  </div>
</template>

<script lang="ts">
import { count, onCountClick } from "./hooks/count";

export default {
  name: "App",
  setup() {
    return { count, onCountClick };
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
