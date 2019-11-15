<template>
  <div class="btn" @click="log">
    {{msg}}
  </div>
</template>

<script>

  export default {
    name:'btn',
    props:['msg',],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        log(){
            this.$emit('zc'),
            this.$emit('dl')
        },
    },

    watch: {}

  }

</script>
<style scoped>
    .btn{
        
        width: 90%;
        height: 40px;
        margin: 0 auto ;
        background-color: #fa9138;
        color: white;
        text-align: center;
        line-height: 40px;
        margin-top: 40px;
    }
</style>