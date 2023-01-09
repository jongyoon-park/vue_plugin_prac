<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  name: "LineChart",
  mounted() {
    const ctx = document.getElementById('myChart');

    new this.$_Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
</script>

<style scoped>

</style>
