<template>
  <div class="shopping">
  		<div class="box">
          <div class="no-empty" v-if="purchased.length!=0">
  	  	    <div class="top">
  	  	  		<span class="product">商品</span>
  	  	  		<span class="price">单价</span>
  	  	  		<span class="number">数量</span>
  	  	  		<span class="subtotal">小计</span>
  	  	  		<span class="handle">操作</span>
  	  	    </div>
  	        <ul class="proList">
  		      	<li v-for="pur in purchased">
  		      		<input type="checkbox" @change="getProListAc(proList)" v-model="proList" :value="pur.pid">
  		      		<img class="proImg" :src="pur.src" alt="">
  		      		<a class="proTitle" href="#">{{pur.title}}</a>
  		      		<span class="proPrice">¥{{pur.price}}</span>
  		      		<button class="btn" @click="addAc(pur.pid)">+</button>
  		      		<input class="proNumber" v-model="pur.number"></input>
  		      		<button class="btn" @click="subAc(pur.pid)">-</button>
  		      		<span class="proSubtotal">¥{{pur.price*pur.number}}</span>
                <span @click="buyAc(pur.pid)">购买</span>
  		      		<span @click="deleteAc(pur.pid)">删除</span>
  		      	</li>
  	        </ul>
  	        <div class="paymentBox">
  	        	<span @click="deleteAllAc(proList)">删除选中的商品</span>
  	        	<div class="right">
  	        		<span>已选择{{buysum}}件商品</span>
  	        		<span>总价：{{total_prices}}元</span>
                <span class="goumai" @click="buyAllAc(proList)">去结算</span>
  	        	</div>
  	        </div>
          </div>
          <div class="empty" v-if="purchased.length==0">
            <p>您的购物空空如也...
              <router-link  class="toHome" to="/">去购物</router-link>
            </p>
          </div>
        </div>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
	name: 'shopping',
  data(){
    return {
      proList : []
    }
  },
 	computed:{
    	...mapState([
    		'purchased'
    	]),
    	...mapGetters([
    		'buysum',
    		'total_prices'
    	])
  	},
  	methods:{
  		...mapActions([
  			'addAc',
  			'subAc',
  			'deleteAc',
        'buyAc',
        'buyAllAc',
        'getProListAc',
        'deleteAllAc'
  		])
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .shopping{padding: 20px 100px;font-size: 0;min-height: 497px;
    .box{font-size: 14px;
      .no-empty{
        .top{background-color: #F3F3F3;padding: 15px 10px;
          .product{margin-left: 145px;}
          .price{margin-left: 250px;}
          .number{margin-left: 150px;}
          .subtotal{margin-left: 120px;}
          .handle{margin-left: 150px;}
        }
        .proList{padding:0 10px 10px 10px;
          li{border-bottom: 1px solid #eee;height: 100px;line-height:100px;
            span{line-height:80px;}
          }
          .proImg{margin: 10px 45px 0 0;width:80px;height:80px;display:inline-block;}
          .proTitle{width: 237px;height:80px;line-height:initial;margin-right: 40px;display: inline-block;}
          .proPrice{width: 55px;display: inline-block;
      margin-right: 105px;}
          .btn{width: 15px;}
          .proNumber{width:30px;text-align:center;}
          .proSubtotal{width:55px;display:inline-block;margin:0 111px 0 94px;}
        }
        .paymentBox{border:1px solid #eee;padding: 20px 100px 20px 20px;position:relative;
          .right{float: right;
            .goumai{display:inline-block;width:96px;line-height:61px;height:61px;color:white;text-align:center;background-color:#E64346;position:absolute;right:0;top:0;}
          }
        }
      }
      .empty{
        p{text-align:center;margin-top:100px;
          .toHome{color:#E64245;}
        }
      }  
    }
  }
</style>
