<template>
    <div class="login">
        <img src="../../images/login-bg.svg" alt="" class="login-bg">
        <div class="login-wrapper">
            <h1 class="text-base text-primary text-uppercase mb-4">Bubbly Dashboard</h1>
            <h2 class="mb-4">Welcome back!</h2>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>

            <form action="" class="login-form">
                <div class="login-input-item " v-for="(item,index) in loginList" :key="index">
                    <input type="text" class="form-control" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {
                loginList:[
                    {name:'登录名',value:'',placeholder:'Username or Email address'},
                    {name:'密码',value:'',placeholder:'Password'}
                ]
            }
        },
        watch: {},
        computed: {},
        methods: {},
        created() {},
        mounted() {}
    }
</script>
<style lang="less" scoped>

    .login {
        max-width: 1140px;
        margin:0 auto;
        display: flex;
        justify-content: center;
        min-height: calc(100vh - 72px);
        padding-top:48px;
        box-sizing: border-box;
        img{
            flex:0 0 58.333333%;
            max-width:58.3333%;
            padding-right: 48px;
            height: 445px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            vertical-align: middle;
            border-style: none;
        }
        .login-wrapper{
            flex:0 0 41.77777%;
            padding:0 24px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            text-align: left;
            h1{
                    color: #4680ff;
                    margin:0;
                    font-size: 14px;
                }
            h2{
                margin-bottom: 24px;
                font-weight: 800;
            }
            p{
                color: #6c757d!important;
            }
            .login-form{
                .login-input-item{
                    margin-bottom: 24px;
                    input.form-control{
                        display: block;
                        width: 100%;
                        height: calc(2.25rem + 2px);
                        padding: .375rem .75rem;
                        font-size: 18px;
                        line-height: 1.5;
                        color: #495057;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        border-radius: .25rem;
                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                        border-radius: 32px;
                        outline: none;
                        &.shadow{
                            -webkit-box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;
                            box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;
                        }
                    }
                }
            }
        }
    }
</style>