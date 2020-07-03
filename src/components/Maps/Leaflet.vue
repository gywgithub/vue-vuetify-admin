<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

@Component({})
export default class LeafletComponent extends Vue {
  private mounted() {
    const map = L.map('map', {
      center: [51.50, -0.09],
      zoom: 13
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.circle([51.508, -0.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    })
      .addTo(map)
      .bindPopup('I am a circle.')

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
      [51.519, -0.052]
    ])
      .addTo(map)
      .bindPopup('I am a polygon.')
  }
}
</script>
<style scoped lang="scss">
.map {
  z-index: 1;
}
</style>
