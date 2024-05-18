<template>
    <div class="container">
        <h1 class="text-start">Proveedores list |
            <button @click="newProveedor()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(proveedores, index) in proveedores" :key="index">
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ proveedores.id }}</td>
                    <td>{{ proveedores.nombre }}</td>
                    <td>{{ proveedores.contacto }}</td>
                    <td>
                        <button @click="deleteProveedor(proveedores.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editProveedor(proveedores.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'Proveedor',
    data() {
        return {
            Proveedores: []
        }
    },
    methods: {
        deleteProveedor(id) {
            Swal.fire({
                title: `Usted quiere eliminar el provvedor ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/proveedores/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Delete !! ', '', 'success')
                            this.proveedores = response.data.proveedores
                        }
                    })
                }
            })
        },
        editProveedor(id) {
            this.$router.push({name: 'EditProveedor', params: { id: `${id}` }} )
        },
        newProveedor() {
            this.$router.push({name: 'NewProveedor'});
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/proveedores')
            .then(response => (this.proveedores = response.data.proveedores))
    },
}
</script>
