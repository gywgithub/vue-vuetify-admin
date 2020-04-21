<template>
  <div class="main">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          userinfo component
          <!-- <v-hover v-slot:default="{hover}">
            <v-card class="mx-auto img-card" v-if="userInfo.avatar" :elevation="hover ? 6 : 2">
              <img :src="userInfo.avatar" alt="avatar" class="img-size" @click="changeFile()" />
            </v-card>
            <v-card class="mx-auto img-card" v-else :elevation="hover ? 6 : 2">
              <img src="/admin/img/avatar.png" alt="avatar" class="img-size" @click="changeFile()"  />
            </v-card>
          </v-hover>
          <div v-show="false">
            <input ref="fileInput" type="file" @change="fileChange()" />
          </div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="userInfo.uid" v-show="userInfo.uid" label="编号" disabled></v-text-field>
            <v-text-field
              v-model="userInfo.username"
              counter="25"
              label="用户名*"
              required
              maxlength="25"
              @blur="checkUsername(userInfo.username)"
              :error="nameError"
              :messages="nameErrorsMsg"
              :rules="nameRules"
              :disabled="disabled"
            ></v-text-field>
            <v-text-field
              v-model="userInfo.password"
              type="password"
              label="密码*"
              :rules="passwordRules"
              counter
              maxlength="25"
              required
            ></v-text-field>

            <v-text-field
              v-model="userInfo.nickname"
              counter="25"
              label="姓名*"
              required
              maxlength="50"
              :rules="nicknameRules"
            ></v-text-field>

            <v-select
              v-model="userInfo.permission"
              :items="itemsPermission"
              label="权限*"
              :rules="permissionRules"
              required
            ></v-select>

            <v-text-field
              v-model="userInfo.email"
              :rules="emailRules"
              label="邮箱*"
              counter="50"
              maxlength="50"
              required
              @blur="checkEmail(userInfo.email)"
              :error="emailError"
              :messages="emailErrorsMsg"
            ></v-text-field>

            <v-select v-model="userInfo.gender" :items="genders" label="性别"></v-select>

            <v-text-field
              type="number"
              min="1"
              max="99"
              v-model="userInfo.age"
              counter="2"
              label="年龄"
              required
              maxlength="2"
            ></v-text-field>

            <v-text-field v-model="userInfo.phone" counter="11" label="电话" required maxlength="11" @blur="checkPhone(userInfo.phone)"
              :error="phoneError"
              :messages="phoneErrorsMsg"></v-text-field>

            <v-text-field
              v-model="userInfo.company"
              counter="50"
              label="公司名称"
              required
              maxlength="50"
            ></v-text-field>

            <v-text-field
              v-model="userInfo.company_address"
              counter="100"
              label="公司地址"
              required
              maxlength="100"
            ></v-text-field>
          </v-form> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class UserInfo extends Vue {
}
// import { mapState, mapActions } from 'vuex'
// import md5 from 'js-md5'
// export default {
//   name: 'UserInfo',
//   computed: {
//     ...mapState({
//       userInfo: state => state.user.userInfo,
//       editStatus: state => state.user.editStatus
//     })
//   },
//   data () {
//     return {
//       file: null,
//       show: false,
//       valid: true,
//       nameErrorsMsg: '',
//       nameError: false,
//       emailError: false,
//       emailErrorsMsg: '',
//       phoneError: false,
//       phoneErrorsMsg: '',
//       nameRules: [
//         v => !!v || '用户名不能为空'
//       ],
//       nicknameRules: [
//         v => !!v || '姓名不能为空'
//       ],
//       passwordRules: [
//         v => !!v || '密码不能为空',
//         v => (!!v && v.length >= 8) || '密码不少于8个字符',
//         v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || '密码至少包含一个字母,一个数字'
//       ],
//       emailRules: [
//         v => !!v || '邮箱不能为空',
//         v => /.+@.+\..+/.test(v) || '邮箱格式不正确'
//       ],
//       itemsPermission: [{ text: '管理员', value: 1 }, { text: '后台用户', value: 2 }],
//       permissionRules: [
//         v => !!v || '权限不能为空'
//       ],
//       genders: ['男', '女', '保密'],
//       disabled: true,
//       oldInfo: null
//     }
//   },
//   mounted () {
//     this.getPermissions()
//     setTimeout(() => {
//       if (!this.userInfo.uid) {
//         this.disabled = false
//       }
//     }, 500)
//     this.oldInfo = JSON.parse(JSON.stringify(this.userInfo))
//   },
//   methods: {
//     ...mapActions('user', [
//       'updateDialogUser',
//       'getUsers'
//     ]),
//     ...mapActions('alert', [
//       'setAlert'
//     ]),
//     checkUsername (name) {
//       if (name !== '') {
//         this.axios({
//           url: '/api/v1/admin/users/name/' + name,
//           method: 'GET'
//         }).then(res => {
//           if (res.data.status) {
//             this.nameError = false
//             this.nameErrorsMsg = ''
//           } else {
//             this.nameError = true
//             this.nameErrorsMsg = '用户名已存在'
//           }
//         })
//       }
//     },
//     checkEmail (email) {
//       if (email !== '' && email !== this.oldInfo.email) {
//         this.axios({
//           url: '/api/v1/admin/users/email/' + email,
//           method: 'GET'
//         }).then(res => {
//           if (res.data.status) {
//             this.emailError = false
//             this.emailErrorsMsg = ''
//           } else {
//             this.emailError = true
//             this.emailErrorsMsg = '邮箱已存在'
//           }
//         })
//       }
//     },
//     checkPhone (phone) {
//       if (phone !== '' && phone !== this.oldInfo.phone) {
//         this.axios({
//           url: '/api/v1/admin/users/phone/' + phone,
//           method: 'GET'
//         }).then(res => {
//           if (res.data.status) {
//             this.phoneError = false
//             this.phoneErrorsMsg = ''
//           } else {
//             this.phoneError = true
//             this.phoneErrorsMsg = '手机号已存在'
//           }
//         })
//       }
//     },
//     getPermissions () {
//       this.axios({
//         url: '/api/v1/admin/permissions',
//         method: 'GET'
//       }).then(res => {
//         if (res && res.data.status && res.data.data.length > 0) {
//           this.itemsPermission = res.data.data
//         }
//       })
//     },
//     formValidate () {
//       if (this.$refs.form.validate()) {
//         return true
//       } else {
//         return false
//       }
//     },
//     async submit () {
//       if (this.formValidate() && !this.nameError && !this.emailError && !this.phoneError) {
//         let info = JSON.parse(JSON.stringify(this.userInfo))
//         if (info.password === 'Aa11111111111111111111111') {
//           info.password = null
//         } else {
//           info.password = md5(info.password)
//         }
//         let imageUrl = info.avatar
//         if (this.file) {
//           let res = await this.uploadFile()
//           if (res) {
//             imageUrl = res
//           }
//         }
//         info.avatar = imageUrl
//         if (this.editStatus === 1) {
//           // add user
//           this.axios({
//             url: '/api/v1/admin/users/profile',
//             method: 'POST',
//             data: info
//           }).then(res => {
//             if (res.data.status) {
//               this.updateDialogUser(false)
//               this.$refs.form.reset()
//               this.userInfo.avatar = null
//               this.getUsers()
//               this.setAlert({
//                 type: 'info',
//                 time: 3000,
//                 message: '新增成功!'
//               })
//             } else {
//               this.setAlert({
//                 type: 'error',
//                 time: 3000,
//                 message: '新增失败!'
//               })
//             }
//           }).catch(err => {
//             console.error(err)
//             this.setAlert({
//               type: 'error',
//               time: 3000,
//               message: '网络异常!'
//             })
//           })
//         } else {
//           // edit user
//           this.axios({
//             url: '/api/v1/admin/users/profile/' + this.userInfo.uid,
//             method: 'PUT',
//             data: info
//           }).then(res => {
//             if (res.data.status) {
//               this.updateDialogUser(false)
//               this.$refs.form.reset()
//               this.userInfo.avatar = null
//               this.getUsers()
//               this.setAlert({
//                 type: 'info',
//                 time: 3000,
//                 message: '编辑成功!'
//               })
//             } else {
//               this.setAlert({
//                 type: 'error',
//                 time: 3000,
//                 message: '编辑失败!'
//               })
//             }
//           }).catch(err => {
//             console.error(err)
//             this.setAlert({
//               type: 'error',
//               time: 3000,
//               message: '网络异常!'
//             })
//           })
//         }
//       } else {
//         console.error('validate false')
//       }
//     },

//     async uploadFile () {
//       // get upload url
//       let fileName = this.file.name
//       let fileType = this.file.type.split('/')[1]
//       let result = await this.axios({
//         url: '/api/v1/admin/avatar/' + this.userInfo.uid,
//         data: {
//           filename: fileName,
//           file_type: fileType,
//           upload_method: 'post'
//         },
//         method: 'post'
//       }).then(res => {
//         return res
//       }).catch(err => {
//         console.error(err)
//       })

//       // post upload file
//       let formData = new FormData()
//       formData.append('file', this.file)
//       formData.append('key', result.data.data.result.fields.key)
//       formData.append('x-amz-algorithm', result.data.data.result.fields['x-amz-algorithm'])
//       formData.append('x-amz-credential', result.data.data.result.fields['x-amz-credential'])
//       formData.append('x-amz-date', result.data.data.result.fields['x-amz-date'])
//       formData.append('policy', result.data.data.result.fields.policy)
//       formData.append('x-amz-signature', result.data.data.result.fields['x-amz-signature'])

//       await fetch(result.data.data.result.url, {
//         method: 'POST',
//         body: formData
//       }).then((res) => {
//         return res
//       }).catch((err) => {
//         console.error('err: ', err)
//         return err
//       })

//       return result.data.data.get_url
//     },
//     fileChange () {
//       if (this.$refs.fileInput.files.length > 0) {
//         this.file = this.$refs.fileInput.files[0]
//         let reader = new FileReader()
//         let self = this
//         reader.readAsDataURL(this.file)
//         reader.onload = function (e) {
//           let dataBase64 = reader.result
//           self.userInfo.avatar = dataBase64
//         }
//       }
//     },
//     changeFile () {
//       this.$refs.fileInput.click()
//     }
//   }
// }
</script>
<style scoped lang="scss">
.main {
  padding: 20px 40px;
}

.action-container {
  text-align: right;
  margin-top: 20px;
}

.img-card {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}

.img-size {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
