<template>
  <div id="app">
		<div class="container">
			<h1>求你了大哥</h1>
			<my-header></my-header>
			<router-view></router-view>
		</div>
			
  </div>
</template>
<script>
	import header from './components/header'
	export default{
		name:'app',
		components:{
			myHeader:header
		},
	}
</script>
<style>

</style>
