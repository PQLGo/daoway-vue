<template>
  <div>
    <div class="menu">
      <div class="menu-header">
        <h3>到位服务保障</h3>
        <p>到位平台担保交易安全，交易未成功100%退款</p>
      </div>
      <ul class="service-guarantee">
        <li>
          <img src="./image/quan.png" alt="">
          <div>服务多</div>
        </li>
        <li>
          <img src="./image/quan.png" alt="">
          <div>上门快</div>
        </li>
        <li>
          <img src="./image/quan.png" alt="">
          <div>有保障</div>
        </li>
      </ul>
      <footer class="footer">
        <dl class="row">
          <dt class="col-md-1">
            热门城市
          </dt>
          <dd class="col-md-11 row">
            <span class="col-md-1">北京</span>
            <span class="col-md-1">上海</span>
            <span class="col-md-1">广州</span>
            <span class="col-md-1">深圳</span>
            <span class="col-md-1">成都</span>
            <span class="col-md-1">天津</span>
            <span class="col-md-1">南京</span>
            <span class="col-md-1">杭州</span>
            <span class="col-md-1">重庆</span>
            <span class="col-md-1">苏州</span>
            <span class="col-md-1">武汉</span>
            <span class="col-md-1">长沙</span>
            <span class="col-md-1">济南</span>
            <span class="col-md-1">郑州</span>
            <span class="col-md-1">西安</span>
            <span class="col-md-1">沈阳</span>
            <span class="col-md-1">福州</span>
            <span class="col-md-1">厦门</span>
            <span class="col-md-1">南昌</span>
            <span class="col-md-1">合肥</span>
            <span class="col-md-1">宁波</span>
            <span class="col-md-1">无锡</span>
            <span class="col-md-1">青岛</span>
            <span class="col-md-1">大连</span>
            <span class="col-md-1">东莞</span>
            <span class="col-md-1">佛山</span>
            <span class="col-md-1">石家庄</span>
            <span class="col-md-1">哈尔滨</span>
            <span class="col-md-1">太原</span>
            <span class="col-md-1">昆明</span>
            <span class="col-md-1">贵阳</span>
            <span class="col-md-1">南宁</span>
            <span class="col-md-1">温州</span>
          </dd>
        </dl>
      </footer>
    </div >
    <div class="copy">
      <p>&copy;2015 版权所有 到位 daoway.com 京ICP备15001471号-1</p>
      <p>北京邻家科技有限公司</p>
    </div>
  </div>
</template>

<script>
  import footer from './footer.vue'
  import header from './header.vue'
  export default {
    methods:{
    
    },
    components:{
      "vue-footer":footer,
      'vue-header':header
    }
  }
</script>

<style>
  .menu{
    width: 1200px;
    /*background-color: pink;*/
    margin: 0 auto;
    padding: 50px 0 ;
    overflow: hidden;
  }
  .menu-color{
    background-color: #f8f8f8;
  }
  
  .menu-content{
    float: left;
    border: 1px solid #cbcbcb;
    margin:20px 3px 0 3px;
  }
  .menu .menu-content a{
    display: inline-block;
    text-decoration: none;
  }
  .menu-list .menu-one{
    width:220px;
    height: 330px;
    margin: 0 6px;
  }
  .menu-list img{
    height: 210px;
    width: 210px;
  }
  .menu-header{
    position: relative;
  }
  .menu-header h3{
    color: #3d3838;
    font-weight: 800;
    font-size: 28px;
    line-height: 28px;
    font-family: "Microsoft YaHei";
    text-align: center;
  }
  .menu-header p{
    font-size: 22px;
    color: #3d3838;
    margin-top: 15px;
    text-align: center;
  }
  .menu-header span{
    position: absolute;
    right: 0px;
  }
  .menu-one .divImg{
    margin: 5px 5px;
  }
  .server-content{
    width: 210px;
  }
  .server-content .name{
    font-size: 16px;
    font-weight: 800;
    color: #000;
    height: 28px;
    width: 101%;
  }
  .server-content .description{
    color: #929292;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 13px;
    line-height: 18px;
    height: 58px;
  }
  .server-price .hours-price{
    font-size: 14px;
    padding: 5px 5px;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    color: #fb474f;
  }
  .server-price .server-details  {
    float: right;
    margin-right: 2px;
    padding: 0;
    width: 74px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #fb474f;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
  }
  .menu-content:hover{
    box-shadow: 0px 0px 8px #cbcbcb;
  }
  .service-guarantee{
    display: flex;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .service-guarantee li{
    flex: 1;
  }
  
  .copy{
    background-color: #f8f8f8;
    text-align: center;
    padding: 40px 0;
    color: #898989;
  }
  .service-guarantee>li>div{
    margin-top: 10px;
  }
</style>
