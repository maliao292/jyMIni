<template>
	<view>
		<my-list :list="list" @open='open'></my-list>
		<uni-popup id="dialogInput" ref="dialogInput" type="dialog" @change="change">
			<uni-popup-dialog mode="input" title="修改昵称" value="" placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import myList from '../../componemts/list.vue'
	import uniPopup from '../../componemts/uni-popup/uni-popup.vue'
	import uniPopupDialog from '../../componemts/uni-popup-dialog/uni-popup-dialog.vue'
	export default {
		components: {
			myList,
			uniPopup,
			uniPopupDialog
		},
		data() {
			return {
				list: [{
					name: '头像',
					url: '123',
					subImg: '/static/image/photo.png'
				}, {
					name: '昵称',
					method: 'open',
					subText: '欧若拉'
				}, {
					name: '客服电话',
					subText: '139****2067'
				}]
			}
		},
		methods: {

			open() {
				this.$refs.dialogInput.open()
			},
			change(e) {
				console.log( e.show)
			},
			/**
			 * 输入对话框的确定事件
			 */
			dialogInputConfirm(done, val) {
				uni.showLoading({
					title: '3秒后会关闭'
				})
				console.log(val);
				this.value = val
				setTimeout(() => {
					uni.hideLoading()
					// 关闭窗口后，恢复默认内容
					done()
				}, 3000)
			},
		}
	}
</script>

<style>

</style>
