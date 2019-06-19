<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0">
      <i class="el-icon-remove"></i>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add">
      <i class="el-icon-circle-plus"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'food'
    ],
    data () {
      return {

      };
    },
    methods: {

    },
    created () {
      console.log(this.food);
    }
  };
</script>

<style scoped lang="scss">
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      line-height: 24px;
      .el-icon-remove{
        padding: 6px;
        font-size: 24px;
        color: rgb(0, 160, 220);
      }
    }
    .cart-count{
      display: inline-block;
    }
    .cart-add{
      display: inline-block;
      line-height: 24px;
      .el-icon-circle-plus{
        padding: 6px;
        font-size: 24px;
        color: rgb(0, 160, 220);
      }
    }
  }
</style>
