<template>
  <div class="main">
    <v-card>
      <div class="d-flex justify-space-between div-margin">
        <div>
          <v-btn @click="addUser" color="secondary">
            <v-icon left>mdi-account-plus-outline</v-icon>Add User
          </v-btn>
        </div>
        <div class="search-component">
          <v-select
            :items="selectItems"
            label="Filter"
            solo
            dense
            class="select-size"
            v-model="filterKey"
            clearable
          ></v-select>&nbsp;&nbsp;
          <v-text-field
            label="Search"
            solo
            dense
            class="search-text-size"
            v-model="filterValue"
            append-icon="mdi-magnify"
            clearable
            v-on:keyup.enter="enter"
          ></v-text-field>
        </div>
        <div>
          <span
            v-show="false"
          >page_sum: {{pageSum}} , page_index: {{pageIndex}} , page_num: {{pageNum}} ,</span>&nbsp;
          <span class="body-2">{{countStart}} - {{countEnd}},&nbsp; total: {{total}}</span>
          &nbsp;
          <v-btn icon @click="lastPage" :disabled="lastPageDisabled">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>&nbsp;
          <v-btn icon @click="nextPage" :disabled="nextPageDisabled">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
    <div v-if="users.length > 0">
      <v-card>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>user_id</th>
                <th>username</th>
                <th>avatar</th>
                <th>nickname</th>
                <th>email</th>
                <th>created_at</th>
                <th>options</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, key) in users" :key="key">
                <td class="text-align-left">{{ val.user_id }}</td>
                <td class="text-align-left">{{ val.username }}</td>
                <td class="text-center">
                  <v-avatar size="36" v-if="val.avatar">
                    <img :src="`${publicPath}` + val.avatar" alt="avatar" />
                  </v-avatar>
                  <v-avatar size="36" v-else>
                    <img src="../assets/img/avatar.png" alt="avatar" />
                  </v-avatar>
                </td>
                <td class="text-align-left">{{ val.nickname }}</td>
                <td class="text-align-left">{{ val.email }}</td>
                <td class="text-align-left">{{ val.created_at }}</td>
                <td class="text-align-left">
                  <v-btn text icon @click="editUser(val)">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>&nbsp;
                  <v-btn text icon @click="deconsteClick(val)">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </div>
    <div v-else class="nothing">
      <div class="margin-20">
        <v-icon color="#dbdbdb" size="100">mdi-account-outline</v-icon>
      </div>No user data, you can create a user.
    </div>

    <v-dialog v-model="dialog" max-width="450">
      <v-card>
        <v-card-title class="headline">Tips</v-card-title>
        <v-card-text class="subtitle-1 text-align-left">Are you sure you want to deconste the user?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">cancel</v-btn>
          <v-btn color="red" text @click="deconsteUser()">sure</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogUser"
      width="500px"
      persistent
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="secondary">
          <v-btn icon dark @click="closeDialogUser">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{dialogUserTitle}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-toolbar-items>
            <v-btn dark text @click="save">save</v-btn>
          </v-toolbar-items>-->
        </v-toolbar>
        <!-- <UserInfo ref="userComp" v-if="dialogUser" /> -->
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <!-- userinfo component -->
              <v-hover v-slot:default="{hover}">
                <v-card
                  class="mx-auto img-card text-center cursor-pointer"
                  :elevation="hover ? 6 : 2"
                >
                  <img
                    :src="userInfo.avatar"
                    alt="avatar"
                    v-if="userInfo.avatar"
                    class="img-size avatar"
                    @click="changeFile()"
                  />
                  <img
                    v-else
                    src="../assets/img/avatar.png"
                    alt="avatar"
                    class="img-size avatar"
                    @click="changeFile()"
                  />
                </v-card>
              </v-hover>
              <div v-show="false">
                <input ref="fileInput" type="file" @change="fileChange()" accept="image/*" />
              </div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="userInfo.user_id"
                  v-show="userInfo.user_id"
                  label="编号"
                  disabled
                ></v-text-field>
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
                  :disabled="dialogUserTitle === 'Edit User'"
                ></v-text-field>
                <v-text-field
                  v-model="userInfo.password"
                  :type="showPassword ? 'text' : 'password'"
                  label="密码*"
                  :rules="passwordRules"
                  counter
                  maxlength="25"
                  required
                  :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-text-field
                  v-model="userInfo.nickname"
                  counter="25"
                  label="姓名*"
                  required
                  maxlength="50"
                  :rules="nicknameRules"
                ></v-text-field>

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

                <v-text-field
                  v-model="userInfo.created_at"
                  label="created_at"
                  v-if="userInfo.created_at"
                  disabled
                ></v-text-field>

                <v-btn
                  color="primary"
                  @click="submit"
                  class="btn-submit"
                  :disabled="btnDisabled"
                  :loading="btnLoading"
                >submit</v-btn>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserInfo from '@/components/UserInfo.vue'
import store from '@/store'

@Component({
  components: {
    UserInfo
  }
})
export default class Users extends Vue {
  private publicPath: string = process.env.BASE_URL
  private selectItems: any[] = [
    'user_id',
    'username',
    'nickname',
    'email',
    'created_at'
  ]
  private filterKey: string = ''
  private filterValue: string = ''
  private pageNum: number = 20
  private pageSum: number = 0
  private pageIndex: number = 1
  private countStart: number = 0
  private countEnd: number = 0
  private total: number = 0
  private lastPageDisabled: boolean = true
  private nextPageDisabled: boolean = true

  private users: any[] = []
  private dialogUser: boolean = false
  private dialogUserTitle: string = 'Add User'
  private dialog: boolean = false
  private userInfo: any = {}
  private file: any = null
  private nameError: boolean = false
  private nameErrorsMsg: string = ''
  private emailError: boolean = false
  private emailErrorsMsg: string = ''
  private oldInfo: any = {}
  private showPassword: boolean = false
  private emailRules: any = [
    (v: any) => !!v || 'Email is required',
    (v: any) => /.+@.+\..+/.test(v) || 'Email format is invalid'
  ]
  private valid: boolean = false
  private nameRules: any = [(v: any) => !!v || 'Username is required']
  private nicknameRules: any = [(v: any) => !!v || 'Nickname is required']
  private passwordRules: any = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Min 8 characters',
    (v: any) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
      'The password must contain at least one letter and one number'
  ]
  private btnDisabled: boolean = false
  private btnLoading: boolean = false

  private created() {
    if (this.publicPath === '/') {
      this.publicPath = ''
    } else {
      this.publicPath = '/vue-vuetify-admin'
    }
  }

  private mounted() {
    console.info('mounted')
    this.getUsers()
  }

  private checkUsername(name: string) {
    if (name) {
      this.axios({
        url: '/api/v1/get/username/' + name,
        method: 'GET'
      }).then((res: any) => {
        if (res.data.status) {
          this.nameError = false
          this.nameErrorsMsg = ''
        } else {
          this.nameError = true
          this.nameErrorsMsg = 'Username already exists'
        }
      })
    }
  }
  private checkEmail(email: string) {
    if (email !== '' && email !== this.oldInfo.email) {
      this.axios({
        url: '/api/v1/get/email/' + email,
        method: 'GET'
      }).then((res: any) => {
        if (res.data.status) {
          this.emailError = false
          this.emailErrorsMsg = ''
        } else {
          this.emailError = true
          this.emailErrorsMsg = 'Email already exists'
        }
      })
    }
  }

  private formValidate() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      return true
    } else {
      return false
    }
  }
  private async submit() {
    if (this.formValidate() && !this.nameError && !this.emailError) {
      this.btnDisabled = true
      this.btnLoading = true
      const info = JSON.parse(JSON.stringify(this.userInfo))
      let imageUrl = info.avatar
      if (this.file) {
        const res = await this.uploadFile()
        if (res) {
          imageUrl = res
        }
      }
      console.info('image url: ', imageUrl)
      info.avatar = imageUrl
      if (this.dialogUserTitle === 'Add User') {
        // add user
        this.axios({
          url: '/api/v1/users',
          method: 'POST',
          data: info
        }).then((res: any) => {
          if (res.data.status) {
            console.info('success')
            this.btnDisabled = false
            this.btnLoading = false
            this.dialogUser = false
            store.dispatch('updateShowAlert', {
              showAlert: true,
              alertMessage: 'add user success',
              alertType: 'success'
            })
            this.getUsers()
          } else {
            store.dispatch('updateShowAlert', {
              showAlert: true,
              alertMessage: 'add user error',
              alertType: 'error'
            })
          }
        })
      } else {
        // edit user
        this.axios({
          url: '/api/v1/users/' + this.userInfo.uid,
          method: 'PUT',
          data: info
        }).then((res: any) => {
          if (res.data.status) {
            this.userInfo.avatar = null
            this.getUsers()
          } else {
          }
        })
      }
    } else {
      console.error('validate false') // tslint:disable-line
    }
  }

  private async uploadFile() {
    // get upload url
    const fileName = this.file.name
    const ficonstype = this.file.type.split('/')[1]
    const result: any = await this.axios({
      url: '/api/v1/get_upload_url',
      data: {
        filename: fileName,
        upload_method: 'post'
      },
      method: 'get'
    })
      .then((res: any) => {
        return res
      })

    // post upload file
    const formData = new FormData()
    formData.append('file', this.file)
    console.info(result.data.data.url)
    await fetch(result.data.data.url, {
      method: 'POST',
      body: formData
    })
      .then((res: any) => {
        return res
      })
      .catch((err: any) => {
        // console.error('err: ', err)
        return err
      })

    return result.data.data.file_address
  }

  private formReset() {
    (this.$refs.form as Vue & { reset(): () => void }).reset()
  }

  private fileChange() {
    if ((this.$refs.fileInput as Vue & { files: () => any }).files.length > 0) {
      const fs: any = (this.$refs.fileInput as Vue & { files: () => any }).files
      this.file = fs[0]
      const reader = new FileReader()
      const self = this
      reader.readAsDataURL(this.file)
      reader.onload = (e: any) => {
        const dataBase64: any = reader.result
        self.userInfo.avatar = dataBase64
      }
    }
  }
  private changeFile() {
    (this.$refs.fileInput as Vue & { click: () => void }).click()
  }

  private getUsers() {
    const filter: object = {
      pageIndex: this.pageIndex,
      pageNum: this.pageNum,
      filterKey: this.filterKey,
      filterValue: this.filterValue
    }
    this.axios
      .get('/api/v1/users', {
        params: filter
      })
      .then((res: any) => {
        console.info(res.data)
        if (res && res.data.status && res.data.data.users.length > 0) {
          const data: any = res.data.data
          this.users = data.users
          this.pageSum = data.page_sum
          this.pageIndex = data.page_index
          this.total = data.total

          if (this.pageIndex === data.page_sum) {
            this.nextPageDisabled = true
          } else {
            if (data.page_sum > 1) {
              this.nextPageDisabled = false
            }
          }

          if (this.pageIndex === 1) {
            this.countStart = 1
            this.countEnd = 0 + this.users.length
          } else {
            this.countStart = (this.pageIndex - 1) * this.pageNum + 1
            this.countEnd = this.countStart + this.users.length - 1
          }
        }
      })
  }

  private addUser() {
    this.dialogUserTitle = 'Add User'
    this.dialogUser = true
    this.userInfo = {}
    setTimeout(() => {
      this.formReset()
    }, 50)
  }

  private enter() {
    this.pageIndex = 1
    this.getUsers()
  }

  private lastPage() {
    console.info('lastPage')
    this.pageIndex--
    if (this.pageIndex === 1) {
      this.lastPageDisabled = true
    }
    this.getUsers()
  }

  private nextPage() {
    console.info('nextPage')
    this.pageIndex++
    if (this.pageIndex === this.pageSum) {
      this.nextPageDisabled = true
    }
    this.lastPageDisabled = false
    this.getUsers()
  }

  private closeDialogUser() {
    console.info('closeDialogUser')
    this.dialogUser = false
  }

  private deconsteClick(item: object) {
    this.dialog = true
    this.userInfo = item
    console.info(item)
  }

  private deconsteUser() {
    console.info('deconsteUser')
    const userId: number = this.userInfo.user_id
    this.axios({
      url: '/api/v1/users/' + userId,
      method: 'DELETE'
    }).then((res: any) => {
      if (res.status) {
        console.info('deconste user success, id: ' + userId)
        this.dialog = false
        this.getUsers()
      } else {
        // console.error('deconste user error') // tslint:disable-line
      }
    })
  }

  private editUser(val: any) {
    console.info('eidtUser')
    console.info(val)
    console.info('i')
    this.userInfo = val
    this.dialogUserTitle = 'Edit User'
    this.dialogUser = true
  }
}
</script>

<style lang="scss" scoped>
.select-size {
  height: 40px;
  width: 80px;
}
.div-margin {
  margin: 0 0 10px 0;
  padding: 10px;
}
.search-component {
  width: 50%;
  display: flex;
}
.search-text-size {
  height: 40px;
  width: 60%;
}
.user-font {
  color: red;
  background-color: #ffdbdb;
}
.text-height {
  margin-top: 5px;
  height: 40px;
}
.img-card {
  width: 100px;
  height: 100px;
  border-radius: 50% !important;
}
.img-size {
  width: 100px;
  height: 100px;
  border-radius: 50% !important;
}

// .img-size:hover {
//   transform: rotate(666turn);
//   transition-delay: 1s;
//   transition-property: all;
//   transition-duration: 59s;
//   transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
// }

.btn-submit {
  width: 100%;
  margin-top: 10px;
}
</style>
