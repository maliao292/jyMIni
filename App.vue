<script>
	import {
		getSetting
	} from "./utils/asyncWx.js";
	export default {
		onLaunch: function() {
			    // 1 获取 权限状态
			 getSetting().then(res=>{
				 console.log(res)
			 });
				  
			      // const scopeAddress = res1.authSetting["scope.address"];
			let jyUserInfoMsg = uni.getStorageSync('jyUserInfo') ? uni.getStorageSync('jyUserInfo') : {};
			if (Object.keys(jyUserInfoMsg).length === 0) {
				uni.getUserInfo({
					success: (res) => {
						uni.setStorageSync('jyUserInfo', res.userInfo);
						console.log(res)
					},
					fail: err => {
						console.log('未授权')
					
					}
				})
			}



		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */



	@import "/static/css/style.scss";
	@import "/static/css/uni.scss";

	view,
	text {
		box-sizing: border-box;
	}

	.headerBar {
		height: 65px;
	}
</style>
