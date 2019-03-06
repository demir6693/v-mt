import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import oNama from '@/components/oNama'
import lokacija from '@/components/lokacija'
import regLog from '@/components/regLog'
import kategorije from '@/components/kategorije'
import proizvod from '@/components/proizvod'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/o-nama',
      name: 'oNama',
      component: oNama
    },
    {
      path: '/lokacija-kontakt',
      name: 'lokacija-kontakt',
      component: lokacija
    },
    {
      path: '/moj-nalog',
      name: 'regLog',
      component: regLog
    },
    {
      path: '/kategorije',
      name: 'kategorije',
      component: kategorije
    },
    {
      path: '/proizvod',
      name: 'proizvod',
      component: proizvod
    }
  ]
})
