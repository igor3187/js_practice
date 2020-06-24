<template>
    <div>
        <h2>Profile</h2>
        <div class="card" v-if="user">
            <ul class="list-group">
                <li class="list-group-item">First name: {{user.firstName}}</li>
                <li class="list-group-item">Last name: {{user.lastName}}</li>
                <li class="list-group-item">Nickname: {{user.nickName}}</li>
                <li class="list-group-item">Description: {{user.description}}</li>
                <li class="list-group-item">Position: {{user.position}}</li>
                <li class="list-group-item">Phone number: {{user.phoneNumber}}</li>
                <li class="list-group-item">Email: {{user.email}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        computed: mapGetters(['user']),
        methods: {
            ...mapActions(['getProfile']),
        },
        created() {
            this.getProfile();
        }
    }
</script>

<style>

</style>