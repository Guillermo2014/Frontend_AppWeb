// Profile.vue

// User Profile View

<template>
    <div class="container">
        <header class="jumbotron">
            <h3><strong>{{currentUserFullName}}</strong></h3>
        </header>
        <p><strong>Token: </strong>{{currentUser.token.substring(0, 20)}}
            {{currentUser.token.substr(currentUser,token,length - 20)}}</p>
        <p><strong>Email:</strong>{{currentUser.username}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        computed: {
            currentUser() {
                console.log(this.$store.state.auth.user);
                return this.$store.state.auth.user;
            },
            currentUserFullName(){
                return this.currentUser.firstName + ' ' +
                        this.currentUser().lastName;
            }
        },
            mounted(){
                if (!this.currentUser){
                    this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

</style>