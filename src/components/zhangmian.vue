<template>
  <div class="zm"  @scroll="scrollEvent" >
      <div class="zhangmian" v-for="(user,index) in senddata" :key="index" @click="tz(index)">
    <div class="dd" v-html="user.date"></div>
    <div class="money">
        <div class="pay">{{user.type_string}}:</div>
        <div class="jine" v-html="user.total_money"></div>
    </div>
    
    
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
  export default {
    name:'zhangmian',
    props:['senddata','page'],
    data () {
      return {
        datas:[],
        id:'',
        
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
       
    },

    methods: {
        tz(index){
            
            this.$emit('dj',this.senddata[index].id)
        },
        scrollEvent(e){
          // var p = this.page+1;
          let toke = localStorage.getItem("token");
        let scrollBottom =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;

        if(scrollBottom == 0){
          setTimeout(
                axios({
                  method: "get",
                  url:
                    "http://jizhang-api-dev.it266.com/api/record/account?token=" +toke+'&page='+(this.page+1),
                  
                   headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                            // this.list = res.data.data.list;
                            // console.log(this.list)
                            if(res.data.status){
                            
                              this.$emit('jiazai',res.data.data.page.currentPage,res.data.data.list)
                            }
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
            ,2000);
            
        }
      },
      

    },

    watch: {}

  }

</script>
<style  scoped>
    .zm{
        margin-top:160px; 
        height: calc(100vh - 60px);
        overflow:auto;
    }
    .zhangmian{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ddd;
    }
    .dd{
        width: 100px;
        height: 80px;
        line-height: 80px;
        /* border: 1px solid red; */
        float: left;
        /* text-indent: 2em; */
        margin-left: 20px;
        font-size: 16px;
        color: #c0c0c0;
    }
    .money{
        width: 150px;
        height: 80px;
        line-height: 80px;
        /* border: 1px solid red; */
        float: right;
        /* margin-right:20px;  */
    }
    .pay{
        width: 50px;
        height: 80px;
        line-height: 80px;
        /* border: 1px solid red; */
        /* display: inline-block; */
        float: left;
        color: #928282;
    }
    .jine{
         width: 100px;
        height: 80px;
        line-height: 80px;
        /* border: 1px solid red; */
        /* display: inline-block; */
        float: right;
        color:#d25f5f;
    }
</style>