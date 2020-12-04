<template>
	<view>
		<view v-if="showPopup" class="my-popup uni-popup__mask" @touchmove.stop.prevent="clear" @click.stop='close'>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {

		props: {
			selfClose: {
				/*点击遮罩层是否 可关闭*/
				type: Boolean,
				default: false
			},
		},
		provide() {
			return {
				popup: this
			}
		},

		data() {
			return {
				showPopup: true
			}
		},

		methods: {
			close() {
				if(this.selfClose)
				this.showPopup = !this.showPopup
			},
			showmodel() {
				this.showPopup = !this.showPopup
			}
		}
	}
</script>
<style scoped>
	@charset "UTF-8";

	.my-popup {
		position: fixed;
		z-index: 99;
	}

	.uni-popup__mask {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
