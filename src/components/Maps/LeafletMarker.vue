
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
@Component({})
export default class LeafletComponent extends Vue {

  private mounted() {
    const map = L.map('map', {
      center: [37.3165735, 141.0223689], // 福岛核电站,GoogleMap经纬度坐标
      zoom: 14
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map)

    L.marker([37.3165735, 141.0223689]).addTo(map)
   }
  // tslint:enable
}
</script>
<style scoped lang="scss">
.map {
  z-index: 1;
}
</style>
