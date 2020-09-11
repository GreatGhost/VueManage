<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import * as util from './util/util'

export default {
  name: 'app',
  components:{

  },
  created(){
    this.initStore();
  },
  methods:{
    initStore(){
      let that=this;
      if (util.getStore("store")) {
        this.$store.replaceState(
          Object.assign({}, this.$store.state, JSON.parse(util.getStore('store')))
        );
      }
      window.addEventListener("beforeunload", () => {
        util.setStore("store", this.$store.state);
      });
    }
  }
}
</script>

<style>
@import url('./style/common.less');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
