<template>
  <div>
    <div class="display-3">material design icons</div>
    <div>https://materialdesignicons.com/</div>
    <!-- <div>
      <v-icon v-for="(i, k) in icons" :key="k">mdi-{{i}}</v-icon>
    </div> -->
    <div>
      <v-icon x-large v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}</v-icon>
    </div>
    <div>
      <v-icon v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}-box-outline</v-icon>
    </div>
    <div>
      <v-icon v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}-box</v-icon>
    </div>
    <div>
      <v-icon v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}-circle-outline</v-icon>
    </div>
    <div>
      <v-icon v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}-circle</v-icon>
    </div>
    <div>
      <v-icon v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}-box-multiple-outline</v-icon>
    </div>
    <div>
      <v-icon v-for="(i, k) in numberIcons" :key="k">mdi-{{i}}-box-multiple</v-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class MaterialDesignIcons extends Vue {
  // private icons: string[] = [
  //   'ab-testing',
  //   'account',
  //   'account-clock',
  //   'account-heart-outline',
  //   'airplane',
  //   'alien-outline'
  // ]
  private numberIcons: string[] = [
    'numeric-0',
    'numeric-1',
    'numeric-2',
    'numeric-3',
    'numeric-4',
    'numeric-5',
    'numeric-6',
    'numeric-7',
    'numeric-8',
    'numeric-9',
    'numeric-9-plus'
  ]
}
</script>
<style scoped lang="scss"></style>
