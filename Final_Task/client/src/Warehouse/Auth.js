import axios from 'axios';
import router from "../router";

const state = {
    token: localStorage.getItem('token' || ''),
    user: {},
    status: '',
    error: null
};

const apiUrl = 'http://localhost:5000';

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    //login action
    async login({commit}, user) {
        commit('auth_request');
        try {
            let res = await axios.post(apiUrl + '/api/users/login', user);
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                //store the token in to the local storage
                localStorage.setItem('token', token);
                //set the axios default
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (error) {
            commit('auth_error', error);
        }
    },
    //register user
    async register({commit}, userData) {
        try {
            commit('register_request');
            let res = await axios.post(apiUrl + '/api/users/signup', userData);
            if (res.data.success !== undefined) commit('register_success');
            return res;
        } catch (error) {
            commit('register_error', error);
        }
    },
    //get user profile
    async getProfile({commit}) {
        commit('profile_request');
        let res = await axios.get(apiUrl + '/api/users/profile');
        commit('user_profile', res.data.user);
        return res;
    },
    //logout user
    async logout({commit}) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        await router.push('/login');
        //return;
    }
};

const mutations = {
    auth_request(state) {
        state.error =null;
        state.status = 'loading';
    },
    auth_success(sate, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.error = null;
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null;
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg;
    },
    logout(state) {
        state.error = null;
        state.status = '';
        state.token = '';
        state.user = '';
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}