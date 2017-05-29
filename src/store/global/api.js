/**
 * Created by longhaiyan on 17/3/30.
 */
import {env} from '@/utils/config'

const api = {
  dev: {
    'login': '/data?name=userInfo',
    'register': '/data?name=userInfo',
    'error': '/data?name=error',
    // 'getCode': 'data?name=get_check_code',
    'publish': 'data?name=mirror',
    'topicPublish': 'data?name=mirror',
    'baseInfo': 'data?name=userInfo',
    'unread': 'data?name=unread',
    'loginOut':'/data?name=mirror',
    'account':'/data?name=account'
  },
  pro: {
    'login': '/user/login/data',
    'register': '/user/register/data',
    'baseInfo': '/user/info/data',
    'unread':'/message/unlook/count',
    'publish':'/task/publish/data',
    'loginOut': '/user/logout/data',
    'account': '/account/info/data',

  }
}
export default api[env]
