<template>
  <div class="zhangbu">
    <div class="top">
          
          
          <div class="ret" @click="ret">返回</div>
          <div class="zb">
              账簿设置
          </div>
      </div>


      <div class="zbu" v-for="(user,index) in list" :key="index"> 
          <div class="name">
             <input type="text" v-model="user.name" >
          </div>
          <div class="sz">
              <div class="bj">
                  <div class="edit" @click="edit(index)">
                      修改
                  </div>
                  <div class="set" @click="set(index)">
                      设置主账本
                  </div>
              </div>
              <div class="del" @click="del(index)">
                  删除
              </div>
          </div>
      </div>

      <div class="bottom-nav" @click="create">
          创建账簿
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
    name:'zhangbu',
    props:[''],
    data () {
      return {
          list:[],
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
        axios({
                      method: 'get',
                      url: this.baseUrl+'api/book?token='+toke,
                    //   data: qs.stringify(ll),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);
                           if(res.data.status){
                              this.list = res.data.data;
                           }
                            
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })
    },

    methods: {
        ret(){
            this.$router.push({path : '/personal', query : { }})
        },
        create(){
            this.$router.push({path : '/create', query : { }})
        },
        del(index){
                    
                    
                    let bookid = this.list[index].id;
                    console.log(this.list)
                    let ll = {book_id:bookid};
                    let toke = localStorage.getItem("token");

                    Dialog.confirm({
                            
                            message: '确定删除吗'
                            }).then(() => {
                                 axios({
                            method: 'post',
                            url: this.baseUrl+'api/book/delete?token='+toke,
                              data: qs.stringify(ll),
                            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                            })
                            .then((res)=>{
                                    console.log(res);
                                if(res.data.status){
                                    this.$router.push({path : '/personal', query : { }})
                                }
                                    
                                    

                                    
                                    
                                    })
                            .catch(function(error){
                                    console.log(error)//错误处理 相当于error
                                    })
                            }).catch(() => {
                                return
                            });
               
        },
        edit(index){
                    let bookid = this.list[index].id;let bookname = this.list[index].name;
                    console.log(this.list)
                    let ls = {book_id:bookid,book_name:bookname};
                    let toke = localStorage.getItem("token");

                    axios({
                            method: 'post',
                            url: this.baseUrl+'api/book/update?token='+toke,
                              data: qs.stringify(ls),
                            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                            })
                            .then((res)=>{
                                    console.log(res);
                                if(res.data.status){
                                    Dialog.alert({
                                        message: '修改成功'
                                        }).then(() => {
                                            this.$router.push({path : '/personal', query : { }})
                                        });
                                    
                                }
                                    
                                    

                                    
                                    
                                    })
                            .catch(function(error){
                                    console.log(error)//错误处理 相当于error
                                    })
        },
        set(index){
              let toke = localStorage.getItem("token");
              let bookid = this.list[index].id;
                    console.log(this.list)
                    let ll = {book_id:bookid};
                     axios({
                            method: 'post',
                            url: this.baseUrl+'api/book/set-default?token='+toke,
                              data: qs.stringify(ll),
                            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                            })
                            .then((res)=>{
                                    console.log(res);
                                if(res.data.status){
                                    // alert('设置成功')
                                    // this.dis = true;
                                    // this.alert = '设置成功';
                                    Dialog.alert({
                                                message: '设置成功'
                                                }).then(() => {
                                                    this.$router.push({path : '/personal', query : { }})
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
<style scoped>
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
    .zbu{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ddd;
        background-color: white;
        position: relative;
    }
    .name{
        width: 70px;
        height: 80;
        /* border: 1px solid red; */
        float: left;
        text-align: center;
        line-height: 80px;
        text-indent: 1em;
    }
    .name input{
        outline: none;
        font-size: 15px;
        width: 100px;
        float: left;
        margin-left: 30px;
    }
    .sz{
        width: 200px;
        height: 80px;
        /* border: 1px solid red; */
        float: right;
    }
    .bj{
        width: 100px;
        height: 80px;
        display: inline-block;
        /* border: 1px solid red; */
    }
    .del{
        width: 100px;
        height: 80px;
        display: inline-block;
        background-color: #dc6565;
        position: absolute;
        color: white;
        line-height: 80px;
        text-align: center;
        font-size: 18px;
        /* font-weight: 200; */
    }
    .edit{
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #c4e2c3;
        
    }
    .set{
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #eaeade;
        
    }
    .bottom-nav{
        width: 100%;
        height: 80px;
        position: fixed;
        bottom: 0px;
        /* border: 1px solid #5fb25b; */
        text-align: center;
        line-height: 80px;
        color:white;
        background-color: #5fb25b;
        font-size: 18px;
    }
    input{
        border: 0px;
    }
</style>