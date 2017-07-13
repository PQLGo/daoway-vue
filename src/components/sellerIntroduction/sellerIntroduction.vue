<template>
  <div>
    <vue-header></vue-header>
    <div class="wrapper">
      <div class="row server-content">
      
        <h2 class="serverSeller-hender">
          <span>所有分类&nbsp;></span>
          <span>家庭保洁&nbsp;></span>
        </h2>
        <!--左侧-->
        <div class="col-md-9 content-left">
          <div class="left-top">
            <img src="./clean1.jpg" alt="">
            <div class="server-introduction">
              <div>家庭保洁</div>
              <span class="price">价格</span>
              <span class="server-price">30元/小时</span>
              <span class="original-price">原价</span>
              <span class="original-price2">50元</span>
              <div>
                <span class="sold-out">已售</span>
                <span class="sold-out2">841</span>
              </div>
          
            </div>
            <div class="scan-code">
            <span class="scan-code-pic">
              <img src="./erweima.png" alt="">
            </span>
              <div>
                <div class="scanning">扫一扫</div>
                <div class="reservation">立即预约</div>
              </div>
            </div>
          </div>
          <div class="left-content">
            <div class="service-description">
              <div class="server">服务描述</div>
              <div class="server-content-description">
                <div>服务内容：</div>
                <div>家庭保洁服务，2小时起订。（云家政暂时不提供带保洁工具上门服务）</div>
              </div>
          
            </div>
            <div class="server1">
              <div>服务保障：</div>
              <div>1.根据满意度提交评价。</div>
              <div>2.清洁内容丰富，专注卫生死角。</div>
              <div>3.价格透明，在规定服务时间内不现场加价。</div>
              <div>4.服务标准化，品质可预见。</div>
              <div>5.发现怠工，随即终止服务或出现服务质量问题，可致电云家政客服热线协助处理。</div>
            </div>
            <div class="service-area">
              <div>服务范围：</div>
              <div>（可以在购买时间内自由安排服务项目，超出服务范围的服务要求可以现场与工人沟通）</div>
              <div>1.客餐厅：电视柜、茶几、桌面、门、餐桌、垃圾桶、沙发下、地面、卫生死角。</div>
              <div>2.卧室和阳台：阳台扶手、开关、插座、及其他。</div>
              <div>3.书房和储物间：桌面、书柜、垃圾桶、地面、卫生死角及其他。</div>
              <div> 4.厨房：抽油烟机表面、橱柜、洗菜池、台面、地面、垃圾桶及其他。</div>
              <div>  5.卫生间：洗漱台、沐浴房、马桶、垃圾桶、地面及其他。</div>
            </div>
            <div>
              <div class="service-point">服务范围</div>
              <div>北京 上海 广州 深圳 南京 武汉 西安 成都 杭州 苏州 天津 常州 东莞 合肥 宁波 无锡 厦门 郑州 佛山</div>
            </div>
            <div>
              <div class="service-point">服务时间</div>
              <div class="service-point1">08:00-20:00最近可预约时间:07月11日 11:00</div>
            </div>
            <div>
              <div class="service-point">订购须知</div>
              <div class="service-point1">1.商家将在您下单后30分钟内确认是否接单；</div>
              <div class="service-point1">2.订单确认后，修改订单或退款需提前2小时通知；</div>
              <div class="service-point1">3.预约时间前2小时内退单将按30元/人扣取空单费；</div>
              <div class="service-point1">4.如商家接单后爽约将全额退款并向您额外赔付30元；</div>
              <div class="service-point1">5.为保障您的权益，所有费用请通过到位平台支付。</div>
            </div>
            <div>
              <div class="service-point">商家简介</div>
              <p class="service-point2">云家政是家政服务在线预订平台。我们的目标是让每个家庭都能获得诚信、便捷、有保障的家政服务。云家政拥有国内最大的实名认证家庭服务员数据库，目前平台上有超过100000名专业服务人员；数百个家政服务商，遍布全国主要城市各个社区。
              </p>
              <p class="service-point2">云家政倡导简单、轻松的生活方式。通过把分散的家政服务能力汇集和分配，让中国家庭获得诚信、便捷、有保障的家政服务，解决日常生活中的麻烦事，把更多时间留给自己和家人，提高生活品质。
              </p>
            </div>
          </div>
        </div>
        <!--右侧-->
        <div class="content-right col-md-3">
          <router-link to="/businessView" target="_blank">
            <h3 class="seller1">服务商</h3>
            <div class="seller2">
              <img src="./seller-pic.jpg" alt="">
              <h3 class="seller3">云家政</h3>
              <div class="seller4 row">
                <span class="col-md-10 span2">成功接单</span>
                <span class="span1 col-md-2">26860</span>
              </div>
              <div class="seller4 row">
                <span class="col-md-10 span2">接单率</span>
                <span class="span1 col-md-2">96%</span>
              </div>
              <div class="seller4 row">
                <span class="col-md-10 span2">好评率</span>
                <span class="span1 col-md-2">86%</span>
              </div>
  
            </div>
          </router-link>
          <!--<a href="JavaScript:;">
          
          </a>-->
          <div class="img-seller">
            <img src="./seller-pic.png" alt="">
          </div>
        </div>
    
      </div>
    </div>
    <vue-footer></vue-footer>
  </div>
  
</template>

<script>
  import header from '../home/header.vue'
  import footer from '../home/footer.vue'
  export default {
    components:{
      "vue-header":header,
      'vue-footer':footer
    },
    data(){
      return{
        seller:{}
      }
    },
    created(){
      console.log(this.$route.query.seller);
      this.seller=this.$route.query.seller
      console.log(this.seller);
    }
  }
</script>

<style scoped>
  .server-content{
    width: 1200px;
    margin: 0 auto;
  }
  .wrapper{
    background-color: #FBF8F8;
  }
  .serverSeller-hender{
    padding: 0 20px;
    line-height: 85px;
    width: 1200px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: bold;
  }
  .left-top{
    position: relative;
    height: 220px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #f8f8f8;
  }
  .server-introduction{
    position: absolute;
    top: 30px;
    left: 220px;
  }
  .scan-code{
    position: absolute;
  }
  .left-top img{
    position: absolute;
    height: 160px;
    width: auto;
  }
  .server-introduction div{
    font-size: 18px;
    color: #1d1515;
  }
  .server-introduction  span{
    line-height: 42px;
    height: 42px;
  }
  .server-introduction .server-price{
    padding-top: 20px;
    font-size: 20px;
    color: #fc545e;
    margin-left: 10px;
  }
  .server-introduction .sold-out{
    padding-top: 20px;
    font-size: 16px;
    color: #1d1515;
  }
  .server-introduction .sold-out2{
    padding-top: 20px;
    font-size: 16px;
    color: #fc545e;
    margin-left: 10px;
  }
  .server-introduction .original-price{
    margin-left: 50px;
  }
  .server-introduction .original-price2{
    text-decoration:line-through
  }
  .scan-code{
    position: absolute;
    right: 70px;
  }
  .scan-code .scan-code-pic{
    display: inline-block;
    height: 115px;
    width: 115px;
  }
  .scan-code .scan-code-pic img{
    height: 115px;
    width: 115px;
  }
  .scan-code .scanning{
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    font-weight: 800;
  }
  .scan-code .reservation{
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    color: #fc545e;
    font-weight: 800;
  }
  .service-description .server {
    line-height: 14px;
    font-size: 14px;
    border-bottom: 3px solid #fb474f;
    padding: 5px;
    margin-top: 10px;
    width: 66px;
    display: block;
    font-weight: bold;
  }
  .server-content-description{
    line-height: 24px;
    margin: 15px 0 5px;
    font-size: 14px;
  }
  .service-area>div {
    padding: 3px 0;
    font-size: 14px;
  }
  .server1>div{
    padding: 3px 0;
    font-size: 14px;
  }
  .service-point{
    line-height: 14px;
    font-size: 14px;
    border-bottom: 3px solid #fb474f;
    padding: 5px;
    width: 66px;
    display: block;
    font-weight: bold;
    margin: 25px 0 20px 0 ;
  }
  .service-point1{
    padding: 3px 0;
    font-size: 14px;
  }
  .content-right a{
    text-decoration: none;
  }
  .content-right .seller1 {
    font-size: 20px;
    padding-left: 10px;
    border-bottom: 1px solid #e5e5e5;
    height: 60px;
    line-height: 60px;
    margin: 0;
    text-align: left;
    color: #000000;
    font-family: '微软雅黑';
    font-weight: bold;
    background-color: #fff;
  }
  .content-right .seller2{
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
  }
  .seller2 img{
    height: 80px;
    margin: 40px 72px 10px 90px;
  }
  .seller3{
    color: #000000;
    font-family: '微软雅黑';
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .seller4 {
    color: #000;
    display: flex;
  }
  .seller4 .span1{
    margin: 10px 0 0 121px;
    color: red;
  }
  .seller4 .span2{
    margin: 10px 0 0 4px;
  }
  .seller4 span{
    flex:1;
  }
  .img-seller img{
    width: 270px;
    margin-top: 20px;
    
  }
  .left-top{
    background-color: #fff;
  }
  .left-content{
    background-color: #fff;
    margin-bottom: 50px;
    padding-left: 20px;
  }
  .service-description .server{
    padding-top: 20px;
  }
  .server1,.service-area{
    padding-top: 20px;
  }
</style>
