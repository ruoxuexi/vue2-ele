<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
      <i class="el-icon-remove-outline"></i>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add"  @click="addCart">
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
      addCart () {
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCart () {
        this.food.count--;
      }
    }
  };
</script>

<style scoped lang="scss">
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      line-height: 24px;
      .el-icon-remove-outline{
        padding: 6px;
        font-size: 24px;
        color: rgb(0, 160, 220);
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
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
