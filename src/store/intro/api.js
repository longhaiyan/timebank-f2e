
import {env} from '@/utils/config'

const api = {
  dev: {
    'taskInfo':'/data?name=task_intro',
    'accept':'/data?name=mirror',
    'warn':'/data?name=mirror',
  },
  pro: {
    'taskInfo':'/task/info/data',
    'accept':'',
    'warn':'',

  }
}
export default api[env]
