<template>
  <div class="wrapper">
      <button @click="tap">触发事件</button>
      <B @message="getData2" />
      <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import B from '../../components/B/B'
export default {
    name:'componentA',
  components:{B},
  mixins: [ Emitter ],
  props:{},
  data(){
    return {
    }
  },
  provide(){
    return {
      componentA:this
    }
  },
  watch:{},
  computed:{},
  methods:{
      tap(){
          this.broadcast('componentB','on-message',"hello world")
      },
      getData(txt){
        window.alert(txt)
      },
      getData2(t){
        console.log(t)
      }
  },
  created(){
    this.$on('messageB',this.getData)
  },
  mounted(){}
}
</script>
<style lang="less" scoped>
.wrapper{}
</style>