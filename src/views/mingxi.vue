<template>
  <div class="mingxi">
      <div class="top-nav">
          <div class="tit"> 一起记账</div>
          <div class="mx">
              <div class="zd">
                  <div class="tt">日期</div>
                  <div class="zz">
                      <!-- <select name="" >
                          <option value="">{{account.month}}</option>
                      </select> -->
                      <!-- {{account.month}} -->
                      <input class="aa" style=" background-color: #5ebe59" type="month" v-model="account.month" @change="gb">
                      </div>
              </div>
              <div class="zd">
                  <div class="tt">收入</div>
                  <div class="zz" v-html="this.account.in"></div>
              </div>
              <div class="zd">
                  <div class="tt">支出</div>
                  <div class="zz" v-html="this.account.out"></div>
              </div>
          </div>
      </div>
    <Btmnav  @tojizhang="charge" @tiaozhuan="tz" ></Btmnav>
    
    <!-- <Dateline></Dateline> -->
    <Zhangmian :senddata="list" @dj="toxq" :page="page" @jiazai = "jiazai"></Zhangmian>






    <div class="space"></div>
  </div>
</template>

<script>
import Btmnav from '@/components/btmnav.vue'
import Dateline from '@/components/dateline.vue'
import Zhangmian from '@/components/zhangmian.vue'
import axios from 'axios'
import qs from 'qs'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          account:{
              month:'',
              in:'',
              out:'',
          },
          list:[],
          bill:{},
          baseUrl:domain.testUrl,
          page:1,
      };
    },

    components: {
        Btmnav,
        Dateline,
        Zhangmian,
    },

    computed: {},

    beforeMount() {},

    mounted() {
    //     console.log(document.documentElement.clientHeight);
    //   console.log(document.documentElement.scrollTop);
    //   console.log(document.documentElement.scrollHeight);
        let toke = localStorage.getItem("token");
         axios({
                      method: 'get',
                      url: this.baseUrl+'api/view/home?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            // console.log(res);

                            if(res.data.status){
                                this.account.month = res.data.data.account.month;
                                this.account.in = res.data.data.account.in;
                                this.account.out = res.data.data.account.out;
                                // console.log(this.account)
                            }
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   





                    //账面
        axios({
                      method: 'get',
                      url: this.baseUrl+'api/record/account?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            // console.log(res);
                            this.list = res.data.data.list;
                            console.log(this.list)
                            
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
    },

    methods: {
        jiazai(par1,par2){
                // console.log(par2);
                this.page = par1;
                this.list = this.list.concat(par2);
                // console.log(333);
                console.log(this.list);

        },
        toxq(par){
            console.log(par);
            let toke = localStorage.getItem("token");
            //单条账单
            axios({
                      method: 'get',
                      url: this.baseUrl+'api/record/detail?id='+par+'&token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                           if(res.data.status){
                            //    this.bill = res.data.data;
                               this.$router.push({path : '/bill', query : { id:par}})
                           }
                            
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
        },
        charge(){
            this.$router.push({path : '/account', query : {token:this.Token}  })
        },
        tz(par1){
            this.$router.push({path:'/'+par1,query:{ }})
        },
        gb(){
            let toke = localStorage.getItem("token");
            console.log(toke)
         axios({
                      method: 'get',
                      url: this.baseUrl+'api/record/account?token='+toke+'&begin_date='+this.account.month+'-01&end_date='+this.account.month+'-30',
                    //   data: qs.stringify({begin_date:this.account.month+'-01',end_date:this.account.month+'-30'}),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                            this.list = res.data.data.list;
                            console.log(222)
                            console.log(this.list)
                            this.account.in = res.data.data.in;
                            this.account.out = res. data.data.out;
                            console.log(111);
                            console.log(this.account);

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
        },
    },

    watch: {}

  }

</script>
<style  scoped>
    .bottom_nav .box:nth-child(1) div{
        color: #66b65f;
    }
    .top-nav{
        width: 100%;
        height: 160px;
        background-color: #5ebe59;
        color:white;
        position: fixed;
        top: 0px;

    }
    .tit{
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 18px;
        /* border: 1px solid red; */

    }
    .mx{
        width: 100%;
        height: 80px;
        /* border: 1px solid red; */
        display: flex;

    }
    .mx .zd{
        flex: 1;
        /* border: 1px solid red; */
        font-size: 16px;
        font-weight: 300;
        text-indent: 1em;

    }
    .tt{
        width: 100%;
        height: 30px;
    }
    .zz{
        font-size: 21px;
        font-weight: 200;
    }
    .space{
        width: 100%;
        height: 60px;
        
    }
    .aa{
        /* outline: none; */
        width: 123px;
        background-color: #5ebe59;
        border: none;
        color: #ddd;
        font-size: 16px;
        /* -moz-appearance: textfield; */
         -webkit-appearance: none; 
         /* 手机箭头 */
    }
    
</style>