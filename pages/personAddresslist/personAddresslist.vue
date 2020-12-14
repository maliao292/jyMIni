<template>
	<view class="addressContainer">
		<view class="addressCon" v-for="(item,ind) in addressListArr" :key='item.id'>
			<view class="addressItem">
				<view> <text class="mr" v-if="ind===0">默认</text> {{item.address}}</view>
				<view class="userName">
					<view>
						<text>{{item.username}}</text>
						<text>{{item.phone}}</text>
					</view>
					<view>
						<view @click="toggleMessage('warn')">
							<image src="../../static/image/del.png" mode="widthFix"></image>
						</view>
						<view @click="toEditpage(item,ind)">
							<image src="../../static/image/edit.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="commonBtn">
			<view class="con" @click="toEditpage({})">新 增 地 址</view>
		</view>
		<!-- 对话框 -->
		<uni-popup id="popupDialog" ref="popupDialog" type="dialog" @change="change">
			<uni-popup-dialog :type="msgType" title="确认" content="确认删除!" :before-close="true" @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		<!-- 消息提示 -->
		<uni-popup id="popupMessage" ref="popupMessage" type="message" @change="change">
			<uni-popup-message :type="msgType" :message="message" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>

</template>

<script>
	import uniPopup from '../../componemts/uni-popup/uni-popup.vue'
	import uniPopupDialog from '../../componemts/uni-popup-dialog/uni-popup-dialog.vue'
	import uniPopupMessage from '../../componemts/uni-popup-message/uni-popup-message.vue'
	export default {
		components: {
			uniPopup,
			uniPopupDialog,
			uniPopupMessage
		},
		data() {
			return {
				msgType: 'warn',
				message: "提示语",
				addressListArr: [{
					address: "香港特别行政区香港岛湾仔梅花大道705号",
					username: '付谨平',
					phone: '15961976688',
					id: 1
				}, {
					address: "山西省阳泉市城区海桐路944号",
					username: '付谨平',
					phone: '15961976688',
					id: 2
				}]
			}
		},
		methods: {
			toEditpage(obj = {}, ind = -1) {
				let serialize = Object.keys(obj).map(res => {
					return res + '=' + obj[res]
				})
				let params = serialize.length > 0 ? ('?' + serialize.join('&')+'&ind='+ind) : ''
				uni.navigateTo({
					url: '/pages/personAddressEdit/personAddressEdit' + params
				});
				/* 新增地址页面跳转 */
			},
			toggleMessage(type) {
				this.msgType = type
				switch (type) {
					case 'success':
						this.message = '这是一条成功消息提示'
						break
					case 'warn':
						this.message = '这是一条警告消息提示'
						break
					case 'info':
						this.message = '这是一条消息提示'
						break
					case 'error':
						this.message = '这是一条错误消息提示'
						break
				}
				this.$refs.popupDialog.open()
			},
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
			/**
			 * 对话框点击确认按钮
			 */
			dialogConfirm(done) {
				this.$refs.popupMessage.open()
				console.log('点击确认');
				// 需要执行 done 才能关闭对话框
				done()
			},
			/**
			 * 对话框取消按钮
			 */
			dialogClose(done) {
				this.msgType = 'info'
				this.message = '点击了对话框的取消按钮'
				this.$refs.popupMessage.open()
				// 需要执行 done 才能关闭对话框
				done()
			},
		}
	}
</script>

<style>

</style>
