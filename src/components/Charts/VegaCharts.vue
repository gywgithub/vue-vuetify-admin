<template>
  <div>
    vega
    <!-- <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" xl="3" v-for="(v, k) in chartList" :key="k">
        <v-card class="pa-2 card-height overflow-auto">
          <v-card-title>{{v.cardTitle}}</v-card-title>
          <div :id="v.domId" class="chart-size"></div>
        </v-card>
      </v-col>
    </v-row> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import * as vega from 'vega'
// import embed from 'vega-embed'
@Component({})
export default class Vega extends Vue {
  // private chartList: any = [
  //   {
  //     domId: 'viewBar1',
  //     cardTitle: 'Vega'
  //   },
  //   {
  //     domId: 'viewLine1',
  //     cardTitle: 'Vega'
  //   },
  //   {
  //     domId: 'viewPie1',
  //     cardTitle: 'Vega'
  //   },
  //   {
  //     domId: 'simpleBarChart',
  //     cardTitle: 'Vega-Lite'
  //   },
  //   {
  //     domId: 'sineCurveChart',
  //     cardTitle: 'Vega-Lite'
  //   },
  //   {
  //     domId: 'linearRegression',
  //     cardTitle: 'Vega-Lite'
  //   }
  // ]

  // private bar1Spec: any = {
  //   $schema: 'https://vega.github.io/schema/vega/v5.json',
  //   width: 300,
  //   height: 400,
  //   padding: 5,
  //   autosize: 'pad',
  //   signals: [
  //     {
  //       name: 'rangeStep',
  //       value: 20,
  //       bind: {
  //         input: 'range',
  //         min: 5,
  //         max: 50,
  //         step: 1
  //       }
  //     },
  //     {
  //       name: 'innerPadding',
  //       value: 0.1,
  //       bind: {
  //         input: 'range',
  //         min: 0,
  //         max: 0.7,
  //         step: 0.01
  //       }
  //     },
  //     {
  //       name: 'outerPadding',
  //       value: 0.2,
  //       bind: {
  //         input: 'range',
  //         min: 0,
  //         max: 0.4,
  //         step: 0.01
  //       }
  //     },
  //     {
  //       name: 'height',
  //       update: 'trellisExtent[1]'
  //     }
  //   ],
  //   data: [
  //     {
  //       name: 'tuples',
  //       values: [
  //         {
  //           a: 0,
  //           b: 'a',
  //           c: 6.3
  //         },
  //         {
  //           a: 0,
  //           b: 'a',
  //           c: 4.2
  //         },
  //         {
  //           a: 0,
  //           b: 'b',
  //           c: 6.8
  //         },
  //         {
  //           a: 0,
  //           b: 'c',
  //           c: 5.1
  //         },
  //         {
  //           a: 1,
  //           b: 'b',
  //           c: 4.4
  //         },
  //         {
  //           a: 2,
  //           b: 'b',
  //           c: 3.5
  //         },
  //         {
  //           a: 2,
  //           b: 'c',
  //           c: 6.2
  //         }
  //       ],
  //       transform: [
  //         {
  //           type: 'aggregate',
  //           groupby: ['a', 'b'],
  //           fields: ['c'],
  //           ops: ['average'],
  //           as: ['c']
  //         }
  //       ]
  //     },
  //     {
  //       name: 'trellis',
  //       source: 'tuples',
  //       transform: [
  //         {
  //           type: 'aggregate',
  //           groupby: ['a']
  //         },
  //         {
  //           type: 'formula',
  //           as: 'span',
  //           expr:
  //             'rangeStep * bandspace(datum.count, innerPadding, outerPadding)'
  //         },
  //         {
  //           type: 'stack',
  //           field: 'span'
  //         },
  //         {
  //           type: 'extent',
  //           field: 'y1',
  //           signal: 'trellisExtent'
  //         }
  //       ]
  //     }
  //   ],
  //   scales: [
  //     {
  //       name: 'xscale',
  //       domain: {
  //         data: 'tuples',
  //         field: 'c'
  //       },
  //       nice: true,
  //       zero: true,
  //       round: true,
  //       range: 'width'
  //     },
  //     {
  //       name: 'color',
  //       type: 'ordinal',
  //       range: 'category',
  //       domain: {
  //         data: 'trellis',
  //         field: 'a'
  //       }
  //     }
  //   ],
  //   axes: [
  //     {
  //       orient: 'bottom',
  //       scale: 'xscale',
  //       domain: true
  //     }
  //   ],
  //   marks: [
  //     {
  //       type: 'group',
  //       from: {
  //         data: 'trellis',
  //         facet: {
  //           name: 'faceted_tuples',
  //           data: 'tuples',
  //           groupby: 'a'
  //         }
  //       },
  //       encode: {
  //         enter: {
  //           x: {
  //             value: 0
  //           },
  //           width: {
  //             signal: 'width'
  //           }
  //         },
  //         update: {
  //           y: {
  //             field: 'y0'
  //           },
  //           y2: {
  //             field: 'y1'
  //           }
  //         }
  //       },
  //       scales: [
  //         {
  //           name: 'yscale',
  //           type: 'band',
  //           paddingInner: {
  //             signal: 'innerPadding'
  //           },
  //           paddingOuter: {
  //             signal: 'outerPadding'
  //           },
  //           round: true,
  //           domain: {
  //             data: 'faceted_tuples',
  //             field: 'b'
  //           },
  //           range: {
  //             step: {
  //               signal: 'rangeStep'
  //             }
  //           }
  //         }
  //       ],
  //       axes: [
  //         {
  //           orient: 'left',
  //           scale: 'yscale',
  //           ticks: false,
  //           domain: false,
  //           labelPadding: 4
  //         }
  //       ],
  //       marks: [
  //         {
  //           type: 'rect',
  //           from: {
  //             data: 'faceted_tuples'
  //           },
  //           encode: {
  //             enter: {
  //               x: {
  //                 value: 0
  //               },
  //               x2: {
  //                 scale: 'xscale',
  //                 field: 'c'
  //               },
  //               fill: {
  //                 scale: 'color',
  //                 field: 'a'
  //               },
  //               strokeWidth: {
  //                 value: 2
  //               }
  //             },
  //             update: {
  //               y: {
  //                 scale: 'yscale',
  //                 field: 'b'
  //               },
  //               height: {
  //                 scale: 'yscale',
  //                 band: 1
  //               },
  //               stroke: {
  //                 value: null
  //               },
  //               zindex: {
  //                 value: 0
  //               }
  //             },
  //             hover: {
  //               stroke: {
  //                 value: 'firebrick'
  //               },
  //               zindex: {
  //                 value: 1
  //               }
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }

  // private line1Spec: any = {
  //   $schema: 'https://vega.github.io/schema/vega/v5.json',
  //   description: 'A basic line chart example.',
  //   width: 300,
  //   height: 200,
  //   padding: 5,
  //   signals: [
  //     {
  //       name: 'interpolate',
  //       value: 'linear',
  //       bind: {
  //         input: 'select',
  //         options: [
  //           'basis',
  //           'cardinal',
  //           'catmull-rom',
  //           'linear',
  //           'monotone',
  //           'natural',
  //           'step',
  //           'step-after',
  //           'step-before'
  //         ]
  //       }
  //     }
  //   ],

  //   data: [
  //     {
  //       name: 'table',
  //       values: [
  //         { x: 0, y: 28, c: 0 },
  //         { x: 0, y: 20, c: 1 },
  //         { x: 1, y: 43, c: 0 },
  //         { x: 1, y: 35, c: 1 },
  //         { x: 2, y: 81, c: 0 },
  //         { x: 2, y: 10, c: 1 },
  //         { x: 3, y: 19, c: 0 },
  //         { x: 3, y: 15, c: 1 },
  //         { x: 4, y: 52, c: 0 },
  //         { x: 4, y: 48, c: 1 },
  //         { x: 5, y: 24, c: 0 },
  //         { x: 5, y: 28, c: 1 },
  //         { x: 6, y: 87, c: 0 },
  //         { x: 6, y: 66, c: 1 },
  //         { x: 7, y: 17, c: 0 },
  //         { x: 7, y: 27, c: 1 },
  //         { x: 8, y: 68, c: 0 },
  //         { x: 8, y: 16, c: 1 },
  //         { x: 9, y: 49, c: 0 },
  //         { x: 9, y: 25, c: 1 }
  //       ]
  //     }
  //   ],

  //   scales: [
  //     {
  //       name: 'x',
  //       type: 'point',
  //       range: 'width',
  //       domain: { data: 'table', field: 'x' }
  //     },
  //     {
  //       name: 'y',
  //       type: 'linear',
  //       range: 'height',
  //       nice: true,
  //       zero: true,
  //       domain: { data: 'table', field: 'y' }
  //     },
  //     {
  //       name: 'color',
  //       type: 'ordinal',
  //       range: 'category',
  //       domain: { data: 'table', field: 'c' }
  //     }
  //   ],

  //   axes: [
  //     { orient: 'bottom', scale: 'x' },
  //     { orient: 'left', scale: 'y' }
  //   ],

  //   marks: [
  //     {
  //       type: 'group',
  //       from: {
  //         facet: {
  //           name: 'series',
  //           data: 'table',
  //           groupby: 'c'
  //         }
  //       },
  //       marks: [
  //         {
  //           type: 'line',
  //           from: { data: 'series' },
  //           encode: {
  //             enter: {
  //               x: { scale: 'x', field: 'x' },
  //               y: { scale: 'y', field: 'y' },
  //               stroke: { scale: 'color', field: 'c' },
  //               strokeWidth: { value: 2 }
  //             },
  //             update: {
  //               interpolate: { signal: 'interpolate' },
  //               strokeOpacity: { value: 1 }
  //             },
  //             hover: {
  //               strokeOpacity: { value: 0.5 }
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }

  // private pie1Spec: any = {
  //   $schema: 'https://vega.github.io/schema/vega/v5.json',
  //   description: 'A basic pie chart example.',
  //   width: 200,
  //   height: 300,
  //   autosize: 'none',

  //   signals: [
  //     {
  //       name: 'startAngle',
  //       value: 0,
  //       bind: { input: 'range', min: 0, max: 6.29, step: 0.01 }
  //     },
  //     {
  //       name: 'endAngle',
  //       value: 6.29,
  //       bind: { input: 'range', min: 0, max: 6.29, step: 0.01 }
  //     },
  //     {
  //       name: 'padAngle',
  //       value: 0,
  //       bind: { input: 'range', min: 0, max: 0.1 }
  //     },
  //     {
  //       name: 'innerRadius',
  //       value: 0,
  //       bind: { input: 'range', min: 0, max: 90, step: 1 }
  //     },
  //     {
  //       name: 'cornerRadius',
  //       value: 0,
  //       bind: { input: 'range', min: 0, max: 10, step: 0.5 }
  //     },
  //     {
  //       name: 'sort',
  //       value: false,
  //       bind: { input: 'checkbox' }
  //     }
  //   ],

  //   data: [
  //     {
  //       name: 'table',
  //       values: [
  //         { id: 1, field: 4 },
  //         { id: 2, field: 6 },
  //         { id: 3, field: 10 },
  //         { id: 4, field: 3 },
  //         { id: 5, field: 7 },
  //         { id: 6, field: 8 }
  //       ],
  //       transform: [
  //         {
  //           type: 'pie',
  //           field: 'field',
  //           startAngle: { signal: 'startAngle' },
  //           endAngle: { signal: 'endAngle' },
  //           sort: { signal: 'sort' }
  //         }
  //       ]
  //     }
  //   ],

  //   scales: [
  //     {
  //       name: 'color',
  //       type: 'ordinal',
  //       domain: { data: 'table', field: 'id' },
  //       range: { scheme: 'category20' }
  //     }
  //   ],

  //   marks: [
  //     {
  //       type: 'arc',
  //       from: { data: 'table' },
  //       encode: {
  //         enter: {
  //           fill: { scale: 'color', field: 'id' },
  //           x: { signal: 'width / 2' },
  //           y: { signal: 'height / 2' }
  //         },
  //         update: {
  //           startAngle: { field: 'startAngle' },
  //           endAngle: { field: 'endAngle' },
  //           padAngle: { signal: 'padAngle' },
  //           innerRadius: { signal: 'innerRadius' },
  //           outerRadius: { signal: 'width / 2' },
  //           cornerRadius: { signal: 'cornerRadius' }
  //         }
  //       }
  //     }
  //   ]
  // }

  // private simpleBarLiteSpec: any = {
  //   $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  //   description: 'A simple bar chart with embedded data.',
  //   width: 'container',
  //   height: 'container',
  //   data: {
  //     values: [
  //       { a: 'A', b: 28 },
  //       { a: 'B', b: 55 },
  //       { a: 'C', b: 43 },
  //       { a: 'D', b: 91 },
  //       { a: 'E', b: 81 },
  //       { a: 'F', b: 53 },
  //       { a: 'G', b: 19 },
  //       { a: 'H', b: 87 },
  //       { a: 'I', b: 52 }
  //     ]
  //   },
  //   mark: 'bar',
  //   encoding: {
  //     x: { field: 'a', type: 'ordinal', axis: { labelAngle: 0 } },
  //     y: { field: 'b', type: 'quantitative' }
  //   }
  // }

  // private lineLiteSpec: any = {
  //   $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  //   description: 'Plots two functions using a generated sequence.',
  //   width: 'container',
  //   autosize: {
  //     type: 'fit',
  //     contains: 'padding'
  //   },
  //   data: {
  //     sequence: {
  //       start: 0,
  //       stop: 12.7,
  //       step: 0.1,
  //       as: 'x'
  //     }
  //   },
  //   transform: [
  //     {
  //       calculate: 'sin(datum.x)',
  //       as: 'sin(x)'
  //     },
  //     {
  //       calculate: 'cos(datum.x)',
  //       as: 'cos(x)'
  //     },
  //     {
  //       fold: ['sin(x)', 'cos(x)']
  //     }
  //   ],
  //   mark: 'line',
  //   encoding: {
  //     x: {
  //       type: 'quantitative',
  //       field: 'x'
  //     },
  //     y: {
  //       field: 'value',
  //       type: 'quantitative'
  //     },
  //     color: {
  //       field: 'key',
  //       type: 'nominal',
  //       title: null
  //     }
  //   }
  // }

  // private linearRegression: any = {
  //   $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  //   data: {
  //     url: 'https://vega.github.io/vega-lite/data/movies.json'
  //   },
  //   layer: [
  //     {
  //       mark: {
  //         type: 'point',
  //         filled: true
  //       },
  //       encoding: {
  //         x: {
  //           field: 'Rotten_Tomatoes_Rating',
  //           type: 'quantitative'
  //         },
  //         y: {
  //           field: 'IMDB_Rating',
  //           type: 'quantitative'
  //         }
  //       }
  //     },
  //     {
  //       mark: {
  //         type: 'line',
  //         color: 'firebrick'
  //       },
  //       transform: [
  //         {
  //           regression: 'IMDB_Rating',
  //           on: 'Rotten_Tomatoes_Rating'
  //         }
  //       ],
  //       encoding: {
  //         x: {
  //           field: 'Rotten_Tomatoes_Rating',
  //           type: 'quantitative'
  //         },
  //         y: {
  //           field: 'IMDB_Rating',
  //           type: 'quantitative'
  //         }
  //       }
  //     },
  //     {
  //       transform: [
  //         {
  //           regression: 'IMDB_Rating',
  //           on: 'Rotten_Tomatoes_Rating',
  //           params: true
  //         },
  //         { calculate: `'R²: '+format(datum.rSquared, '.2f')`, as: 'R2' }
  //       ],
  //       mark: {
  //         type: 'text',
  //         color: 'firebrick',
  //         x: 'width',
  //         align: 'right',
  //         y: -5
  //       },
  //       encoding: {
  //         text: { type: 'nominal', field: 'R2' }
  //       }
  //     }
  //   ]
  // }

  // private renderVega(spec: any, domId: string) {
  //   new vega.View(vega.parse(spec))
  //     .renderer('canvas')
  //     .initialize(domId)
  //     .hover()
  //     .run()
  // }
  // private async mounted() {
  //   this.renderVega(this.bar1Spec, '#viewBar1')
  //   this.renderVega(this.line1Spec, '#viewLine1')
  //   this.renderVega(this.pie1Spec, '#viewPie1')
  //   embed('#simpleBarChart', this.simpleBarLiteSpec)
  //   embed('#sineCurveChart', this.lineLiteSpec)
  //   embed('#linearRegression', this.linearRegression)
  // }
}
</script>
<style scoped lang="scss">
.card-height {
  height: 400px;
}

.overflow-auto {
  overflow: auto;
}

.chart-size {
  width: 100%;
  height: calc(100% - 80px);
}
</style>
