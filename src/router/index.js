import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import CasaVenda from '../views/CasaVenda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicial
  },
 {
   path: '/venda',
   name: 'CasaVenda',
  component: CasaVenda
 },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
