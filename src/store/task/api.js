
import {env} from '@/utils/config'

const api = {
  dev: {
    'newTask':'/data?name=task_list',
    'hotTask':'/data?name=mirror',
  },
  pro: {
    'newTask':'/task/index/data',
  }
}
export default api[env]
