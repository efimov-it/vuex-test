import sendRequest from '@/network';

export default {
    state: {
        userAuth: {
            access_token: null,
            expires_in: null,
            refresh_token: null,
            token_type: null
        }
    },
    actions: {
        logIn({commit}, authData) {
            sendRequest({
                method: 'POST',
                url: '/oauth/token',
                headers: {},
                data: {
                    username: authData.login,
                    password: authData.password,
                    client_id: 1,
                    client_secret: 'c75IGwuqkjrO1RWCE4Ntn4zqpQdpgnEO2wGT9iMT',
                    grant_type: 'password'
                },
                resolve (data) {
                    commit('logIn', data);
                }
            })
        }
    },
    mutations: {
        logIn (state, authData) {
            sessionStorage.setItem('access_token', authData.access_token);
            sessionStorage.setItem('expires_in', authData.expires_in);
            sessionStorage.setItem('refresh_token', authData.refresh_token);
            sessionStorage.setItem('token_type', authData.token_type);

            state.userAuth.access_token = authData.access_token;
            state.userAuth.expires_in = authData.expires_in;
            state.userAuth.refresh_token = authData.refresh_token;
            state.userAuth.token_type = authData.token_type;
        },
        getDataFromSessionStorage (state) {
            state.userAuth.access_token = sessionStorage.getItem('access_token');
            state.userAuth.expires_in = sessionStorage.getItem('expires_in');
            state.userAuth.refresh_token = sessionStorage.getItem('refresh_token');
            state.userAuth.token_type = sessionStorage.getItem('token_type');
        },
        logOut (state) {
            state.userAuth = {
                access_token: null,
                expires_in: null,
                refresh_token: null,
                token_type: null
            };

            sessionStorage.clear();
        }
    },
    getters: {
        isUserAuth(state){
            return state.userAuth.access_token;
        }
    }
}