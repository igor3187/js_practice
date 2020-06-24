<template>
    <div>
        <app-header/>
        <router-view></router-view>
    </div>
</template>

<script>
    // Imports
    // import showBlogs from './components/showBlogs.vue';
    // import listBlogs from './components/listBlogs.vue';
    import header from "./components/header.vue";

    export default {
        components: {
            // 'show-blogs': showBlogs,
            // 'list-blogs': listBlogs,
            'app-header': header
        },
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
    body{
        margin: 0;
        font-family: 'Nunito SemiBold',serif;
    }
</style>