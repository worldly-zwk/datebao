<template>
    <div>
        <!--<actionsheet v-model="show1" :menus="menus1"></actionsheet>-->
        <!--<alert v-model="show" title="加载中" content="aaa" @on-show="onShow" @on-hide="onHide" :hide-on-blur="show1"></alert>-->
        <group title="我的钱包" titleColor="red" gutter="20px" >
            <cell title="我的账号"  value-align="right" border-intent>
                <span>不保护你了</span>
            </cell>
            <cell title="余额" value="-1024" inline-desc='我还有多少钱' value-align="right" border-intent></cell>
            <cell title="提现" is-link arrow-direction="up" primary="title" border-intent></cell>
            <cell-box link='www.baidu.com' is-link border-intent>我要去百度啦</cell-box>
            <!--<icon type="success" is-msg></icon>-->
            <!--<calendar v-model="demo" title="日历" @on-change="onChange" disable-past></calendar>-->
            <cell-form-preview :list="list"></cell-form-preview>            
        </group>
        <blur :url="url" :blur-amount="num">我的</blur>
        <button-tab v-model="index">
            <button-tab-item>今天</button-tab-item>
            <button-tab-item selected @on-item-click="onClick(index)">本周</button-tab-item>
            <button-tab-item>本月</button-tab-item>
        </button-tab>
        <card :header="{'title':'首页'}" :footer="{'title':'页脚',link:'https://www.baidu.com'}"><span slot="content">内容</span></card>
        <el-alert title="成功" type="success"></el-alert>
    </div>
</template>
<script>
    import {Actionsheet,Group,Cell,Badge,CellBox,Icon,Blur,ButtonTab, ButtonTabItem,Calendar,Card,CellFormPreview} from 'vux'
    import {Alert} from 'element-ui';
    export default {
        components:{
            Actionsheet,
            //Alert,                              //弹出框
            Group,                              //表单盒子
            Cell,                               //列表
            Badge,                              //未读消息
            CellBox,                            //列表，和cell相识,cell的精简版
            Icon,                               //图标
            Blur,                               //使用svg渲染模糊
            ButtonTab,                          //tab列表,
            ButtonTabItem,                      //tab列表项
            Calendar,                            //日期表单
            Card,                               //创建一个有头、内容、页脚的盒子
            CellFormPreview,
            ElAlert:Alert
        },
        data () {
            return {
                show:false,
                show1:true,
                url:"static/img/tulips.jpg",
                num:30,
                index:1,
                demo:"TODAY",
                menus:{
                    menu1: 'Share to friends',
                    menu2: 'Share to timeline'
                },
                list:[
                    {label:'Apple',value:"20"},
                    {label:'Banana',value:"15"},
                    {label:'Fish',value:"5"}
                ]
            }
        },
        methods:{
            onShow (){
                console.log("显示")
            },
            onHide (){
                console.log("隐藏")
            },
            onClick (index){
                console.log(this.num)
                console.log(index)
            },
            onChange (value){
                console.log(this.demo)
                console.log(value)
            }
        },
        mounted (){
            console.log(this);
        }
    }
</script>