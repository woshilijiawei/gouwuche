<template>
  <div class="productBox" @ready="testAc()">
    <ul>
      <li v-for="pro in goods">
        <div class="top" v-if="">
          <img :src="pro.src">
          <a>{{pro.title}}</a>
        </div>
        <div class="bottom">
          <span class="price">优惠价：￥{{pro.price}}</span>
          <button class="add" @click="addAc(pro.pid),animate($event)">加入购物车
            <i class="imgIcon" :style="'background-image:url('+pro.src+')'"></i>
          </button>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name: 'product',
  mounted:function(){  
    this.$store.commit('getProductList');
    this.$store.state.buyArr = [];
  },
  computed:{
    ...mapState([
      'goods'
    ])
  },  
  methods:{
    ...mapActions([
      'addAc'
    ]),
    animate:function(event){
      var icon = (event.target).lastChild;
      var iconTop = $(icon).offset().top;
      var iconLeft = $(icon).offset().left;
      var carTop = $('.sidebar .right').offset().top;
      var carLeft = $('.sidebar .right').offset().left;
      var catSubiconLeft = carLeft-iconLeft;
      var carSubiconTop = carTop-iconTop-60;
      
      icon.style.opacity=1;

      $(icon).animate({
        top:"-100px"
      },50,function(){
        $(icon).animate({
          top : carSubiconTop,
          left : catSubiconLeft
        },300,function(){
          $(icon).css({
            top : "-50px",
            left : "40px",
            opacity:0
          })
        })
      });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .productBox{padding: 27px 100px;font-size: 0;
    li{width: 357px;border:1px solid #666;margin:0 35px 30px 0;display:inline-block;
      &:nth-child(3n+0){margin-right: 0;}
      .top{
        img{width:150px;height:150px;margin: 0 20px;}
        a{font-size: 12px;width: 158px;margin-top:100px;display: inline-block;}
      }
      .bottom{font-size: 16px;text-align:center;
        .price{width: 217px;line-height:60px;color: white;display: inline-block;background-color: #F75F3C;float:left;}
        .add{width: 140px;line-height:60px;background-color: #FFA133;border:0;outline:none;color:white;position:relative;
           .imgIcon{display:inline-block;width:50px;height:50px;position:absolute;top:-50px;left:40px;background-size:50px;border-radius:50%;opacity:0;}
        }
      }
    }
  }

</style>
