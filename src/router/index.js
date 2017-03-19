import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo from '@/components/demoView/demo'
import store from '@/store'
import routerQuery from './routerQuery'
import * as demoTypes from '@/store/test/types'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path: 'demoView/demo',
          component: demo,
          beforeEnter: (to, from, next) => {
            // ...
            let query = routerQuery(to)
            let payload = {
              ...query
            }
            console.log(to)
            console.log(from)
            store.dispatch(demoTypes.A_LIST_REQUEST,payload);
            // store.dispatch(managementProductTypes.A_LIST_REQUEST, payload)

            next();

          }
        }
      ],
    }
  ]
})
