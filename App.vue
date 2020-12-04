<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
