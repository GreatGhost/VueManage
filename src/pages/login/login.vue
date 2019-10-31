<template>
    <div class="login">
        <img src="../../images/login-bg.svg" alt="" class="login-bg">
        <div class="login-wrapper">
            h
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {}
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
        img{
            flex:0 0 58.333333%;
            max-width:58.3333%;
            padding-right: 48px;
            height: auto;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }
        .login-wrapper{
            flex:0 0 41.77777%;
            padding:0 24px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }
    }
</style>