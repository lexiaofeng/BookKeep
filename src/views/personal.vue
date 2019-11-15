<template>
  <div class="person">
      <Portrait :senddata="datas" @inf="toinfo"></Portrait>
      <Zhangben :num ="nums" :length="len"></Zhangben>
      
      <Greyline></Greyline>
      <Tar :info1="box1"></Tar>
      <Greyline></Greyline>
      <Tar :info2="box2"></Tar>
      <Greyline></Greyline>
      <Tar :info3="box3" @zx="zhuxiao"></Tar>
      <Greyline></Greyline>

        <Btmnav @tojizhang="charge" @tiaozhuan="tz"  ></Btmnav>
        <div class="space"></div>
  </div>
</template>

<script>
    import Btmnav from '@/components/btmnav.vue'
    import Portrait from '@/components/portrait.vue'
    import Zhangben from '@/components/zhangben.vue'
    import Greyline from '@/components/greyline.vue'
    import Tar from '@/components/tar.vue'
    import mx from '../assets/imgs/btm1.png'
    import cb from '../assets/imgs/btm2.png'
    import bd from '../assets/imgs/btm3.png'
    import wd from '../assets/imgs/btm4.png'
    import axios from 'axios'
    import qs from 'qs'
    // import { Button } from 'vant';
    // import { Dialog } from 'vant';
    // import Vue from 'vue';
    
  export default {
    name:'',
    props:[''],
    data () {
      return {
          
          box1:[{
             icon:'&#xe6ba;',
             msg:'我的vip',
          },
          {
            icon:'&#xe666;',
            msg:'邀请好友',
          },{
            icon:'&#xe667;',
            msg:'皮肤设置',
          },],
          box2:[{
              icon:'&#xe623;',
              msg:'公众号',
          },{
             icon:'&#xe603;',
              msg:'联系客服', 
          },{
              icon:'&#xe742;',
              msg:'意见反馈',
          },],
          box3:[{
               icon:'&#xe600;',
              msg:'退出登录',
          }],




          datas:{
              mobile:'',
              nickname:'',
              avatar_url:'',
          },
          Token:'',
          nums:'',
          len:'',
          baseUrl:domain.testUrl,
          

      };
    },

    components: {
        Btmnav,
        Portrait,
        Zhangben,
        Greyline,
        Tar,
    },

    computed: {},

    beforeMount() {},
    created(){
        
    },

    mounted() {
        // console.log(this.$route.query.token)
        // var lastname = localStorage.getItem("key");
         let toke = localStorage.getItem("token");
          this.Token = localStorage.getItem("token");
        //   console.log(this.Token)
        // var  _this = this;
        axios({
                      method: 'get',
                    //   url: 'http://jizhang-api-dev.it266.com/api/user/profile?token='+toke,
                     url: this.baseUrl+'api/user/profile?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            // console.log(res);
                            // alert(res.data.data);
                            if(res.status){
                                this.datas.mobile = res.data.data.mobile;
                                this.datas.avatar_url = res.data.data.avatar_url;
                                this.datas.nickname = res.data.data.nickname;
                                console.log(111)
                                // console.log(this.datas)
                                
                            }
                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
                            // console.log(this.datas)






                    
        axios({
                      method: 'get',
                       url: this.baseUrl+'api/book?token='+toke,
                    //   data: qs.stringify(ll),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            // console.log(res);
                           if(res.data.status){
                              this.nums = res.data.data.length;
                           }
                            
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })






            //  axios({
            //           method: 'get',
            //            url: this.baseUrl+'api/record/account?token='+toke,
            //         //   data: qs.stringify(par),
            //           headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            //           })
            //           .then((res)=>{
            //                 console.log(res);
            //                 this.list = res.data.data.list;
            //                 // console.log(this.list.length)
                            
            //                 this.len = this.list.length;
            //                 console.log(555)
            //                 // console.log(this.len);
                            
                            
            //                 })
            //           .catch(function(error){
            //                 console.log(error)//错误处理 相当于error
            //                 })   


            axios({
                      method: 'get',
                       url: this.baseUrl+'api/record/real?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                            this.len= res.data.data.page.itemCount;
                            // // console.log(this.list.length)
                            
                            // this.len = this.list.length;
                            // console.log(555)
                            // console.log(this.len);
                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
    },

    methods: {
        zhuxiao(){
            
            let toke = localStorage.getItem("token");
            // console.log(toke)
              axios({
                      method: 'get',
                       url: this.baseUrl+'api/user/logout?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                          
                            console.log(res.data.data);
                            // this.datas = res.data.data;
                            if(res.data.data == null){
                                this.datas.mobile = '';
                                this.datas.avatar_url = '';
                                this.datas.nickname = '';
                            }
                             this.$router.push({path : '/', query : { }})
                            
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
        toinfo(){
            this.$router.push({path:'/info',query:{ }})
        },
    },

    watch: {}

  }

</script>
<style scoped>
    .bottom_nav .box:nth-child(5) div{
        color: #66b65f;
    }
    
        
    .space{
        width: 100%;
        height: 60px;
        
    }
    
</style>