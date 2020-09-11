<template>
    <div class="login">
        <img src="../../images/login-bg.svg" alt="" class="login-bg">
        <div class="login-wrapper">
            <h1 class="text-base text-primary text-uppercase mb-4">Bubbly Dashboard</h1>
            <h2 class="mb-4">Welcome back!</h2>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore.</p>

            <form action="" class="login-form">
                <div class="login-input-item " v-for="(item,index) in loginList" :key="index">
                    <input :type="item.type" class="form-control shadow" :value="item.value"
                        :placeholder="item.placeholder"
                        :id="item.id"
                        @input="input"
                      
                         />
                </div>
            </form>
            <div class="login-btn" @click="login">Login</div>
        </div>
    </div>
</template>

<script>
// 插件会自动将代码转化为方式二中的按需引入形式
    import * as service from '../../http/service'
    import * as util from '../../util/util'
    export default {
        name:'login',
        components: {},
        props: {},
        data() {
            return {
                loginList: [{
                        id:'name',
                        name: '登录名',
                        value: '',
                        placeholder: 'Username or Email address',
                        type: 'text'
                    },
                    {  
                        id:'pwd',
                        name: '密码',
                        value: '',
                        placeholder: 'Password',
                        type: 'password'
                    }
                ],
                food:{
                    name:'桃子'
                }
            }
        },
        watch: {},
        computed: {},
        created() {},
        mounted() {
            this.getCityData();
            console.log(this.$store)
            this.$store.commit('SET_USERINFO',{name:'王菲',age:112})
            this.$store.dispatch('getCity')
            console.log(this.$store)
        },

        methods: {
            input(e){
                let loginList=this.loginList;
                loginList.forEach(tmp=>{
                    if(tmp.id===e.target.id){
                        tmp.value=e.target.value
                    }
                })
                // this.$set Vue.set(target,0,{message:'abcadfsaf'});
            },
            login(){
                let name=this.loginList.find(tmp=>tmp.id==='name')
                let pwd=this.loginList.find(tmp=>tmp.id==='pwd'); 
                let msg='';
                if(!name.value){
                    this.$toast('请输入姓名')
                    // alert('请输入姓名')
                    return;
                }
                if(!pwd.value){
                    this.$Toast('请输入密码')
                    // alert('请输入密码')
                    return; 
                }
                this.$store.commit('SET_USERINFO',{name:name.value,pwd:pwd.value});
                util.setStore('login-user',{name:name.value,pwd:pwd.value})
                this.$router.push('/home/index');
            },

            getCityData(){
                
                service.getCity({type:'guess'}).then(res=>{
                    console.log(res)
                })
            }
        },
    }
</script>
<style lang="less" scoped>
    .login {
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        min-height: calc(100vh - 72px);
        padding-top: 48px;
        box-sizing: border-box;

        img {
            flex: 0 0 58.333333%;
            max-width: 58.3333%;
            padding-right: 48px;
            height: 445px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            vertical-align: middle;
            border-style: none;
        }

        .login-wrapper {
            flex: 0 0 41.77777%;
            padding: 0 24px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            text-align: left;

            h1 {
                color: #4680ff;
                margin: 0;
                font-size: 14px;
            }

            h2 {
                margin-bottom: 24px;
                font-weight: 800;
            }

            p {
                color: #6c757d !important;
                margin-bottom: 16px;
            }

            .login-form {
                .login-input-item {
                    margin-bottom: 24px;

                    input.form-control {
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
                        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                        border-radius: 32px;
                        outline: none;
                    }

                    input.shadow {
                        -webkit-box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;
                        box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1) !important;
                    }

                    input::-webkit-input-placeholder {
                        color: #ccc;
                    }

                    input::-moz-placeholder {
                        color: #ccc;
                    }

                    input::-ms-input-placeholder {
                        color: #ccc;
                    }
                }
            }

            .login-btn {
                width: 135px;
                height: 36px;
                color: #fff;
                background-color: #4680ff;
                text-align: center;
                font-size: 14px;
                line-height: 36px;
                border-radius: 18px;
                cursor: pointer;
            }
        }
    }
</style>