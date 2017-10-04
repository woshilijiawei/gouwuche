<template>
  <div id="app">
    <div class="header">
        <router-link class="navBtn navBtn1 action" to="/">商品列表页</router-link>
        <router-link class="navBtn navBtn2" to="/shoppingCenter">购物车页面</router-link>
    </div>
    <div>
      <router-view></router-view>   
    </div>
  </div>
</template>
<script>


export default {
  name: 'app',
  data(){
    return {
      action : true
    }
  },
  mounted:function(){  
    $('.navBtn').click(function(){
      $('.action').removeClass('action');
      $(this).addClass('action');
    })
  }
}

// (function(){
  // $('.navBtn').click(function(){
  //   console.log(321321321);
  // })     
//   console.log($('.ppp').html()); 
// })()
</script>

<style lang="scss">
  .header{height:80px;line-height:80px;padding: 0 100px;background-color: #E64346;
    .navBtn{color:white;margin-right:20px;padding:10px;border-radius:10px;}
    .action{color:#E64346;background-color:white;}
  }

</style>


 
