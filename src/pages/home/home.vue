<template>
    <div class="home">
        首页
        {{title}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'你好'
        }
    },
    beforeCreate(){
        console.log('测试')
        this.$axios({
            url:'https://elm.cangdu.org/v1/cities?type=guess',
            method:'get',
            data:{},

        }).then(function(res){
            console.log(res);
        })
    }

}
</script>

<style scoped lang="less">
  .home{
      color:red;
  }
</style>