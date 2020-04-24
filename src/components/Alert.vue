<template>
  <div>
    <transition name="slide-fade">
      <v-alert v-if="alertShow" :border="alertBorder" :type="alertType" colored-border elevation="2" class="alert-container">{{alertMessage}}</v-alert>
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Alert extends Vue {
  private alertBorder: string = 'left'
  private alertType: string = 'info'
  private alertMessage: string = ''
  private alertShow: boolean = false
}
</script>
<style lang="scss">
.alert-container {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  text-align: left;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
