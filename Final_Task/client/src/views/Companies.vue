<template>
    <div>
        <h1>Companies List</h1>
        <br>
        <router-link to="/company"><h5>My Companies ></h5></router-link>
        <hr>
        <div class="post-container">
            <div class="post"
                 v-for="(post, index) in posts"
                 v-bind:itemid="post"
                 v-bind:aria-colindex="index"
                 v-bind:key="post._id">
                {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
                <p class="text">{{post.text}}</p>
                <router-link to="read-more">read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CompanyService from '../Warehouse/CompanyService';
    export default {
        name: 'Companies',
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
        }
    }
</script>

<style scoped>

</style>