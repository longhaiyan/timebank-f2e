
import {env} from '@/utils/config'

const api = {
  dev: {
    'tag':'/data?name=tag'
  },
  pro: {
    'tag':'/tag/info/list',

  }
}
export default api[env]
