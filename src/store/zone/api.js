
import {env} from '@/utils/config'

const api = {
  dev: {
    'userInfo':'/data?name=otherInfo',
    'send':'/data?name=mirror',
    'error':'/data?name=error',
    'info':'/data?name=mirror',

  },
  pro: {
    'send':'/message/user/send/data',
    'userInfo':'/user/info/data',

  }
}
export default api[env]
