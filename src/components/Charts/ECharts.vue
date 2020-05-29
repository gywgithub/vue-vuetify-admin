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
    console.info('mounted')
    console.info(echarts)
    console.info(this.$refs.main)
    const mainEle = this.$refs.main as HTMLDivElement
    const myChart = echarts.init(mainEle)
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
    console.info(myChart)
  }
}
</script>
<style scoped lang="scss"></style>
