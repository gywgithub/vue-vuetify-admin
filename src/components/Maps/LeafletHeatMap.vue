
<template>
  <div>
    <div id="map" class="map" style="height: calc(100vh - 90px);"></div>
  </div>
</template>
<script lang="ts">
/* tslint:disable */
// tslint:disable
import { Component, Vue } from 'vue-property-decorator'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../../assets/js/leaflet-heat'
// @ts-ignore
import { addressPoints } from '../../assets/js/realworld-point'

@Component({})
export default class LeafletComponent extends Vue {

  private mounted() {
    const map = L.map('map', {
      center: [-37.82109, 175.2193],
      zoom: 16
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map)

    L.marker([37.3165735, 141.0223689]).addTo(map)

    let newAddressPoints = addressPoints.map((p: any) => {
      return [p[0], p[1]]
    })
    
    const heat = (<any>L).heatLayer(newAddressPoints).addTo(map)
    let draw = true
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
      }
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
