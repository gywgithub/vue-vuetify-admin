<template>
  <div>
    <BaiduMap
      class="map-view"
      :center="centerData"
      :zoom="15"
      ak="hro0zvVqMphtfCDjc1fSplTo5LqccqRk"
      :scroll-wheel-zoom="true"
    >
    </BaiduMap>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

@Component({
  components: {
    BaiduMap
  }
})
export default class ComponentTemplate extends Vue {
  private centerData = { lng: '116.423924', lat: '39.895065' } // 元隆大厦
}
</script>
<style scoped lang="scss">
.map-view {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
