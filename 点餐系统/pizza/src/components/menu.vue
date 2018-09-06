<template>
	<div id="menu" class="row">
		<table class="table col-sm-12 col-md-8">
			<thead class="thead-default">
				<tr>
					<th>名称</th>
					<th>大小</th>
					<th>加入</th>
				</tr>
			</thead>
			<tbody v-for="item in menu" :key='item.name'>
				<tr>
					<td><strong>{{item.name}}</strong></td>
				</tr>
				<tr v-for="option in item.options" :key='option.size'>
					<td>{{option.size}}</td>
					<td>{{option.price}}</td>
					<td><button class="btn btn-success" v-on:click='addto(option.size,option.price,item.name)'>+</button></td>
				</tr>
			</tbody>
		</table>
		<table class="table col-sm-12 col-md-4">
			<thead class="thead-default">
				<th>数量</th>
				<th>品种</th>
				<th>价格</th>
			</thead>
			<tbody>
				<tr v-for="item in shopping">
					<td>
						<button class="btn btn-sm  btn-outline-light text-dark" @click="down(item)">-</button>
						<span>{{item.num}}</span>
						<button class="btn btn-sm  btn-outline-light text-dark"  @click="up(item)">+</button>
					</td>
					<td>{{item.name}}{{item.size}}</td>
					<td>{{item.price}}</td>
				</tr>
			</tbody>
			<p>{{allprice}}rmb</p>
			<button class="btn btn-success btn-block">提交</button>	
		</table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				shopping:[],
				menu:{
					1: {
					'name': '榴莲pizza',
					'description': '这是喜欢吃榴莲朋友的最佳选择',
					'options': [{
						'size': 9,
						'price': 38
					}, {
						'size': 12,
						'price': 48
					}]
					},
					2: {
					'name': '芝士pizza',
					'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
					'options': [{
						'size': 9,
						'price': 38
					}, {
						'size': 12,
						'price': 48
					}]
					},
					3: {
					'name': '夏威夷pizza',
					'description': '众多人的默认选择',
					'options': [{
						'size': 9,
						'price': 36
					}, {
						'size': 12,
						'price': 46
					}]
					}
				}
			}
		},
		methods:{
			addto(size,price,name){

				let sure = this.shopping.find((item)=>{
					return item.name==name&&item.size == size
				})
				if(sure){
					sure.num ++ ;
				}else{
					this.shopping.push({
						size,
						price,
						name,
						num:1
					})
				}
				console.log(this.shopping)
			},
			up(item){
				item.num++;
			},
			down(item){
				item.num--;
				if(item.num == 0){
					this.shopping.splice(this.shopping.indexOf(item) ,1)

				}
			}
		},
		computed:{
			allprice(){
				let money = 0;
				this.shopping.forEach((item)=>{
					money += item.num* item.price;
				})
				return money
			}
		}
	}
</script>