<template>
  <h2>库存统计</h2>
  <div class="chart" id="chart"></div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
export default {
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')

    let data = reactive({})

    async function getData() {
      data = await $http({ url: '/stock/data' })
      console.log(data);
    }

    onMounted(() => {
      getData().then(() => {
        let myChart = $echarts.init(document.querySelector('#chart'))
        myChart.setOption({
          legend: {
            top: 'bottom',
          },
          tooltip: {
            show: true
          },
          series: [
            {
              type: 'pie',
              data: data.data.chartStock.chartData,
              radius: [10, 100],
              center: ['50%', '45%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 10
              }
            }
          ]
        })
      })
    })
    return {
      data, getData
    }
  }
}
</script>

<style>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}
</style>