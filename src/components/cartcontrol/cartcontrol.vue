<template>
  <div class="cartcontrol">
    <transition name="decrease">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <i class="el-icon-remove-outline"></i>
      </div>
    </transition>
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
      &.decrease-enter-active, &.decrease-leave-active{
        transition: all .4s linear;
        opacity: 1;
        transform: translate3D(0, 0, 0);
      }
      &.decrease-enter, &.decrease-leave-to{
        opacity: 0;
        transform: translate3D(24px, 0, 0);
      }
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
