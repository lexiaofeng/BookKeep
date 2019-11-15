<template>
  <div>
    <div class="dateline">
        <div class="date">111</div>
        <div class="pay">2222</div>
  </div>
  </div>
</template>

<script>

  export default {
    name:'dateline',
    props:[''],
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
     .dateline{
        width: 100%;
        height: 30px;
        background-color: #f1f3f0;
    }
    .date{
        width: 80px;
        height: 30px;
        line-height: 30px;
        border: 1px solid red;
        float: left;
    }
    .pay{
        width: 250px;
        height: 30px;
        line-height: 30px;
        border: 1px solid red;
        float: right;
        text-align: center;
    }
</style>