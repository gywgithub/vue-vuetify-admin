<template>
  <div>
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
import { addressPoints } from '../../assets/js/realworld-point'

@Component({})
export default class LeafletComponent extends Vue {
  private mounted() {
    const map = L.map('map', {
      center: [37.3165735, 141.0223689], // 福岛核电站,GoogleMap经纬度坐标
      zoom: 14
    })
    // map.scrollWheelZoom.disable(); // 禁止鼠标滚轮缩放
    // map.dragging.disable(); // 禁止拖拽
    map.doubleClickZoom.disable() // 禁止双击缩放

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map)

    L.marker([37.3165735, 141.0223689]).addTo(map)

    let arrNull: any = []
    let newAddressPoints = arrNull.map((p: any) => {
      return [p[0], p[1]]
    })

    const heat = (<any>L).heatLayer(newAddressPoints).addTo(map)
    let draw = true
    const self = this
    map.on({
      movestart() {
        draw = false
      },
      moveend() {
        draw = true
      },
      mousemove(e) {
        if (draw) {
          heat.addLatLng(e.latlng)
        }
      },
      dblclick(e) {
        console.log('click: ', e)
        draw = !draw
        if (draw) {
          console.log('绘制开始')
          store.dispatch('updateShowAlert', {
            showAlert: true,
            alertMessage: '绘制开始',
            alertType: 'success'
          })
        } else {
          console.log('绘制结束')
          store.dispatch('updateShowAlert', {
            showAlert: true,
            alertMessage: '绘制结束',
            alertType: 'warning'
          })
        }
      },
    })
  }
  // tslint:enable
}
</script>
<style scoped lang="scss">
.map {
  z-index: 1;
}
</style>
