<template>
  <div>
    <v-header></v-header>
    <!--内容部分-->
    <div class="header2"></div>
    <div class="content">
      <div class="content-top">
        <div class="top">
          <div class="top1">
            <div class="top2 sellerName">
              云家政
            </div>
            <div class="top2 business-hours">
              营业时间:
            </div>
            <div class="top2 hours">
              08:00-20:00
            </div>
            <div class="top2 business-hours">
              最近可预约时间:
            </div>
            <div class="top2 appointment">
              07月11日 16:00
            </div>
          </div>
          <div class="tops">
            <div class="top1 top3">
              <div class="fontColor">
                26860
              </div>
              <div>
                成功接单
              </div>
          
            </div >
            <div class="top1  line"> |</div>
            <div class="top1 top3 ">
              <div class="fontColor">
                96%
              </div>
              <div>
                接单率
              </div>
            </div>
            <div class="top1  line"> |</div>
            <div class="top1 top3">
              <div class="fontColor">
                86%
              </div>
              <div>
                好评率
              </div>
            </div>
            <div class="top1  line"> |</div>
          </div>
        </div>
      
        <div></div>
      </div>
      <div  class="seller-content">
        <ul>
          <li>
            <a href="#server">服务项目</a>
          </li>
          <li>
            <a href="#seller">商家简介</a>
          </li>
          <li>
            <a href="#custom">用户评论</a>
          </li>
        </ul>
      </div>
      <div class="server-project row">
        <div class="col-md-10">
          <router-link to="/sellerIntroduction" target="_blank">
            <div>
              <div class="project1" id="server">
                <div class="project">
              <span>
                服务项目
              </span>
                </div>
              </div>
              <div class="left">
                <div class="left-top">
                  <div class="left-top-img">
                    <img src="../home/image/clean1.jpg" alt="">
                  </div>
                  <div class="server-introduction">
                    <div class="fontSize">家庭保洁</div>
                    <span class="price">服务内容：服务内容： 家庭保洁服务，2小时起订。（云家政暂时不提供带保..</span>
                    <span class="server-price server-price1" >30</span>
                    <span class="server-price">元/小时</span>
                    <span class="original-price">原价</span>
                    <span class="original-price2">50</span>
                    <span class="sold-out">已售</span>
                    <span class="sold-out2">841</span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          
          <div class="sellers" id="seller">
            <div class="project2">
              <div class="project">
              <span>
                商家简介
              </span>
              </div>
              <h4>上海家谐网络科技有限公司</h4>
              <p>云家政是家政服务在线预订平台。我们的目标是让每个家庭都能获得诚信、便捷、有保障的家政服务。云家政拥有国内最大的实名认证家庭服务员数据库，目前平台上有超过100000名专业服务人员；数百个家政服务商，遍布全国主要城市各个社区。</p>
              <p class="p2">
                云家政倡导简单、轻松的生活方式。通过把分散的家政服务能力汇集和分配，让中国家庭获得诚信、便捷、有保障的家政服务，解决日常生活中的麻烦事，把更多时间留给自己和家人，提高生活品质。
              </p>
            </div>
          </div>
          <div class="user-rating" id="custom">
            <div class="project3">
              <div class="project">
              <span class="span1">
                用户评价
              </span>
                <span>
                (7408条评论)
              </span>
              </div>
            </div>
          </div>
          <div class="user-rating2">
            <div class="project4">
              <div class="project">
                <div class="project6 ">
                  <img src="./user.jpg" alt="">
                </div>
                <div class='project7'>
                  <div class="class1">姓名</div>
                  <div>
                <span class="span-star">
                  <img src="./red_star.png" alt="">
                  <img src="./red_star.png" alt="">
                  <img src="./red_star.png" alt="">
                  <img src="./red_star.png" alt="">
                  <img src="./red_star.png" alt="">
                </span>
                    <span>2017.7.10</span>
                  </div>
                  <p class="content-p">不是第一次定了，之前所有的阿姨三小时都能打扫完，这次这个，地弄完是花的，到处都有不干净的，到最后连厕所都没打扫，之前的阿姨都能打扫完。</p>
                  <div class="city-name">
                <span class="bj">
                  <img src="./position.jpg" alt="">
                </span>
                    <span class="city">成都 武侯区</span>
                  </div>
                </div>
              </div>
          
            </div>
        
        
          </div>
          <div class="user-rating3">
            <div class="project-pages">
              <div class="pages">
                <a href="javascript:;" class="back-a"> &lt;上一页</a>
                <a href="javascript:;" class="num-a">1</a>
                <a href="javascript:;" class="back-a">下一页&gt;</a>
              </div>
            </div>
        
        
          </div>
      
      
      
      
        </div>
        <div class="pic col-md-2">
          <img src="./yuyue.png" alt="">
          <img src="./seller-pic.png" alt="">
        </div>
      </div>
  
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '../home/header.vue'
  import footer from '../home/footer.vue'
  export default {
    components:{
      'v-footer':footer,
      "v-header":header
    }
  }
</script>

<style scoped>
  .header2{
    width: 100%;
    height: 20px;
    background-color: #f9f9f9;
  }
  .content{
    background-color: #f9f9f9;
  }
  .content-top{
    height: 134px;
    background-color: #fff;
  }
  .top{
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }
  .top1{
    float: left;
  }
  .top2{
    float: left;
  }
  .sellerName{
    margin-left: 20px;
    font-size: 36px;
    font-weight: 700;
    line-height: 140px;
  }
  .hours{
    line-height: 160px;
    color: #121212;
    font-style: normal;
    margin-left: 10px;
  }
  .business-hours{
    margin-left: 10px;
    color: #929292;
    line-height: 136px;
    margin-top: 12px;
  }
  .appointment{
    color: #e84b47;
    font-style: normal;
    line-height: 160px;
    margin-left: 10px;
  }
  .line{
    margin-top: 10px;
    margin-left: 20px;
  }
  .tops{
    overflow: hidden;
    text-align: center;
    margin-left: 850px;
    margin-top: 50px;
  }
  .top3{
    margin-left: 40px;
  }
  .fontColor{
    color: #e84b47;
    margin-bottom: 10px;
  }
  .service-guarantee li{
    list-style: none;
  }
  .service-guarantee>li>div{
    margin-top: 10px;
  }
  .seller-content {
    background: #323434;
    margin-bottom: 20px;
    
  }
  .seller-content ul{
    overflow: hidden;
    margin-left: 140px;
  }
  .seller-content li{
    margin-left: 40px;
    padding-top: 10px;
    text-align: center;
    list-style: none;
    height: 40px;
    width: 100px;
    float: left;
  }
  .seller-content li a{
    text-align: center;
    display: block;
    height: 30px;
    width: 100px;
    text-decoration: none;
    color: #fff;
    font-family: '微软雅黑';
  }
  .seller-content li:hover{
    background-color: rgba(214, 214, 214, 0.53);
  }
  .seller-content li:active{
    background-color: rgba(214, 214, 214, 0.53);
  }
  .server-project{
    width: 1200px;
    margin: 0 auto;
  }
  
  .pic img{
    margin-bottom: 20px;
    width: 230px;
    height: 290px;
    
  }
  .project{
    
    color: black;
    font-size: 18px;
    
    border-bottom: 1px solid #e7e7e7;
  }
  .project1{
    background-color: #fff;
    padding: 20px 20px 0 20px;
    
  }
  .project2{
    margin-top: 50px;
    background-color: #fff;
    padding: 20px 20px 0 20px;
  }
  .project3{
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 20px 0 20px;
  }
  .project4{
    background-color: #fff;
    padding: 20px 20px 0 20px;
  }
  .project span{
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 18px;
    
  }
  .project .span1{
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 18px;
    border-bottom: 4px solid #fb474f;
  }
  .left{
    background-color: #fff;
    padding: 20px;
  }
  
  .left:hover{
    background-color: #f9f9f9
  }
  .left-top{
    overflow: hidden;
  }
  .left-top .left-top-img{
    float: left;
  }
  .left-top img {
    height: 150px;
    width: 150px;
  }
  .server-introduction{
    float: left;
    margin-left: 22px;
    width: 289px;
  }
  .fontSize {
    font-size: 18px;
    margin: 15px  0px;
  }
  .price{
    display: inline-block;
    margin-bottom: 15px;
    color: #929292;
  }
  .server-price{
    color: #fc545e;
    font-weight: bold;
    
  }
  .server-price1{
    font-size: 35px;
    font-weight: bold;
  }
  .original-price{
    margin-left: 30px;
    color: #929292;
  }
  .original-price2{
    text-decoration: line-through;
    color: #929292;
  }
  .sold-out{
    margin-left: 49px;
    color: #929292;
  }
  .sold-out2{
    color: #929292;
  }
  .project2 p{
    line-height: 28px;
    color: #929292;
    font-size: 16px;
  }
  .project2 h4{
    margin: 20px 0;
    background-image: url("./seller-logo.jpg");
    background-repeat: no-repeat;
    background-position: 219px 2px;
  }
  .p2{
    padding-bottom: 30px;
  }
  .sellers{
    margin-bottom: 20px;
  }
  .project6 img{
    height: 40px;
    width: 40px;
  }
  .project4 .project{
    display: flex;
  }
  .project6 {
    flex: 1;
  }
  .project7{
    flex: 14;
  }
  .project7 .class1{
    border: none;
    width: auto;
    height: auto;
    display: block;
    float: none;
    padding: 0;
    line-height: 28px;
    margin: 0;
  }
  .span-star img{
    width: 10px;
    height: 10px;
  }
  .content-p{
    line-height: 26px;
    font-size: 16px;
  }
  .bj img{
    vertical-align: middle;
    margin-right: 5px;
  }
  .user-rating3{
    margin-bottom: 50px;
  }
  .pages a{
    display: inline-block;
    text-decoration: none;
  }
  
  .back-a{
    color: #000;
    height: 30px;
    width: 70px;
    text-align: center;
    border: 1px solid #7e8c8d;
    padding-top: 5px;
  }
  .num-a{
    color: #000;
    height: 30px;
    width: 30px;
    text-align: center;
    border: 1px solid #7e8c8d;
    padding-top: 5px;
    margin: 0 10px;
  }
  .pages{
    text-align: center;
  }
  .city-name .city{
    height: 40px;
    color: #898989;
    font-size: 14px;
  }
  .project-pages{
    background-color: #fff;
    padding: 30px 0;
  }
  
</style>
