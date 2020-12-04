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
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [{
					name: '中国'
				}, {
					name: '美国'
				}, {
					name: '巴西'
				}, {
					name: '日本'
				}],
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
		}
	}
</script>

<style>

</style>
