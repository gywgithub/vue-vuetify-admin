import Mock from 'mockjs'
const Random = Mock.Random

Mock.setup({
  timeout: '100-500'
})

// user avatar
// const avatar: any = Random.image('200x200', '#ecc247', '#fff', 'png', 'A');
console.info('mock ts')
Mock.mock('/api/v1/login', 'post', (option: any) => {
  console.info(option)
  return {
    status: true,
    data: {
      user_id: 1,
      username: 'admin',
      email: 'admin@xxx.com',
      // avatar: avatar,
      nickname: 'ADMIN',
      role_id: 1,
      role_name: '管理员'
    }
  }
})

export default Mock
