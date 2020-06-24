<template>
    <div class="container">
        <h1>My companies</h1>
        <router-link to="/companies"><br><h5>Companies List ></h5></router-link>
        <router-link to="/add-company"><h5>Add Company ></h5></router-link>
        <div class="create-company">
            <label for="create-company">Start write here...</label>
            <input type="text" id="create-company" v-model="text" placeholder="Add company">
            <button v-on:click="createCompany">Post</button>
        </div>
        <hr>
        <p class="error" v-if="error">{{error}}</p>
        <div class="post-container">
            <div class="post"
                 v-for="(post, index) in posts"
                 v-bind:itemid="post"
                 v-bind:aria-colindex="index"
                 v-bind:key="post._id"
                 v-on:dblclick="deleteCompany(post._id)">
                {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
                <p class="text">{{post.text}}</p>
                <router-link to="edit">edit company</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CompanyService from "../Warehouse/CompanyService";

    export default {
        name: 'CompanyComponent',
        data() {
            return {
                posts: [],
                error: '',
                text: ''
            }
        },
        async created() {
            try {
                this.posts = await CompanyService.getCompanies();
            } catch (err) {
                this.error = err.message;
            }
        },
        methods: {
            async createCompany() {
                await CompanyService.insertCompany(this.text);
                this.posts = await CompanyService.getCompanies();
            },
            async deleteCompany(id) {
                await CompanyService.deleteCompany(id);
                this.posts = await CompanyService.getCompanies();
            }
        }
    };
</script>

<style>
    div.container {
        max-width: 800px;
        margin: 0 auto;
    }

    p.error {
        border: 1px solid #ff5b5f;
        background-color: #ffc5c1;
        padding: 10px;
        margin-bottom: 15px;
    }

    div.post {
        position: relative;
        border: 1px solid grey;
        background-color: lightgrey;
        padding: 10px 10px 30px 10px;
        margin-bottom: 15px;
    }

    div.created-at {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 15px 5px 15px;
        background-color: darkgreen;
        color: white;
        font-size: 13px;
    }

    p.text {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }
</style>
