<template>
  <div class="main">
    <v-card>
      <div class="d-flex justify-space-between div-margin">
        <div>
          <v-btn @click="addUser" color="secondary">
            <v-icon left>mdi-account-plus-outline</v-icon>新增用户
          </v-btn>
        </div>
        <div class="search-component">
          <v-select
            :items="selectItems"
            label="查询条件"
            solo
            dense
            class="select-size"
            v-model="filterKey"
            clearable
          ></v-select>&nbsp;&nbsp;
          <v-text-field
            label="搜索"
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
          <span v-show="false">每页 {{limit}} 条, 当前第 {{page}} 页, 共 {{pageNum}} 页</span>&nbsp;
          <span class="body-2">第 {{countStart}} - {{countEnd}} 行,&nbsp; 共 {{userCount}} 行</span>
          &nbsp;
          <v-btn icon @click="lastPage" :disabled="lastPageDisabled">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
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
              <th>编号</th>
              <th>用户名</th>
              <th>头像</th>
              <th>姓名</th>
              <th>邮箱</th>
              <th>创建时间</th>
              <th>操作</th>
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
      </div>暂无用户数据, 您可以创建一个用户
    </div>

    <v-dialog v-model="dialog" max-width="450">
      <v-card>
        <v-card-title class="headline">提示</v-card-title>
        <v-card-text class="subtitle-1 text-align-left">确定要删除用户吗? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">取消</v-btn>
          <v-btn color="red" text @click="deleteUser()">确定</v-btn>
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
            <v-btn dark text @click="save">保存</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <UserInfo ref="userComp" v-if="dialogUser" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class Users extends Vue {
  private selectItems: any[] = []
  private filterKey: string = ''
  private filterValue: string = ''
  private pageNum: number = 1

  private page: number = 1
  private limit: number = 50
  private countStart: number = 0
  private countEnd: number = 0

  private userCount: number = 0
  private lastPageDisabled: boolean = true
  private nextPageDisabled: boolean = true
  private users: any[] = []

  private dialogUser: boolean = false
  private dialogUserTitle: string = '新增用户'
  private dialog: boolean = false
  private userInfo: any = {}

  private mounted() {
    console.info('mounted')
    this.getUsers()
  }

  private getUsers() {
    const filter: object = {
      page: 1,
      limit: 50
    }
    this.axios.get('/api/v1/users/profile', {
      params: filter
    }).then((res: any) => {
      if (res && res.data.status && res.data.data.users.length > 0) {
        this.users = res.data.data.users
      }
    })
  }

  private addUser() {
    console.info('addUser')
  }
  private enter() {
    console.info('enter')
  }

  private lastPage() {
    console.info('lastPage')
  }

  private nextPage() {
    console.info('nextPage')
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
