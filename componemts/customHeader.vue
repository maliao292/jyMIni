<template>
	<view class="content">
		<view class="myHeader" :style="{backgroundColor:cusBackgroundColor}">
			<slot></slot>
		</view>
	
	</view>

</template>
<script>
	export default {
		props: {
			cusBackgroundColor: {
				default: '#fff',
				type: String

			}
		},

		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.myHeader {
		position: fixed;
		width: 750upx;
		height: 65px;
		top: 0;
		left: 0;
		padding-top: 20px;
		z-index: 10;
	}
	
</style>
