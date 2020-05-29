<template>
  <div>
    <div class="avatar img-container">
      <img src="../assets/img/logo.png" class="vue-logo" />
      <img src="../assets/img/v-alt.svg" class="vuetify-logo" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class LogoImage extends Vue {}
</script>
<style scoped lang="scss">
.img-container {
  width: 200px;
  height: 180px;
  margin: auto;
  position: relative;
}

.vue-logo {
  width: 60px;
  position: absolute;
  left: calc(50% - 6px);
  top: 96px;
}

.vuetify-logo {
  width: 100px;
  position: absolute;
  left: calc(50% - 64px);
  top: 40px;
}
</style>
