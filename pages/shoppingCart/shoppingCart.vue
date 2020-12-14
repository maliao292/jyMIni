<template>
	<view class="shoppingCart">
		<view class="cartsList">
			<uni-swipe-action>
				<checkbox-group @change='boxchange'>
					<block v-for="(item,ind) in catList" :key='item.id'>
						<uni-swipe-action-item :threshold="0" :right-options="options" @click="bindClick">
							<view class="content-box">
								<view class="cartdetailCon">
									<checkbox :value="ind" :checked="item.checked" color="#FFBE00" style="transform:scale(0.7)" />
									<view class="cartdetail">
										<image :src="item.img" mode="widthFix"></image>
										<view>
											<view class="name">{{item.name}}</view>
											<view class="gg">规格：“{{item.gg}}”</view>
											<view class="price"> <text>￥</text> {{item.price}}</view>
										</view>
									</view>
								</view>
								<view class="numadd">
									<uni-number-box :min="1" :max="9" :value="item.num" style="transform:scale(0.7)" @change="numChange" :ind='ind'></uni-number-box>
								</view>
							</view>
						</uni-swipe-action-item>
					</block>
				</checkbox-group>
			</uni-swipe-action>
		</view>
		<view class="bottomTab">
			<view class="choseAll">
				<checkbox value="cb" :checked="checkAll" color="#FFCC33" style="transform:scale(0.7)" />全选
			</view>
			<view class="totalMoney">
				<text>不含运费</text>
				<text>合计：</text>
				<text>￥ {{allMoney}}</text>
			</view>
			<view class="jsBtn">
				结算（{{allNum}}）
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniSwipeAction
	} from '../../componemts/uni-swipe-action/uni-swipe-action.vue';
	import {
		uniSwipeActionItem
	} from '../../componemts/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniNumberBox from '../../componemts/uni-number-box/uni-number-box.vue'
	export default {
		components: {
			uniSwipeAction,
			uniSwipeActionItem,
			uniNumberBox
		},
		data() {
			return {
				checkAll: false,
				allNum: 0,
				allMoney: 0,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#FF5A5A'
					}
				}],
				catList: [{
					img: '../../static/image/i1.png',
					name: '9999黄金元宝',
					gg: '20g',
					price: '1',
					num: 2,
					checked: true,
					id: 0
				}, {
					img: '../../static/image/img_02@2x.png',
					name: '9999黄金元宝',
					gg: '20g',
					price: '3',
					num: 2,
					checked: false,
					id: 0
				}, ]
			}
		},
		computed: {
			// checkAll(){
			// let all = this.catList.every(res=>{
			// 		return res.checked
			// 	})
			// 	return all
			// },
			// totalMoney(){
			// 	this.catList
			// }
		},
		watch: {
			catList: {
				handler(newVal, oldVal) {
					this.checkAll = this.catList.every(res => {
						return res.checked
					});
					let allnum = 0;
					let allmoney = newVal.reduce((prev, cur) => {
						allnum += cur.checked ? Number(cur.num) : 0
						let thisnum = cur.checked ? Number(cur.num) * Number(cur.price) : 0
						return thisnum + prev
					}, 0)
					this.allNum = allnum
					this.allMoney = allmoney
				},
				deep: true,
				immediate: true
			}
		},
		methods: {
			bindClick(e) {
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			},
			numChange(e, ind) {
				this.catList[ind]['num'] = e
			},
			boxchange(e) {
				let checkedArr = e.detail.value;
				let catList = JSON.parse(JSON.stringify(this.catList))
				catList.forEach((res, ind) => {
					this.catList[ind]['checked'] = checkedArr.includes('' + ind)
				})
			},
		}
	}
</script>

<style>

</style>
