<template>
  <div @keyup.enter="submit">
    <v-app-bar fixed color="primary" dark>
      <v-btn icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Sign Up</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="login">LOGIN</v-btn>
    </v-app-bar>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-form ref="form" v-model="valid" class="text-align-center margin-top-80">
            <v-avatar size="100" class="cursor-pointer" v-ripple>
              <img :src="`${publicPath}` + avatar" alt="avatar" class="avatar" />
            </v-avatar>
            <v-text-field
              v-model="username"
              :counter="25"
              maxlength="25"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              hint="At least 8 characters"
              maxlength="25"
              :counter="25"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="confirmPasswordRules"
              :type="showConfirmPassword ? 'text' : 'password'"
              :error="confirmError"
              :error-messages="confirmErrorMessage"
              label="Confirm password"
              hint="At least 8 characters"
              maxlength="25"
              :counter="25"
              @click:append="showConfirmPassword = !showConfirmPassword"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              maxlength="50"
            ></v-text-field>
            <v-text-field v-model="nickName" :counter="25" maxlength="25" label="Nickname"></v-text-field>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
            <v-btn
              color="primary"
              @click="submit"
              class="btn-submit"
              :disabled="btnDisabled"
              :loading="btnLoading"
            >Submit</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" persistent width="400">
      <v-card>
        <v-card-title class="headline">Tips</v-card-title>
        <v-card-text>
          <span class="light-blue--text subtitle-1">Successfully registered.</span> Automatically jump to the login page after
          <span class="blue--text subtitle-1">{{num}}s</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="login">Go Sign In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SignUp extends Vue {
  private publicPath: string = process.env.BASE_URL
  private username: string = ''
  private nickName: string = ''
  private avatar: string = 'img/avatar.png'
  private password: string = ''
  private passwordRules: any = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Min 8 characters'
  ]
  private confirmPassword: string = ''
  private confirmPasswordRules: any = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Min 8 characters',
    (v: any) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
      'The password must contain at least one letter and one number'
  ]
  private confirmError: boolean = false
  private confirmErrorMessage: string = ''
  private showPassword: boolean = false
  private showConfirmPassword: boolean = false
  private valid: boolean = true
  private nameRules: any = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length <= 25) || 'Name must be less than 25 characters'
  ]
  private email: string = ''
  private emailRules: any = [
    (v: any) => !!v || 'Email is required',
    (v: any) => /.+@.+\..+/.test(v) || 'Email format is invalid'
  ]
  private checkbox: boolean = false
  private dialog: boolean = false
  private num: number = 4
  private setIntervalId: number = 0
  private btnDisabled: boolean = false
  private btnLoading: boolean = false

  private beforeDestroy() {
    if (this.setIntervalId !== 0) {
      clearInterval(this.setIntervalId)
    }
  }

  private back() {
    this.$router.go(-1)
  }

  private login() {
    this.$router.push('login')
  }

  private submit() {
    console.info(this.$refs.form)
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      if (this.password === this.confirmPassword) {
        this.btnDisabled = true
        this.btnLoading = true

        this.confirmErrorMessage = ''
        this.confirmError = false
        console.info('submit form')
        let obj: object = {}
        obj = {
          username: this.username,
          password: this.password,
          email: this.email,
          nickname: this.nickName,
          avatar: this.avatar
        }

        this.axios({
          method: 'POST',
          url: '/api/v1/users',
          data: obj
        }).then((res: any) => {
          console.info(res)
          if (res.status) {
            console.info('success')
            this.dialog = true
            this.setIntervalId = setInterval(() => {
              this.num--
              if (this.num === 0) {
                this.login()
              }
            }, 1000)
          } else {
            console.warn('network exception')
          }
          this.btnDisabled = false
        })
      } else {
        this.confirmError = true
        this.confirmErrorMessage = 'Two password entries are inconsistent'
      }
    } else {
      console.info('validate false')
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-top-80 {
  margin-top: 80px;
}

.btn-submit {
  width: 100%;
  margin-top: 10px;
}
</style>