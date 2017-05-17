
import {env} from '@/utils/config'

const api = {
  dev: {
    'info':'/data?name=otherInfo',
    'send':'/data?name=mirror',
    'error':'/data?name=error'
  },
  pro: {
    'send':'/message/user/send/data'

  }
}
export default api[env]
