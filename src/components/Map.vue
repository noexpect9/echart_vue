<template>
  <div class="map" id="map"></div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
import axios from 'axios'
import { visualMap } from 'echarts'
export default {
  setup() {
    let $echarts = inject('echarts')
    let mapData = reactive({})
    async function getMapData() {
      mapData = await axios.get('/map/data')
    }
    onMounted(() => {
      getMapData().then(() => {
        $echarts.registerMap('ChinaMap', mapData.data.chartMap)
        let myChart = $echarts.init(document.querySelector('#map'))
        myChart.setOption({
          geo: {
            map: "ChinaMap",
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: '#000fff',
              shadowColor: "rgba(230, 130, 70, .5)",
              shadowBlur: 30,
            },
            emphasis: {
              focus: "self",
            },
          },
          tooltip: {
            trigger: "item"
          },
          title: {
            text: '城市',
            left: '45%',
            textStyle: {
              color: '#fff',
              fontSize: 20,
              textShadowBlur: 10,
              textShadowColor: '#33ffff'
            }
          },
          // visualMap: [{
          //   type: "continumous",
          //   min: 100,
          //   max: 5000,
          //   calculable: true,
          //   inRange: {
          //     color: ["#50a3ba", "#eac736", "#d94e5d"]
          //   },
          //   textStyle: {
          //     color: "#fff"
          //   }
          // }],
          series: [
            {
              type: "scatter",
              itemStyle: {
                color: "red"
              },
              coordinateSystem: "geo",
              data: [
                { name: '北京', value: [116.46, 39.92, 4367] }
              ]
            }
          ]
        })
      })
    })
  }
}
</script>

<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>