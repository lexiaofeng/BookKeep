<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav :msg="login"></Nav>
    <!-- <Login :inf="info"> </Login> -->
    <Login :inf="info" :msg="login" @mes_click="getNotice" @pic_click="getPic" :ver="user" :x="pd" :y="sj"> </Login>
    <div class="reset" @click="toreset">
      忘记密码？
      </div>
    <Btn :msg="login" @dl="denglu"></Btn>
    <div class="tz">
        <router-link to="/register">先去注册</router-link>
    </div>
     <Alert :show="dis" @close="cs">
          <p v-html="alert"></p>
    </Alert>
  </div>
</template>

<script>

import Nav from '@/components/nav.vue'
import Login from '@/components/login.vue'
import Btn from '@/components/btn.vue'
import icon1 from '../assets/imgs/iphone.png'
import icon2 from '../assets/imgs/mima.png'
import Alert from '../components/alert'
import axios from 'axios'
import qs from 'qs'
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
      login:'登录',
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
        captcha_code:'',
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
        par.mobile = this.user.mobile;
        this.user.captcha_code = par.captcha_code
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
                            console.log(res.data);
                            // alert(res.data.data);
                            // this.dis = true;
                            // this.alert = res.data.data;
                            Dialog.alert({
                                  message: res.data.data
                                }).then(() => {
                                  return;
                                });
                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
           }else{
              //  alert('请输入正确手机号')
              // this.dis = true;
              // this.alert = '请输入正确手机号';
              Dialog.alert({
                      message: '请输入正确手机号'
                    }).then(() => {
                      return
                    });
               
           }
    },
    getPic(){
            // console.log(this.user)
            axios.get('http://jizhang-api-dev.it266.com/api/captcha')
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
    denglu(){
      let _this = this;
        axios({
                      method: 'post',
                      url: this.baseUrl+'api/user/token/mobile',
                      data: qs.stringify(this.user),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            if(res.data.status){
                              // alert('登录成功');
                             localStorage.setItem("token", res.data.data.token);
                             _this.$router.push({path : '/personal', query : { }})
                              console.log(res.data.data.token);
                              //  _this.$router.push({path : '/personal', query : { token:res.data.data.token}})
                              
                            }else{
                              // alert(res.data.data);
                              // this.dis = true;
                              // this.alert = res.data.data;
                              Dialog.alert({
                                  message: res.data.data
                                }).then(() => {
                                  return
                                });
                            }
                            // console.log(res);
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
    },
    toreset(){
        // console.log(this.user.mobile)
        this.$router.push({path : '/reset', query : { mobile:this.user.mobile }})
    }
  },
}
</script>

<style scoped>
  
  body{
    background-color: #f8f8f8;

  }
  .reset{
    width: 33%;
    height: 30px;
    text-align: center;
    padding: 5px;
    color:#979797;
  }
  a{
    color:#979797;
  }
  /* .router-link-active{
    color:#979797;
  } */
  .tz{
    display: block;
    width: 100%;
    height: 30px;
    text-align: center;
    margin-top: 10px;

  }
  
</style>
