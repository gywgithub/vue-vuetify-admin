<template>
  <div id="app">
    <v-app>
      <router-view/>
      <Alert class="alert-component-position mx-2"></Alert>
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Alert from '@/components/Alert.vue'

@Component({
  components: {
    Alert
  }
})
export default class extends Vue {}
</script>
<style lang="scss">
@mixin width-border {
  width: 100%;
  border: 1px solid #eee;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nothing {
  margin-top: 25vh;
  color: #80868b;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.75rem;
  text-align: center;
}

.cursor-pointer {
  cursor: pointer;
}

.alert-component-position {
  position: fixed;
  z-index: 999999;
  top: 80px;
  left: 0;
  right: 0;
}

.avatar:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}

video {
  @include width-border;
}

.map {
  @include width-border;
  height: 600px;
}
</style>
