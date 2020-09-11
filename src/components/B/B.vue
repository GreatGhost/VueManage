<template>
  <div class="wrapper">
    此处是组建b
    <button @click="tap">我是组件B的按钮</button>
    <div class="test" @click="tap">测试</div>
    <div class="test" @click="test2">传递方式二</div>
    <label for="" wx:if="label">{{label}}</label>
    <div class="input">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
  export default {
    name: 'componentB',
    inject:['componentA'],
    mixins:[Emitter],
    components: {},
    props: {
      label:{
        type:String
      },

    },
    data() {
      return {}
    },
    watch: {},
    computed: {},
    created() {
      this.$on('on-message', this.showMessage);
      console.log('组件B')
    },
    methods: {
      showMessage(text) {
        window.alert(text);
      },
      tap(){
        console.log('ceshi')
        this.dispatch('componentA','messageB','B向A传递数据')
      },
      test2(){
        this.$emit("message",'传递方式2')
      }
    },
    mounted() {

    }
  }
</script>
<style lang="less" scoped>
  .wrapper {}
</style>