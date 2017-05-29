
import {env} from '@/utils/config'

const api = {
  dev: {
    'userInfo':'/data?name=otherInfo',
    'send':'/data?name=mirror',
    'error':'/data?name=error',
    'info':'/data?name=mirror',
    'mine':'/data?name=zone_mine',
    'mineUpdate':'/data?name=mirror',
    'otherUpdate':'/data?name=mirror',


  },
  pro: {
    'send':'/message/user/send/data',
    'userInfo':'/user/info/data',
    'mine':'/task/user/list/data',
    'mineUpdate':'/task/finish/done/update/data',
    'otherUpdate':'/task/info/update/data'

  }
}
export default api[env]
