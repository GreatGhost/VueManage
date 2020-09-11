<template>
  <div class="wrapper">
      <input 
      type="text"
      :value="currentValue"
      @input="handleChange"
       />
  </div>
</template>

<script>
export default {
  name:'C',
  components:{},
  props:{
      value:{
          type:[String,Number],
          default:''
      }
  },
  data(){
    return {
        currentValue:''
    }
  },
  watch:{},
  computed:{},
  methods:{
      handleChange(e){
          this.$emit('change',e)
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.wrapper{}
</style>