<template>
  <div>
    <div id="contentDiv" class="map"></div>
    <v-row>
      <v-col cols="12" sm="4">
        <h3>Canvas Click</h3>
        webPoint: {{webPoint}}
        <br />
        viewportPoint: {{viewportPoint}}
        <br />
        imagePoint: {{imagePoint}}
      </v-col>
      <v-col cols="12" sm="4">
        <h3>Update Zoom</h3>
        Zoom: {{zoom}}
        <br />
        Image Zoom: {{imageZoom}}
        <br />
      </v-col>
      <v-col cols="12" sm="4">
        <h3>Mouse Move</h3>
        Web: {{webPoint}}
        <br />
        Viewport: {{viewportPoint}}
        <br />
        Image: {{imagePoint}}
      </v-col>
    </v-row>
    <div class="mt-2">
      <a href="https://showcase.iiif.io/" target="_blank">https://showcase.iiif.io/</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OpenSeadragon from 'openseadragon'
@Component({})
export default class OpenSeadragonComponent extends Vue {
  private webPoint: string = ''
  private viewportPoint: string = ''
  private imagePoint: string = ''
  private zoom: string = ''
  private imageZoom: string = ''

  private mounted() {
    const viewer: any = OpenSeadragon({
      id: 'contentDiv',
      prefixUrl: '/images/',
      // tileSources: '/data/wide.dzi',
      tileSources:
        'http://openseadragon.github.io/example-images/duomo/duomo.dzi',
      showNavigator: true
    })
    const self = this
    viewer.addHandler('canvas-click', (e: any) => {
      self.webPoint = e.position
      self.viewportPoint = viewer.viewport.pointFromPixel(self.webPoint)
      self.imagePoint = viewer.viewport.viewportToImageCoordinates(
        self.viewportPoint
      )
    })

    const updateZoom = () => {
      const zoom = viewer.viewport.getZoom(true)
      const imageZoom = viewer.viewport.viewportToImageZoom(zoom)
      self.zoom = (Math.round(zoom * 100) / 100).toString()
      self.imageZoom = (Math.round(imageZoom * 100) / 100).toString()
    }

    viewer.addHandler('open', () => {
      const tracker = new OpenSeadragon.MouseTracker({
        element: viewer.container,
        moveHandler: (event: any) => {
          self.webPoint = event.position
          self.viewportPoint = viewer.viewport.pointFromPixel(self.webPoint)
          self.imagePoint = viewer.viewport.viewportToImageCoordinates(
            self.viewportPoint
          )
          const zoom = viewer.viewport.getZoom(true)
          const imageZoom = viewer.viewport.viewportToImageZoom(zoom)

          updateZoom()
        }
      })

      tracker.setTracking(true)

      viewer.addHandler('animation', updateZoom)
    })
  }
}
</script>
<style scoped lang="scss">
</style>
