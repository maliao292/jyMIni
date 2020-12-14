<template>
	<view class="accountCon">
		<view class="pcikerCon listRe">

			<view class="line fullInpt">
				<view class="listname">
					<text>收货人</text>
					<input type="text" value="" v-model="addressObj.username" />
				</view>
			</view>
			<view class="line fullInpt">
				<view class="listname">
					<text>手机号</text>
					<input type="number" value="" v-model="addressObj.phone" />
				</view>
			</view>
			<view class="line fullInpt" @click="choseAddress">
				<view class="listname">
					<text>所在区域</text>
					<input type="text" value="" v-model="addressObj.address" />
				</view>
				<view class="arrow">
					<image src="/static/image/rightArrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="line fullInpt">
				<view class="listname">
					<text>详细地址</text>
					<input type="number" value="" v-model="addressObj.address" />
				</view>
			</view>
			<view class="line">
				<view class="listname">
					<text>设置为默认地址</text>
				</view>
				<view class="arrow">
					<switch color='#FFBE00' :checked="isChecked" @change="" />
				</view>
			</view>
		</view>
		<view class="personLogout">
			<view class="logoutBtn" @click="saveFun">
				确认
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isChecked: false,
				addressObj: {
					address: "",
					id: "",
					ind: "",
					phone: "",
					username: "",
				},
			}
		},
		onLoad(option) {
			this.addressObj = option
			this.isChecked = option.ind == 0 ? true : false
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			getcode() {

			},
			saveFun() {
				if (!this.addressObj.phone) {
					uni.showModal({
						title: '请填写手机号码'
					})
					return false;
				}
				if (!(/^1[34578]\d{9}$/.test(this.addressObj.phone))) {
					uni.showModal({
						title: '手机号码有误，请重新填写'
					})
					return false;
				}
			},
			choseAddress() {
				let _this = this
				uni.chooseLocation({
					success: res => {
						console.log(res);
						_this.addressObj.address = res.address
						console.log(this.addressObj);
					}
				});
			},
		}
	}
</script>

<style>

</style>
