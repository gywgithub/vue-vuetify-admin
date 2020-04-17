<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-btn icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Sign Up</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="login">LOGIN</v-btn>
    </v-toolbar>
    <div class="text-align-center">
      <div class="img-container">
        <img src="/img/logo.png" class="vue-logo" />
        <img src="/img/v-alt.svg" class="vuetify-logo" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SignUp extends Vue {
  private username: string = ''

  private back() {
    this.$router.go(-1)
  }

  private login() {
    this.$router.push('login')
  }
}
</script>
<style lang="scss" scoped>
.img-container {
  position: relative;
  height: 150px;
}

.vue-logo {
  width: 60px;
  position:absolute;
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