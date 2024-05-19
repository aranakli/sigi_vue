import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Proveedores from '../views/Proveedores.vue';
import NewProveedores from '../components/Proveedor/NewProveedor.vue';
import EditProveedores from '../components/Proveedor/EditProveedor.vue';
import Inventarios from '../views/Inventarios.vue';
import NewInventarios from '../components/Inventario/NewInventario.vue';
import EditInventarios from '../components/Inventario/EditInventario.vue';

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
    path: '/new-proveedores',
    name: 'NewProveedor',
    component: NewProveedores
  },
  {
    path: '/edit-proveedores/:id',
    name: 'EditProveedor',
    component: EditProveedores
  },
  {
    path: '/inventarios',
    name: 'Inventario',
    component: Inventarios
  },
  {
    path: '/new-inventarios',
    name: 'NewInventario',
    component: NewInventarios
  },
  {
    path: '/edit-inventarios/:id',
    name: 'EditInventario',
    component: EditInventarios
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router