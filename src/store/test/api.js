
import {env} from '@/utils/config'

const api = {
  dev: {
    'login': '/data?name=userInfo',
    'register': '/data?name=userInfo',
    'error': '/data?name=error',
    'getCode': 'data?name=get_check_code',
    'publish': 'data?name=mirror',
    'topicPublish': 'data?name=mirror',
  },
  pro: {
    'login': '/user/login/data',
    'register': '/user/register/data',
  }
}
export default api[env]
