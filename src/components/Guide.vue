<template>
  <div class="text-center headline">
    <LogoImage class="logo" />
    <div class="ma-8">
      <v-btn @click.prevent.stop="guide" large text color="primary">open guide</v-btn>
    </div>
    <v-btn color="warning" class="help" text>
      help
    </v-btn>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LogoImage from '@/components/LogoImage.vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

@Component({
  components: {
    LogoImage
  }
})
export default class Introduction extends Vue {
  private driver: any = null

  private mounted() {
    this.driver = new Driver()
    console.info(this.driver)
  }

  private guide() {
    const steps = [
      {
        element: '.logo',
        popover: {
          title: 'Logo Image',
          description: 'Surprise in hovering mouse',
          position: 'bottom'
        }
      },
      {
        element: '.help',
        popover: {
          title: 'Help Button',
          description: 'Color warning',
          position: 'top'
        }
      }
    ]
    this.driver.defineSteps(steps)
    this.driver.start()
  }
}
</script>
<style lang="scss" scoped>
</style>
