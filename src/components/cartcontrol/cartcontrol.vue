<template>
  <div class="cartcontrol">
    <transition name="decrease">
      <div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
        <i class="inner el-icon-remove-outline"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add"  @click.stop="add">
      <i class="el-icon-circle-plus"></i>
    </div>
  </div>
</template>

<script>
  const EVENT_ADD = 'add';
  export default {
    props: [
      'food'
    ],
    data () {
      return {

      };
    },
    methods: {
      add (event) {
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit(EVENT_ADD, event.target);
      },
      decreaseCart () {
        if (this.food.count) {
          this.food.count--;
        } else {
          return false;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      opacity: 1;
      .inner{
        display: inline-block;
        line-height: 24px;
        font-size: 24px;
        color: rgb(0, 160, 220);
        transition: all 0.4s linear;
        transform: rotate(0);
      }
      &.decrease-enter-active, &.decrease-leave-active{
        transition: all 0.4s linear;
      }
      &.decrease-enter, &.decrease-leave-to{
        opacity: 0;
        transform: translate3D(24px, 0, 0);
        .inner{
          transform: rotate(180deg);
        }
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
