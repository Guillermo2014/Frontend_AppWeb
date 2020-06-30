// UsersList.vue

// User List View
<template>
    <div class="container">
        <header class="jumbotron"><h3>Users List</h3></header>
        <p>{{message}}</p>
        <div v-if="users">
            <h2>Users</h2>
            <ul>
                <li v-for="user in users" :key="user.id">{{user.username()}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import UserService from '../services/user.service';

    export default {
        name: "UsersList",
        data(){
            return {
                users: [],
                message: ''
            }
        },
        mounted() {
            UserService.getAll().then(
                response =>{
                    this.users = response.data;
                },
                error => {
                    this.message = (error.response && error.response.data)
                    || error.toString();
                }
            )
        }
    }
</script>

<style scoped>

</style>