<template>
  <div >
      <div class="top">
          个人资料
      </div>
      <div class="box">
          <div class="info">
              手机号
          </div>
          <div class="rr">
              <input type="text" v-model="datas.mobile" readonly> 
          </div>
      </div>
      <div class="box">
          <div class="info">
              昵称
          </div>
          <div class="rr">
              <input type="text"  v-model="datas.nickname"> 
          </div>
      </div>
      <div class="box">
          <div class="info">
              头像
          </div>
          <div class="rr">
              <input class="header-upload-btn user-header-com "  type="file" name="image" accept="image/*" @change='onchangeImgFun'>
               <img  alt="" :src='imgStr' class="imgs">
          </div>
      </div>



      <div class="sub" @click="xg">
          提交
      </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          datas:{},
          imgStr: require('../assets/imgs/btm4.png'),
          fileKey: "",
          baseUrl:domain.testUrl,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
             let toke = localStorage.getItem("token");
         axios({
                      method: 'get',
                      url: this.baseUrl+'api/user/profile?token='+toke,
                    //   data: qs.stringify(par),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);

                            if(res.data.status){
                                this.datas = res.data.data;
                                console.log(this.datas)
                            }
                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })   
    },

    methods: {
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

                                console.log(this.fileKey);
                                // console.log(this.file);
                            }

                            

                            
                            
                            })
                      .catch(function(error){
                            console.log(error)//错误处理 相当于error
                            })

        

   
        
    
    },
        xg(){
            console.log(this.datas.nickname)
            let ss = {nickname:this.datas.nickname,avatar:this.fileKey}
            let toke = localStorage.getItem("token");
            axios({
                      method: 'post',
                      url: this.baseUrl+'api/user/profile/update?token='+toke,
                        data: qs.stringify(ss),
                      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                      })
                      .then((res)=>{
                            console.log(res);

                            if (res.data.status) {
                                console.log(res)
                               this.$router.push({path : '/personal', query : { }})
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
    .box{
        width: 100%;
        height: 70px;
        /* border: 1px solid red; */
        background-color: white;

    }
    .info{
        width: 100px;
        height: 70px;
        line-height: 70px;
        float: left;
        text-indent: 2em;
        font-size: 14px;
        /* text-align: center; */
    }
    .rr input{
        width: 200px;
        height: 40px;
        float: right;
        margin-top: 10px;
        text-align: right;
        outline: none;
        margin-right: 20px;
    }
    
   .rr .user-header-com{
            width: 70px;
            height: 70px;
            display: inline-block;  
            float: left;
            margin-left: 80px;
            margin-top: 19px;
    }
    .imgs{
        width: 70px;
        height: 70px;
        float: right;
        margin-right: 20px;
    }
    .sub{
        width: 95%;
        height: 70px;
        margin: 0 auto;
        /* border: 1px solid red; */
        line-height: 70px;
        text-align: center;
        margin-top: 50px;
        color: white;
        background-color: #5fb25b;
        font-size: 16px;
    }
    input{
        border: 0px;
    }
       
</style>