<template>
	<div class="box">
		<div style="height:10px" v-show="loadingShow"></div>
		<img src="../assets/loading.gif" class="loading" v-show="loadingShow">
		<p class="loadingText" v-show="loadingShow">{{ loadingText }}</p>
		<div class="list-first" v-if="list[0]">
			<img :src="list[0].list_img_url_app" class="pic"> 
			<div class="con">
				<h3>{{ list[0].local_product_name }}<span>({{ list[0].product_sales_volume }}人已购买)</span></h3> 
				<div class="con-box">
					<p class="tips">{{ list[0].features }}</p> 
					<p class="price-box">
						<span class="price"><em>{{ list[0].display_price_float }}</em>元</span> 
						<span class="origin"> 原价{{ list[0].original_price.slice(0,2) }}元</span> 
					</p>
				</div>
			</div>
		</div> 
		<div class="list" v-for="item in list.slice(1)"	v-if="list">
			<img :src="item.list_img_url_app" alt="" class="pic">
			<div class="con">
				<h3>{{ item.local_product_name }}</h3>
				<div class="con-box">
					<p class="tips">{{ item.features }}</p>
					<p class="flag-box">
						<span v-for="item in item.productCategoryArr" class="vux-1px">{{ item }}</span>
					</p>
					<p class="price-box">
						<span class="price"><em>{{ item.display_price_float }}</em>元</span>
						<span class="origin"> 原价{{ item.original_price.slice(0,2) }}元</span>
						<span class="price-right">售出{{ item.product_sales_volume }}份</span>
					</p>
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
    
export default {
	data (){
		return {
			loadingText:"众保险正努力赶来…"
		};
	},
	props: {
		loadingShow: {
			type: Boolean,
			default: true
		},
		list: {
			type: Array,
			default: null
		}
	},
	mounted (){
		console.log(this.list);
	}
};
</script>

<style scoped>
    .box{
        min-height: 70%;
        background: #f3f2f6;
    }
    .loading{
        width: 40px;
        height: 40px;
        display: block;
        margin: 0 auto;
    }
    .loadingText{
        text-align: center;
        color: #999;
        font-size: 12px;
    }
    .pic{
        width: 100%;
        height: auto;
        display: block;
    }
    .list-first{
        background: #fff;
    }
    .con{
        padding: 10px 10px 5px;
        overflow: hidden;
    }
    .con-box{
        display: flex;
    }
    .con h3{
        font-size: 16px;
        color: #444;
        font-weight: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .tips{
        font-size: 12px;
        color: #999;
    }
    .price-box{
        flex: 1;
        text-align: right;
        font-size: 10px;
        color: #999;
    }
    .price-box .price{
        color: #ff6f06;
        font-size: 14px;
    }
    .price-box .price em{
        font-size: 18px;
        font-weight: 700;
        font-style: normal;
    }
    .price-box .origin{
        text-decoration: line-through;
        margin-left: 5px;
    }
    .list{
        display: flex;
        padding: 1rem;
        background: #fff;
        overflow: hidden;
    }
    .list .pic{
        width: 11rem;
        height: 8rem;
    }
    .list .con{
        flex: 1;
    }
    .list .con .con-box{
        display: block;
    }
    .list .con .tips{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .list .con .price-box{
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        height: 2.2rem;
    }
    .flag-box{
        display: flex;
        flex-wrap: wrap;
    }
    .flag-box span{
        font-size: 1.2rem;
        color: #43bee6;
        line-height: 1rem;
        padding: 2px .5rem;
        margin-left: 5px;
        margin-top: .5rem;
    }
    .vux-1px:before{
        border-color: #43bee6;
        border-radius: 5px;
    }
    .price-right{
        float: right;
        font-size: 1.2rem;
        margin-top: .5rem;

    }
</style>
