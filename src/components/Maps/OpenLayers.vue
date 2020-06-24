<template>
  <div>
    <div id="map" style="height:400px;width:100%;"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
@Component({})
export default class Openlayers extends Vue {
  private mounted() {
    new Map({ // tslint:disable-line
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    })
  }
}
</script>
<style scoped lang="scss"></style>
