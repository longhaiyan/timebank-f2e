/**
 * Created by longhaiyan on 17/4/8.
 */

import {env} from '@/utils/config'

const api = {
  dev: {
    'index_msg': '/data?name=user_list',
  },
  pro: {
    'index_msg': '/user/recommond/list/data',
  }
}
export default api[env]