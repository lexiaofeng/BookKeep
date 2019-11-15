<template>
  <div class="create">
     <div class="top"> 
          <div class="ret" @click="ret">返回</div>
          <div class="zb">
              添加账簿
          </div>
      </div>


      <div class="xg">
          <div class="nick">
              名称
          </div>
          <div class="box">
              <input type="text" placeholder="最多四位中文" maxlength="4" v-model="datas.name">
          </div>

      </div>
      <div class="sub" @click="sub"> 
          提交
      </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    import { Dialog } from 'vant';


  export default {
    name:'',
    props:[''],
    data () {
      return {
          datas:{
              name:'',
             
          },
             baseUrl:domain.testUrl,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        ret(){
            this.$router.push({path : '/zhangbu', query : { }})
        },
        sub(){
            let toke = localStorage.getItem("token");
            let ll = this.datas;
            console.log(this.baseUrl)
        axios({
                      method: 'post',
                      url: this.baseUrl+'api/book/create?token='+toke,
                      data: qs.stringify(ll),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                           if(res.data.status){
                               Dialog.alert({
                                    message: '创建成功'
                                    }).then(() => {
                                        this.$router.push({path : '/zhangbu', query : { }})
                                    });
                              
                           }else{
                            //    alert(res.data.data);
                            Dialog.alert({
                                    message: res.data.data
                                    }).then(() => {
                                    return
                                    });
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
    .top{
        width: 100%;
        height: 70px;
        line-height: 70px;
        background-color: #5fb25b;
        text-align: center;
        font-size: 17px;
        color:white;
        
    }
    .ret{
        width: 100px;
        height: 100%;
        float: left;
    }
    .zb{
        width: 150px;
        height: 100%;
        margin-left: 116px;
    }
    body{
        background-color: #f1f3f0;
    }
    .xg{
        width: 100%;
        height: 80px;
        background-color: white;
        /* border: 1px solid red; */
    }
    .nick{
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        display: inline-block;
    }
    .box{
        width: 200px;
        height: 80px;
        float: right;
        /* border: 1px solid red; */
        display: inline-block;
        line-height: 80px;
        /* position: relative; */
    }
    .box input{
        float: right;
        /* position: absolute; */
        /* margin-top: 27px; */
        text-align: right;
        outline: none;
        
        margin-right: 10px;
        font-size: 16px;
    }
    .sub{
        width: 95%;
        height: 70px;
        margin: 0 auto;
        line-height: 70px;
        text-align: center;
        background-color: #5fb25b;
        color: white;
        margin-top: 30px;
        font-size: 17px; 
    }
    input{
        border:0px;
    }
</style>