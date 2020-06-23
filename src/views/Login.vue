<template>
  <div class="main" v-on:keyup.enter="signIn">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="z-index-2">
            <LogoImage />
            <v-card-text class="card-text-padding">
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="username"
                  :rules="[rules.username.required]"
                  counter
                  maxlength="25"
                  hint
                  label="username"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="[rules.password.required, rules.password.min]"
                  type="password"
                  name="password"
                  label="password"
                  maxlength="25"
                  counter
                ></v-text-field>
                <v-alert
                  type="error"
                  outlined
                  dense
                  close-text="Close Alert"
                  dismissible
                  v-show="showMessage"
                  v-model="showMessage"
                  class="alert-container"
                >{{message}}</v-alert>
                <v-checkbox dense v-model="checkbox" label="remember me"></v-checkbox>
                <v-btn
                  color="secondary"
                  @click="signIn"
                  class="submit-button"
                  :disabled="btnDisabled"
                  :loading="btnLoading"
                >&nbsp;&nbsp;&nbsp;&nbsp;SignIn&nbsp;&nbsp;&nbsp;&nbsp;</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions class="card-actions-padding">
              <v-btn icon color="primary" title="wechat sign in" @click="wechartSignIn">
                <v-icon>mdi-wechat</v-icon>
              </v-btn>
              <v-btn icon color="primary" title="github sign in" @click="githubSignIn">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <!-- <v-icon color="primary">mdi-sina-weibo</v-icon> -->
              <!-- <v-icon color="primary">mdi-facebook</v-icon> -->
              <!-- <v-icon color="primary">mdi-twitter</v-icon> -->
              <!-- <v-icon color="primary">mdi-qqchat</v-icon> -->
              <v-spacer></v-spacer>
              <v-btn icon color="primary" title="sign up" @click="signUp">
                <v-icon>mdi-account-plus-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="svg-container" v-if="!dark">
      <svg
        jsname="BUfzDd"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 810"
        preserveAspectRatio="xMinYMin slice"
        aria-hidden="true"
      >
        <path
          fill="#efefee"
          d="M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"
        />
        <path
          fill="#f4f4f4"
          d="M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"
        />
        <path
          fill="#f7f7f7"
          d="M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"
        />
        <path
          fill="#fbfbfc"
          d="M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"
        />
        <path
          fill="#ebebec"
          d="M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"
        />
        <path
          fill="#e1e1e1"
          d="M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"
        />
        <path
          fill="#e7e7e7"
          d="M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"
        />
      </svg>
    </div>
    <div class="svg-container" v-else></div>
    <div class="text-center">
      <v-btn dark color="secondary" fixed bottom right fab @click="sheet = !sheet">
        <v-icon>mdi-chat-alert-outline</v-icon>
      </v-btn>
      <v-bottom-sheet v-model="sheet">
        <v-sheet height="220px" class="text-center">
          <div class="py-3 text-left" style="padding:20px;">
            <div class="body-1">DEFAULT USER</div>
            <div>
              username:
              <span class="subtitle-2 red--text text--lighten-1">admin</span>
            </div>
            <div>
              password:
              <span class="subtitle-2 red--text text--lighten-1">admin123</span>
            </div>
            <div class="body-1">OR</div>You can register a new user
          </div>
          <v-btn class="mt-6" text color="red" @click="sheet = !sheet">close</v-btn>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'
import LogoImage from '@/components/LogoImage.vue'

@Component({
  components: {
    LogoImage
  }
})
export default class SignIn extends Vue {
  private username: string = ''
  private dark: boolean = false
  private password: string = ''
  private valid: boolean = true
  private checkbox: boolean = false
  private message: string = 'Wrong user name or password'
  private showMessage: boolean = false
  private rules: object = {
    username: {
      required: (value: any) => !!value || 'Username cannot be empty'
    },
    password: {
      required: (value: any) => !!value || 'Password cannot be empty',
      min: (v: any) => v.length >= 8 || 'Password at least 8 characters'
    }
  }
  private btnDisabled: boolean = false
  private btnLoading: boolean = false
  private sheet: boolean = false

  private mounted(): void {
    if (sessionStorage.getItem('sheetFlag') !== '1') {
      this.sheet = true
      sessionStorage.setItem('sheetFlag', '1')
      setTimeout(() => {
        this.sheet = false
      }, 3000)
    }
  }

  private created(): void {
    if (localStorage.getItem('userInfo')) {
      store.dispatch('updateShowAlert', {
        showAlert: true,
        alertMessage: 'Auto login success',
        alertType: 'success'
      })
      console.info(localStorage.getItem('userInfo'))
      sessionStorage.setItem('userInfo', localStorage.getItem('userInfo') as string)
      this.$router.push('home')
    }
  }

  private signIn(): void {
    console.info('signIn')
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      console.info('validate true')
      this.btnDisabled = true
      this.btnLoading = true
      this.axios({
        url: '/api/v1/login',
        method: 'POST',
        data: {
          username: this.username,
          password: this.password
        }
      }).then((res: any) => {
        console.info(res)
        if (res.data.status === true) {
          this.showMessage = false
          const userInfo = res.data.data
          console.info(userInfo)
          if (this.checkbox) {
            localStorage.setItem('userInfo', userInfo)
          }
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
          store.dispatch('updateShowAlert', {
            showAlert: true,
            alertMessage: 'Login success',
            alertType: 'success'
          })
          this.$router.push('home')
        } else {
          console.warn('username or password incorrect')
          this.showMessage = true
        }
      })
    } else {
      console.info('validate false')
    }
  }
  private wechartSignIn() {
    console.info('wechart signin')
    store.dispatch('updateShowAlert', {
      showAlert: true,
      alertMessage: 'The function is temporarily not supported',
      alertType: 'info'
    })
  }
  private githubSignIn() {
    console.info('github sign in')
    store.dispatch('updateShowAlert', {
      showAlert: true,
      alertMessage: 'The function is temporarily not supported',
      alertType: 'info'
    })
  }
  private signUp() {
    console.info('signup')
    this.$router.push('join')
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
}

.card-actions-padding {
  padding: 20px 40px 30px 40px;
}

.submit-button {
  font-size: 1.1em;
  width: 100%;
}

.card-text-padding {
  padding: 20px 40px;
}

.alert-container {
  margin-top: 10px;
  text-align: left;
}

.z-index-2 {
  z-index: 2;
}

.svg-container {
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.svg-container svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
