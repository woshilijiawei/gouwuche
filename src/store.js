import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex) 
Vue.prototype.axios = axios

const state = {
	sum : 0,
	total_prices : 0,
	buysum : 0,
	purchased : [],//购物车数组
	goods : [],//所有商品数组
	buyArr : []//需要购买数组
}
const getters = {
	sum : function(state){//购物车商品总数
		var sum = 0;
		for(var i=0;i<state.purchased.length;i++){
			sum += parseInt(state.purchased[i].number);
		}
		return sum
	},
	buysum : function(state){//需要购买的商品总数
		var sumNum = 0;
		for(var i=0;i<state.buyArr.length;i++){
			for(var n=0;n<state.goods.length;n++){
				if(state.buyArr[i] == state.goods[n].pid){
					sumNum += parseInt(state.goods[n].number);
				}
			}
		}
		return sumNum
	},
	total_prices : function(state){//需要购买的
		var total_prices = 0;
		for(var i=0;i<state.buyArr.length;i++){
			for(var n=0;n<state.goods.length;n++){
				if(state.buyArr[i] == state.goods[n].pid){
			total_prices+=(state.goods[n].price*state.goods[n].number);
				}
			}
		}
		return total_prices
	}
}
const mutations = {
	getProductList(state){//获取假数据
		if(state.goods.length == 0){
			axios.get('http://localhost:3030/getList.json')
			.then(function(res){
				state.goods = res.data.list;
			})
			.catch(function(err){
				console.log(err);
			});
		}
	},
	getProList(state,proList){//获取需要购买的商品列表
		state.buyArr = proList;
	},
	add(state,pid){//商品加
		var flag = 0;
		for(var i=0;i<=state.purchased.length;i++){
			(i==0)? flag = i : flag = i-1;
			if(state.purchased.length == 0){
				state.goods[pid-1].number++;
		 		state.purchased.push(state.goods[pid-1]);
		 		return 
			}else if(pid == state.purchased[flag].pid){
				state.goods[pid-1].number++;
				return 
			}
		}
		var isExist = false; 
		for(var n=0;n<=state.purchased.length;n++){
			(n==0)? flag = n : flag = n-1;
			if(pid == state.purchased[flag].pid){
				isExist = true;
			}else if(n == state.purchased.length-1&&isExist == false){
				state.goods[pid-1].number++;
				state.purchased.push(state.goods[pid-1]);
				return 
			}
		}
	},
	sub(state,pid){//商品减
		for(var i=0;i<state.purchased.length;i++){
			if(state.purchased[i].pid == pid){
				if(state.purchased[i].number>1){
					state.purchased[i].number--;
				}else{
					var con = confirm("你确定删除该商品么？");
					if(con){
						state.purchased[i].number = 0;
						state.purchased.splice(i,1);
						console.log(state.purchased)
					}
				}
			}			
		}
	},
	buy(state,pid){//单个购买
		var title = "";
		var price = 0;
		var number = 0;
		var subtotal = 0;
		for(var i=0;i<state.purchased.length;i++){
			if(state.purchased[i].pid == pid){
				title = state.purchased[i].title;
				price = state.purchased[i].price;
				number = state.purchased[i].number;
				subtotal = price*number;
			}
		}
		axios.get('http://localhost:3030/goumai',{
			params:{
				pid:pid,
				title:title,
				price:price,
				number:number,
				subtotal:subtotal
			}
		})
		.then(function(data){
			alert("恭喜你！购买成功！");
			mutations.del(state,pid);
		})
		.catch(function(err){
			alert("购买失败！");
		})
	},
	buyAll(state,proList){//批量购买
		if(proList.length == 0){
			alert("请选择需要购买的商品");
			return
		}
		var proArr = [];
		for(var i=0;i<proList.length;i++){
			for(var n=0;n<state.purchased.length;n++){
				if(proList[i] == state.purchased[n].pid){
					proArr.push(state.purchased[n]);
				}
			}
		}
		axios.get('http://localhost:3030/goumai',{
			params:{
				proList:proArr
			}
		})
		.then(function(data){
			alert("恭喜你！购买成功！");
			mutations.delAll(state,proList)
		})
		.catch(function(err){
			alert("购买失败！");
		})
	},
	del(state,pid){
		for(var i=0;i<state.purchased.length;i++){
			if(pid == state.purchased[i].pid){
				state.purchased[i].number = 0;
				state.purchased.splice(i,1);
			}
		}
	},
	delAll(state,proList){
		for(var i=0;i<proList.length;i++){
			for(var n=0;n<state.purchased.length;n++){
				if(proList[i] == state.purchased[n].pid){
					state.purchased[n].number = 0;
					state.purchased.splice(n,1);
				}
			}
		}
	},
	delete(state,pid){//删除商品
		var con = confirm("你确定删除该商品么？");
		if(con){
			mutations.del(state,pid);
		}
	},
	deleteAll(state,proList){//删除选中的商品
		var con = confirm("你确定删除选中的商品么？");
		if(con){
			mutations.delAll(state,proList);
		}
	}
}

const actions = {
	addAc({commit},pid){
		commit('add',pid)
	},
	subAc({commit},pid){
		commit('sub',pid)
	},
	deleteAc({commit},pid){
		commit('delete',pid)
	},
	buyAc({commit},pid){
		commit('buy',pid)
	},
	buyAllAc({commit},proList){
		commit('buyAll',proList)
	},
	getProListAc({commit},proList){
		commit('getProList',proList)
	},
	deleteAllAc({commit},proList){
		commit('deleteAll',proList)
	}
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})