import Mock from 'mockjs'
const Random = Mock.Random

Mock.setup({
  timeout: '100-500'
})

// avatar img
const avatarData: string = Random.image('200x200', '#ecc247', '#fff', 'png', 'A')

// user data
const arr = Mock.mock({
  'array|3-120': [{
    user_id: '@natural(1, 999)',
    username: '@word',
    avatar: avatarData,
    email: '12345678@qq.com',
    permission: '@natural(1, 4)',
    permission_name: '普通用户_' + '@word',
    created_at: '@datetime',
    nickname: 'nickname-' + '@word'
  }]
}).array

let usersArr = arr

// get user
Mock.mock(RegExp('/api/v1/users/profile' + '.*'), 'get', (option: any) => {
  console.info(option)
  const query = option.url.split('?')[1]
  const page = Number(getQeuryVariable(query, 'page'))
  const limit = Number(getQeuryVariable(query, 'limit'))
  console.info('limit: ', limit)

  const userId = getQeuryVariable(query, 'user_id')
  if (userId) {
    usersArr = usersArr.filter((user: any) => user.user_id.indexOf(userId) > 0)
    console.info(usersArr)
  }

  const count = usersArr.length
  console.info('count: ', count)
  let start = 0
  let end = 49
  if (page !== 1) {
    start = Number(limit * page) - Number(limit)
    end = Number(limit * page) - 1
    if (end > count) {
      end = count
    }
  } else {
    end = limit - 1
  }
  console.info('start: ', start)
  console.info('end: ', end)
  const arrList = JSON.parse(JSON.stringify(usersArr))
  const userList = arrList.splice(start, limit)
  console.info(userList)
  const n = count / limit
  const pageNum = Math.ceil(n)
  console.info('pageNum: ', pageNum)
  console.info('usersArr: ', usersArr)
  return {
    status: true,
    data: {
      users: userList,
      user_count: count,
      page_num: pageNum,
      current_page: page,
      page_limit: limit
    }
  }
})

// delete user
Mock.mock(RegExp('/api/v1/users/' + '.*'), 'delete', (option: any) => {
  console.info(option)
  const arrSplit = option.url.split('/')
  const userId = Number(arrSplit[arrSplit.length - 1])
  console.info('userid: ', userId)
  let i: number = -1
  usersArr.filter((item: any, index: number) => {
    if (item.user_id === userId) {
      console.info(index)
      i = index
      return false
    }
  })
  console.info(usersArr)
  if (i !== -1) {
    usersArr.splice(i, 1)
    console.info('usersArr splice')
    console.info(usersArr)
  } else {
    console.warn('data not found')
  }
  return { status: true }
})

Mock.mock('/api/v1/login', 'post', (option: any) => {
  console.info(option)
  return {
    status: true,
    data: {
      user_id: 1,
      username: 'admin',
      email: 'admin@xxx.com',
      avatar: '/img/avatar.png',
      nickname: 'ADMIN',
      role_id: 1,
      role_name: '管理员'
    }
  }
})


// get url query variable
function getQeuryVariable(query: string, variable: string) {
  const vars = query.split('&')
  for (const item of vars) {
    const pair: any[] = item.split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return false
}

export default Mock
