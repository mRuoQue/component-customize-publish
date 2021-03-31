import LgLink from '../src/link.vue'

export default {
  title: 'LgLink',
  component: LgLink
}

export const Link = _ => ({
  components: { LgLink },
  template: `
    <div>
      <huajay-link :disabled="true" href="http://www.baidu.com">baidu</huajay-link>
    </div>
  `
})