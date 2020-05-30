<template>
  <div class="main">
    <div class="display-3">Vue D3 Examples</div>
    <p>
      <v-chip class="ma-2" color="primary" outlined @click="btnGithubClick">
        <v-icon left>mdi-github</v-icon>Github
      </v-chip>
      <v-chip class="ma-2" color="primary" outlined @click="btnOnlineClick">
        <v-icon left>mdi-microsoft-internet-explorer</v-icon>Online Preview
      </v-chip>
    </p>
    <video controls>
      <source :src="`${publicPath}video/d3.webm`" type="video/webm" />Sorry, your browser doesn't support embedded videos
    </video>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class ComponentTemplate extends Vue {
  private publicPath: string = process.env.BASE_URL
  private btnGithubClick() {
    window.open('https://github.com/gywgithub/vue-d3-examples', '_blank')
  }
  private btnOnlineClick() {
    window.open('https://gywgithub.github.io/vue-d3-examples', '_blank')
  }
}
</script>
<style scoped lang="scss">
.main {
  text-align: center;
}

.display-3 {
  margin: 20px;
}

video {
  width: 80%;
  margin: auto;
  border: 2px solid #eee;
  border-radius: 4px;
}
</style>
