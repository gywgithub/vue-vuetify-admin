<template>
  <div class="text-center headline main">
    <LogoImage />
    <div class="content">
      <p>
        <span class="blue--text display-1 cursor-pointer" @click="openTab">vue-vuetify-admin</span> is background management system based on Vue, Typescript and Vuetify.
      </p>
      <p>
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left>mdi-vuejs</v-icon>Vue: v2.6.10
        </v-chip>
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left>mdi-vuetify</v-icon>Vuetify: v2.2.21
        </v-chip>
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left>mdi-language-typescript</v-icon>Typescript: v3.4.3
        </v-chip>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LogoImage from '@/components/LogoImage.vue'

@Component({
  components: {
    LogoImage
  }
})
export default class Introduction extends Vue {
  private openTab() {
    window.open('https://github.com/gywgithub/vue-vuetify-admin', '_blank')
  }
}
</script>
<style lang="scss" scoped>
.content {
  margin-top: 20px;
}
</style>
