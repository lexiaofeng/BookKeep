<template>
  <div class="tar">
    <div class="tar_box "  v-for="(user,index) in info1" :key="index">
        <div class="icon">
            <i class="iconfont" v-html="user.icon"></i>
        </div>
        <div class="hh"><h1>{{user.msg}}</h1></div>
        <div class="jt">
            <i class="iconfont">&#xe601;</i>
        </div>

    </div>
    <div class="tar_box "  v-for="(user,index) in info2" :key="index">
        <div class="icon">
            <i class="iconfont" v-html="user.icon"></i>
        </div>
        <div class="hh"><h1>{{user.msg}}</h1></div>
        <div class="jt">
            <i class="iconfont">&#xe601;</i>
        </div>

    </div>
     <div class="tar_box "  v-for="(user,index) in info3" :key="index" @click="logout">
        <div class="icon">
            <i class="iconfont" v-html="user.icon"></i>
        </div>
        <div class="hh"><h1>{{user.msg}}</h1></div>
        <div class="jt">
            <i class="iconfont">&#xe601;</i>
        </div>

    </div>
    
  </div>
  
</template>

<script>

  export default {
    name:'tar',
    props:['info1','info2','info3',],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        logout(){
            this.$emit('zx')
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
@import "../assets/iconfont/iconfont.css";
    .tar{
        width: 100%;
        height: 100%;
        background-color: white;
        // border:1px solid red;
        padding-top:5px; 
        // padding-bottom: 5px;
        
    }
    .tar_box{
        width: 96%;
        height: 40px;
        border-bottom: 1px solid #f9fbf8;
        margin: 15px 5px 0px;
        // line-height: 40px;s
       
    }
    .icon{
        width: 20px;
        height: 20px;
        // border: 1px solid red;
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;
        color: #6ec690;
    }
    .icon i{
        // color:lightgreen;
    }
    .hh{
        display: inline-block;
    }
    .hh h1{
        font-size: 18px;
        color: #9ea2a7;
    }
    .jt{
        float: right;
        width: 20px;
        height: 20px;
        margin-top: 10px;
    }
</style>