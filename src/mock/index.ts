import Mock from 'mockjs'
const Random = Mock.Random

Mock.setup({
  timeout: '500-2000'
})

// file server url
const fileServerUrl: string = 'http://127.0.0.1:3000'

// avatar img
const avatarData: string = Random.image('200x200', '#ecc247', '#fff', 'png', 'A')

// user data
const arr = Mock.mock({
  'array|10-120': [{
    user_id: '@natural(1, 999)',
    username: '@word',
    avatar: avatarData,
    email: '@word' + '@qq.com',
    password: '12345678a',
    created_at: '@datetime',
    nickname: 'nickname-' + '@word'
  }]
}).array

const usersArr: any = arr

usersArr.unshift({
  user_id: 1,
  username: 'admin',
  password: 'Admin_123',
  email: 'admin@qq.com',
  avatar: '/img/avatar.png',
  nickname: 'ADMIN',
  created_at: Mock.mock('@now')
})

// get upload url
Mock.mock('/api/v1/get_upload_url', 'get', (option: any) => {
  const filename = JSON.parse(option.body).filename
  return {
    status: true,
    data: {
      url: fileServerUrl + '/file_upload',
      file_address: fileServerUrl + '/images/' + filename
    }
  }
})

// get username
Mock.mock(RegExp('/api/v1/get/username' + '.*'), 'get', (option: any) => {
  const arrSplit = option.url.split('/')
  const username = arrSplit[arrSplit.length - 1]
  const filterArr = usersArr.filter((u: any) => u.username === username)
  if (filterArr.length > 0) {
    return {
      status: false
    }
  } else {
    return {
      status: true
    }
  }
})

// get email
Mock.mock(RegExp('/api/v1/get/email' + '.*'), 'get', (option: any) => {
  const arrSplit = option.url.split('/')
  const email = arrSplit[arrSplit.length - 1]
  const filterArr = usersArr.filter((u: any) => u.email === email)
  if (filterArr.length > 0) {
    return {
      status: false
    }
  } else {
    return {
      status: true
    }
  }
})

// get user
Mock.mock(RegExp('/api/v1/users' + '.*'), 'get', (option: any) => {
  const query = option.url.split('?')[1]
  const pageIndex = Number(getQeuryVariable(query, 'pageIndex'))
  const pageNum = Number(getQeuryVariable(query, 'pageNum'))
  const filterKey = getQeuryVariable(query, 'filterKey')
  const filterValue = getQeuryVariable(query, 'filterValue')

  let dataList = []
  if (filterKey && filterValue) {
    dataList = usersArr.filter((user: any) => user[filterKey].toString().indexOf(filterValue) !== -1)
  } else {
    dataList = usersArr
  }

  const count = dataList.length
  let start = 0
  if (pageIndex !== 1) {
    start = Number(pageNum * pageIndex) - Number(pageNum)
  }

  const userList = JSON.parse(JSON.stringify(dataList)).splice(start, pageNum)
  const n = count / pageNum
  const pageSum = Math.ceil(n)
  return {
    status: true,
    data: {
      users: userList,
      page_sum: pageSum,
      page_index: pageIndex,
      total: count
    }
  }
})

// delete user
Mock.mock(RegExp('/api/v1/users/' + '.*'), 'delete', (option: any) => {
  const arrSplit = option.url.split('/')
  const userId = Number(arrSplit[arrSplit.length - 1])
  let i: number = -1
  usersArr.filter((item: any, index: number) => {
    if (item.user_id === userId) {
      i = index
      return false
    }
  })
  if (i !== -1) {
    usersArr.splice(i, 1)
  } else {
    console.warn('data not found')
  }
  return { status: true }
})

// add user
Mock.mock('/api/v1/users', 'post', (option: any) => {
  const id: number = Random.natural(10000, 9999999)
  let obj: any = {}
  obj = JSON.parse(option.body)
  obj.user_id = id
  obj.created_at = Mock.mock('@now')
  usersArr.unshift(obj)
  return { status: true, data: obj }
})

// edit user
Mock.mock('/api/v1/users', 'put', (option: any) => {
  let obj: any = {}
  obj = JSON.parse(option.body)
  const userId = obj.user_id
  const userInfo = obj.user_info
  let userIndex: number = -1
  usersArr.forEach((v: any, k: number) => {
    if (v.user_id === userId) {
      userIndex = k
    }
  })
  usersArr.splice(userIndex, 1, userInfo)
  return { status: true }
})

Mock.mock('/api/v1/login', 'post', (option: any) => {
  const obj: any = JSON.parse(option.body)
  let userIndex: number = -1
  usersArr.forEach((item: any, index: number) => {
    if (item.username === obj.username) {
      userIndex = index
      return false
    }
  })
  if (usersArr[userIndex].password === obj.password) {
    return {
      status: true,
      data: usersArr[userIndex]
    }
  } else {
    return { status: false }
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
