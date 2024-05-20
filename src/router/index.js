import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Proveedores from '../views/Proveedores.vue';
import NewProveedores from '../components/Proveedor/NewProveedor.vue';
import EditProveedores from '../components/Proveedor/EditProveedor.vue';
import NewCategoria from '../components/Categoria/NewCategoria.vue';
import EditCategoria from '../components/Categoria/EditCategoria.vue';
import NewProducto from '../components/Producto/NewProducto.vue';
import EditProducto from '../components/Producto/EditProducto.vue';
import NewTransaccion from '../components/Transaccion/NewTransaccion.vue';
import EditTransaccion from '../components/Transaccion/EditTransaccion.vue';
import Inventarios from '../views/Inventarios.vue';
import NewInventarios from '../components/Inventario/NewInventario.vue';
import EditInventarios from '../components/Inventario/EditInventario.vue';
import Categoria from '../views/Categoria.vue';
import Producto from '../views/Producto.vue';
import Transaccion from '../views/Transaccion.vue';

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
    path: '/new-categorias',
    name: 'NewCategoria',
    component: NewCategoria
  },
  {
    path: '/edit-categorias/:id',
    name: 'EditCategoria',
    component: EditCategoria
  },
  {
    path: '/new-productos',
    name: 'NewProducto',
    component: NewProducto
  },
  {
    path: '/edit-productos/:id',
    name: 'EditProducto',
    component: EditProducto
  },
  {
    path: '/categorias',
    name: 'Categoria',
    component: Categoria
  },
  {
    path: '/productos',
    name: 'Producto',
    component: Producto
  },
  {
    path: '/transacciones',
    name: 'Transaccion',
    component: Transaccion
  },
  {
    path: '/new-transacciones',
    name: 'NewTransaccion',
    component: NewTransaccion
  },
  {
    path: '/edit-transacciones/:id',
    name: 'EditTransaccion',
    component: EditTransaccion
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