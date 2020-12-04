<template>
	<view class="personCon">
		<view class="editPerson">
			<view class="editLeft">
				<view class="photo">
					<image src="/static/image/photo.png" mode="widthFix"></image>
				</view>
				<view class="name">
					<view class="per_name"> 欧若拉</view>
					<view class="phone">
						<image src="/static/image/phoneIcon.png" mode="widthFix"></image>
						<text>139****2067</text>
					</view>
				</view>
			</view>
			<navigator url="../editPersonMsg/editPersonMsg" class="editRight">编辑资料</navigator>
		</view>
		<my-list :list="list"></my-list>
		<view class="personLogout">
			<view class="logoutBtn">
				退出登录
			</view>
		</view>
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
					icon: '/static/image/address.png',
					name: '收货地址',
					url: '/pages/personAddresslist/personAddresslist',
					// subText:'欧若拉'
				}, {
					icon: '/static/image/service.png',
					name: '客服电话',
					url: '123',
					// subText:'欧若拉'
				}, {
					icon: '/static/image/order.png',
					name: '我的订单',
					url: '123',
					// subText:'欧若拉'
				}, {
					icon: '/static/image/coupon.png',
					name: '优惠券',
					url: '123',
					// subText:'欧若拉'
				}, {
					icon: '/static/image/opinion.png',
					name: '意见反馈',
					url: '123',
					// subText:'欧若拉'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
