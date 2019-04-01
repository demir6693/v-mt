import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import oNama from '@/components/oNama'
import lokacija from '@/components/lokacija'
import regLog from '@/components/regLog'
import kategorije from '@/components/kategorije'
import proizvod from '@/components/proizvod'
import login from '@/components/login'
import checkout from '@/components/checkout'
import checkoutorders from '@/components/admin/checkoutorders'
import receipt from '@/components/admin/receipt'
import editUserInfo from '@/components/editUserInfo'
import admin from '@/components/admin'
import listaProizvoda from '@/components/admin/lista-proizvoda'
import unosArtikala from '@/components/admin/unosArtikala'

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
    },
    {
      path: '/korisnik-info',
      name: 'korisnik-info',
      component: editUserInfo
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: admin,
      children: [
        {
          path: 'lista-proizvoda',
          name: 'lista-proizvoda',
          component: listaProizvoda
        },
        {
          path: 'narudzbine',
          name: 'narudzbine',
          component: checkoutorders
        },
        {
          path: 'dodaj-artikal',
          name: 'dodaj-artikal',
          component: unosArtikala
        },
        {
          path: 'racuni',
          name: 'racuni',
          component: receipt
        }
      ]
    }
  ]
})
