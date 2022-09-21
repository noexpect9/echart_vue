<template>
  <router-view />
</template>

<script>
import { provide } from 'vue' // 依赖注入echarts
import axios from 'axios'
import * as echarts from 'echarts'

axios.defaults.baseURL = "http://localhost:8888"
export default {
  setup() {
    provide('echarts', echarts)
    provide('axios', axios)
  }
}
</script>

<style lang="less" scope>
body {
  background: url("./assets/bg2.jpg") top center no-repeat;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
