<template>
  <div class="bill">
    <div class="top">
        <div class="ret" @click="ret">返回</div>
        <div class="tit">
             账单详情
        </div>
      
        </div>
    <div class="cont">
        <div class="box">
            <div class="box1">
                    用户
            </div>
            <div class="box2">
                <input type="text" v-model="bill.user_nickname" readonly="value">
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    类型
            </div>
            <div class="box2">
                <input type="text" v-model="bill.category_name" readonly="value" >
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    类别
            </div>
            <div class="box2">
                <input type="text" v-model="bill.type_string" readonly="value" >
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    对象
            </div>
            <div class="box2">
                <input type="text" v-model="bill.company_name" >
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    账面金额
            </div>
            <div class="box2">
                <input type="text" v-model="bill.total_money" >
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    已付金额
            </div>
            <div class="box2">
                <input type="text" v-model="bill.paid_money" readonly="value" >
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    备注
            </div>
            <div class="box2">
                <input type="text" v-model="bill.remark" >
            </div>

        </div>
        <div class="box">
            <div class="box1">
                    日期
            </div>
            <div class="box2">
                <input type="text" v-model="bill.updated_at" readonly="value">
            </div>

        </div>
        <div class=" pic">
            <div class="box1">
                    <!-- 图片 -->
            </div>
            <div class="boxs">
                    <div class="box3" v-for="(user,index) in bill.items['0'].images " :key="index">
                        <img :src="user.thumbnail" >
                    </div>
                    
            </div>
           

        </div>
    </div>


    <div class="bot">
        <div class="big">
            <div class="edit" @click="edit">更改</div>
            <div class="space"></div>
            <div class="delete" @click="del">删除</div>
        </div>
        
    </div>


    <Alert :show="dis" @close="cs">
          <p v-html="alert"></p>
    </Alert>
  </div>
</template>

<script>
import Alert from '../components/alert'
import axios from 'axios'
import qs from 'qs'
import { Dialog } from 'vant';
  export default {
    name:'bill',
    props:[''],
    data () {
      return {
          bill:{},
          baseUrl:domain.testUrl,
          alert:'',
          dis:false,
      };
    },

    components: {
        Alert,
        
    },

    computed: {},

    beforeMount() {},

    mounted() {
        let toke = localStorage.getItem("token");
        let id = this.$route.query.id;
            //单条账单

            axios({
                      method: 'get',
                      url: this.baseUrl+'api/record/detail?id='+id+'&token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                           if(res.data.status){
                               this.bill = res.data.data;
                               console.log(this.bill)
                            //    this.$router.push({path : '/bill', query : { id:par}})
                           }
                            
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
    },

    methods: {
        edit(){
            console.log(111)
            
            let toke = localStorage.getItem("token");
            let id = this.$route.query.id;
            console.log(id);
            let ll={};
            ll.total_money = this.bill.total_money;
            ll.company_name = this.bill.company_name;
            ll.remark = this.bill.remark;
            console.log(ll);
            axios({
                      method: 'post',
                      url: this.baseUrl+'api/record/update?id='+id+'&token='+toke,
                      data: qs.stringify(ll),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                           if(res.data.status){
                                        Dialog.alert({
                                        message: '更改成功'
                                        }).then(() => {
                                        this.$router.push({path : '/mingxi', query : { }})
                                        });
                           }
                            
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
        },
        del(){
            let toke = localStorage.getItem("token");
            let id = this.$route.query.id;

           Dialog.confirm({
                        // title: '确认',
                        message: '确定要删除吗'
                        }).then(() => {
                            axios({
                                    method: 'post',
                                    url: this.baseUrl+'api/record/delete?id='+id+'&token='+toke,
                                    //   data: qs.stringify(ll),
                                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                                    })
                                    .then((res)=>{
                                            console.log(res);
                                        if(res.data.status){
                                           
                                                this.$router.push({path : '/mingxi', query : { }})
                                        }
                                            
                                            

                                            
                                            
                                            })
                                    .catch(function(error){
                                            console.log(error)//错误处理 相当于error
                                            })
                        }).catch(() => {
                             return false;
                        });

                
          
        },
        ret(){
            this.$router.push({path : '/mingxi', query : { }});
        },
    },

    watch: {}

  }

</script>
<style  scoped>
    .top{
        width: 100%;
        height: 100px;
        background-color: #5ebe59;
        color:white;
        /* text-align: center; */
        line-height: 100px;
        font-size: 18px;
    }
    .cont{
        width: 100%;
        height: 100%;
        background-color: white;
    }
    .box{
        width: 95%;
        margin: 0 auto;
        border-bottom: 1px solid #ddd;
        /* border: 1px solid red; */
        height: 50px;
        /* position: relative; */
    }
    .box1{
        float: left;
        width: 80px;
       
        line-height: 41px;
        /* border: 1px solid red; */
        /* text-align: center; */
        text-indent: 1em;
    }
    .box2{
        float: right;
        width: 150px;
        height: 80%;
        line-height: 41px;
        /* border: 1px solid red; */
        margin-right: 10px;
    }
    .box2 input{
        width: 100%;
        height: 78%;
        text-align: right;
        outline: none;
        /* position: absolute; */
        color: #b1aeae;
        
    }
    .bot{
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0px;
        /* border: 1px solid red; */
        background-color: white;
    }
    .big{
        width: 90%;
        height: 50px;
        /* border: 1px solid red; */
        margin:10px auto;
        display: flex;
    }
    .edit{
        flex: 1;
        text-align: center;
        line-height: 50px;
        border: 1px solid #5ebe59;
        border-radius: 10%;
        color: #5ebe59;
        
    }
    .delete{
        flex: 1;
        text-align: center;
        line-height: 50px;
        border: 1px solid #5ebe59;
        border-radius: 10%;
        color: #5ebe59;
        
    }
    .space{
        width: 20px;
        height: 100%;
    }
    
    .ret{
        width: 80px;
        height: 100%;
        float: left;
        text-align: center;
    }
    .tit{
        margin-left: 30px;
        width: 180px;
        height: 100%;
        position: relative;
        left: 70px;

    }
    input{
        border: 0px;
    }
    .pic{
        width: 95%;
        margin: 0 auto;
        border-bottom: 1px solid #ddd;
        /* border: 1px solid red; */
        height: 80px;
        display: flex;
        
    }
    .box3{
        /* border: 1px solid red; */
        /* flex: 1; */
        margin-left: 50px;
        margin-top: 10px;
    
    }
    .boxs{
        /* flex: 1; */
        /* border: 1px solid red; */
        display: flex;
    }
    .box3 img{
        width: 60px;
        height: 60px;
        margin: 0 auto;
    }
    .pic .box1{
        margin-left: 5px;
    }
</style>