<template>
  <div style="position: relative">
    <!-- <div>
      <input type="button" value="download point" @click="downloadPoint" />
    </div> -->
    <img
      v-if="showImg"
      src="../../assets/img/boom3.gif"
      class="img-boom"
      style="top: 48%; left: 52%; transform: translate(-50%, -50%)"
    />
    <img
      v-if="showImg1"
      src="../../assets/img/boom3.gif"
      class="img-boom"
      style="top: 5%; left: 5%"
    />
    <img
      v-if="showImg2"
      src="../../assets/img/boom3.gif"
      class="img-boom"
      style="bottom: 4%; left: 10%"
    />
    <img
      v-if="showImg3"
      src="../../assets/img/boom3.gif"
      class="img-boom"
      style="top: 4%; right: 5%"
    />
    <img
      v-if="showImg4"
      src="../../assets/img/boom3.gif"
      class="img-boom"
      style="top: 46%; left: 55%"
    />

    <div id="map" class="map" style="height: calc(100vh - 90px)"></div>
    <v-fab-transition>
      <v-btn
        color="orange darken-2"
        large
        dark
        fixed
        bottom
        right
        fab
        @click="start"
      >
        <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script lang="ts">
/* tslint:disable */
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../../assets/js/leaflet-heat'
// @ts-ignore
import { addressPoints } from '../../assets/js/realworld-fudao-point'
import * as geolib from 'geolib'
@Component({})
export default class LeafletComponent extends Vue {
  private coordinates: any = []
  private centerLatitude: number = 37.3165735 // 福岛核电站,GoogleMap经纬度坐标
  private centerLongitude: number = 141.0223689
  private radiusKm: number = 50

  private points: any = addressPoints
  private drawCoordinates: any = []
  private heat: any = {}
  private showImg: boolean = false
  private showImg1: boolean = false
  private showImg2: boolean = false
  private showImg3: boolean = false
  private showImg4: boolean = false

  public downloadPoint() {
    console.log(JSON.stringify(this.drawCoordinates))
    this.drawCoordinates = []
  }

  /**
   * 基于坐标点生成范围区域内坐标点
   */
  private generateCoordinates() {
    const coordinates = []

    // 1度约等于111公里
    const degreeInKm = 111
    console.log('111: ', geolib)
    const num = 0
    const num2 = 0
    for (let lat = -90; lat <= 90; lat = lat + 0.1) {
      for (let lon = -180; lon <= 180; lon = lon + 0.1) {
        const distance =
          geolib.getDistance(
            { latitude: this.centerLatitude, longitude: this.centerLongitude },
            { latitude: lat, longitude: lon }
          ) / 1000 // 转换为千米

        console.log('distance: ', distance)
        if (distance <= this.radiusKm) {
          coordinates.push({ latitude: lat, longitude: lon })
        }
      }
    }

    this.coordinates = coordinates
    console.log('this.coordinates: ', this.coordinates)
  }

  private start() {
    console.log('start')
    const addressPoints = this.points
    const lenBase = addressPoints.length
    console.log('len: ', lenBase)

    let len = 0
    let i = 0

    let n = 0
    const id = setInterval(() => {
      len = addressPoints.length
      if (len > 0) {
        i = parseInt((Math.random() * len).toString(), 10)
        n++
        this.heat.addLatLng(addressPoints[i])
        this.heat.addLatLng(addressPoints[i + 1])
        this.heat.addLatLng(addressPoints[i + 2])
        this.heat.addLatLng(addressPoints[i + 3])
        this.heat.addLatLng(addressPoints[i + 4])
        this.heat.addLatLng(addressPoints[i + 5])
        this.heat.addLatLng(addressPoints[i + 6])
        this.heat.addLatLng(addressPoints[i + 7])
        this.heat.addLatLng(addressPoints[i + 8])
        this.heat.addLatLng(addressPoints[i + 9])
        addressPoints.splice(i, 10)
      } else {
        console.log('绘制完了, n=' + n + ' len=' + lenBase)
        clearInterval(id)
        this.showImg = true
        setTimeout(() => {
          this.showImg1 = true
        }, 1000)
        setTimeout(() => {
          this.showImg2 = true
        }, 2000)
        setTimeout(() => {
          this.showImg3 = true
        }, 3000)
        setTimeout(() => {
          this.showImg4 = true
        }, 4000)
      }
    }, 0.01)
  }

  private mounted() {
    console.log('geolib: ', geolib)
    // this.generateCoordinates()
    this.points = addressPoints
    const map = L.map('map', {
      center: [this.centerLatitude, this.centerLongitude],
      zoom: 14
    })
    map.scrollWheelZoom.disable() // 禁止鼠标滚轮缩放
    map.dragging.disable() // 禁止拖拽
    map.doubleClickZoom.disable() // 禁止双击缩放

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map)

    L.marker([this.centerLatitude, this.centerLongitude]).addTo(map)

    const newAddressPoints = this.coordinates.map((p: any) => {
      return [p.latitude, p.longitude]
    })
    console.log('newAddressPoints: ', newAddressPoints)

    this.heat = (L as any).heatLayer(newAddressPoints).addTo(map)
    let draw = false
    const self = this
    map.on({
      movestart() {
        // draw = false
      },
      moveend() {
        // draw = true
      },
      mousemove(e) {
        if (draw) {
          console.log(JSON.stringify(e.latlng))
          self.drawCoordinates.push(e.latlng)
          self.heat.addLatLng(e.latlng)
        }
      },
      dblclick(e) {
        console.log('click: ', e)
        draw = !draw
        if (draw) {
          store.dispatch('updateShowAlert', {
            showAlert: true,
            alertMessage: '绘制开始',
            alertType: 'success'
          })
        } else {
          store.dispatch('updateShowAlert', {
            showAlert: true,
            alertMessage: '绘制结束',
            alertType: 'warning'
          })
        }
      }
    })

  }
}
</script>
<style scoped lang="scss">
.map {
  z-index: 1;
}
.img-boom {
  width: 400px;
  height: 400px;
  z-index: 3;
  position: absolute;
}
</style>
