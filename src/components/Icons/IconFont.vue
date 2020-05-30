<template>
  <div class="ma-4">
    <div>
      <div class="display-3">icon font</div>
      <a href="https://www.iconfont.cn" target="_blank">https://www.iconfont.cn</a>
    </div>
    <v-card>
      <v-card-title>Multicolor Icons</v-card-title>
      <v-card-text>
        <v-tooltip bottom v-for="(item, k) in multicolorIcons" :key="k">
          <template v-slot:activator="{ on }">
            <svg class="icon" aria-hidden="true" v-on="on">
              <use :xlink:href="`#${item}`" />
            </svg>
          </template>
          <span>{{item}}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>Custom Color Icons</v-card-title>
      <v-card-text>
        <v-tooltip bottom v-for="(item, k) in colorIcons" :key="k">
          <template v-slot:activator="{ on }">
            <svg class="icon" aria-hidden="true" v-on="on" :style="{color:item.color}">
              <use :xlink:href="`#${item.icon}`" />
            </svg>
          </template>
          <span>{{item.icon}}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>Monochrome Icons</v-card-title>
      <v-card-subtitle><a href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=16957" target="_blank">https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=16957</a></v-card-subtitle>
      <v-card-text>
        <v-tooltip bottom v-for="(item, k) in monochromeIcons" :key="k">
          <template v-slot:activator="{ on }">
            <svg class="icon" aria-hidden="true" v-on="on">
              <use :xlink:href="`#${item}`" />
            </svg>
          </template>
          <span>{{item}}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import '@/assets/js/iconfont.js'
@Component({
  components: {}
})
export default class MaterialDesignIcons extends Vue {
  private multicolorIcons: string[] = [
    'icon-bangbangtang',
    'icon-aixin1',
    'icon-yinliao',
    'icon-yuyue',
    'icon-shengchanzhizuo',
    'icon-baosun',
    'icon-tuandui1',
    'icon-icon-test1',
    'icon-meirong1',
    'icon-2',
    'icon-lvzhi1',
    'icon-lvzhi4'
  ]
  private colorIcons: any[] = [
    {
      icon: 'icon-aixin',
      color: '#409eff'
    },
    {
      icon: 'icon-bianji',
      color: '#9c27b0'
    },
    {
      icon: 'icon-Dyanjing',
      color: '#54a8ff'
    },
    {
      icon: 'icon-caidan',
      color: '#f44336'
    },
    {
      icon: 'icon-anquan',
      color: '#ff5722'
    },
    {
      icon: 'icon-bangzhu',
      color: '#607d8b'
    },
    {
      icon: 'icon-buganxingqu',
      color: '#4caf50'
    },
    {
      icon: 'icon-bofangjilu',
      color: '#777ccc'
    },
    {
      icon: 'icon-chuangzuo',
      color: '#77ccc7'
    },
    {
      icon: 'icon-chenggong',
      color: '#ccc777'
    },
    {
      icon: 'icon-ceshi',
      color: '#cc777c'
    },
    {
      icon: 'icon-dianhua',
      color: '#7cbc77'
    }
  ]
  private monochromeIcons: string[] = [
    'icon-aixin',
    'icon-bianji',
    'icon-Dyanjing',
    'icon-caidan',
    'icon-anquan',
    'icon-bangzhu',
    'icon-buganxingqu',
    'icon-bofangjilu',
    'icon-chuangzuo',
    'icon-chenggong',
    'icon-ceshi',
    'icon-dianhua',
    'icon-dianzan',
    'icon-dingwei',
    'icon-diantong_guan',
    'icon-dianying',
    'icon-ditu',
    'icon-diantong_kai',
    'icon-dianyingpiao',
    'icon-dingdan',
    'icon-gengduo',
    'icon-fanbei',
    'icon-faxian',
    'icon-ertongpiao',
    'icon-gongyi',
    'icon-hongbao',
    'icon-fuzhi',
    'icon-fenxiang',
    'icon-huatifuhao',
    'icon-huiyuan',
    'icon-aliyu',
    'icon-jiju',
    'icon-jianshao',
    'icon-kabao',
    'icon-huati',
    'icon-guanzhu'
  ]
}
</script>
<style scoped lang="scss">
.icon {
  width: 6em;
  height: 6em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  border: 1px solid #eee;
  padding: 14px;
  margin: 10px;
}
</style>
