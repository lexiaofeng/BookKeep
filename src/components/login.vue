<template>
  <div class="login">





      


    <div class="log_box" v-for="(user,index) in inf" :key="index" v-if="y==2">
        <div class="icon">
            <img :src="user.path" alt="">
            
        </div>
        
                <div class="inp" v-if="user.p=='1'">
                <input type="text" :placeholder="user.ph"  v-model="ver.mobile">
                </div>
                <div class="inp" v-else>
                    <input type="password" :placeholder="user.ph" v-model="ver.password" >
                </div>
        
        
        
    </div>
    <div class="log_box" v-for="(user,index) in inf" :key="index"  v-else>
        <div class="icon">
            <img :src="user.path" alt="">
            
        </div>
        
                <div class="inp" v-if="user.p=='1'">
                <input type="text" :placeholder="user.ph"  v-model="ver.mobile">
                </div>
                
        
        
        
    </div>





    <div v-if="x==1">
        <div class="log_box reg">
                <input  type="text"  v-model="datas.captcha_code">
                <div class="dis"><img src="" alt=""></div>
                <div class="mes_reg" @click="pic">获取图片码</div>
            </div>
            <div class="log_box reg">
                <input type="text" v-model="ver.verify">
                <div class="mes_reg" @click="hide">获取短信码</div>
            </div>
    </div>
    <div v-else>
         <div class="log_box reg">
                <input  type="text"  v-model="datas.captcha_code">
                <div class="dis"><img src="" alt=""></div>
                <div class="mes_reg" @click="pic">获取图片码</div>
            </div>
        <div class="log_box reg">
                <input type="text" v-model="ver.verify">
                <div class="mes_reg" @click="hide">获取短信码</div>
            </div>

            <div class="log_box"  >
                        <div class="icon">
                            <img :src="mm.path" alt="">
                            
                        </div>    
                        <div class="inp" >
                            <input type="password" :placeholder="mm.ph" v-model="ver.password" >
                        </div>
        
        
        
            </div>

    </div>

  </div>
</template>
    
<script>
   import { Dialog } from 'vant';
  export default {
    name:'login',
    props:['inf','msg','ver','x','y','mm'],
    data () {
      return {
            datas:{
                mobile:'',
                captcha_code:'',
                captcha_key:'',
                
            },
            pwd:'',
            verifycode:'',

            
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        hide(){
            
            this.$emit('mes_click',this.datas)
        },
        pic(){
            this.$emit('pic_click')
        }
    },

    watch: {}

  }

</script>
<style  >
   

    .login{
        width: 80%;
        height: 100%;
        border: 1px solid #ddd;
        margin: 0 auto;
        margin-top: 30px;
        padding: 10px;
        /* background-color:; */
        /* margin-bottom: 70px; */
    }
    .log_box{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        /* border: 1px solid red; */
        position: relative;
        margin-bottom: 10px;
        padding: 3px;
        
    }
    .icon{
        width: 20px;
        height: 30px;
        display: inline-block;
        
        padding-top: 5px;
    }
    .icon img{
        width: 20px;
        /* margin-top: 5px; */
    }
    .inp{
        display: inline-block;
        width: 130px;
        height: 30px;
        position: absolute;
        margin-left: 5px;
        

        
    }
    .inp input{
        /* background-color: #f8f8f8; */
        outline: none;
        border: none;
        
    }
    .reg input{
        outline: none;
        /* background-color: #f8f8f8; */
        border: none;
        padding-left: 10px;
        display: inline-block;
        width: 80px;
        
    }
    .mes_reg{
        width: 62px;
        height: 20px;
        border: 1px solid #fa9138;
        display: inline-block;
        font-size: 5px;
        /* position: absolute; */
        line-height: 23px;
        padding: 3px;
        color: #fa9138;
        border-radius: 10%;
        float: right;
        text-align: center;
    }
    .dis{
        width: 80px;
        height: 40px;
        display: inline-block;
        position: absolute;
        left: 138px;
    }
    
</style>