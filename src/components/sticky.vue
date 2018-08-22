<template>
	<div>
		<h1>zhangweiakng</h1>
		<div style="height:44px">
			<sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
				<tab :line-width="1">
					<tab-item selected>正在正映</tab-item>
					<tab-item>即将上映</tab-item>
				</tab>
			</sticky>
		</div>
		<actionsheet :value="false" :show-cancel="true" theme="android" :menus="menus" @on-click-menu="onClick"/>
		<loading :value="false" text="正在加载"/>
		<popup :value="false" height="100%" position="left" width="50%" :popup-style="{'background':'#fff'}">
			<div style="background:#fff">
				<p v-for="i in 5" :key="i">{{ i }}</p>
			</div>
		</popup>
		<toast :value="true" text="成功"/>
		<x-icon type="ios-heart-outline" size="25"/>
		<!-- <x-input :value="123456" title="密码" placeholder="请输入六位密码" :equal-with="123456"></x-input> -->
		<x-button type="primary" :show-loading="false">加载动画</x-button>
		<div v-transfer-dom> 
			<x-dialog :show="showDialog">
				<div class="img-box">
					<img src="static/img/demo1.jpg" style="max-width:100%">
				</div>
				<div @click="showDialog=false">
					<span class="vux-close"/>
				</div>
			</x-dialog>
		</div>
		<br>
		<range/>
	</div> 
</template>

<script>
import {Sticky,Tab,TabItem,Actionsheet,Loading,Popup,Toast ,XInput ,XButton ,XDialog,TransferDomDirective as TransferDom ,Range} from "vux";
export default {
	data (){
		return {
			menus:[
				{
					"label":"姬帅星",
					"value":"ji",
					"type":"warn",
					"theme":"ios"
				},
				{
					"label":"赵真真",
					"value":"zhao",
					"type":"primary",
					"theme":"android"
				},
				{
					"label":"李腾腾",
					"value":"li",
					"type":"primary",
					"theme":"ios"
				},
				{
					"label":"张伟康",
					"value":"zhang",
					"type":"primary",
					"theme":"ios"
				}
			],
			showDialog:true
		};
	},
	components:{
		Sticky,
		Tab,
		TabItem,
		Actionsheet,
		Loading,
		Popup,
		Toast,
		XInput,
		XButton,
		XDialog,
		Range
	},
	methods:{
		more (){
			console.log("更多");
		},
		back (){
			console.log("返回");
		},
		title (){
			console.log("标题");
		},
		onClick (key,value){
			console.log(key,value);
		},
		input (){
			return {valid:true};
		}
	},
	computed:{
		show (){
			return this.$store.state.show;
		}
	},
	directives:{
		TransferDom
	}
};
</script>

<style>
    .weui-dialog{
        border-radius: 8px;
        padding-bottom: 8px;
    }
    .dialog-title {
        line-height: 30px;
        color: #666;
    }
    .img-box {
        height: 350px;
        overflow: hidden;
    }
    .vux-close {
        margin-top: 8px;
        margin-bottom: 8px;
    }
</style>