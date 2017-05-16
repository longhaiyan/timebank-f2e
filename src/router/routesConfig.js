/**
 * Created by longhaiyan on 17/3/26.
 */
import Hello from '@/components/Hello'
import Index from '@/views/index/index'
import Intro from '@/views/intro'
import Complain from '@/views/complain'
import demo from '@/components/demoView/demo'
import Task from '@/views/task/my_task'
import Zone from '@/views/zone'

import MessageIndex from '@/views/message/message_index'
import MessagePersonal from '@/views/message/message_personal'
import MessageSystem from '@/views/message/message_system'

import SettingIndex from '@/views/setting/setting_index'
import SettingInfo from '@/views/setting/setting_info'
import SettingGetTask from '@/views/setting/setting_get_task'
import SettingPrivate from '@/views/setting/setting_private'
import SettingPublishTask from '@/views/setting/setting_publish_task'
import SettingCommunity from '@/views/setting/setting_community'
import SettingConfirm from '@/views/setting/setting_confirm'

import NewTask from '@/views/task/new_task'
import CommunityIndex from '@/views/community/community_index'
import CommunityInfo from '@/views/community/community_info'
// import NewTask from '@/views/task/new_task'

import index from '@/views/index/index'
import store from '@/store'
import routerQuery from './routerQuery'
import * as demoTypes from '@/store/test/types'

let routes = [
  {
    label: '首页',
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/Hello',
    name: 'Hello',
    component: Hello,
    children: [
      {
        path: 'demo',
        component: demo,
      }
    ],
  },
  {
    label: '任务详情',
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/task',
    name: 'Task',
    component: Task,
    children: [
      {
        path: 'new',
        component: NewTask,
      }
    ],
  },
  {
    label: '社区首页',
    path: '/community',
    name: 'CommunityIndex',
    component: CommunityIndex
  },
  {
    label: '帖子详情',
    path: '/info',
    name: 'CommunityInfo',
    component: CommunityInfo
  },
  {
    label: '投诉',
    path: '/complain',
    name: 'Complain',
    component: Complain
  },
  {
    label: '个人首页',
    path: '/zone',
    name: 'Zone',
    component: Zone
  },
  {
    label: '我的消息',
    path: '/message',
    name: 'MessageIndex',
    component: MessageIndex,
    children: [
      {
        path: 'personal',
        component: MessagePersonal,
      },
      {
        path: 'system',
        component: MessageSystem,
      },

    ],
  },
  {
    label: '我的设置',
    path: '/setting',
    name: 'SettingIndex',
    component: SettingIndex,
    children: [
      {
        path: 'info',
        component: SettingInfo,
      },
      {
        path: 'get_task',
        component: SettingGetTask,
      },
      {
        path: 'publish_task',
        component: SettingPublishTask,
      },
      {
        path: 'private',
        component: SettingPrivate,
      },
      {
        path: 'community',
        component: SettingCommunity,
      },
      {
        path: 'confirm',
        component: SettingConfirm,
      },

    ],
  },

]

function routesConfig(store) {
  // main-start

  // 为面包屑导航补全路由，存放在_path
  const itemPS = (it, td) => {
    if (true) {
      it._path = td._path
      // console.log("ps it",it)
    }
  }

  // 加工一下，补全每条路由的 fullpath
  routes.forEach((it1, i1) => {
    if (it1.children) {
      // console.log('it1',it1)
      // console.log('i1',i1)
      it1.children.forEach((it2, i2) => {
        // console.log('it2',it1)
        // console.log('i2',i1)
        itemPS(it2, {
          _path: it1.path + '/' + it2.path
        })
        // console.log('it2')
      })
    }

    itemPS(it1, {
      _path: it1.path
    })
  })

  return routes
  // main-end
}

export {
  routes,
  routesConfig
}
