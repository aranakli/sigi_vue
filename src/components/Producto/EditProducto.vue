<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Producto
            </div>
            <div class="card-body">
                <form @submit.prevent="updateProducto">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id Item del Producto </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Id Item"
                                disabled v-model='producto.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">Nombre Producto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre del producto"
                                v-model='producto.nombre'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="descripcion" class="form-label">Descripción Producto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="descripcion" placeholder="Descripción del producto"
                                v-model='producto.descripcion'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="precio" class="form-label">Precio Producto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="number" class="form-control" id="precio" placeholder="Precio del producto"
                                v-model='producto.precio'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="categoria_id" class="form-label">Nombre Categoria : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="producto.categoria_id">
                                <option v-for="categoria in categorias" v-bind:value="categoria.id">{{ categoria.nombre }}</option>
                            </select>
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secundary mx-2" @click="cancel">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditProducto',
    data() {
        return {
            producto: {
                id: 0,
                nombre: "",
                descripcion: "",
                precio: 0,
                categoria_id: 0,
            },
            productos: [],
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Producto' })
        },
        async updateProducto() {
            const res = await axios.put(`http://127.0.0.1:8000/api/productos/${this.producto.id}`, this.producto)
            if (res.status == 200) {
                this.$router.push({name: 'Producto'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El item de producto ha sido actualizado',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted() {
    this.producto.id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/productos/${this.producto.id}`)
        .then(response => {
            console.log('Categorias antes de asignar:', response.data.categorias);
            this.categorias = response.data.categorias;
            this.producto = response.data.producto;
            console.log('Categorias después de asignar:', this.categorias); // Verifica los proveedores después de asignar
            console.log('productos después de asignar:', this.producto); // Verifica los proveedores después 
        })
        .catch(error => {
            console.error('Error al obtener datos del producto:', error);
        });
}







    // mounted() {
    //     this.producto.id = this.$route.params.id;
    //     axios.get(`http://127.0.0.1:8000/api/productos/${this.producto.id}`)
    //         .then(response => {
    //             this.producto = response.data.producto;
    //             this.proveedores = response.data.proveedores;
    //             this.productos = response.data.productos;
    //         })
    // }
}
</script>