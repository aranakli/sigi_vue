<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Nuevo</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Producto
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProducto">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id Producto: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="number" class="form-control" id="id" placeholder="Id item de producto" disabled
                                v-model='producto.id'>
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
                    
                    <button class="btn btn-primary" type="submit">Guardar</button>
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
    name: 'NewProducto',
    data() {
        return {
            producto: {
                id: 0,
                nombre: "",
                descripcion: "",
                precio: 0,
                categoria_id: 0,
            },
            categorias: [],
            categoria_id: "0",
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Producto' })
        },
        async saveProducto() {
            const res = await axios.post(`http://127.0.0.1:8000/api/productos/`, this.producto)
            // console.log(res);
            if (res.status == 200) {
                this.$router.push({ name: 'Producto' })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El item de producto ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/categorias/`)
            .then(response => {
                this.categorias = response.data.categorias
            })
        
    }
}
</script>