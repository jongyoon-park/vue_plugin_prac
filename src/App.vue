<template>
  <div>
    <h2>chart</h2>
    <bar-chart />
    <line-chart />
  </div>
</template>

<script>

import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  name: 'App',
  components: {
    LineChart,
    BarChart

  },

}
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
