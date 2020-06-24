<template>
    <div>
        <h2>Login</h2>
        <div class="row">
            <div class="mx-auto">
                <div class="card-header text-white bg-primary">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input id="email" type="email" placeholder="Email" name="email" v-model="email"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" placeholder="Password" name="password"
                                   id="password" v-model="password">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/register" class="card-link">Need an account?</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['login']),
            loginUser() {
                let user = {
                    email: this.email,
                    password: this.password
                };
                this.login(user)
                .then(res => {
                    if (res.data.success){
                        this.$router.push('/profile');
                    }
                }).catch(err => console.log(err))
            }
        }
    }
</script>

<style>
    .card {
        width: 60%;
        border-radius: 0;
    }

    .btn {
        border-radius: 0;
    }

    .form-control {
        border-radius: 0;
    }
</style>