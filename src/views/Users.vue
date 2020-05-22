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
                    <img :src="val.avatar" alt="avatar" />
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
          <v-toolbar-items>
            <v-btn dark text @click="save">save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- <UserInfo ref="userComp" v-if="dialogUser" /> -->
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <!-- userinfo component -->
              <v-hover v-slot:default="{hover}">
                <v-card class="mx-auto img-card text-center" v-if="userInfo.avatar" :elevation="hover ? 6 : 2">
                  <img :src="userInfo.avatar" alt="avatar" class="img-size" @click="changeFile()" />
                </v-card>
                <v-card class="mx-auto img-card text-center" v-else :elevation="hover ? 6 : 2">
                  <img
                    src="../assets/img/avatar.png"
                    alt="avatar"
                    class="img-size"
                    @click="changeFile()"
                  />
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

                <v-text-field
                  v-model="userInfo.phone"
                  counter="11"
                  label="电话"
                  required
                  maxlength="11"
                  @blur="checkPhone(userInfo.phone)"
                  :error="phoneError"
                  :messages="phoneErrorsMsg"
                ></v-text-field>

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
@Component({
  components: {
    UserInfo
  }
})
export default class Users extends Vue {
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
  private phoneError: boolean = false
  private phoneErrorsMsg: string = ''
  private oldInfo: any = {}
  private itemsPermission: any = [
    { text: '管理员', value: 1 },
    { text: '后台用户', value: 2 }
  ]
  private genders: any = ['男', '女', '保密']
  private editStatus: number = 0
  private emailRules: any = [
    (v: any) => !!v || '邮箱不能为空',
    (v: any) => /.+@.+\..+/.test(v) || '邮箱格式不正确'
  ]
  private valid: boolean = false
  private nameRules: any = [(v: any) => !!v || '用户名不能为空']
  private nicknameRules: any = [(v: any) => !!v || '姓名不能为空']
  private passwordRules: any = [
    (v: any) => !!v || '密码不能为空',
    (v: any) => (!!v && v.length >= 8) || '密码不少于8个字符',
    (v: any) =>
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
      '密码至少包含一个字母,一个数字'
  ]
  private permissionRules: any = [(v: any) => !!v || '权限不能为空']
  private disabled: boolean = true

  private mounted() {
    console.info('mounted')
    this.getUsers()
  }

  private checkUsername(name: string) {
    if (name !== '') {
      this.axios({
        url: '/api/v1/admin/users/name/' + name,
        method: 'GET'
      }).then((res: any) => {
        if (res.data.status) {
          this.nameError = false
          this.nameErrorsMsg = ''
        } else {
          this.nameError = true
          this.nameErrorsMsg = '用户名已存在'
        }
      })
    }
  }
  private checkEmail(email: string) {
    if (email !== '' && email !== this.oldInfo.email) {
      this.axios({
        url: '/api/v1/admin/users/email/' + email,
        method: 'GET'
      }).then((res: any) => {
        if (res.data.status) {
          this.emailError = false
          this.emailErrorsMsg = ''
        } else {
          this.emailError = true
          this.emailErrorsMsg = '邮箱已存在'
        }
      })
    }
  }
  private checkPhone(phone: string) {
    if (phone !== '' && phone !== this.oldInfo.phone) {
      this.axios({
        url: '/api/v1/admin/users/phone/' + phone,
        method: 'GET'
      }).then((res: any) => {
        if (res.data.status) {
          this.phoneError = false
          this.phoneErrorsMsg = ''
        } else {
          this.phoneError = true
          this.phoneErrorsMsg = '手机号已存在'
        }
      })
    }
  }
  private getPermissions() {
    this.axios({
      url: '/api/v1/admin/permissions',
      method: 'GET'
    }).then((res: any) => {
      if (res && res.data.status && res.data.data.length > 0) {
        this.itemsPermission = res.data.data
      }
    })
  }
  private formValidate() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      return true
    } else {
      return false
    }
  }
  private async submit() {
    if (
      this.formValidate() &&
      !this.nameError &&
      !this.emailError &&
      !this.phoneError
    ) {
      const info = JSON.parse(JSON.stringify(this.userInfo))
      if (info.password === 'Aa11111111111111111111111') {
        info.password = null
      } else {
        info.password = info.password
      }
      let imageUrl = info.avatar
      if (this.file) {
        const res = await this.uploadFile()
        if (res) {
          imageUrl = res
        }
      }
      info.avatar = imageUrl
      if (this.editStatus === 1) {
        // add user
        this.axios({
          url: '/api/v1/admin/users/profile',
          method: 'POST',
          data: info
        })
          .then((res: any) => {
            if (res.data.status) {
              // this.updateDialogUser(false)
              // this.$refs.form.reset()
              this.userInfo.avatar = null
              this.getUsers()
              // this.setAlert({
              //   type: 'info',
              //   time: 3000,
              //   message: '新增成功!'
              // })
            } else {
              // this.setAlert({
              //   type: 'error',
              //   time: 3000,
              //   message: '新增失败!'
              // })
            }
          })
          .catch((err: any) => {
            // console.error(err)
            // this.setAlert({
            //   type: 'error',
            //   time: 3000,
            //   message: '网络异常!'
            // })
          })
      } else {
        // edit user
        this.axios({
          url: '/api/v1/admin/users/profile/' + this.userInfo.uid,
          method: 'PUT',
          data: info
        })
          .then((res: any) => {
            if (res.data.status) {
              // this.updateDialogUser(false)
              // this.$refs.form.reset()
              this.userInfo.avatar = null
              this.getUsers()
              // this.setAlert({
              //   type: 'info',
              //   time: 3000,
              //   message: '编辑成功!'
              // })
            } else {
              // this.setAlert({
              //   type: 'error',
              //   time: 3000,
              //   message: '编辑失败!'
              // })
            }
          })
          .catch((err: any) => {
            // console.error(err)
            // this.setAlert({
            //   type: 'error',
            //   time: 3000,
            //   message: '网络异常!'
            // })
          })
      }
    } else {
      // console.error('validate false')
    }
  }

  private async uploadFile() {
    // get upload url
    const fileName = this.file.name
    const ficonstype = this.file.type.split('/')[1]
    const result: any = await this.axios({
      url: '/api/v1/admin/avatar/' + this.userInfo.uid,
      data: {
        filename: fileName,
        file_type: ficonstype,
        upload_method: 'post'
      },
      method: 'post'
    })
      .then((res: any) => {
        return res
      })
      .catch((err: any) => {
        // console.error(err)
      })

    // post upload file
    const formData = new FormData()
    formData.append('file', this.file)
    formData.append('key', result.data.data.result.fields.key)
    formData.append(
      'x-amz-algorithm',
      result.data.data.result.fields['x-amz-algorithm']
    )
    formData.append(
      'x-amz-credential',
      result.data.data.result.fields['x-amz-credential']
    )
    formData.append('x-amz-date', result.data.data.result.fields['x-amz-date'])
    formData.append('policy', result.data.data.result.fields.policy)
    formData.append(
      'x-amz-signature',
      result.data.data.result.fields['x-amz-signature']
    )

    await fetch(result.data.data.result.url, {
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

    return result.data.data.get_url
  }
  private fileChange() {
    // if (this.$refs.fileInput.files.length > 0) {
    if ((this.$refs.fileInput as Vue & { files: () => any }).files.length > 0) {
      // this.file = this.$refs.fileInput.files[0]
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
    // this.$refs.fileInput.click()
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
    console.info('addUser')
    this.dialogUserTitle = 'Add User'
    this.dialogUser = true
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

  private editUser() {
    console.info('eidtUser')
    this.dialogUserTitle = 'Edit User'
    this.dialogUser = true
  }

  private save() {
    console.info('save')
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
  width: 80px;
  height: 80px;
}
.img-size {
  width: 100%;
}
</style>
