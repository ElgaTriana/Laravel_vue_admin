<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Data Pengguna </h3>
                        <div class="card-tools">
                            <button type="button" class="btn btn-sm btn-primary" @click="showModal()">Tambah Pengguna</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name Pengguna</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in users" :key="item.id">
                                        <th scope="row">{{item.id}}</th>
                                        <td>{{item.name}}</td>
                                        <td>{{item.level_id}}</td>
                                        <td>{{item.email}}</td>
                                        <td>Edit | Delete</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Pengguna</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="simpanData()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="form.name" placeholder="Nama Pengguna">
                            </div>

                            <div class="form-group">
                                <select class="form-control" v-model="form.level_id">
                                    <option value="">-Pilih Level-</option>
                                    <option v-for="item in levels" :key="item.id" :value="item.id">{{item.namalevel}}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input class="form-control" type="email" v-model="form.email" placeholder="Email">
                            </div>

                            <div class="form-group">
                                <input class="form-control" type="password" v-model="form.password" placeholder="Password">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    // import Form from 'vform'
    // import axios from 'axios';
    export default {
        data(){
            return{
                levels:{},
                users:{},
                form: new Form({
                    id:"",
                    name:"",
                    level_id:"",
                    email:"",
                    password:""
                })
            };
        },
        methods:{
            showModal(){
                this.form.reset();
                $('#exampleModal').modal("show");
            },
            loadData(){
                axios
                    .get('api/ambildatalevel')
                    .then(({data}) => (this.levels = data));
                axios
                    .get('api/user')
                    .then(({data}) => (this.users = data));
            },
            simpanData(){
                this.form
                .post('api/user').then(()=>{
                    Fire.$emit("refreshData");

                    $('#exampleModal').modal("hide");

                    Toast.fire({
                        icon: 'success',
                        title: 'Data Berhasil di Simpan'
                    });
                })
                .catch();
            }
        },created(){
            this.loadData();
            Fire.$on("refreshData", () =>{
                this.loadData();
            })
        }
    }
</script>
