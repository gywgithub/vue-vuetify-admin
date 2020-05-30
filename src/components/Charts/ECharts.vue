<template>
  <div>
    <div ref="main" style="width:500px;height:500px;"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as echarts from 'echarts'
@Component({
  components: {}
})
export default class ECharts extends Vue {
  private mounted() {
    const mainEle = this.$refs.main as HTMLDivElement
    const myChart = echarts.init(mainEle)
    myChart.setOption({
      title: {
        text: 'ECharts Bar'
      },
      tooltip: {},
      xAxis: {
        data: ['Shirt', 'Woolen Sweater', 'Chiffon Shirt', 'Trousers', 'High-Heeled Shoes', 'Socks']
      },
      yAxis: {},
      series: [
        {
          name: 'Sales Volume',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
  }
}
</script>
<style scoped lang="scss"></style>
