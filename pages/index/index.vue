<template>
	<view class="content homeContent">
		<view class="headerBar">
			<custom-header :cusBackgroundColor='cusBackgroundColor'>
				<view class="homeHeader">
					<image src="/static/image/jy_logo.png" mode="widthFix"></image>
					<text>金崟家</text>
				</view>
			</custom-header>
		</view>

		<view class="homeContent">
			<view class="proPrice">
				<view class="halfCircle">
					<view class="circle"></view>
				</view>
				<view class="priceText">
					<view class="title">即时价格</view>
					<view class="gold priceshow">
						<view>黄金</view>
						<view>888.66</view>
						<view class="unit">/ 克</view>
					</view>
					<view class="silver priceshow">
						<view>白银</view>
						<view>666.66</view>
						<view class="unit">/ 克</view>
					</view>
					<view class="share">
						<image src="../../static/image/shareA.png" mode="widthFix"></image>立即分享
					</view>
				</view>

				<view class="openAccount">
					<navigator url="/pages/openAccount/openAccount">立即开户</navigator>
				</view>
				<view class="homeSwiper">
					<swiper class="swiper" :indicator-color="indicatorColor" indicator-active-color="rgba(255,255,255,1)"
					 :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<image src="../../static/image/slider.png" mode="widthFix"></image>
						</swiper-item>
					</swiper>
				</view>

				<view class="agency">
					<view class="commonTitle">合作机构</view>
					<view class="agencyList">
						<view v-for="item in agencyArr" :key="item.id">
							<view class="itemCon">
								<view>
									<image :src="item.img" mode="widthFix"></image>
								</view>
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import customHeader from '../../componemts/customHeader.vue'
	export default {
		data() {
			return {
				cusBackgroundColor: '#FFBE00',
				indicatorDots: true,
				autoplay: true,
				interval: 1500,
				duration: 500,
				indicatorColor: 'rgba(255,255,255,0.5)',
				agencyArr: [{
					id: 1,
					img: '/static/image/bank1.png'
				}, {
					id: 2,
					img: '/static/image/bank2.png'
				}, {
					id: 3,
					img: '/static/image/bank3.png'
				}, {
					id: 4,
					img: '/static/image/bank4.png'
				}]
			}
		},
		components: {
			customHeader
		},
		onShareAppMessage(res) {
			return {
				title: '微信小程序测试分享',
				path: '/pages/common/login'
			}
		},
		onLoad() {
			uni.getSystemInfo({

			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.homeHeader {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;

		text {
			font-size: 17px;
		}

		image {
			width: 24px;
			margin-right: 10px;
		}
	}
</style>
