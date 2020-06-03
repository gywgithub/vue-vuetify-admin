<template>
  <div>
    <div id="chartbar1" style="width:500px;height:500px;"></div>
    <div id="chartbar2" style="width:500px;height:500px;"></div>
    <div id="chartLine1" style="width:500px;height:500px;"></div>
    <div id="chartLine2" style="width:500px;height:500px;"></div>
    <div id="chartPie1" style="width:500px;height:500px;"></div>
    <div id="chartScatter1" style="width:500px;height:500px;"></div>
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
    // const chartBar1 = echarts.init(this.$refs.chartbar1 as HTMLDivElement)
    const chartBar1 = echarts.init(
      document.getElementById('chartbar1') as HTMLDivElement
    )
    const chartBar1Option = {
      title: {
        // text: 'ECharts Bar 1'
      },
      tooltip: {},
      xAxis: {
        data: [
          'Shirt',
          'Woolen Sweater',
          'Chiffon Shirt',
          'Trousers',
          'High-Heeled Shoes',
          'Socks'
        ]
      },
      yAxis: {},
      series: [
        {
          name: 'Sales Volume',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    chartBar1.setOption(chartBar1Option)

    const chartBar2Option: any = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015'],
          ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
          ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
          ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 }
      ],
      yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
      grid: [{ bottom: '55%' }, { top: '55%' }],
      series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
      ]
    }
    setTimeout(() => {
      const chartBar2 = echarts.init(
        document.getElementById('chartbar2') as HTMLDivElement
      )
      chartBar2.setOption(chartBar2Option)
    }, 100)

    const chartLine1Option: any = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    }
    setTimeout(() => {
      const chartLine1 = echarts.init(
        document.getElementById('chartLine1') as HTMLDivElement
      )
      chartLine1.setOption(chartLine1Option)
    }, 200)

    const chartLine2Option: any = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    setTimeout(() => {
      const chartLine2 = echarts.init(
        document.getElementById('chartLine2') as HTMLDivElement
      )
      chartLine2.setOption(chartLine2Option)
    }, 300)

    const chartPie1Option: any = {
      title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: [
          'rose1',
          'rose2',
          'rose3',
          'rose4',
          'rose5',
          'rose6',
          'rose7',
          'rose8'
        ]
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel']
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 110],
          center: ['25%', '50%'],
          roseType: 'radius',
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' }
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [30, 110],
          center: ['75%', '50%'],
          roseType: 'area',
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' }
          ]
        }
      ]
    }
    setTimeout(() => {
      const chartPie1 = echarts.init(
        document.getElementById('chartPie1') as HTMLDivElement
      )
      chartPie1.setOption(chartPie1Option)
    }, 400)

    // const data: any = [
    //   [
    //     [28604, 77, 17096869, 'Australia', 1990],
    //     [31163, 77.4, 27662440, 'Canada', 1990],
    //     [1516, 68, 1154605773, 'China', 1990],
    //     [13670, 74.7, 10582082, 'Cuba', 1990],
    //     [28599, 75, 4986705, 'Finland', 1990],
    //     [29476, 77.1, 56943299, 'France', 1990],
    //     [31476, 75.4, 78958237, 'Germany', 1990],
    //     [28666, 78.1, 254830, 'Iceland', 1990],
    //     [1777, 57.7, 870601776, 'India', 1990],
    //     [29550, 79.1, 122249285, 'Japan', 1990],
    //     [2076, 67.9, 20194354, 'North Korea', 1990],
    //     [12087, 72, 42972254, 'South Korea', 1990],
    //     [24021, 75.4, 3397534, 'New Zealand', 1990],
    //     [43296, 76.8, 4240375, 'Norway', 1990],
    //     [10088, 70.8, 38195258, 'Poland', 1990],
    //     [19349, 69.6, 147568552, 'Russia', 1990],
    //     [10670, 67.3, 53994605, 'Turkey', 1990],
    //     [26424, 75.7, 57110117, 'United Kingdom', 1990],
    //     [37062, 75.4, 252847810, 'United States', 1990]
    //   ],
    //   [
    //     [44056, 81.8, 23968973, 'Australia', 2015],
    //     [43294, 81.7, 35939927, 'Canada', 2015],
    //     [13334, 76.9, 1376048943, 'China', 2015],
    //     [21291, 78.5, 11389562, 'Cuba', 2015],
    //     [38923, 80.8, 5503457, 'Finland', 2015],
    //     [37599, 81.9, 64395345, 'France', 2015],
    //     [44053, 81.1, 80688545, 'Germany', 2015],
    //     [42182, 82.8, 329425, 'Iceland', 2015],
    //     [5903, 66.8, 1311050527, 'India', 2015],
    //     [36162, 83.5, 126573481, 'Japan', 2015],
    //     [1390, 71.4, 25155317, 'North Korea', 2015],
    //     [34644, 80.7, 50293439, 'South Korea', 2015],
    //     [34186, 80.6, 4528526, 'New Zealand', 2015],
    //     [64304, 81.6, 5210967, 'Norway', 2015],
    //     [24787, 77.3, 38611794, 'Poland', 2015],
    //     [23038, 73.13, 143456918, 'Russia', 2015],
    //     [19360, 76.5, 78665830, 'Turkey', 2015],
    //     [38225, 81.4, 64715810, 'United Kingdom', 2015],
    //     [53354, 79.1, 321773631, 'United States', 2015]
    //   ]
    // ]
    // const chartScatter1Option: any = {
    //   backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
    //     {
    //       offset: 0,
    //       color: '#f7f8fa'
    //     },
    //     {
    //       offset: 1,
    //       color: '#cdd0d5'
    //     }
    //   ]),
    //   title: {
    //     text: '1990 与 2015 年各国家人均寿命与 GDP'
    //   },
    //   legend: {
    //     right: 10,
    //     data: ['1990', '2015']
    //   },
    //   xAxis: {
    //     splitLine: {
    //       lineStyle: {
    //         type: 'dashed'
    //       }
    //     }
    //   },
    //   yAxis: {
    //     splitLine: {
    //       lineStyle: {
    //         type: 'dashed'
    //       }
    //     },
    //     scale: true
    //   },
    //   series: [
    //     {
    //       name: '1990',
    //       data: data[0],
    //       type: 'scatter',
    //       symbolSize: function(data) {
    //         return Math.sqrt(data[2]) / 5e2
    //       },
    //       emphasis: {
    //         label: {
    //           show: true,
    //           formatter: function(param) {
    //             return param.data[3]
    //           },
    //           position: 'top'
    //         }
    //       },
    //       itemStyle: {
    //         shadowBlur: 10,
    //         shadowColor: 'rgba(120, 36, 50, 0.5)',
    //         shadowOffsetY: 5,
    //         color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
    //           {
    //             offset: 0,
    //             color: 'rgb(251, 118, 123)'
    //           },
    //           {
    //             offset: 1,
    //             color: 'rgb(204, 46, 72)'
    //           }
    //         ])
    //       }
    //     },
    //     {
    //       name: '2015',
    //       data: data[1],
    //       type: 'scatter',
    //       symbolSize: function(data) {
    //         return Math.sqrt(data[2]) / 5e2
    //       },
    //       emphasis: {
    //         label: {
    //           show: true,
    //           formatter: function(param) {
    //             return param.data[3]
    //           },
    //           position: 'top'
    //         }
    //       },
    //       itemStyle: {
    //         shadowBlur: 10,
    //         shadowColor: 'rgba(25, 100, 150, 0.5)',
    //         shadowOffsetY: 5,
    //         color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
    //           {
    //             offset: 0,
    //             color: 'rgb(129, 227, 238)'
    //           },
    //           {
    //             offset: 1,
    //             color: 'rgb(25, 183, 207)'
    //           }
    //         ])
    //       }
    //     }
    //   ]
    // }
    // setTimeout(() => {
    //   const chartScatter1 = echarts.init(
    //     document.getElementById('chartScatter1') as HTMLDivElement
    //   )
    //   chartScatter1.setOption(chartScatter1Option)
    // })
  }
}
</script>
<style scoped lang="scss"></style>
