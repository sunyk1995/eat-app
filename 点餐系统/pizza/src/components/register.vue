<template>
	<div id="register">
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<h2>添加心得pizza品类</h2>
				<form>
					<div class="form-group row">
						<div class="col-sm-1">
							<label>品种</label>
						</div>
						<div class="col-sm-11">
							<input type="text" class="form-control"  v-model="pizzas.name"/>							
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-1">
							<label>描述</label>
						</div>
						<div class="col-sm-11">
							<textarea class="form-control" rows="5" v-model="pizzas.descript"></textarea>					
						</div>
					</div>
					<h3>选项一</h3>
					<div class="form-group row">
						<div class="col-sm-1">
							<label>尺寸</label>
						</div>
						<div class="col-sm-11">
							<input type="text" class="form-control"  v-model="pizzas.size1"/>							
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-1">
							<label>价格</label>
						</div>
						<div class="col-sm-11">
							<input type="text" class="form-control"  v-model="pizzas.price1"/>							
						</div>
					</div>
					<h3>选项二</h3>
					<div class="form-group row">
						<div class="col-sm-1">
							<label>尺寸</label>
						</div>
						<div class="col-sm-11">
							<input type="text" class="form-control"  v-model="pizzas.size2"/>							
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-1">
							<label>价格</label>
						</div>
						<div class="col-sm-11">
							<input type="text" class="form-control"  v-model="pizzas.price2"/>							
						</div>
					</div>
					<button class="btn btn-success btn-block" @click.prevent='add'>添加</button>
				</form>
			</div>
			<div class="col-sm-12 col-md-4">
				<h3>菜单</h3>
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>品种</th>
							<th>删除</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in allpizza">
							<td>{{item.name}}</td>
							<td>
								<button class="btn btn-error">x</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				pizzas:{
					name:'',
					descript:'',
					price1:'',
					price2:'',
					size1:'',
					size2:''
				},
				allpizza:[],
			}
		},
		methods:{
			add(){
				let pizzait= {
					name:this.pizzas.name,
					descript:this.pizzas.descript,
					options:[
						{
							size1:this.pizzas.siza1,
							price1:this.pizzas.price1
						},
						{
							size2:this.pizzas.siza2,
							price2:this.pizzas.price2
						}
					]
				};
				axios.post('/newadd.json',pizzait);
			}
		},
		created:function(){
			axios.get('/newadd.json').then(msg=>{
				var data =msg.data;
// 				for(var attr in data){
// 					this.allpizza.push(data[attr])
// 				}
				this.allpizza = data;
				console.log(this.allpizza)
				
			})
		},
// 		computed:{
// 			fn(){
// 				axios.get('/newadd.json').then(msg=>{
// 					this.allpizza = msg.data;
// 					
// 				})
// 				 return this.allpizza
// 			}
// 		}
	}
</script>