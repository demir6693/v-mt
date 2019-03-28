import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import oNama from '@/components/oNama'
import lokacija from '@/components/lokacija'
import regLog from '@/components/regLog'
import kategorije from '@/components/kategorije'
import proizvod from '@/components/proizvod'
import unosArtikala from '@/components/unosArtikala'
import login from '@/components/login'
import checkout from '@/components/checkout'
import checkoutorders from '@/components/checkoutorders'
import receipt from '@/components/receipt'

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
      path: '/registracija',
      name: 'regLog',
      component: regLog
    },
    {
      path: '/proizvodi/:kategorije',
      name: 'proizvodi',
      component: kategorije
    },
    {
      path: '/proizvod/:id',
      name: 'proizvod',
      component: proizvod
    },
    {
      path: '/addartikal',
      name: 'unosArtikala',
      component: unosArtikala
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/checkout-orders',
      name: 'checkout-orders',
      component: checkoutorders
    },
    {
      path: '/lista-racuna',
      name: 'lista-racuna',
      component: receipt
    }
  ]
})
