<template>
    <div class="container">
        <h1 class="text-start">Inventarios list |
            <button @click="newInventario()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Contacto</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(inventarios, index) in inventarios" :key="index">
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ inventarios.id }}</td>
                    <td>{{ inventarios.nombre }}</td>
                    <td>{{ inventarios.contacto }}</td>
                    <td>
                        <button @click="deleteInventario(inventarios.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editInventario(inventarios.id)" class="btn btn-warning mx-2">
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
    name: 'Inventario',
    data() {
        return {
            Inventarios: []
        }
    },
    methods: {
        deleteInventario(id) {
            Swal.fire({
                title: `Usted quiere eliminar el provvedor ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/inventarios/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Delete !! ', '', 'success')
                            this.inventarios = response.data.inventarios
                        }
                    })
                }
            })
        },
        editInventario(id) {
            this.$router.push({name: 'EditInventario', params: { id: `${id}` }} )
        },
        newInventario() {
            this.$router.push({name: 'NewInventario'});
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/inventarios')
            .then(response => (this.inventarios = response.data.inventarios))
    },
}
</script>
