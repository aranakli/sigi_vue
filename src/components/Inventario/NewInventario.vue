<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Nuevo</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Inventarios
            </div>
            <div class="card-body">
                <form @submit.prevent="saveInventario">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id Item de inventario: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="number" class="form-control" id="id" placeholder="Id item de inventario" disabled
                                v-model='inventario.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="producto_id" class="form-label">Nombre Producto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="inventario.producto_id">
                                <option v-for="producto in productos" v-bind:value="producto.id">{{ producto.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="proveedor_id" class="form-label">Nombre Proveedor : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="inventario.proveedor_id">
                                <option v-for="proveedor in proveedores" v-bind:value="proveedor.id">{{ proveedor.nombre }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="cantidad" class="form-label">Cantidad en inventario : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="number" class="form-control" id="cantidad" placeholder="Cantidad en inventario"
                                v-model='inventario.cantidad'>
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
    name: 'NewInventario',
    data() {
        return {
            inventario: {
                id: 0,
                producto_id: 0,
                proveedor_id: 0,
                cantidad: 0
            },
            proveedores: [],
            proveedor_id: "0",
            productos: [],
            producto_id: "0"
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Inventario' })
        },
        async saveInventario() {
            const res = await axios.post(`http://127.0.0.1:8000/api/inventarios/`, this.inventario)
            // console.log(res);
            if (res.status == 200) {
                this.$router.push({ name: 'Inventario' })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El item de inventario ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/proveedores/`)
            .then(response => {
                this.proveedores = response.data.proveedores
            })
        axios.get(`http://127.0.0.1:8000/api/productos/`)
            .then(response => {
                this.productos = response.data.productos
            })
    }
}
</script>