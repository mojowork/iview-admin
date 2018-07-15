<template>
    <div class="login">
        <div class="login-form">
            <h3>欢迎登录</h3>
            <Form ref="loginForm" :model="loginForm" label-position="top" :rules="ruleLogin" >
                <FormItem label="用户名" prop="username">
                    <Input type="text" v-model.trim="loginForm.username" size="large"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input type="password" v-model="loginForm.password" size="large"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('loginForm')" long>登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '123123',
                },
                ruleLogin: {}
            }
        },
        methods: {
            handleSubmit() {
                // this.$http('/admin/user/login', {
                //         mobile: this.loginForm.username,
                //         password: this.loginForm.password
                //     })
                //     .then(res => {
                //         Cookies.set('token', res.token)
                //         Cookies.set('username', this.loginForm.username)
                //         this.$router.push({
                //             path: '/'
                //         })
                //     })
                Cookies.set('token', 'token123')
                Cookies.set('username', this.loginForm.username)
                this.$router.push({
                    path: '/'
                })
            }
        },
        
    }
</script>

<style scoped lang="scss">
@import '~styles/index.scss';
.login{
    @include fullScreen();
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form{
        box-sizing: content-box;
        width: 284px;
        height: 264px;
        padding: 2rem;
        background-color: #fff;
        border: 1px solid $color-border;
        border-radius: .25rem;
        h3{ 
            text-align: center;
            font-size: 1rem;
            margin-bottom: 20px;
        }
    }
}
</style>