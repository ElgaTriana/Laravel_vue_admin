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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>TESTING</td>
                                        <td>TESTING</td>
                                        <td>TESTING</td>
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
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            };
        },
        methods:{
            showModal(){
                $('#exampleModal').modal("show");
            }
        },created(){
            
        }
    }
</script>
