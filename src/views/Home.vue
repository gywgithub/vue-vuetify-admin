<template>
  <div class="home">
    <h2>{{title}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      title: 'Home',
    };
  },
  components: {
  },
})
export default class Home extends Vue {}
</script>
