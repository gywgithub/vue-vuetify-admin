<template>
  <div class="home">
    <v-app>
      <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app width="280">
        <v-divider></v-divider>
        <v-list>
          <v-list-group
            v-for="(item, key) in items"
            :key="key"
            v-model="item.active"
            :append-icon="item.appendIcon"
            @click="itemClick(item,key)"
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item-group v-if="item.children" color="primary" v-model="subItemActive">
              <v-list-item
                v-for="(subItem, k) in item.children"
                :key="k"
                @click="subItemClick(subItem, k)"
              >
                <v-list-item-icon></v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span class="hidden-sm-and-down">Vue Vuetify Admin</span>
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="changeTheme">
          <v-icon v-if="!dark">mdi-brightness-7</v-icon>
          <v-icon v-else>mdi-brightness-4</v-icon>
        </v-btn>
        <v-btn icon @click="openTab">
          <v-icon size="28">mdi-github</v-icon>
        </v-btn>
        <v-btn icon @click="dialog = true">
          <v-icon size="28">mdi-information-outline</v-icon>
        </v-btn>
        <v-menu transition="slide-x-transition" bottom right offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-avatar size="32">
                <img :src="`${publicPath}` + userInfo.avatar" :alt="userInfo.nickname" />
              </v-avatar>
            </v-btn>
          </template>

          <v-list class="user-list" flat>
            <v-list-item-group color="primary">
              <v-list-item @click="usernameClick(userInfo)">
                <v-list-item-action>
                  <v-icon>mdi-account-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{userInfo.username}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click.stop="modalDialog = true">
                <v-list-item-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>sign out</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title primary-title>Vue Vuetify Admin</v-card-title>
          <v-card-text>Version: v{{version}}</v-card-text>
          <v-card-text>Author: YuanWei Guo</v-card-text>
          <v-card-text>Email: qingyi_w@outlook.com</v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="modalDialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Tips</v-card-title>
          <v-card-text class="subtitle-1 text-align-left">Are you sure you want to log out?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="modalDialog = false">cannel</v-btn>
            <v-btn color="error" text @click="logout">sure</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import jsonConfig from '../../package.json'

@Component({
  components: {}
})
export default class Home extends Vue {
  private publicPath: string = process.env.BASE_URL
  private version: string = '0.1.0'
  private dialog: boolean = false
  private modalDialog: boolean = false
  private dark: boolean = false
  private drawer: any = null

  private itemActive: number = 0
  private subItemActive: number = 0
  private items: any[] = [
    {
      icon: 'mdi-alpha-i-box-outline',
      title: 'Introduction',
      path: '/home/introduction',
      appendIcon: null,
      active: true
    },
    {
      icon: 'mdi-alpha-u-box-outline',
      title: 'Users',
      path: '/home/users',
      appendIcon: null
    },
    {
      icon: 'mdi-alpha-b-box-outline',
      title: 'Basic',
      children: [{ title: 'HelloWorld', path: '/basic' }],
      appendIcon: 'mdi-chevron-down'
    }
  ]
  private userInfo: any = {
    username: 'username',
    avatar: '/img/avatar.png'
  }

  private created() {
    if (this.publicPath === '/') {
      this.publicPath = ''
    } else {
      this.publicPath = '/vue-vuetify-admin'
    }
    this.version = jsonConfig.version
    if (
      localStorage.getItem('themeDark') &&
      localStorage.getItem('themeDark') === 'true'
    ) {
      this.$vuetify.theme.dark = true
      this.dark = true
    }
    if (this.$route.path === '/home') {
      this.$router.push('/home/introduction').catch(err => {}) // tslint:disable-line
    } else {
      this.$router.push(this.$route.path).catch(err => {}) // tslint:disable-line

      if (sessionStorage.getItem('itemActive')) {
        this.items[0].active = false
        this.items[Number(sessionStorage.getItem('itemActive'))].active = true
      }

      if (sessionStorage.getItem('subItemActive')) {
        this.subItemActive = Number(sessionStorage.getItem('subItemActive'))
      }
    }
  }

  private mounted() {
    if (
      sessionStorage.getItem('userInfo') &&
      sessionStorage.getItem('userInfo') !== ''
    ) {
      this.userInfo = JSON.parse(String(sessionStorage.getItem('userInfo')))
    }
  }

  private beforeDestroy() {
    sessionStorage.removeItem('subItemActive')
    sessionStorage.removeItem('itemActive')
  }

  private openTab() {
    window.open('https://github.com/gywgithub/vue-vuetify-admin', '_blank')
  }

  private usernameClick() {
    console.info('')
  }

  private itemClick(item: any, key: string) {
    this.subItemActive = -1
    sessionStorage.setItem('itemActive', key)
    if (item.path !== '') {
      this.$router.push(item.path)
    }
  }

  private subItemClick(item: any, key: string) {
    sessionStorage.setItem('subItemActive', key)
    this.$router.push(item.path).catch(err => {}) // tslint:disable-line
  }

  private goHome() {
    this.$router.push('/Home').catch(err => {}) // tslint:disable-line
  }

  private changeTheme() {
    this.dark = !this.dark
    localStorage.setItem('themeDark', String(this.dark))
    this.$vuetify.theme.dark = this.dark
  }

  private logout() {
    sessionStorage.clear()
    localStorage.clear()
    this.$router.push({ path: '/login'})
  }
}
</script>
<style lang="scss" scoped>
.img-container {
  display: flex;
  padding: 40px 20px;
}

.logo-img {
  width: 45%;
  object-fit: contain;
  margin: 0 5px;
}

.img-d3-padding {
  padding: 4px !important;
}
</style>
