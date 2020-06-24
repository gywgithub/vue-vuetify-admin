<template>
  <div>
    <div>
      <div class="display-3">material design icons</div>
      <a href="https://materialdesignicons.com" target="_blank">https://materialdesignicons.com</a>
    </div>
    <v-card class="my-2">
      <v-card-title>Custom Color Icons</v-card-title>
      <v-card-text>
        <v-tooltip bottom v-for="(item, k) in colorIcons" :key="k">
          <template v-slot:activator="{ on }">
            <v-icon x-large v-on="on" :color="item.color">mdi-{{item.icon}}</v-icon>
          </template>
          <span>{{item.icon}}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title>Monochrome Icons</v-card-title>
      <v-card-text>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}-box-outline</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}-box</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}-circle-outline</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}-circle</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}-box-multiple-outline</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip bottom v-for="(i, k) in numberIcons" :key="k">
            <template v-slot:activator="{ on }">
              <v-icon x-large v-on="on">mdi-{{i}}-box-multiple</v-icon>
            </template>
            <span>{{i}}</span>
          </v-tooltip>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class MaterialDesignIcons extends Vue {
  private icons: string[] = [
    'github',
    'microsoft-visual-studio-code',
    'vuejs',
    'vuetify',
    'angularjs',
    'react',
    'google-chrome',
    'firefox',
    'language-typescript',
    'webpack',
    'nodejs'
  ]
  private colorIcons: any[] = [
    {
      icon: 'github',
      color: 'primary'
    },
    {
      icon: 'microsoft-visual-studio-code',
      color: 'accent'
    },
    {
      icon: 'vuejs',
      color: 'secondary'
    },
    {
      icon: 'vuetify',
      color: 'error'
    },
    {
      icon: 'angularjs',
      color: 'warning'
    },
    {
      icon: 'react',
      color: 'info'
    },
    {
      icon: 'google-chrome',
      color: 'success'
    },
    {
      icon: 'firefox',
      color: '#777ccc'
    },
    {
      icon: 'language-typescript',
      color: '#77ccc7'
    },
    {
      icon: 'webpack',
      color: '#ccc777'
    },
    {
      icon: 'nodejs',
      color: '#cc777c'
    }
  ]
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
<style scoped lang="scss">
i {
  border: 1px solid #eee;
  margin: 10px;
  padding: 18px;
}
</style>
