<template>
  <div>
    <v-app-bar fixed color="primary" dark>
      <v-btn icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Sign Up</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="login">LOGIN</v-btn>
    </v-app-bar>
    <div class="text-align-center margin-top-80">
      <v-avatar size="100" class="cursor-pointer" v-ripple>
        <img src="../assets/img/avatar.png" alt="avatar" class="avatar" />
      </v-avatar>
    </div>
    <div class="d-flex justify-center">
      <v-form ref="form" v-model="valid" class="form">
        <v-text-field
          v-model="name"
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
          label="Confirm password"
          hint="At least 8 characters"
          maxlength="25"
          :counter="25"
          @click:append="showConfirmPassword = !showConfirmPassword"
        ></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="Email" required maxlength="50"></v-text-field>
        <v-text-field v-model="nickName" :counter="25" maxlength="25" label="Nickname"></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>-->

        <v-btn color="primary" @click="submit">Submit</v-btn>
      </v-form>
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
  private nickName: string = ''
  private password: string = ''
  private passwordRules: any = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Min 8 characters'
  ]
  private confirmPassword: string = ''
  private confirmPasswordRules: any = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Min 8 characters'
  ]
  private showPassword: boolean = false
  private showConfirmPassword: boolean = false
  private valid: boolean = true
  private name: string = ''
  private nameRules: any = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters'
  ]
  private email: string = ''
  private emailRules: any = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+\..|/.test(v) || 'E-mail must be valid'
  ]
  private checkbox: boolean = false

  private back() {
    this.$router.go(-1)
  }

  private login() {
    this.$router.push('login')
  }

  private submit() {
    console.info(this.$refs.form)
    // tslint:disable-next-line
    // if (this.$refs.form.validate()) {
    //   console.info('submit form')
    // } else {
    //   console.info('f')
    // }
  }

  private validate() {
    // this.$refs.form.validate() // tslint:disabled-line
  }

  private reset() {
    // this.$refs.form.reset() // tslint:disable-line
  }

  private resetValidation() {
    // this.$refs.form.resetValidation()
  }
}
</script>
<style lang="scss" scoped>
.margin-top-80 {
  margin-top: 80px;
}

.form {
  width: 30%;
  min-width: 320px;
}

.img-container {
  position: relative;
  height: 150px;
}

.vue-logo {
  width: 60px;
  position: absolute;
  left: calc(50% - 6px);
  top: 96px;
}

.vuetify-logo {
  width: 100px;
  position: absolute;
  left: calc(50% - 64px);
  top: 40px;
}

.avatar:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}
</style>