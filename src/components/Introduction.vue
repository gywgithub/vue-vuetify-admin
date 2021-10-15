<template>
  <div class="text-center headline">
    <LogoImage />
    <div class="content">
      <p>
        <span class="blue--text display-1 cursor-pointer" @click="openTab">vue-vuetify-admin</span> is background management system based on Vue, Typescript and Vuetify.
      </p>
      <p>
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left>mdi-vuejs</v-icon>Vue: {{vueVersion}}
        </v-chip>
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left>mdi-vuetify</v-icon>Vuetify: {{vuetifyVersion}}
        </v-chip>
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left>mdi-language-typescript</v-icon>Typescript: {{typescriptVersion}}
        </v-chip>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LogoImage from '@/components/LogoImage.vue'
import packageJsonData from '../../package.json'

@Component({
  components: {
    LogoImage
  }
})
export default class Introduction extends Vue {
  private vueVersion = ''
  private vuetifyVersion = ''
  private typescriptVersion = ''

  private mounted() {
    console.dir(packageJsonData)
    this.vueVersion = packageJsonData.dependencies.vue
    this.vuetifyVersion = packageJsonData.devDependencies.vuetify
    this.typescriptVersion = packageJsonData.devDependencies.typescript
  }

  private openTab() {
    window.open('https://github.com/gywgithub/vue-vuetify-admin', '_blank')
  }
}
</script>
<style lang="scss" scoped>
</style>
