<template>
    <div class="container">
        <h1>Add Company</h1>
        <br>
        <router-link to="/Company"><h5>My Companies ></h5></router-link>
        <div class="create-company">
            <form @submit.prevent="addCompany">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Name" name="name" v-model="name"
                       class="form-control">
                <label for="address">Address</label>
                <input id="address" type="text" placeholder="Address" name="address" v-model="address"
                       class="form-control">
                <label for="serviceOfActivity">Service of activity</label>
                <input id="serviceOfActivity" type="text" placeholder="Service of activity" name="serviceOfActivity"
                       v-model="service_of_activity"
                       class="form-control">
                <label for="numberOfEmployees">Number of employees</label>
                <input id="numberOfEmployees" type="text" placeholder="Number of employees" name="numberOfEmployees"
                       v-model="number_of_employees"
                       class="form-control">
                <label for="description">Description</label>
                <input id="description" type="text" placeholder="Description" name="description"
                       v-model="description"
                       class="form-control">
                <label for="type">Type</label>
                <input id="type" type="text" placeholder="Type" name="type" v-model="type"
                       class="form-control">
                <button class="btn">Post</button>
            </form>

        </div>
    </div>
</template>

<script>
    import CompanyService from "../Warehouse/CompanyService";
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                name: '',
                address: '',
                service_of_activity: '',
                number_of_employees: '',
                description: '',
                type: '',
                posts: [],
                error: '',
                text: ''
            }
        },
        methods: {
           ...mapActions(['add']),
            addCompany() {
               let company = {
                   name: this.name,
                   address: this.address,
                   service_of_activity: this.service_of_activity,
                   number_of_employees: this.number_of_employees,
                   description: this.description,
                   type: this.type
               };
                this.add(company).then(res => {
                    console.log(res)
                    if (res && res.data.success) {
                        this.$router.push('insertCompany')
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .btn {
        border-radius: 3px;
        margin-top: 5px;
        background-color: blue;
        color: white;
    }
</style>