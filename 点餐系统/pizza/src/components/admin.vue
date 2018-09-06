<template>
	<div id="admin">
		<div class="row mt-3">
			<div class="col-md-12 col-lg-12">
				<div class="card text-center">
					<div class="card-body">
						<img class="mx-auto d-block" src="../assets/icon.png" />
						<div class="alert">注册成功</div>
						<form  class="mt-3" @submit.prevent='reset'>
							<div class="form-group">
								<label>邮箱</label>
								<input class='form-control'type="email" v-model='email' />
							</div>
							<div class="form-group">
								<label>密码</label>
								<input class='form-control'type="password" v-model='password' />
							</div>
							<div class="form-group">
								<label>确认密码</label>
								<input  class='form-control'type="password" v-model='surePassword' />
							</div>
							<button type="submit" class="btn btn-primary" >注册</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'admin',
		data(){
			return{
				email:'',
				password:'',
				surePassword:'',
			}
		},
		methods:{
			reset(){
				if(this.password == this.surePassword){
					const admin = {
						email:this.email,
						password:this.password,
						surepassword:this.surePassword
					}
					axios.post('/posts.json',admin).then((msg)=>{
						alert('恭喜你添加成功');
						this.$router.push('/login')
					})
				}
				else{
					alert('你两次输入密码不一样,请重新输入')
				}
				
			}
		},
	}
</script>
<style>


</style>