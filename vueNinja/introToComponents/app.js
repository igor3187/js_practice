Vue.component('greeting', {
    template: '<p>Hi there, I am {{name}}. <button @click="changeName">Change name</button></p>',
    data: function () {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName() {
            this.name = 'Mario'
        }
    }
});

new Vue({
    el: '#vue-app-one',
    data: {},
    methods: {},
    computed: {}

});

new Vue({
    el: '#vue-app-two',
    data: {},
    methods: {},
    computed: {}
});
