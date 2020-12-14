<template>
	<view class="store">
		<view class="storeSearch">
			<uni-search-bar radius="50" placeholder="搜索" clearButton="auto" cancelButton="auto" @confirm="search" />
		</view>
		<view class="proList">
			<block v-if="proList.length>0">
				<view class="proCon" v-for="(item,ind) in proList" :key='item.id'>
					<navigator url="/pages/storeProDetail/storeProDetail" class="proShow">
						<view class="proImg">
							<image :src="item.img" mode="widthFix"></image>
						</view>
						<view class="name">{{item.name}}</view>
						<view class="price">
							￥ {{item.price}}
						</view>
					</navigator>
				</view>
			</block>
			<view v-else>
				<image src="../../static/image/k.svg" alt="example">
			</view>
		</view>
		<drag-btn></drag-btn>
	</view>
</template>

<script>
	import {
		uniSearchBar
	} from '../../componemts/uni-search-bar/uni-search-bar.vue'
	import {dragBtn} from '../../componemts/toCart/toCart.vue'
	export default {
		components: {
			uniSearchBar,dragBtn
		},
		data() {
			return {
				proList: [
					{
					id:0,
					img:'../../static/image/img_01@2x.png',
					name:'粤宝投资金条',
					price:'888.88'
				},{
					id:1,
					img:'../../static/image/img_02@2x.png',
					name:'粤宝投资金条',
					price:'888.88'
				},{
					id:2,
					img:'../../static/image/img_03@2x.png',
					name:'粤宝投资金条',
					price:'888.88'
				},
				],
			}
		},
		onLoad() {

		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
		}
	}
</script>
