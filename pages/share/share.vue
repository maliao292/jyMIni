<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			wx.showShareMenu({
			            withShareTicket: true,
			            menus: ['shareAppMessage', 'shareTimeline']
			        });
			uni.chooseLocation({
				success: function(res) {
					// console.log(res);
					var locationObj = formatLocation(res);
					obj[address] = locationObj.REGION_PROVINCE + " " +
						locationObj.REGION_CITY + " " +
						locationObj.REGION_COUNTRY;
					obj[name] = locationObj.ADDRESS;
					console.log(obj);
				},
				fail: function() {}
			})
		},
		onShareAppMessage() {},
		onShareTimeline() {
		            return {
		                        title: '我的自定义标题',
		                        query: 'name=xxx&age=xxx',
		                        imageUrl: 'http://123.png',
		                    }
		        },
		methods: {

		}
	}
</script>

<style>

</style>
