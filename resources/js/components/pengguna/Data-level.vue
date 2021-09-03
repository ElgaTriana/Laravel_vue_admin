<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Data Level</div>
                    <div class="card-body">
                        <div class="form-group">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name Level</th>
                                    <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr v-for="item in levels" :key="item.message"> -->
                                    <tr v-for="(item, id) in levels" :key="id">
                                        <th scope="row">{{id+1}}</th>
                                        <td>{{item.namalevel}}</td>
                                        <td>Edit | Delete</td>
                                    </tr>
                                </tbody>
                            </table>
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
                levels :{}
            };
        },
        methods:{
            loadData(){
                axios.get('api/ambildatalevel').then(({data})=> {this.levels=data});
            }
        },created(){
            this.loadData();
        }
        
        // mounted() {
        //     console.log('Component mounted.')
        // }
    }
</script>
