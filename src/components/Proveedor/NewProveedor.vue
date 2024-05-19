<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Nuevo</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Proveedor
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProveedor">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="number" class="form-control" id="id" placeholder="Id Proveedor"
                                disabled v-model='proveedor.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">Nombre : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <input type="nombre" class="form-control" id="nombre" placeholder="Nombre del proveedor"
                                v-model='proveedor.nombre'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="contacto" class="form-label">Datos de contacto : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="contacto" placeholder="Dirección, barrio, telefono, etc."
                                v-model='proveedor.contacto'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Update</button>
                    <button class="btn btn-secundary mx-2" @click="cancel">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'NewProveedor',
    data() {
        return {
            proveedor: {
                id: 0,
                nombre: '',
                contacto: ''
            }
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Proveedor' })
        },
        async saveProveedor() {
            const res = await axios.post(`http://127.0.0.1:8000/api/proveedores/`, this.proveedor)
            // console.log(res);
            if (res.status == 200) {
                this.$router.push({name: 'Proveedor'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El proveedor ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        // axios.get(`http://127.0.0.1:8000/api/categories/`)
        //     .then(response => {
        //         this.categories = response.data.categories
        //     })
    }
}
</script>