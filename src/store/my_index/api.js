/**
 * Created by longhaiyan on 17/4/8.
 */

import {env} from '@/utils/config'

const api = {
  dev: {
    'index_msg': '/data?name=index_msg',
  },
  pro: {
    'index_msg': '',
  }
}
export default api[env]