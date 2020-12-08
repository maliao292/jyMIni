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
					<input type="text" value="" v-model="cardId" />
				</view>

			</view>
			<view class="line fullInpt">
				<view class="listname">
					<text>手机号</text>
					<input type="number" value="" />
				</view>

			</view>
			<view class="line">
				<view class="listname">
					<text>验证码</text>
					<input type="number" value="" />
				</view>
				<view class="">
					<view class="getcode" @click="getcode">
						获取验证码
					</view>
				</view>
			</view>
		</view>
		<view class="personLogout">
			<view class="logoutBtn" @click="openAccount">
				立 即 开 户
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: null,
				countDown: 0,
				cardId: '',
				array: [{
					name: '浦发银行'
				}, {
					name: '恒丰银行'
				}, {
					name: '中国工商银行'
				}],
			}
		},
		onLoad() {
		
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			getcode() {

			},
			openAccount() {
				uni.showModal({
					title: this.valiteIdCard(this.cardId, '')
				})
			},
			valiteIdCard(sId, ShowMsg) {
				var aCity = {
					11: "北京",
					12: "天津",
					13: "河北",
					14: "山西",
					15: "内蒙古",
					21: "辽宁",
					22: "吉林",
					23: "黑龙江",
					31: "上海",
					32: "江苏",
					33: "浙江",
					34: "安徽",
					35: "福建",
					36: "江西",
					37: "山东",
					41: "河南",
					42: "湖北",
					43: "湖南",
					44: "广东",
					45: "广西",
					46: "海南",
					50: "重庆",
					51: "四川",
					52: "贵州",
					53: "云南",
					54: "西藏",
					61: "陕西",
					62: "甘肃",
					63: "青海",
					64: "宁夏",
					65: "新疆",
					71: "台湾",
					81: "香港",
					82: "澳门",
					91: "国外"
				};
				var iSum = 0;
				var info = "";
				if (!/^\d{17}(\d|x)$/i.test(sId)) return "您输入的" + ShowMsg + "身份证长度或格式错误,请检查！";
				sId = sId.replace(/x$/i, "a");
				if (aCity[parseInt(sId.substr(0, 2))] == null) return "你输入的" + ShowMsg + "身份证地区非法,请检查！";
				var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
				var d = new Date(sBirthday.replace(/-/g, "/"));
				if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "您输入的" + ShowMsg +
					"身份证上的出生日期非法,请检查！";
				for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
				if (iSum % 11 != 1) return "您输入的" + ShowMsg + "身份证号非法,请检查！";
				return "";

			}

		}
	}
</script>

<style>

</style>
