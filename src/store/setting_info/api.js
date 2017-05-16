
import {env} from '@/utils/config'

const api = {
  dev: {
    'update':'/data?name=userInfo',
    'error':'/data?name=error'
  },
  pro: {
    'update': '/user/setting/update',
  }
}
export default api[env]
