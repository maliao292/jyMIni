<template>
	<view class="orders">
		<view class="orderTabs">
			<view class="tab" :class="{active:ind == activeTab}" v-for="(item,ind) in tabList" :key="ind" @click='tabchange(ind,$event)'>
				{{item.name}}
			</view>
			<view class="activeLine" :animation="animation"></view>
		</view>
		<view class="orderList">
			<scroll-view style="height: 300px;" class="scrollView" scroll-y="true" @scroll="scroll">
				<view class="orderDetail">
					<view class="orderTitle">
						<view class="orderNum">
							订单信息：77951960617105303
						</view>
						<text>已完成</text>
					</view>
					<view class="proitem">
						<navigator class="prodetail" url="/pages/personOrderDetail/personOrderDetail">
							<view class="">
								<image src="../../static/image/i1.png" mode="widthFix"></image>
								<view class="">
									<view class="name">9999黄金元宝</view>
									<view class="gg">规格：“20g”</view>
									<view class="num">× 1</view>
								</view>
							</view>
							<view class="price">
								￥ 8400
							</view>
						</navigator>
						<view class="total">
							<view class="freight">
								<text>运费￥</text>
								<text>7.00</text>
							</view>
							<view class="freight">
								 <text>合计￥</text>
								<text>48147</text>
							</view>
						</view>
						<view class="btn">
							<view class=""> 再次购买 </view>
							<view class=""> 取消订单 </view>
							<view class=""> 再去逛逛 </view>
							<view class="gopay"> 去付款 </view>
						</view>
					</view>
				</view>
		</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				animation: null,
				activeTab: 0,
				tabList: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '待发货'
					},
					{
						name: '待收货'
					},
					{
						name: '已完成'
					},
				],
			}
		},
		onLoad() {

		},
		methods: {
			tabchange(ind, e) {
				this.activeTab = ind
				var animation = uni.createAnimation()
				this.animation = animation;
				animation.left(e.target.offsetLeft).step({
					duration: 100,
					timingFunction: 'linear'
				})
				this.animation = animation.export()
			},
			scroll() {}
		}
	}
</script>
