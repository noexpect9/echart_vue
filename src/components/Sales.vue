<template>
  <h2>销售总量</h2>
  <div id="oneChart" class="chart"></div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
export default {
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')

    let data = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])

    function setData() {
      xdata = data.data.chartSale.chartData.map((v) => v.title)
      ydata = data.data.chartSale.chartData.map((v) => v.num)
    }

    async function getState() {
      data = await $http({ url: '/sales/data' })
    }

    onMounted(() => {
      let myChart = $echarts.init(document.querySelector('#oneChart'))
      getState().then(() => {
        setData();
        myChart.setOption({
          grid: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: 'value',
          },
          yAxis: {
            type: 'category',
            dara: xdata
          },
          series: [{
            data: ydata,
            type: 'bar',
            itemStyle: {
              borderRadius: [0, 10, 10, 0],
              color: new $echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: "#005eaa" },
                  { offset: 0.5, color: "#339ca8" },
                  { offset: 1, color: "#cda819" },
                ]
              ),
            },
          }]
        })
      })
    })
    return {
      getState, data, xdata, ydata, setData
    }
  }
}
</script>

<style lang="less" scoped>
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