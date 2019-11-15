<template>
  <div class="zhangben">
    <div>
        <h1>0</h1>
        <h3>已邀请</h3>
    </div>
    <div @click="zb">
        <h1 v-html="this.num"></h1>
        <h3>总账本</h3>
    </div>
    <div>
        <h1 >{{this.length}}</h1>
        <h3>共记账</h3>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['num','length'],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        zb(){
            this.$router.push({path : '/zhangbu', query : { }}) 
        },
    },

    watch: {}

  }

</script>
<style  scoped>
    .zhangben{
        width: 100%;
        height: 80px;
        /* border:1px solid red; */
        display: flex;

    }
    .zhangben div{
        
        height: 60px;
        flex: 1;
        margin-top: 10px;
        text-align: center;
    }
     .zhangben div:nth-child(2){
       border-left: 1px solid #ddd;
       border-right: 1px solid #ddd;
    }
    .zhangben div h1{
        margin-top: 10px;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .zhangben div h3{
        color: #c3c7c1;
    }
   
    .zhangben div:nth-child(1) h1{
        color:#da8343;
    }
    .zhangben div:nth-child(2) h1{
        color:#4893e8;
    }
    .zhangben div:nth-child(3) h1{
        color:#90ba86;
    }
</style>