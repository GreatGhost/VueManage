<template>
  <div class='ibutton'>
      <button :class="'i-button-size '+size" :disabled="disabled" @click="tap">单击按钮</button>
      <slot v-if="range==='a'" class="a"></slot>
      <slot v-if="range==='b'" name="tip" class="b"></slot>
  </div>
</template>

<script>
  // 判断参数是否是其中之一
  function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true;
      }
    }
    return false;
  }

  export default {
    name:'ibutton'  ,
      inject:['name'],
    props:{
        size:{
            validator(value){
                return oneOf(value,['small','big','default'])
            }
        },
        disabled:{
            type:Boolean,
            default:false
        },
        range:{
            type:String,
            default:'a'
        }
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        console.log(this)
        },

    methods: {
        tap(){
            console.log(11)
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
    .ibutton{
        button{
            display: block;
            width:118px;
            outline: none;
            border:none;
            border:0;
            background: #f2f2f2;
            &.default{
                font-size: 14px;
                height:28px;
                line-height: 28px;
            }
            &.small{
                width:90px;
                height:24px;
                line-height: 24px;
                font-size: 12px;
            }
            &.big{
                width:140px;
                height:32px;
                font-size: 16px;
                line-height: 32px;
            }
            
        }
        .a{
            color:red;
        }
        .b{
            color:chartreuse;
        }
    }
</style>