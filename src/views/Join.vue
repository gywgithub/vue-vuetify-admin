<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-btn icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Sign Up</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="login">LOGIN</v-btn>
    </v-toolbar>
    <div class="text-align-center">
      <div class="img-container">
        <img src="../assets/img/logo.png" class="vue-logo" />
        <img src="../assets/img/v-alt.svg" class="vuetify-logo" />
      </div>
    </div>
    <div class="d-flex justify-center">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
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
  private select: any = null
  private items: any = ['Item1', 'Item2']
  private checkbox: boolean = false

  private back() {
    this.$router.go(-1)
  }

  private login() {
    this.$router.push('login')
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
</style>