<template>
  <div>
    <v-row>
      <v-col cols="12" v-for="(v, k) in divList" :key="k">
        <v-card class="card-size pa-2 overflow-auto">
          <div :id="v"></div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as Highcharts from 'highcharts'
import Xrange from 'highcharts/modules/xrange'
Xrange(Highcharts)

@Component({
  components: {}
})
export default class ECharts extends Vue {
  private divList: string[] = ['container1', 'container2', 'container3']
  private mounted() {
    const options: any = {
      chart: {
        type: 'bar' // 指定图表的类型，默认是折线图（line）
      },
      title: {
        text: 'First Highcharts Demo' // 标题
      },
      xAxis: {
        categories: ['苹果', '香蕉', '橙子'] // x 轴分类
      },
      yAxis: {
        title: {
          text: '吃水果个数' // y 轴标题
        }
      },
      series: [{ // 数据列
        name: '小明', // 数据列名
        data: [1, 0, 4] // 数据
      }, {
        name: '小红',
        data: [5, 7, 3]
      }]
    }
    Highcharts.chart('container1', options)

    // 甘特图
    const options2: any = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'xrange'
      },
      xAxis: {
        type: 'datetime',
        min: Date.UTC(2014, 10, 21, 6, 0, 0),
        max: Date.UTC(2014, 10, 21, 22, 0, 0)
      },
      yAxis: {
        title: {
          text: 'Y Title'
        },
        categories: ['原型', '开发', '测试', '设计', '运维', '产品', '运营'],
        reversed: true,
        max: 6
      },
      series: [{
        showInLegend: false,
        name: '项目1',
        pointWidth: 20,
        data: [{
          x: Date.UTC(2014, 10, 21, 8, 30, 0),
          x2: Date.UTC(2014, 10, 21, 8, 50, 5),
          y: 6
        }, {
          x: Date.UTC(2014, 10, 21, 8, 30, 0),
          x2: Date.UTC(2014, 10, 21, 8, 50, 5),
          y: 4
        }, {
          x: Date.UTC(2014, 10, 21, 12, 30, 0),
          x2: Date.UTC(2014, 10, 21, 12, 50, 5),
          y: 0
        }, {
          x: Date.UTC(2014, 10, 21, 8, 40, 0),
          x2: Date.UTC(2014, 10, 21, 8, 41, 10),
          y: 1
        }, {
          x: Date.UTC(2014, 10, 21, 8, 40, 0),
          x2: Date.UTC(2014, 10, 21, 8, 41, 10),
          y: 3
        }, {
          x: Date.UTC(2014, 10, 21, 8, 46, 0),
          x2: Date.UTC(2014, 10, 21, 8, 51, 10),
          y: 3
        }, {
          x: Date.UTC(2014, 10, 21, 18, 20, 0),
          x2: Date.UTC(2014, 10, 21, 19, 43, 50),
          y: 2
        }, {
          x: Date.UTC(2014, 10, 21, 15, 4, 24),
          x2: Date.UTC(2014, 10, 21, 15, 53, 36),
          y: 1
        }, {
          x: Date.UTC(2014, 10, 21, 19, 45, 30),
          x2: Date.UTC(2014, 10, 21, 19, 56, 50),
          y: 2
        }],
        dataLabels: {
          enabled: false
        },
        pointInterval: 60
      }]
    }
    Highcharts.chart('container2', options2)

    // 甘特图2
    const options3: any = {
      chart: {
        type: 'xrange'
      },
      title: {
        text: '简易甘特图'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          week: '%Y/%m/%d'
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        categories: ['制作产品原型', '开发', '测试'],
        reversed: true
      },
      tooltip: {
        dateTimeLabelFormats: {
          day: '%Y/%m/%d'
        }
      },
      series: [{
        name: '项目1',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
          x: Date.UTC(2014, 10, 21),
          x2: Date.UTC(2014, 11, 2),
          y: 0,
          partialFill: 0.25
        }, {
          x: Date.UTC(2014, 11, 2),
          x2: Date.UTC(2014, 11, 5),
          y: 1
        }, {
          x: Date.UTC(2014, 11, 8),
          x2: Date.UTC(2014, 11, 9),
          y: 2
        }, {
          x: Date.UTC(2014, 11, 9),
          x2: Date.UTC(2014, 11, 19),
          y: 1
        }, {
          x: Date.UTC(2014, 11, 10),
          x2: Date.UTC(2014, 11, 23),
          y: 2
        }],
        dataLabels: {
          enabled: true
        }
      }]
    }
    Highcharts.chart('container3', options3)
  }
}
</script>
<style scoped lang="scss">
.card-size {
  width: 100%;
  height: 460px;
}

.chart-size {
  width: 100%;
  height: 100%;
}
</style>
