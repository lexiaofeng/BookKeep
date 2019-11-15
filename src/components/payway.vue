<template>
  <div class="way"  v-if="pd ==1">
    <div class="way_box" @click="cy">
        <img src="../assets/imgs/cy.png" alt="" >
        <h3>餐饮</h3>
    </div>
    <div class="way_box">
        <img :src="rc" alt="" @click="rc">
        <h3>日常</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/jt.png" alt="" @click="jt">
        <h3>交通</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/gw.png" alt="" @click="gw">
        <h3>购物</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/sg.png" alt="" @click="sg">
        <h3>水果</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/sc.png" alt="" @click="sc">
        <h3>蔬菜</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/ls.png" alt="" @click="ls">
        <h3>零食</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/yd.png" alt="" @click="yd">
        <h3>运动</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/yl.png" alt="" @click="yl">
        <h3>娱乐</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/tx.png" alt="" @click="tx">
        <h3>通讯</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/sj.png" alt="" @click="sj">
        <h3>社交</h3>
    </div>
    <div class="way_box">
        <img src="../assets/imgs/fs.png" alt="" @click="fs">
        <h3>服饰</h3>
    </div>
  </div>


  <div class="way"  v-else-if="pd ==2">
        <div class="way_box">
            <img src="../assets/imgs/gz.png" alt="" @click="gz">
            <h3>工资</h3>
        </div>
        <div class="way_box">
            <img src="../assets/imgs/lc.png" alt="" @click="lc">
            <h3>理财</h3>
        </div>
        <div class="way_box">
            <img src="../assets/imgs/jz.png" alt="" @click="jz">
            <h3>兼职</h3>
        </div>
        <div class="way_box">
            <img src="../assets/imgs/lj.png" alt="" @click="lj">
            <h3>礼金</h3>
        </div>
        <div class="way_box">
            <img src="../assets/imgs/qt.png" alt="" @click="qt">
            <h3>其他</h3>
        </div>
        
  </div>
</template>

<script>

  export default {
    name:'',
    props:['pd'],
    data () {
      return {
            rc:require('../assets/imgs/rc.png')
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        cy(){
            this.$emit('jz','餐饮','1')
        },
        rc(){
            this.$emit('jz','日常','1')
        },
        jt(){
            this.$emit('jz','交通','1')
        },
        gw(){
            this.$emit('jz','购物','1')
        },
        sg(){
            this.$emit('jz','水果','1')
        },
        sc(){
            this.$emit('jz','蔬菜','1')
        },
        ls(){
            this.$emit('jz','零食','1')
        },
        yd(){
            this.$emit('jz','运动','1')
        },
        yl(){
            this.$emit('jz','娱乐','1')
        },
        tx(){
            this.$emit('jz','通讯','1')
        },
        sj(){
            this.$emit('jz','社交','1')
        },
        fs(){
            this.$emit('jz','服饰','1')
        },



        gz(){
            this.$emit('jz','工资','2')
        },
        lc(){
            this.$emit('jz','理财','2')
        },
        jz(){
            this.$emit('jz','兼职','2')
        },
        lj(){
            this.$emit('jz','礼金','2')
        },
        qt(){
            this.$emit('jz','其他','2')
        },

    },

    watch: {}

  }

</script>
<style scoped>
    body{
         background-color: white;
    }
    .way{
        background-color: white;
        width: 100%;
        height: 500px;
        
    }
    .way_box{
        width: 24%;
        height: 70px;
        /* border:1px solid red; */
        text-align: center;
        margin-top: 10px;
        display: inline-block;
        margin-bottom: 10px;

    }
    .way_box img{
        width: 50px;
        height: 50px;
        
    }
</style>