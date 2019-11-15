<template>
  <div class="register">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav :msg="login"></Nav>
    <Login :inf="info" :msg="login" @mes_click="getNotice" @pic_click="getPic" :ver="user" :x="pd" :y="sj">  </Login>
    <Btn :msg="login"  @zc="zhuce"></Btn>
    <div class="tz">
       <router-link to="/">已有账号点击登录</router-link>
    </div>
    <!-- <Alert :show="dis" @close="cs">
          <p v-html="alert"></p>
    </Alert> -->
  </div>
</template>


<script>

import Nav from '@/components/nav.vue'
import Login from '@/components/login.vue'
import Btn from '@/components/btn.vue'
import Alert from '../components/alert'
import icon1 from '../assets/imgs/iphone.png'
import icon2 from '../assets/imgs/mima.png'
import axios from 'axios'
import qs from 'qs';
import { Dialog } from 'vant';
export default {
  name: 'home',
  components: {
    Nav,
    Login,
    Btn,
     Alert,
  },
  data(){
    return{
      login:'注册',
      info:[{
          path:icon1,
          ph:'请输入手机号码',
          p:1,
      },{
          path:icon2,
          ph:'请输入密码',
          p:2,
      }],
      user:{
        mobile:'',
        verify:'',
        password:'',
      },
      pd:1,
      sj:2,
      baseUrl:domain.testUrl,
      // alert:'',
      // dis:false,
     
      
    }
  },
  methods:{
    cs(par1){
            this.dis = par1;
        },
    getNotice(par){
        console.log(par);
        par.mobile=this.user.mobile;
        // this.user.

        if(par.mobile.length==11){
                par.captcha_key = this.key;
                
                
                axios({
                      method: 'post',
                      url: this.baseUrl+'api/sms/verify',
                      data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            // console.log(res);
                            // alert(res.data.data);
                            //  this.dis = true;
                            // this.alert = res.data.data;
                            Dialog.alert({
                                  message: res.data.data
                                }).then(() => {
                                  return
                                });
                                                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
           }else{
              //  alert('请输入正确手机号')
              //  this.dis = true;
              //  this.alert = '请输入正确手机号';
              Dialog.alert({
                      message: '请输入正确手机号'
                    }).then(() => {
                      return
                    });
               
           }
    },
    getPic(){
            // console.log(this.user)
            axios.get(this.baseUrl+'api/captcha')
            .then((res)=>{
                  console.log(res.data.data.url);//处理成功的函数 相当于success
                  $('.dis img').attr('src',res.data.data.url);
                console.log(res.data.data.key);
                this.key = res.data.data.key;
      //  console.log(this.key);


      }).catch(function(error){
        console.log(error)//错误处理 相当于error
      })
    },
    zhuce(){
                  
                  axios({
                      method: 'post',
                      url: this.baseUrl+'api/user/register',
                      data: qs.stringify(this.user),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then(function(res){
                            if(res.data.status){
                              // alert('注册成功');
                            //    this.dis = true;
                            // this.alert = '注册成功';
                            Dialog.alert({
                                    message: '注册成功'
                                  }).then(() => {
                                    this.$router.push({path : '/home', query : { }})
    
                                  });
                                                                
                              console.log(res.data);
                              
                            }else{
                              // alert(res.data.data);
                            //    this.dis = true;
                            // this.alert = res.data.data;
                              Dialog.alert({
                                    message: res.data.data
                                  }).then(() => {
                                    return
                                  });
                            }
                            // console.log(res.data);
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
    }
  },
}
</script>

<style scoped>

  body{
    background-color: #f8f8f8;

  }
  .tz{
    display: block;
    width: 100%;
    height: 30px;
    text-align: center;
    margin-top: 10px;

  }
</style>
