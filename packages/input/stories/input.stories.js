import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<huajay-input v-model="value"></huajay-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<huajay-input type="password" v-model="value"></huajay-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
