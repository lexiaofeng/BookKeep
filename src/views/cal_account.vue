<template>
  <div class="cal_account">
      <div class="top">
          记一笔
      </div>
      <div class="tar_nav">
          <div class="boxs">
              <div class="box1 active" @click="disburse">
                  支出
              </div>
              <div class="box2  " @click="income">
                  收入
              </div>
          </div>
      </div>
      <Payway @jz="zd" :pd="leibie"></Payway>
    <Btmnav @tiaozhuan="tz"></Btmnav>
  </div>
</template>

<script>
    import Btmnav from '@/components/btmnav.vue'
    import Payway from '@/components/payway.vue'
    import axios from 'axios'
    import qs from 'qs'



  export default {
    name:'cal_account',
    props:[''],
    data () {
      return {
            leibie:1,
            baseUrl:domain.testUrl,
      };
    },

    components: {
        Btmnav,
        Payway,
    },

    computed: {},

    beforeMount() {},

    mounted() {
        let toke = localStorage.getItem("token");
        // console.log(111)
         axios({
                      method: 'get',
                      url: this.baseUrl+'api/account?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                            console.log(222)
                            // this.datas = res.data.data;
                            // if(res.data.data == null){
                            //     this.datas.mobile = '';
                            //     this.datas.avatar_url = '';
                            //     this.datas.nickname = '';
                            // }
                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
    },

    methods: {
        zd(par1,par2){
            let toke = localStorage.getItem("token");
            let data = {
                parent_id:0,
                type:par2,
                name:par1,
                sort:10,
            }
            axios({
                      method: 'post',
                      url: this.baseUrl+'api/category/create?token='+toke,
                      data: qs.stringify(data),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            // console.log(res);
                            // console.log(222)
                            // this.datas = res.data.data;
                            if(res.data.status ){
                                var a=res.data.data.id
                                this.$router.push({path : '/zhangdan', query : { category_id:a ,token:toke}})
                            }
                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   

            
        },
        disburse(){
            this.leibie = 1;
             $('.box1').addClass('active').siblings().removeClass('active');

        },
        income(){
            this.leibie = 2;
            $('.box2').addClass('active').siblings().removeClass('active');
        },
        tz(par1){
            this.$router.push({path:'/'+par1,query:{ }})
        },
    },

    watch: {}

  }

</script>
<style scoped >
    body{
        background-color: white;
    }
    .top{
        width: 100%;
        height: 70px;
        line-height: 70px;
        background-color: #5fb25b;
        text-align: center;
        font-size: 17px;
        color:white;
    }
    .tar_nav{
        width: 100%;
        height: 50px;
        border-bottom: 3px solid#edeef0;
    }
    .boxs{
        width: 50%;
        margin: 0 auto;
        height: 50px;
        /* border:1px solid red; */
    }
    .box1,.box2{
        width: 50%;
        height: 50px;
        display: inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        
    }
    .active{
        border-bottom: 3px solid #78cc9a;
    }
</style>