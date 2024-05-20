<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Inventario
            </div>
            <div class="card-body">
                <form @submit.prevent="updateInventario">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id Item del Inventario </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Id Item"
                                disabled v-model='inventario.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="producto_id" class="form-label">Nombre Producto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="inventario.producto_id">
                                <option v-for="producto in productos" v-bind:value="producto.id">{{ producto.nombre }}</option>
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
    name: 'EditInventario',
    data() {
        return {
            inventario: {
                id: 0,
                producto_id: 0,
                proveedor_id: 0,
                cantidad: 0
            },
            productos: [],
            proveedores: [],
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Inventario' })
        },
        async updateInventario() {
            const res = await axios.put(`http://127.0.0.1:8000/api/inventarios/${this.inventario.id}`, this.inventario)
            if (res.status == 200) {
                this.$router.push({name: 'Inventario'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El item de inventario ha sido actualizado',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted() {
    this.inventario.id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/inventarios/${this.inventario.id}`)
        .then(response => {
            console.log('Proveedores antes de asignar:', response.data.proveedores);
            this.inventario = response.data.inventario;
            this.proveedores = response.data.proveedores;
            this.productos = response.data.productos;
            console.log('Proveedores después de asignar:', this.proveedores); // Verifica los proveedores después de asignar
            console.log('inventario después de asignar:', this.inventario); // Verifica los proveedores después 
            console.log('productos después de asignar:', this.productos); // Verifica los proveedores después 
        })
        .catch(error => {
            console.error('Error al obtener datos del inventario:', error);
        });
}


    // mounted() {
    //     this.inventario.id = this.$route.params.id;
    //     axios.get(`http://127.0.0.1:8000/api/inventarios/${this.inventario.id}`)
    //         .then(response => {
    //             this.inventario = response.data.inventario;
    //             this.proveedores = response.data.proveedores;
    //             this.productos = response.data.productos;
    //         })
    // }
}
</script>