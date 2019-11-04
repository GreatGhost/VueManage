<template>
  <div class='nav-list'>
    <div class="list">
      <div class="item" @click="tapNav(index)" :class="item.isSelect?'active':''" v-for="(item,index) in nav" :key="index">
        <van-icon :name="item.icon" />
        
        <div class="name">{{item.name}}</div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      nav: {
        type: Array,
        required: true,
        default: []
      }
    },
    data() {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      tapNav(index){
        this.$emit('tap',index);
      }
    },

    watch: {}

  }
</script>
<style lang='less' scoped>
  .nav-list {
    width: 225px;
    .list {
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #adb5bd;
        height: 52px;
        &.active {
          background: #007bff;
          color:#fff;
           .van-icon{
             color:#fff;
           } 
        }
        .van-icon {
          font-size: 24px;
          margin-right: 16px;
          color: #adb5bd;
          
        }

      }
    }

  }
</style>