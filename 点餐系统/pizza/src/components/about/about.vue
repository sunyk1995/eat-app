<template>
	<div id="about">
		<div class="row mb-5">
			<div class="col-4">
				<div class="list-group mb-5">
					<router-link tag='li' class='nav-link' to='/about/history'>
						<a class="list-group-item list-group-item-action">历史订单</a>
					</router-link>
				</div>
				<div class="list-group mb-5">
					<router-link tag='li' class='nav-link' to='/about/say'>
						<a class="list-group-item list-group-item-action">联系我们</a>
					</router-link>
				</div>
				<div class="list-group mb-5">
					<router-link tag='li' class='nav-link' to='/about/buy'>
						<a class="list-group-item list-group-item-action">点餐文档</a>
					</router-link>
				</div>
				<div class="list-group mb-5">
					<router-link tag='li' class='nav-link' to='/about/address'>
						<a class="list-group-item list-group-item-action">联系方式</a>
					</router-link>
				</div>
			</div>
			<div class="col-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>