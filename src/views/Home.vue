<template>
  <div class="home">
    <h2>{{titleH2}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  data() {
    return {
      titleH2: '123',
    };
  },
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
