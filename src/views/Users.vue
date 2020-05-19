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
          <span v-show="false">page_sum: {{pageSum}} , page_index: {{pageIndex}} , page_num: {{pageNum}} ,</span>&nbsp;
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
              <td class="text-align-left">
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
                <v-btn text icon @click="deleteClick(val)">
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
        <v-card-text class="subtitle-1 text-align-left">Are you sure you want to delete the user? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">cancel</v-btn>
          <v-btn color="red" text @click="deleteUser()">sure</v-btn>
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
        <UserInfo ref="userComp" v-if="dialogUser" />
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
  private selectItems: any[] = []
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

  private mounted() {
    console.info('mounted')
    this.getUsers()
  }

  private getUsers() {
    const filter: object = {
      pageIndex: this.pageIndex,
      pageNum: this.pageNum
    }
    this.axios.get('/api/v1/users', {
      params: filter
    }).then((res: any) => {
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
    this.dialogUser = true
  }

  private enter() {
    console.info('enter')
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
  }

  private deleteClick(item: object) {
    this.dialog = true
    this.userInfo = item
    console.info(item)
  }

  private deleteUser() {
    console.info('deleteUser')
    const userId: number = this.userInfo.user_id
    this.axios({
      url: '/api/v1/users/' + userId,
      method: 'DELETE'
    }).then((res: any) => {
      if (res.status) {
        console.info('delete user success, id: ' + userId)
        this.dialog = false
        this.getUsers()
      } else {
        console.error('delete user error') // tslint:disable-line
      }
    })
  }

  private editUser() {
    console.info('eidtUser')
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
</style>
