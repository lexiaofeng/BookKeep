<template>
  <div class="zhangdan">
      <div class="nav">
          <div class="back" @click="ret">返回</div>
          新增记账
      </div>
      <div class="jz">
          <input type="text" placeholder="记账金额" v-model="datas.total_money">

      </div>
      <div class="jz">
          <input type="text" placeholder="实付金额" v-model="datas.money">

      </div>
      <div class="zh">
          <div class="zz">
            账户类型
          </div>
          <select  @change="changeProduct($event)" > 
                <option value="">--请选择--</option>
                <option name="zh" v-for="(user,index) in zhanghu" :key="index" :value="user.id" >{{user.name}}</option> 
                
         </select>
      </div>
      <div class="date">
          日期
          <input class="dd" type="date" v-model="datas.date">

      </div>
      <div class="remark">
          备注
          <input class="inp" type="textarea" v-model="datas.remark">
      </div>
      <!-- 图片 -->
      <div class="pic">
            <div class="wai" >
                <div class="boxs" v-for="(arr,index) in picarr" :key="index">
                    <div class="zt">
                        <span class="cha" @click="del(index)">x</span>
                        <img  alt="" :src='arr'  class="imgs">
                    </div>
                
                </div>
            </div>
          <div class="xc">
              <input type="file" class="input_flie" accept="image/*"  ref="file" @change='onchangeImgFun' >
              
               
                <div class="div_shuline "></div>
                <div class="div_hengline"></div>
          </div>
          
          
      </div>


      <div class="sub" @click="pay">
          记账
      </div>
  
    <div class="onload">
        <img :src="load" alt="" >
    </div>
      <Alert :show="dis" @close="cs">
          <p v-html="alert"></p>
 
    </Alert>

      
  </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    import jq from '../assets//jquery'
    import load from '@/assets/imgs/onload.gif'
    import Alert from '../components/alert'
    import { Dialog } from 'vant';
  export default {
    name:'',
    props:[''],
    data () {
      return {
          datas:{
              total_money:'',
              money:'',
              account_id:'',
              category_id:'',
              date:'',
              remark:'',
              image_keys:'',
          },
          zhanghu:[],
          imgStr: '',
          fileKey: "",
          picarr: [],
          keyarr: [],
          string:'',
          img_k:[],
          baseUrl:domain.testUrl,
          load:load,
          alert:'',
          dis:null,
          
      };
    },

    components: {Alert},

    computed: {},

    beforeMount() {},

    mounted() {
        // let toke = this.$route.query.token;
        let toke = localStorage.getItem("token");
        this.datas.category_id = this.$route.query.category_id;

         axios({
                      method: 'get',
                      url: this.baseUrl+'api/account?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                            if(res.data.status){
                                this.zhanghu = res.data.data;
                                console.log(this.zhanghu);
                            }
                            // console.log(222)
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
        cs(par1){
            this.dis = par1;
        },
            del(index) {
        
        this.picarr.splice(index, 1);
        },
        
        pay(){
            let toke = localStorage.getItem("token");
             this.datas.image_keys = this.string;
             if(this.datas.money>this.datas.total_money){
                //  alert('金额错误')
                // this.dis = true;
                //     this.alert = '金额错误';

                Dialog.alert({
                    message: '金额错误'
                    }).then(() => {
                     return ;
                    });
                
             }
            console.log(this.datas.total_money)
            console.log(this.datas.money)
            console.log(this.datas.account_id)
            console.log(this.datas.category_id)
            console.log(this.datas.date)
            if(this.datas.total_money==''||this.datas.money==''||this.datas.account_id =='' ||this.datas.category_id==''||this.datas.date ==''){
                    // alert('账户信息不能为空')
                    // this.dis = true;
                    // this.alert = '';
                     Dialog.alert({
                            message: '账户信息不能为空'
                            }).then(() => {
                            return ;
                            });
                    
                    console.log(this.dis);
                    // return ;
            }else{
                var timer=setInterval(function(){
                $('.onload').css('display','block');
                
            },10)
                axios({
                      method: 'post',
                      url: this.baseUrl+'api/record/create?token='+toke,
                      data: qs.stringify(this.datas),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                            if(res.data.status){
                                clearTimeout(timer);
                                $('.onload').css('display','none');
                                
                                    this.zhanghu = res.data.data;
                                console.log(this.zhanghu);
                               
                                // alert(res.data.data);
                                // this.dis = true;
                                // this.alert = res.data.data;
                                 Dialog.alert({
                                        message: res.data.data
                                        }).then(() => {
                                             this.$router.push({path : '/mingxi', query : { }})

                                        });
                                
                                

                            }else{
                                // clearInterval(timer);
                                // $('.onload').css('display','none');
                                // alert('新增失败');
                                 Dialog.alert({
                                        message: '新增失败'
                                        }).then(() => {
                                            

                                        });
                                
                            }
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            }) 
            }
             
        },
        changeProduct(event) {
             this.datas.account_id = event.target.value; //获取option对应的value值
             console.log(this.datas.account_id)
            //  console.log("你选中了",this.ProductActive)
           },
           ret(){
               this.$router.push({path : '/mingxi', query : { }})
           },




        onchangeImgFun (e) {
            var file = e.target.files[0]
            console.log(file)
            let params = new FormData();

            params.append("file", file);

        let toke = localStorage.getItem("token");
        axios({
                      method: 'post',
                      url: this.baseUrl+'api/upload/image?token='+toke,
                      data: params,
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);

                            if (res.data.status) {
                                this.imgStr = res.data.data.file.thumbnailUrl._temp;

                                this.fileKey = res.data.data.file.fileKey;
                                
                                
                                this.picarr.push(this.imgStr);
                                this.keyarr.push(this.fileKey);
                                console.log(111)
                                // console.log(this.keyarr);
                                console.log(222)
                                this.img_k.push(res.data.data.file.fileKey );
                                // this.datas.image_keys.join(',');
                                this.string=this.img_k.join(',');
                                console.log(this.string);

                                if (this.picarr.length >= 3) {
                                    document.getElementsByClassName("input_flie")[0].style.display = "none";
                                    document.getElementsByClassName("div_shuline")[0].style.display = "none";
                                    document.getElementsByClassName("div_hengline")[0].style.display = "none";
                                     document.getElementsByClassName("xc")[0].style.display = "none";
                                    }

                            }
     
                            
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
    .nav{
           width: 100%;
            height: 70px;
            line-height: 70px;
            background-color: #5fb25b;
            text-align: center;
            font-size: 17px;
            color: white;
            position: relative;
            
    }
    .back{
        position: absolute;
        left: 10px;;
        width: 50px;
        height: 50px;
        /* border:1px solid red; */
        /* padding: -1px;
        margin-left: 20px; */
        display: inline-block;
    }
    .jz input{
        width: 100%;
        height: 50px;
        outline: none;
        text-indent: 2em;
        
        

    }
    .jz{
        border-bottom:1px solid #ddd; 
    }
    select{
        float: right;
        outline: none;
        border: 1px solid #ddd;
        /* margin-right: 5px; */
        margin-top: 15px;
    }
    .zh{
        width: 100%;
        height: 50px;
        border-bottom:1px solid #ddd;
        background-color: white;
        color:#777777; 
    }
    .zz{
        width: 80px;
        height: 50px;
        line-height: 50px;
        display: inline-block;
        /* margin-left: 30px; */
        text-indent: 2em;
    }
    .date{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: white;
        text-indent: 2em;
        color: #777777;
        border-bottom:1px solid #ddd;
    }
    .date input{
        float: right;
        margin-top: 15px;
    }
    .remark{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: white;
        text-indent: 2em;
        color: #777777;
        border-bottom:#ddd 1px solid; 
    }
    .pic{
        width: 100%;
        height: 170px;
        line-height: 50px;
        background-color: white;
        text-indent: 2em;
        color: #777777;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        
    }
   
    .inp{
        outline: none;
        /* border: 1px solid #ddd; */
        width: 200px;
        margin-top: 6px;
        height: 37px;
        margin-left: 100px;

    }
    .sub{
        width: 50%;
        height: 50px;
        background-color: #ee9d90;
        color: white;
        margin: 0 auto;
        text-align: center;
        line-height: 50px;
        margin-top: 30px;
        
    }
   
    input{
        border:0px;
    }
    select{
        width: 80px;
    }
    .xc{
        width: 70px;
        height: 70px;
        border: 1px solid #ddd;
        
        margin-left: 30px;
        margin-right: 30px;
        position: relative;
        
    }
    .input_flie{
            display:block;
            width:100%;
            height:100%;
            opacity:0;
            z-index: 80;
            position: absolute;
            left:0; top:0;
     }
            .div_shuline{
            position: absolute;
            width:50%;
            height:2%;
            background-color: #ddd;
            left: 25%;
            top:49%;
            z-index: 5;
     }
            .div_hengline{
            position: absolute;
            width:2%;
            height:50%;
            background-color: #ddd;
            left: 49%;
            top:25%;
            z-index: 5;
     }
     .imgs{
         width: 70px;
         height: 70px;
         z-index: 199;
         /* position: relative; */
         
     }
     .cha{
         color: #ddd;
            position: absolute;
            right: -20px;
            top: -17px;
            z-index: 200;
     }
     .wai {
         /* border:1px solid red; */
         display: flex;
        flex-direction: row;
        /* flex: 1; */
       
        /* margin-top: 20px; */
        /* flex: 0 0 33%; */
         justify-content: flex-start;
  }
  .boxs {
    width: 70px;
    height: 70px;
    /* border: 1px dashed #d9d9d9; */
    border-radius: 6px;
    position: relative;
    display: inline-block;
    margin: 0 auto;
     flex: 0 0 30%;
    
  }
  .zt{
      width: 70px;
      height: 70px;
      position: relative;
  }
  .onload{
      position: absolute;
      top:0%;
      /* left: 35%; */
      width: 100%;
      height: 100vh;
      display: none;
      z-index: 10;
  }
  .onload img{
      opacity: 10%;
      width: 100%;
      /* height: 75%; */
      /* height: 100vh; */ 
  }
  .dd{
      height: 30px;
  }
    
</style>