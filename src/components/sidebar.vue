<template>
  <div class="sidebar">
      	<router-link  class="right" to="/shoppingCenter">
      		<span class="sum">{{sum}}</span>
      	</router-link>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name: 'sidebar',
   mounted:function(){  
    $('.right').click(function(){
      $('.action').removeClass('action');
      $('.navBtn2').addClass('action');
    })
  },
  computed:{
  	...mapGetters([
  		'sum'
  	])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.sidebar .right{width: 35px;height: 35px;position: fixed;top: 50%;right: 0;background-image: url("../../static/img/gouwuche.jpg");background-size: 35px 35px;
    .sum{width:22px;height:18px;line-height:18px;display:inline-block;background-color: white;border:1px solid #F30213;border-radius: 9px;text-align: center;position: absolute;top: -8px;left: -8px;}
  }
</style>
