/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';

// Axioss validasi
import {
    Form,
    HasError,
    AlertError
} from 'vform'

window.Form = Form;
// Vue.filter(HasError.name, HasError)
// Vue.filter(AlertError.name, AlertError)
// End Axioss

// Save tanpa refresh
let Fire = new Vue();
window.Fire = Fire;
// End Save tanpa refresh

// Sweetalert
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer:3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;
// End Sweetalert

//Vue Router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes =[
    {path: '/data-user', component:require('./components/pengguna/Data-pengguna.vue').default},
    {path: '/data-level', component:require('./components/pengguna/Data-level.vue').default}
]

// Halaman Contoh
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// End halaman contoh

const router = new VueRouter({
    routes
})
// End vue router

const app = new Vue({
    el: '#app',
    router
});
