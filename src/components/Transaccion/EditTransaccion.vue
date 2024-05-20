<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Transaccion
            </div>
            <div class="card-body">
                <form @submit.prevent="updateTransaccion">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id Item del Transaccion </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Id Item"
                                disabled v-model='transaccion.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="tipo" class="form-label">Tipo Transaccion : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <select class="form-control" id="tipo" v-model='transaccion.tipo'>
                                <option value="Entrada">Entrada</option>
                                <option value="Salida">Salida</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <label for="producto_id" class="form-label">Nombre Producto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="transaccion.producto_id">
                                <option v-for="producto in productos" v-bind:value="producto.id">{{ producto.nombre }}</option>
                            </select>
                  </div>
                    </div>
                    <div class="row mb-3">
                        <label for="cantidad" class="form-label">Cantidad Transaccion : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="number" class="form-control" id="cantidad" placeholder="Descripción del transaccion"
                                v-model='transaccion.cantidad'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha" class="form-label">Fecha Transaccion : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="date" class="form-control" id="fecha" placeholder="Precio del transaccion"
                                v-model='transaccion.fecha'>
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
    name: 'EditTransaccion',
    data() {
        return {
            transaccion: {
                id: 0,
                tipo: "",
                cantidad: 0,
                fecha: 0, 
                producto_id: 0,
            },
            transacciones: [],
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Transaccion' })
        },
        async updateTransaccion() {
            const res = await axios.put(`http://127.0.0.1:8000/api/transacciones/${this.transaccion.id}`, this.transaccion)
            if (res.status == 200) {
                this.$router.push({name: 'Transaccion'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El item de transaccion ha sido actualizado',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted() {
    this.transaccion.id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/transacciones/${this.transaccion.id}`)
        .then(response => {
            console.log('Transacciones antes de asignar:', response.data.productos);
            this.productos = response.data.productos;
            this.transaccion = response.data.transaccion;
            console.log('Transacciones después de asignar:', this.productos); // Verifica los proveedores después de asignar
            console.log('transacciones después de asignar:', this.transaccion); // Verifica los proveedores después 
        })
        .catch(error => {
            console.error('Error al obtener datos del transaccion:', error);
        });
}







    // mounted() {
    //     this.transaccion.id = this.$route.params.id;
    //     axios.get(`http://127.0.0.1:8000/api/transacciones/${this.transaccion.id}`)
    //         .then(response => {
    //             this.transaccion = response.data.transaccion;
    //             this.proveedores = response.data.proveedores;
    //             this.transacciones = response.data.transacciones;
    //         })
    // }
}
</script>