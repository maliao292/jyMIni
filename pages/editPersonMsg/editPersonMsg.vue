<template>
	<view>
		<my-list :list="list"></my-list>
	</view>
</template>

<script>
	import myList from '../../componemts/list.vue'
	export default {
		components: {
			myList
		},
		data() {
			return {
				list: [{
					name: '头像',
					url: '123',
					subImg:'/static/image/photo.png'
				},{
					name: '昵称',
					url: '123',
					subText:'欧若拉'
				}, {
					name: '客服电话',
					subText:'139****2067'
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
