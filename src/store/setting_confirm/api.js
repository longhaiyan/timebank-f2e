
import {env} from '@/utils/config'

const api = {
  dev: {
    'confirm': '/data?name=userInfo',
    'error':'/data?name=error'
  },
  pro: {
    'confirm': 'user/auth/data',
  }
}
export default api[env]
