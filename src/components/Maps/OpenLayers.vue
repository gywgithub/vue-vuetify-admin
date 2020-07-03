<template>
  <div>
    <div id="map" class="map"></div>
    <v-select
      class="mt-4"
      dense
      v-model="drawType"
      :items="items"
      label="Draw-Type"
      outlined
      @change="typeChange"
    ></v-select>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import Draw from 'ol/interaction/Draw'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { OSM, Vector as VectorSource } from 'ol/source'

@Component({})
export default class Openlayers extends Vue {
  private drawType: any = ''
  private items: string[] = ['LineString', 'Polygon', 'Circle', 'None']
  private draw: any = null
  private map: any = null
  private vector: any = null
  private sourceVector: any = null

  private mounted() {
    const raster = new TileLayer({
      source: new OSM()
    })

    this.sourceVector = new VectorSource({ wrapX: false })

    this.vector = new VectorLayer({
      source: this.sourceVector
    })

    this.map = new Map({
      layers: [raster, this.vector],
      target: 'map',
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4
      })
    })
  }

  private addInteraction() {
    const value: any = this.drawType
    if (value !== 'None') {
      this.draw = new Draw({
        source: this.sourceVector,
        type: this.drawType,
        freehand: true
      })
      this.map.addInteraction(this.draw)
    }
  }

  private typeChange() {
    console.info(this.drawType)
    this.map.removeInteraction(this.draw)
    this.addInteraction()
  }
}
</script>
<style scoped lang="scss">
</style>
