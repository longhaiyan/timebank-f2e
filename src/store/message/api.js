
import {env} from '@/utils/config'

const api = {
  dev: {
    'update':'/data?name=mirror',
    'error':'/data?name=error',
    'systemMsg':'data?name=message_list',
    'personalMsg':'data?name=message_list',
    'massage':'data?name=message_list',
    'userMsg':'data?name=user_message'

  },
  pro: {
    'update': '/message/unlook/update',
    'systemMsg':'/message/info/data',
    'personalMsg':'/message/info/data',
    'massage':'/message/info/data',
    'userMsg':'/message/user/chat/data'
  }
}
export default api[env]
