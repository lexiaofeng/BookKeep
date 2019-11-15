<template>
  <div class="bottom_nav">
    <div class=" box"  @click="mx">
        <div>
            <div><i class="iconfont">&#xe672;</i></div>
            <span>明细</span>
        </div>
        
    </div>
    <div class=" box" >
        <div>
            <div><i class="iconfont">&#xe60d;</i></div>
            <span>超表</span>
        </div>
        
    </div>
    <div class=" box" @click="tocal">
        <div>
            <div><i class="iconfont">&#xe86a;</i></div>
            <span>记账</span>
        </div>
        
    </div>
    <div class=" box" >
        <div>
            <div><i class="iconfont">&#xe651;</i></div>
            <span>榜单</span>
        </div>
        
    </div>
    <div class=" box" @click="me">
        <div>
            <div><i class="iconfont">&#xe636;</i></div>
            <span>我的</span>
        </div>
        
    </div>
    
  </div>
</template>
    
<script>
    
  export default {
    name:'',
    props:[],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        tocal(){
            this.$emit('tojizhang')
        },
        mx(){
            this.$emit('tiaozhuan','mingxi')
        },
        jz(){
            this.$emit('tiaozhuan','zhangdan')
        },
        me(){
            this.$emit('tiaozhuan','personal')
        }
    },

    watch: {}

  }

</script>
<style >
@import "../assets/iconfont/iconfont.css";

   .bottom_nav{
       position: fixed;
       bottom: 0px;
       width: 100%;
       height:60px;
       background-color:white;
       display: flex;
       flex-direction: row;
   }
   .bottom_nav .box{
       
       height: 60px;
       /* border: 1px solid red; */
       flex: 1;
   }
    .bottom_nav .box div {
        text-align: center;
        width: 30px;
        height: 30px;
        /* border: 1px solid red; */
        display: block;
        line-height: 30px;
        
    }
     .bottom_nav .box i{
         font-size: 24px;
     }
     .bottom_nav .box span{
         position: relative;
         top:-4px;
     }
   
    .box div{
        margin: 4px auto 0px;
    }
   .bottom_nav .box:nth-child(3) i{
            color: #66b65f;
            /* background-color: white; */
            font-size: 52px;
            position: relative;
            top: -10px;
            left: -10px;
            /* border: 1px solid red; */
    }
</style>