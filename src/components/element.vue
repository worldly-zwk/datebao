<template>
    <div>
        <el-row :gutter="10" type="flex" justify="center" align="middle">
            <el-col :xs="8" :sm="6" :md="4" :lg="2">
                <div class="grid-content bg-purple">
                    <el-button-group>
                        <el-button type="primary" icon="arrow-left">上一页</el-button>
                        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                    </el-button-group>
                    <el-button type="primary" :loading="true">加载中</el-button>
                    <el-radio-group v-model="radio">
                        <el-radio :label="1">备选项1</el-radio>
                        <el-radio :label="2">备选项2</el-radio>
                        <el-radio :label="3">备选项3</el-radio>
                    </el-radio-group>
                </div>
            </el-col>
            <el-col :xs="8" :sm="12" :md="16" :lg="22"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="0"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <br>
        <el-radio-group v-model="radioButton">
            <el-radio-button label="上海">上海</el-radio-button>
            <el-radio-button label="北京">北京</el-radio-button>
            <el-radio-button label="深圳">深圳</el-radio-button>
            <el-radio-button label="广州">广州</el-radio-button>
        </el-radio-group>
        <el-checkbox :indeterminate="isIndeterminate" label="全选" v-model="checkAll" @change="handleCheckAllChange($event)"></el-checkbox>
        <el-checkbox-group v-model="checkbox" @change="handleCheckedCitiesChange">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="复选框 D"></el-checkbox>
            <el-checkbox label="复选框 E"></el-checkbox>
        </el-checkbox-group>
        <el-input v-model="input" placeholder="请输入内容" icon="search" :on-icon-click="onClick" type="textarea"></el-input>
        <el-input placeholder="请输入网址">
            <span slot="prepend">Http://</span>
            <span slot="append">.com</span>
        </el-input>
        <el-input placeholder="请输入网址">
             <!-- <el-select vlaue slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>  -->
            <el-button slot="append" icon="search"></el-button>
        </el-input>
        <el-autocomplete v-model="state" placeholder="请输入内容" :fetch-suggestions="querySearch" :trigger-on-focus="false"></el-autocomplete>
        <el-input-number v-model="number" :min="1" :max="10"></el-input-number>
        <el-select v-model="select" placeholder="请选择" multiple>
            <!-- <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option> -->
            <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
    </div>
    
</template>
<script>
    var checkList=["复选框 A","复选框 B","复选框 C","复选框 D","复选框 E"];
    export default{
        components:{

        },
        data(){
            return{
                radio:1,
                radioButton:"北京",
                checkbox:["复选框 A","复选框 E"],
                checkAll:false,
                isIndeterminate:true,
                input:"",
                select:"",
                state:"",
                restaurants:[],
                number:1,
                options: [
                    {value: '选项1', label: '黄金糕'},
                    {value: '选项2',label: '双皮奶'},
                    {value: '选项3',label: '蚵仔煎'},
                    {value: '选项4',label: '龙须面'},
                    {value: '选项5',label: '北京烤鸭'}
                    ]
            }
        },
        methods:{
            handleCheckAllChange (even){
                this.checkbox=even.target.checked?checkList : [];
                this.isIndeterminate=false;
            },
            handleCheckedCitiesChange(value){
                this.checkAll=value.length==checkList.length;
                this.isIndeterminate=value.length>0 && value.length<checkList.length
            },
            onClick (){
                console.log(111)
            },
            querySearch (queryString,cd){
                var restaurants =this.restaurants;
                var results = queryString ? restaurants.filter(restaurant=>restaurant.value.indexOf(queryString)>=0) :restaurants;
                setTimeout(function(){
                    cd(results)
                },1000)
            },
            loadAll() {
                return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                { "value": "钱记", "address": "上海市长宁区天山西路" },
                { "value": "壹杯加", "address": "上海市长宁区通协路" },
                { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                { "value": "浏阳蒸菜", "address": "天山西路430号" },
                { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            }
        },
        mounted (){
            this.restaurants = this.loadAll();
        }
    }
</script>
<style>
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
