<template>
	<view class="accountCon">
		<view class="pcikerCon listRe">
			<view class="line">
				<view class="listname">
					<text>开户银行</text>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
				<view class="arrow">
					<image src="/static/image/rightArrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="line fullInpt">
				<view class="listname">
					<text>真实姓名</text>
					<input type="text" value="" />
				</view>
				
			</view>
			<view class="line fullInpt">
				<view class="listname">
					<text>身份证号</text>
					<input type="text" value="" />
				</view>
				
			</view>
			<view class="line fullInpt">
				<view class="listname">
					<text>手机号</text>
					<input type="text" value="" />
				</view>
				
			</view>
			<view class="line">
				<view class="listname">
					<text>验证码</text>
					<input type="text" value="" />
				</view>
				<view class="">
					<view class="getcode">
						获取验证码
					</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:null,
				array: [{
					name: '浦发银行'
				}, {
					name: '恒丰银行'
				}, {
					name: '中国工商银行'
				}],
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log(e)
				this.index = e.detail.value
			},
		}
	}
</script>

<style>

</style>
