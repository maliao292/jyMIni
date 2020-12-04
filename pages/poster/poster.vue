<template>
	<view class='page'>
		<canvas canvas-id="myCanvas"   id='sss'></canvas>
		<image :src="base64" mode="" v-if="base64" class="immm" ></image>
		<button type="primary" @click='bcFn'  >保存图片</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
				base64:'',
				ewm:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606818539508&di=615f47bb0d366337d022e5a55764a545&imgtype=0&src=http%3A%2F%2Fwww.dh3344.com%2Fapi%2Fqrcode.png.php%3Fauth%3Dhttp%3A%2F%2Fwww.dh3344.com%2Fnews%2Fshow-82469.html',//线上图片
				bg_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606818592544&di=b87b3cb14d113de835ef96e7b7413c47&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F13%2F41%2F01300000201800122190411861466.jpg',//线上图片
				system_info:[],//系统信息
				hh:'',
				ww:''
			}
		},
		onLoad(){ 
			this.system_info =uni.getSystemInfoSync();//屏幕宽高
			this.ww = this.system_info.windowWidth; //准确的宽高
			this.hh = this.system_info.windowHeight+100;
			var that=this;
			
			 //这里等promise执行，避免拿不到图片临时路径
			const promise1 = new Promise((resolve, reject) => {
				    uni.downloadFile({
				    	url:that.bg_img,
				    	success:(res)=>{ 	 
				    	 resolve(res)
				    	}
				    })
			});
			const promise2 = new Promise((resolve, reject) => {
				    uni.downloadFile({
				    	url:that.ewm,
				    	success:(res)=>{ 	 
				    	 resolve(res)
				    	}
				    })
			});
			Promise.all([promise1, promise2]).then((values) => {
			  console.log(values[1].tempFilePath);
			  this.make_canvas(values[0],values[1]);
			}); 
			// this.make_canvas(test,test2);
			 
			
		},
		methods: {

			make_canvas(img01,img02) {
			 
				const query = uni.createSelectorQuery().in(this);
				var system_info =this.system_info;
				 
				 
				 let ww = system_info.windowWidth; //准确的宽高
				 let hh = system_info.windowHeight;
				 
				 
				 console.log(system_info);
				 var ctx = uni.createCanvasContext('myCanvas') //绑定画布 
				 ctx.drawImage(img01.tempFilePath, 0, 0,ww,hh); //填充进图片
				 ctx.drawImage(img02.tempFilePath, ww/2-75, hh/3-75,150,150); //填充进图片·                                                                                                                                                                                                                                                                                                                                                                                                                            
				 ctx.setFillStyle('#000')  //设置内容1的文字样式
				 ctx.setFontSize(30);
				 ctx.setTextAlign('center')  //设置对于坐标点的对齐方式 
				 ctx.setFillStyle("#FFFFFF")  //设置内容2的文字样式
				 ctx.setFontSize(20);
				 ctx.setTextAlign('center')  //同上
				 ctx.fillText('快和我一起加入XXXXX',ww/2,hh/3+150)
				 ctx.draw();  //输出到画布中
				 uni.showLoading({ //增加loading等待效果
					mask:true
				 })
				 setTimeout(()=>{  //不加延迟的话，base64有时候会赋予undefined
					uni.canvasToTempFilePath({
						canvasId:'myCanvas',
						success: (res) => { 
							
							this.base64=res.tempFilePath
						}
					})
					uni.hideLoading();
				 },1200)
				 
				 
 
			},
			bcFn(){
				console.log(this.base64);
				uni.saveImageToPhotosAlbum({  //保存图片
					filePath:this.base64,  
					success: (res) => {
						uni.showToast({
							title:'保存成功',
						})
					},
					fail(r) {
						console.log(r)
					}
				})
			}
		}
	}
</script>
<style>
	.input {
		width: 100%;
		height: 80rpx;
		background: #ccc;
	}
	 
	#sss {
		position: absolute;
		width: 750rpx;
		height: 1006rpx;
		top: -99999899rpx;
		left: -99999899rpx;
		z-index: 9999;
	}
	.immm {
		width: 750rpx;
		height: 1000rpx;
	}
</style>