<template>
	<view class="personCon">
		<view class="nolog" v-if="!isLogin">
			<view class="photo">
				<image :src="jyuserInfo.avatarUrl?jyuserInfo.avatarUrl:headphoto" mode="widthFix"></image>
			</view>
			<button open-type="getUserInfo" @getuserinfo="getUserInfo" type="primary">微信授权登录</button>
		</view>
		<block v-else>
			<view class="editPerson">
				<view class="editLeft">
					<view class="photo">
						<image :src="jyuserInfo.avatarUrl?jyuserInfo.avatarUrl:headphoto" mode="widthFix"></image>
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
		</block>
	
	</view>
</template>

<script>
	import myList from '../../componemts/list.vue'

	export default {
		components: {
			myList,
			
		},
		data() {
			return {
				isLogin: false,
				message: '这是一条成功消息提示',
				jyuserPhone: {},
				headphoto: '/static/image/photo.png',
				jyuserInfo: {},
				list: [{
					icon: '/static/image/address.png',
					name: '收货地址',
					url: '/pages/personAddresslist/personAddresslist',
				}, {
					icon: '/static/image/service.png',
					name: '客服电话',
					url: '123',
				}, {
					icon: '/static/image/order.png',
					name: '我的订单',
					url: '123',
					// subText:'欧若拉'
				}, {
					icon: '/static/image/coupon.png',
					name: '优惠券',
					url: '123',
				}, {
					icon: '/static/image/opinion.png',
					name: '意见反馈',
					url: '123',
				}]
			}
		},
		onLoad() {
			this.jyuserInfo = uni.getStorageSync('jyUserInfo') ? uni.getStorageSync('jyUserInfo') : {};
			this.jyuserPhone = uni.getStorageSync('jyUserphone') ? uni.getStorageSync('jyUserphone') : {};
			if (!!this.jyuserInfo.avatarUrl && !!this.jyuserPhone) {
				this.isLogin = true
			}
		},
		methods: {

			getUserInfo(res) {
				let code = ''
				uni.login({
					success: (res) => {
						console.log(res);
						code = res.code
					},
					fail: () => {
						console.log("未授权");
					}
				})
				console.log(res)
				this.jyuserInfo = res.detail.userInfo
				uni.setStorageSync('jyUserInfo', res.detail.userInfo);
				uni.setStorageSync('jyUserphone', {
					ivdata: res.detail.iv,
					encrypdata: res.detail.encryptedData,
				});
				let url =
					`https://api.weixin.qq.com/sns/jscode2session?appid=wx738ee709ecdb8dc6&secret=&js_code=${code}&grant_type=authorization_code`;
				uni.request({
					url,
					success(res) {
						console.log(res)
					}
				})
				this.isLogin = true
			},



		}
	}
</script>

<style>

</style>
