<template>
  <div class="nav">
      <div class="msg"> {{msg}}</div>
  </div>
</template>

<script>

  export default {
    name:'nav',
    props:['msg'],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style  scoped>
    .nav{
        width: 100%;
        height: 80px;
        background-color: lightblue;

    }
    .msg{
        width: 50px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        text-align: center;
        color: white;
    }
</style>