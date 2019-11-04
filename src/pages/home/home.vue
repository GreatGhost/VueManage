<template>
    <div class="home">
        <NavList :nav="navList" @tap="navTap" />
        <router-view />
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import NavList from '../../components/navList/navList';
    import navListVue from '../../components/navList/navList.vue';
    import * as service from '../../http/service'
    export default {
        data() {
            return {
                search:'',
                title: '你好',
                list:[],
                navList: [{
                        name: 'Home',
                        path: '/home/index',
                        isSelect: true,
                        icon: 'cashier-o'
                    },
                    {
                        name: 'Charts',
                        path: '/home/charts',
                        isSelect: false,
                        icon: 'chart-trending-o'
                    },
                    {
                        name: 'Tables',
                        path: '/home/forms',
                        isSelect: false,
                        icon: 'hot-o'
                    },

                ]
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        beforeCreate() {
            this.$axios({
                url: 'https://elm.cangdu.org/v1/cities?type=guess',
                method: 'get',
                data: {},

            }).then(function (res) {})
        },

        components: {
            NavList: NavList
        },
        methods: {
            navTap(e) {
                let navList = this.navList;
                navList.forEach((tmp, index) => {
                    if (index === e) {
                        tmp.isSelect = true;
                        this.$router.push({
                            path: tmp.path
                        })
                    } else {
                        tmp.isSelect = false
                    }
                })

            },
            change(e){
                let search=this.search;
                console.log(e)
                let param={
                    city_id:1,
                    type:'search',
                    keyword:search
                }
                let that=this;
            service.getSearch(param).then(res=>{
                console.log(res);
                that.list=res;
            })
            }


        }

    }
</script>

<style scoped lang="less">
    .home {
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }
</style>