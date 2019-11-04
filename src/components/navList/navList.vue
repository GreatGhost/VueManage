<template>
  <div class='nav-list'>
      <div class="list" :class="item.isSelect?'active':''" v-for="(item,index) in nav" :key="index">
            <div class="icon"></div>
            <div class="item">{{item.name}}</div>
      </div>

  </div>
</template>

<script>

  export default {
    name:'',
    props:{
        nav:{
            type:Array,
            required:true,
            default:[]
        }
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
    .nav-list{
        width:225px;
        height:52px;
        .list{
            display: flex;
            align-items: center;
            justify-content: center;
            &.active{
                    background: #007bff;
            }
            .icon{
                width:24px;
                height:36px;
                margin-right: 16px;
                background: #fff;
            }
            .item{
                font-size: 14px;
            }
        }

    }
</style>