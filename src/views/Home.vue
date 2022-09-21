<template>
  <div>
    <div class="topBar">
      <h1>数据可视化Vue3</h1>
    </div>
    <div class="container">
      <!-- 左 -->
      <div class="itemLeft">
        <Item>
          <sales></sales>
        </Item>
        <Item>
          <monthly-sales></monthly-sales>
        </Item>
      </div>
      <!-- 中 -->
      <div class="itemCenter">
        <Map></Map>
      </div>
      <!-- 右 -->
      <div class="itemRight">
        <Item>
          <stock></stock>
        </Item>
        <Item>
          <category></category>
        </Item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import Sales from '@/components/Sales.vue'
import MonthlySales from '@/components/MonthlySales.vue'
import Stock from '@/components/Stock.vue'
import Category from '@/components/Category.vue'
import Map from '@/components/Map.vue'
import { inject } from 'vue'

export default {
  components: {
    Item, Category, Sales, MonthlySales, Stock, Map
  },
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')
  }
}
</script>

<style lang="less" scoped>
.topBar {
  height: 1rem;
  width: 100%;
  background-color: #012070;
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
.container {
  display: flex;
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  // background-color: #fff;
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    height: 10.5rem;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>