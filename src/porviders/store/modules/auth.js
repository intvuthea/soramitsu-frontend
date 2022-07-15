/*eslint no-empty-pattern: 0*/
import AuthRequest from '@/porviders/api_request/requests/AuthRequest';
import VueCookies from 'vue-cookies';


export default {
    namespaced: true,
    state() {
        return {
            currentUser: {}
        }
    },
    mutations: {
        SET_CURRENT_USER(state, payload) {
            state.currentUser = payload
        }
    },
    actions: {
        async login({}, payload) {
            try {
                const response = await AuthRequest.login(payload)
                const {duration, token} = response.data
                await VueCookies.set('token', token, duration)
                return true
            } catch (error) {
                return false
            }
        },
        async logout() {
            await VueCookies.remove('token')
            return true
        },
        async getCurrentUser({commit}) {
            try {
                const response = await AuthRequest.me()
                const { user } = response.data
                commit('SET_CURRENT_USER', user)
            } catch (error) {
                commit('SET_CURRENT_USER', error)
            }
        }
    }
}