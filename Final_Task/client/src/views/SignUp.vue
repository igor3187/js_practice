<template>
    <div>
        <h2>Sign up</h2>
        <div class="row">
            <div class="mx-auto">
                <div class="card-header text-white bg-primary">
                    <h4>Sign up</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
                            <label for="firstName">First name</label>
                            <input id="firstName" type="text" placeholder="First name" name="firstName" v-model="firstName"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last name</label>
                            <input id="lastName" type="text" placeholder="Last name" name="lastName" v-model="lastName"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="nickName">Nickname</label>
                            <input id="nickName" type="text" placeholder="Nickname" name="nickName" v-model="nickName"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Phone number</label>
                            <input id="phoneNumber" type="text" placeholder="Phone number" name="phoneNumber" v-model="phoneNumber"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input id="email" type="text" placeholder="Email" name="email" v-model="email"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input id="description" type="text" placeholder="Description" name="description" v-model="description"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="position">Position</label>
                            <input id="position" type="text" placeholder="Position" name="position" v-model="position"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" placeholder="Password" name="password"
                                   id="password" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm_password">Confirm Password</label>
                            <input type="password" class="form-control" placeholder="Confirm Password"
                                   name="confirm_password"
                                   id="confirm_password" v-model="confirm_password">
                        </div>
                        <button class="btn btn-primary">Sign up</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/login" class="card-link">Already have an account?</router-link>
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
                firstName: '',
                lastName: '',
                nickName: '',
                description: '',
                position: '',
                phoneNumber: '',
                password: '',
                confirm_password: '',
                email: ''
            }
        },
        methods: {
            ...mapActions(['register']),
            registerUser() {
                let user = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    nickName: this.nickName,
                    description: this.description,
                    position: this.position,
                    phoneNumber: this.phoneNumber,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    email: this.email
                };
                this.register(user).then(res => {
                    console.log(res)
                    if (res && res.data.success) {
                        this.$router.push('login')
                    }
                });
            }
        }
    };
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