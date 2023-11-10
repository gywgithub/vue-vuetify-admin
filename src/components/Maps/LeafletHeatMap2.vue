<template>
  <div>
    <div>
      <input type="button" value="download point" @click="downloadPoint" />
    </div>
    <div id="map" class="map" style="height: calc(100vh - 90px)"></div>
  </div>
</template>
<script lang="ts">
/* tslint:disable */
// tslint:disable
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../../assets/js/leaflet-heat'
// @ts-ignore
// import { addressPoints } from '../../assets/js/realworld-point'
import { addressPoints } from '../../assets/js/realworld-fudao-point'
import * as geolib from 'geolib'
@Component({})
export default class LeafletComponent extends Vue {
  private coordinates: any = []
  private centerLatitude: number = 37.3165735 // 福岛核电站,GoogleMap经纬度坐标
  private centerLongitude: number = 141.0223689

  private radiusKm: number = 50
  // tslint:enable

  private drawCoordinates: any = []

  public downloadPoint() {

    console.log(JSON.stringify(this.drawCoordinates))
    this.drawCoordinates = []
  }

  private generateCoordinates() {
    const coordinates = []


    // 1度约等于111公里
    const degreeInKm = 111
    console.log('111: ', geolib)
    const num = 0
    const num2 = 0
    for (let lat = -90; lat <= 90; lat = lat + 0.1) {
      for (let lon = -180; lon <= 180; lon = lon + 0.1) {
        // console.log('lon: ', lon)
        // console.log('num: ', num++)
        const distance =
          geolib.getDistance(
            { latitude: this.centerLatitude, longitude: this.centerLongitude },
            { latitude: lat, longitude: lon }
          ) / 1000 // 转换为千米

        console.log('distance: ', distance)
        if (distance <= this.radiusKm) {
          // console.log('result num: ', num2++)
          // console.log(JSON.stringify({ latitude: lat, longitude: lon }))
          coordinates.push({ latitude: lat, longitude: lon })
        }
      }
    }

    console.log('len: ', coordinates.length)
    this.coordinates = coordinates
    console.log('this.coordinates: ', this.coordinates)
  }

  private mounted() {
    console.log('geolib: ', geolib)
    // this.generateCoordinates()

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

    const arrNull: any = []
    // const newAddressPoints = this.coordinates.map((p: any) => {
    //   return [p[0], p[1]]
    // })

    const newAddressPoints = this.coordinates.map((p: any) => {
      // console.log('p: ', p)
      return [p['latitude'], p['longitude']]
    })
    console.log('newAddressPoints: ', newAddressPoints)

    const heat = (L as any).heatLayer(newAddressPoints).addTo(map)
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
          heat.addLatLng(e.latlng)
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
  
    let lenBase = addressPoints.length
    let len = 0
    console.log('len: ', len)
    let i = 0

    let n = 0
    let id = setInterval(() => {

      // if (i < len) {
      //   heat.addLatLng(addressPoints[i])
      //   i++
      // }
      len = addressPoints.length
      if (len > 0) {
        i = parseInt((Math.random() * len).toString(), 10)
      
      console.log('i: ', i)
      n++
      heat.addLatLng(addressPoints[i])
      addressPoints.splice(i, 1)
      } else {
        console.log('绘制完了, n=' + n +' len=' + lenBase)
        clearInterval(id)
      }
    }, 0.001)
      
    console.log('id: ', id)
  }
}
</script>
<style scoped lang="scss">
.map {
  z-index: 1;
}
</style>
