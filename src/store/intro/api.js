
import {env} from '@/utils/config'

const api = {
  dev: {
    'taskInfo':'/data?name=task_intro',
    'take':'/data?name=mirror',
    'warn':'/data?name=mirror',
  },
  pro: {
    'taskInfo':'/task/info/data',
    'take':'/task/finish/take/order/data',
    'warn':'',

  }
}
export default api[env]
