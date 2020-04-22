<template>
  <div class="main" v-on:keyup.enter="signIn">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-10 z-index-2 card-width">
            <div class="img-container">
              <img src="../assets/img/logo.png" class="vue-logo" />
              <img src="../assets/img/v-alt.svg" class="vuetify-logo" />
            </div>
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
                >&nbsp;&nbsp;&nbsp;&nbsp;SignIn&nbsp;&nbsp;&nbsp;&nbsp;</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions class="card-actions-padding">
              <v-btn icon color="primary" title="sign in">
                <v-icon>mdi-wechat</v-icon>
              </v-btn>
              <v-btn icon color="primary" title="sign in">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SignIn extends Vue {
  private username: string = ''
  private dark: boolean = false
  private password: string = ''
  private valid: boolean = true
  private checkbox: boolean = false
  private message: string = 'Wrong user name or password.'
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
  private signIn(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean}).validate()) {
      console.info('validate true')
      this.axios.post('/api/v1/login').then((res: object) => {
        console.info(res)
        this.$router.push('home')
      })
    } else {
      console.info('validate false')
    }
  }
  private wechartSignIn() {
    console.info('wechart signin')
  }
  private githubSignIn() {
    console.info('github sign in')
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

.card-width {
  max-width: 480px;
  margin: auto;
}
</style>

