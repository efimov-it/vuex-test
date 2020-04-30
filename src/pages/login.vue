<template>
    <div class="row justify-content-center">
        <form class="col-md-6 col-sm-12"
              @submit.prevent="logIn">
            <div class="form-group">
                <label for="login">Логин пользователя</label>
                <input type="email"
                       class="form-control"
                       id="login"
                       v-model="login">
            </div>
            <div class="form-group">
                <label for="password">Пароль пользователя</label>
                <input type="password"
                       class="form-control"
                       id="password"
                       v-model="password">
            </div>
            <button class="btn btn-primary"
                    type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        logIn () {
            this.$store.dispatch('logIn', {
                login: this.login,
                password: this.password
            });
        }
    }
}
</script>

<style lang="less" scoped>

</style>