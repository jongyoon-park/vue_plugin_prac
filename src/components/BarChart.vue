<template>
  <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
</template>

<script>

export default {
  name: "BarChart",
  mounted() {
    const ctx = this.$refs.lineChart.getContext('2d'); //dom에 직접 접근하지말고 refs를 통해 접근하자
    //레퍼런스로 접근하면 컴포넌트 내의 refs 속성만을 찾기 때문에 에러 없는 코드를 작성하기 쉬움
    //document로 접근 시 돔에 그려지는 전체 html 코드를 대상으로 찾기 때문에 서로 다른 컴포넌트에서 같은 document를 가리킬 시 오류가 날 가능성이 높음


    new this.$_Chart(ctx, {
      type: 'bar',
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
