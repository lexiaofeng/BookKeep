<template>
  <div class="portrait">
    <div class="tx" @click="jj">
        <img :src="senddata.avatar_url" alt="">
    </div>
     <div class="wz"  v-if="senddata.nickname==''">
         <router-link to="/">先去登录</router-link>
     </div>
    <div class="wz"  v-html="senddata.nickname" v-else></div>
  </div>
</template>

<script>
import axios from 'axios'
    import qs from 'qs'
  export default {
    name:'Portrait',
    props:['senddata'],
    data () {
      return {
          
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        // console.log(this.senddata);
       
    },

    methods: {
        jj(){
            this.$emit('inf');
        },
    },

    watch: {}

  }

</script>
<style  scoped>
    .portrait{
        width: 100%;
        height: 140px;
        background-color: #83bd57;
        padding-top: 40px;
    }
    .portrait .tx{
        width: 80px;
        height: 80px;
        /* border: 1px solid red; */
        margin:0 auto;
        border-radius: 50%;
        overflow: hidden;
    }
    .portrait .tx img{
        width: 80px;
        height: 80px;
    }
    .wz{
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
        font-size: 17px;
        color:white;
        height: 20px;
    }
</style>