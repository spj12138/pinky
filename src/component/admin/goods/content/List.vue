<template>
  <div class="el-main">

    <!-- 導航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="fonts">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>內容管理</el-breadcrumb-item>
    </el-breadcrumb>
      <!-- 按鈕 -->
      <div>
          <el-button plain icon="el-icon-success">全選</el-button>
          <el-button plain icon="el-icon-circle-plus">增加</el-button>
          <el-button plain icon="el-icon-delete">刪除</el-button>
          <el-input style="width: 200px; float: right;" size="mini" placeholder="请输入内容" prefix-icon="el-icon-search" ></el-input>
      </div>
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" class="tables" >
        <!-- 所属类别 -->
        <!-- 没有type类型就是普通类型, 普通类型可以通过label设置表头 -->
        <!-- 普通类型还可以通过prop属性指定当前列展示的数据字段, 比template方便 -->

        <!-- 全選礦 -->
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column label="標題">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column prop="categoryname" label="所屬類別" width="130"></el-table-column>
      
      <el-table-column prop="stock_quantity" label="庫存" width="130"></el-table-column>
      
      <el-table-column prop="market_price" label="市場價" width="130"></el-table-column>
      
      <el-table-column prop="sell_price" label="銷售價" width="130"></el-table-column>
      
      <el-table-column label="狀態" width="130">
        <template slot-scope="scope">
          <i class="el-icon-picture"></i>
          <i class="el-icon-upload"></i>
          <i class="el-icon-star-on"></i>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">
          <router-link :to="{ name: 'goodsCtEdit', params: { id: 10 } }">修改</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
          data() {
                return {
                  // 表格数据, 将来从接口里面拿
                  tableData3: [
                    {
                      id: 103,
                      title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
                      is_top: 1,
                      is_hot: 1,
                      is_slide: 1,
                      categoryname: "男装",
                      img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                      imgurl: "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                      goods_no: "NZ0000000002",
                      stock_quantity: 200,
                      market_price: 1000,
                      sell_price: 800
                    },
                    {
                      id: 103,
                      title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
                      is_top: 1,
                      is_hot: 1,
                      is_slide: 1,
                      categoryname: "男装",
                      img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                      imgurl: "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                      goods_no: "NZ0000000002",
                      stock_quantity: 200,
                      market_price: 1000,
                      sell_price: 800
                    }
                  ],
                  // 请求接口所需的查询字符串
                  gsListQuery: {
                    pageIndex: 1,
                    pageSize: 10,
                    searchvalue: ''
                  }
                }
              },
              methods: {
                // 获取商品列表数据
                getGoodsList() {
               
                  this.$http.get(this.$api.gsList, { params: this.gsListQuery }).then(res => {
                    this.tableData3 = res.data.message;
               
                  });
                }
              },
              // 组件初始化完毕后, 立马调用接口进行渲染
              created() {
                this.getGoodsList();
              }
  }
</script>


<style scoped>
 
  .fonts {
    font-size: 30px;
    line-height: 40px;
   padding: 0;
    margin: 0;
  }
  
.tables{
  margin-top: 10px;
}
</style>