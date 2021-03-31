import LgForm from '../'
import LgFormItem from '../../formitem'
import LgInput from '../../input'
import LgButton from '../../button'

export default {
  title: 'LgForm',
  component: LgForm
}

export const Login = () => ({
  components: { LgForm, LgFormItem, LgInput, LgButton },
  template: `
    <huajay-form class="form" ref="form" :model="user" :rules="rules">
      <huajay-form-item label="用户名" prop="username">
        <!-- <huajay-input v-model="user.username"></huajay-input> -->
        <huajay-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></huajay-input>
      </huajay-form-item>
      <huajay-form-item label="密码" prop="password">
        <huajay-input type="password" v-model="user.password"></huajay-input>
      </huajay-form-item>
      <huajay-form-item>
        <huajay-button type="primary" @click="login">登 录</huajay-button>
      </huajay-form-item>
    </huajay-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
