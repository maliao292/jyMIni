<template>
	<view class="content">
		123
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uni.share({
				provider: "weixin", // 服务商
				scene: "WXSceneSession", // 场景 微信好友WXSceneSession  朋友圈WXSceneTimeLine
				type: 0, // 图文0 文字1 图片2
				href: "http://uniapp.dcloud.io/", // 分享h5地址
				title: "uni-app分享",
				summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！", // 描述
				imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				success: function(res) {
					console.log("success:" + JSON.stringify(res));
				},
				fail: function(err) {
					console.log("fail:" + JSON.stringify(err));
				}
			});
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
