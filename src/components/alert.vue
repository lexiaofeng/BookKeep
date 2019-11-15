<template>
  
    <div v-show="show" class="Alert">
        
        <div class="tt">
            <i v-show="closable" class="iconhandle close" @click="close">x</i>
          </div>
  <div class="mes">
      <slot></slot>
  </div>
  
 </div>
  
</template>

<script>

  export default {
 name: 'Alert',
 
 props: {
  closable: {
   type: Boolean,
   default: true
  },
  show: {
   type: Boolean,
   default: false,
   twoWay: true
  },
  type: {
   type: String,
   default: 'info'
  }
 },
 data() {
  return {
//    visible: this.show
  };
 },
 methods: {
  close() {
   this.show = false;
   this.$emit('update:show', false);
   this.$emit('close',false);
  }
 },
 
};

</script>
<style  scoped>
.Alert{
    width: 50%;
    height: 80px;
    /* border: 1px solid red; */
    position: absolute;
    top: 38%;
    left: 28%;
    background-color: #5fca72;
}
.Alert i{
    display: block;
    float: right;
    color: aliceblue;
    margin-right: 5px;
}
.tt{
    width: 100%;
    height: 20px;
}
.mes{
    font-size: 12px;
    line-height: 60px;
    color: white;
    text-indent: 2em;
}
</style>