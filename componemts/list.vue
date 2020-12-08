<template>
	<view class="constormList">
		<view v-for="(item,ind) in list" :key='ind'>
			<navigator v-if="item.url" :url="item.url" class="listLine">
				<view class="listname">
					<image v-if="item.icon" :src="item.icon" mode="widthFix"></image>
					<text>{{item.name}}</text>
				</view>
				<view class="submsg">
					<view class="subImg" v-if="item.subImg">
						<image :src="item.subImg" mode="widthFix"></image>
					</view>
					<text v-if="item.subText">{{item.subText}}</text>
					<image src="../static/image/rightArrow.png" mode="widthFix"></image>
				</view>
			</navigator>
			<view v-else-if="item.method"  @click="editMsg" class="listLine">
				<view class="listname">
					<image v-if="item.icon" :src="item.icon" mode="widthFix"></image>
					<text>{{item.name}}</text>
				</view>
				<view class="submsg">
					<view class="subImg" v-if="item.subImg">
						<image :src="item.subImg" mode="widthFix"></image>
					</view>
					<text v-if="item.subText">{{item.subText}}</text>
					<image src="../static/image/rightArrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="showmsg listLine" v-else>
				<view class="listname">
					<image v-if="item.icon" :src="item.icon" mode="widthFix"></image>
					<text>{{item.name}}</text>
				</view>
				<view v-if="item.subText" class="submsg">
					<text>{{item.subText}}</text>
				</view>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		props: {
			list: {
				default: [],
				type: Array
			}
		},

		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			editMsg() {
				this.$emit('open')
			}
		}
	}
</script>

<style lang="scss">
	.constormList {
		padding-left: 30upx;

		>view {
			border-bottom: 1px solid #ececec;
		}

		.listLine {
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 104upx;
			padding-right: 30upx;

			.listname {
				display: flex;
				justify-content: space-between;
				align-items: center;

				text {
					font-size: 32upx;
				}

				image {
					width: 48upx;
					margin-right: 10upx;
				}

			}

			.submsg {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.subImg {
					padding: 20upx 0;
					font-size: 0;

					image {
						width: 112upx;
					}
				}

				image {
					width: 32upx;
				}

				text {
					font-size: 14px;
					color: #999;
				}
			}
		}

		.showmsg {
			.submsg {
				text {
					font-size: 28upx;
					color: #ccc;
				}
			}
		}
	}
</style>
