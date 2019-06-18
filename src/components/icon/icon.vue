<template>
  <div>
    <i :class="[icon1, classMap[type]]">
    </i>
  </div>
</template>

<script>
  export default {
    props: ['type', 'icon'],
    data () {
      return {
        classMap: []
      };
    },
    methods: {

    },
    created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    computed: {
        icon1 () {
            return 'icon' + this.icon;
        }
    }
  };
</script>

<style scoped lang="scss">
    @import '@/common/style/mixin.scss';
    .icon1{
        display: inline-block;
        // vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        &.decrease{
            @include bg-image('decrease_1');
        }
        &.discount{
            @include bg-image('discount_1');
        }
        &.guarantee{
            @include bg-image('guarantee_1');
        }
        &.invoice{
            @include bg-image('invoice_1');
        }
        &.special{
            @include bg-image('special_1');
        }
        background-size: 12px 12px!important;
        background-repeat: no-repeat!important;
    }
    .icon2{
        display: inline-block;
        width: 16px;
        height: 16px;
        // vertical-align: top;
        margin-right: 6px;
        background-size: 16px 16px!important;
        background-repeat: no-repeat;
        &.decrease{
            @include bg-image('decrease_2');
        }
        &.discount{
            @include bg-image('discount_2');
        }
        &.guarantee{
            @include bg-image('guarantee_2');
        }
        &.invoice{
            @include bg-image('invoice_2');
        }
        &.special{
            @include bg-image('special_2');
        }
    }
    .icon3{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        &.decrease{
        @include bg-image('decrease_3');
        }
        &.discount{
        @include bg-image('discount_3');
        }
        &.guarantee{
        @include bg-image('guarantee_3');
        }
        &.invoice{
        @include bg-image('invoice_3');
        }
        &.special{
        @include bg-image('special_3');
        }
        background-size: 12px 12px!important;
        background-repeat: no-repeat!important;
    }
</style>
