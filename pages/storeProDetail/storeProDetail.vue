<template>
	<view class="proDtailPage">
		<view class="detailCon">
			<view class="proImgs">
				<swiper class="swiper" :indicator-dots="false" :autoplay="false" @change="swiperChange">
					<swiper-item v-for="(item,ind) in proImgArr" :key='ind'>
						<image :src="item" mode="widthFix" @tap="_previewImage(item)"></image>
					</swiper-item>

				</swiper>
				<view class="imgNum">
					{{current+1}}/{{proImgArr.length}}
				</view>
			</view>
			<view class="priceshare">
				<view class=""><text>￥</text> 8040-40100</view>
				<view>
					<image src="../../static/image/icon_store_commodity_share@2x.png" mode="widthFix"></image>分享
				</view>
			</view>
			<view class="name">9999黄金元宝</view>
			<view class="inventory ">
				<text>快递：￥7.00</text>
				<text>库存：28674</text>
				<text>月销：3w+</text>
			</view>
			<view class="chosespecification">
				<view>
					<text>选择</text>
					<text>请选择商品规格</text>
				</view>
				<view class="arrow">
					<image src="../../static/image/rightArrow.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="proDetail">
			<view class="title">商品详情</view>
		</view>
		<view class="buyBtn">
			<image src="../../static/image/service.png" mode="widthFix"></image>
			<view class="btn">
				<view @click="choseGg" class="incar">加入购物车</view>
				<view class="buyNow">立即购买</view>
			</view>
		</view>
		<uni-popup id="dialogInput" ref="popup" type="bottom" @change="change">
			<view class="choseGgTab">
				<view class="close">
					<view class="item">
					    <icon type="cancel" size="20" color='#999'/>
					</view>
				</view>
				<view class="proDeatail">
					<view class="proimg">
						<image src="../../static/image/i1.png" mode="widthFix"></image>
					</view>
					<view class="proprice">
						<view class="priceText">
							<text>￥</text>8040-40100
						</view>
						<view class="proinventory">库存：28674</view>
						<view>请选择：产品规格</view>
					</view>
				</view>
				<view class="standard">
					<view class="title"> 产品规格 </view>
					<view class="btn">
						<view>20g</view>
						<view>50g</view>
						<view>100g</view>
					</view>
				</view>
				<view class="buyNum">
					<view class="title">购买数量</view>
					<uni-number-box :min="2" :max="9" :value="5"></uni-number-box>
				</view>
				<view class="buyBtns">
					<view class="btn">确认购买</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '../../componemts/uni-popup/uni-popup.vue'
	import uniPopupShare from '../../componemts/uni-popup-share/uni-popup-share.vue'
	import uniNumberBox from '../../componemts/uni-number-box/uni-number-box.vue'
	export default {
		components:{
			uniPopupShare,uniPopup,uniNumberBox
		},
		data() {
			return {
				type:'bottom',
				current: 0,
				proImgArr: [
					'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3215114587,1069263686&fm=11&gp=0.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1794720747,645524635&fm=26&gp=0.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3200307872,1997793403&fm=11&gp=0.jpg'
				]
			}
		},
		methods: {
			swiperChange(e) {
				this.current = e.detail.current
			},
			_previewImage(image) {
				uni.previewImage({
					urls: this.proImgArr,
					current: image
				});
			}
			,choseGg(){
				this.type = 'bottom'
				this.$refs.popup.open()
			},
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
		}
	}
</script>

<style>

</style>
