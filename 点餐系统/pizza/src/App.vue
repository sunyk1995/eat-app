<template>
  <div id="app">
		<div class="container">
			<h1>sun11111111</h1>
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
