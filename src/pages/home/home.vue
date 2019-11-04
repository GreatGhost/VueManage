<template>
    <div class="home">
        <NavList :nav="navList" />
        <router-view/>
    </div>
</template>

<script>
 import {mapState, mapMutations} from 'vuex'
 import NavList from '../../components/navList/navList';

export default {
    data(){
        return {
            title:'你好',
            navList:[
                {name:'Home',path:'/',isSelect:true},
                {name:'Charts',path:'/chart',isSelect:false}
            ]
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    beforeCreate(){
        this.$axios({
            url:'https://elm.cangdu.org/v1/cities?type=guess',
            method:'get',
            data:{},

        }).then(function(res){
        })
    },

    components:{
        NavList:NavList
    }

}
</script>

<style scoped lang="less">
  .home{
      color:red;
  }
</style>