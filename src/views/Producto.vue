<template>
    <div class="container">
      <h1 class="text-start">
        Lista de Productos |
        <button @click="newProducto" class="btn btn-success mx-2">
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoria</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="index">
            <th>{{ producto.id }}</th>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.categoria_id }}</td>
            <td>
              <button @click="deleteProducto(producto.id)" class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
              </button>
              <button @click="editProducto(producto.id)" class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'Producto',
    data() {
      return {
        productos: []
      };
    },
    methods: {
      deleteProducto(id) {
        Swal.fire({
          title: `Do you want to delete the Producto with id ${id}`,
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/productos/${id}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire('Deleted!', '', 'success');
                  this.productos = response.data.productos;
                }
              });
          }
        });
      },
      editProducto(id) {
        this.$router.push({ name: 'EditProducto', params: { id: id } });
      },
      newProducto() {
        this.$router.push({ name: 'NewProducto' });
      }
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/productos')
        .then(response => (this.productos = response.data.productos));
    }
  };
  </script>
  