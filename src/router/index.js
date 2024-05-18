import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CategoriaView from '../views/Categoria.vue';
import ProductoView from '../views/Producto.vue';
import TransaccionView from '../views/Transaccion.vue';
import Proveedores from '../views/Proveedores.vue';
import Inventarios from '../views/Inventarios.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proveedores',
    name: 'Proveedor',
    component: Proveedores
  },
  {
    path: '/inventarios',
    name: 'Inventario',
    component: Inventarios
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/categorias',
    name: 'Categoria',
    component: CategoriaView
  },
  {
    path: '/productos',
    name: 'Producto',
    component: ProductoView
  },
  {
    path: '/transacciones',
    name: 'Transaccion',
    component: TransaccionView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
