<template>
    <div class="container">
        <h1 class="text-start">Inventario |
            <button @click="newInventario()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Proveedor</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(inventario, index) in inventarios" :key="index">
                    <td>{{ inventario.id }}</td>
                    <td>{{ inventario.producto_nombre }}</td>
                    <td>{{ inventario.proveedor_nombre }}</td>
                    <td>{{ inventario.cantidad }}</td>
                    <td>
                        <button @click="deleteInventario(inventario.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editInventario(inventario.id)" class="btn btn-warning mx-2">
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
            inventarios: []
        }
    },
    methods: {
        deleteInventario(id) {
            Swal.fire({
                title: `Usted quiere eliminar el item de inventario ${id}?`,
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
            this.$router.push({ name: 'EditInventario', params: { id: `${id}` } })
        },
        newInventario() {
            this.$router.push({ name: 'NewInventario' });
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/inventarios')
            .then(response => (this.inventarios = response.data.inventarios))
    },
}
</script>
