<template>
  <div>
    <div>Simple demo page to show a default OpenSeadragon viewer.</div>https://showcase.iiif.io/
    <div id="contentDiv" class="openseadragon1"></div>
    <div>
      Canvas Click

      webPoint: {{webPoint}}
      viewportPoint: {{viewportPoint}}
      imagePoint: {{imagePoint}}
    </div>
    <div>
      Update Zoom

      Zoom: {{zoom}}
      Image Zoom: {{imageZoom}}
    </div>
    <div>
      Mouse Move

      Web: {{webPoint}}
      Viewport: {{viewportPoint}}
      Image: {{imagePoint}}
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
    console.info('openseadragon')
    const viewer: any = OpenSeadragon({
      id: 'contentDiv',
      prefixUrl: '/images/',
      // tileSources: '/data/wide.dzi',
      tileSources:
        'http://openseadragon.github.io/example-images/duomo/duomo.dzi',
      showNavigator: true
    })
    console.info(viewer)
    const self = this
    viewer.addHandler('canvas-click', (e: any) => {
      self.webPoint = e.position
      self.viewportPoint = viewer.viewport.pointFromPixel(self.webPoint)
      self.imagePoint = viewer.viewport.viewportToImageCoordinates(
        self.viewportPoint
      )
      console.info('webPoint: ', self.webPoint)
      console.info('viewportPoint: ', self.viewportPoint)
      console.info('imagePoint: ', self.imagePoint)
    })

    const updateZoom = () => {
      const zoom = viewer.viewport.getZoom(true)
      const imageZoom = viewer.viewport.viewportToImageZoom(zoom)
      self.zoom = (Math.round(zoom * 100) / 100).toString()
      self.imageZoom = (Math.round(imageZoom * 100) / 100).toString()
      console.info('Zoom: ', (Math.round(zoom * 100) / 100))
      console.info('Image Zoom: ', (Math.round(imageZoom * 100) / 100))
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

          console.info('Web: ', self.webPoint.toString())
          console.info('Viewport: ', self.viewportPoint.toString())
          console.info('Image: ', self.imagePoint.toString())

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
.openseadragon1 {
  width: 800px;
  height: 600px;
}
</style>
