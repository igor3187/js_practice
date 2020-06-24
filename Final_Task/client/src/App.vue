<template>
    <div id="app">
        <Navbar/>
        <br>
        <br>
        <div class="container">
            <Errors v-if="error" :msg="error"/>
            <router-view/>
        </div>
    </div>
</template>
<script>
    import Navbar from "./components/Navbar";
    import Errors from "./components/Errors";
    import {mapGetters} from 'vuex';
    import Company from "./views/Company";

    export default {
        components: {
            Navbar, Errors, Company
        },
        computed: {
            ...mapGetters(['error'])
        }
    }
</script>
<style>
    .card {
        border-radius: 0;
    }

    .btn {
        border-radius: 0;
    }
</style>
