<template>
  <div>
    <Vheader></Vheader>
    <div class="banner">
      <img src="./download/app-yong-ma.png" alt="">
    </div>
    <div class="down_box">
      <img src="./download/xiazaiye-_05.jpg" alt=""><br>
      <p class="text">精选优质服务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全程品质保障</p>
      <ul class="down_card">
        <li>
          <div class="card_img">
            <img src="./download/xiazaiye-_09.jpg" alt="">
          </div>
          <p class="text_mt">家政</p>
          <p>小时工/保姆/阿姨/月嫂</p>
        </li>
        <li>
          <div class="card_img">
            <img src="./download/xiazaiye-_11.jpg" alt="">
          </div>
          <p class="text_mt">按摩</p>
          <p>小中医推拿/油压/SPA足疗保健</p>
        </li>
        <li>
          <div class="card_img">
            <img src="./download/xiazaiye-_13.jpg" alt="">
          </div>
          <p class="text_mt">维修</p>
          <p>手机维修/家电维修/电脑维修</p>
        </li>
        <li>
          <div class="card_img">
            <img src="./download/xiazaiye-_18.jpg" alt="">
          </div>
          <p class="text_mt">家电清洗</p>
          <p>冰箱/洗衣机/油烟机</p>
        </li>
        <li>
          <div class="card_img">
            <img src="./download/xiazaiye-_19.jpg" alt="">
          </div>
          <p class="text_mt">洗衣洗鞋</p>
          <p>洗衣/洗鞋/洗包/家纺</p>
        </li>
        <li>
          <div class="card_img">
            <img src="./download/xiazaiye-_20.jpg" alt="">
          </div>
          <p class="text_mt">搬家</p>
          <p>家具拆装/大件搬运</p>
        </li>
      </ul>
      <div class="dcenter1">
        <div class="d_img1">
          <img src="./download/xiazaiye-_34.jpg" alt="">
          <p>轻松比价格    比品质    比速度</p>
        </div>
        <div class="d_img2">
          <img src="./download/xiazaiye-_31.jpg" alt="">
        </div>
      </div>
      <div class="dcenter">
        <div class="d_img2">
          <img src="./download/xiazaiye-_39.jpg" alt="">
        </div>
        <div class="d_img1">
          <img src="./download/xiazaiye-_03.jpg" alt="">
          <p>不满意重做    未成交100%退款</p>
        </div>
      
      </div>
      <div class="dcenter1">
        <div class="d_img1">
          <img src="./download/xiazaiye-_45.jpg" alt="">
          <p>到位用户专享    好服务更便宜</p>
        </div>
        <div class="d_img2">
          <img src="./download/xiazaiye-_43.jpg" alt="">
        </div>
      </div>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
  import Vheader from "../home/header.vue"
  import Vfooter from  "../home/footer.vue"
  export default {
    components : {
      Vfooter,
      Vheader
    }
  }
</script>

<style scoped>
  .dcenter1 .d_img1 ,.dcenter1 .d_img2{
    width: 50%;
    float: left;
    text-align: center;
  }
  .banner{
    margin: 0 auto;
    width: 104%;
    height: 420px;
    background: url("./download/xiazaiye-_02.jpg") no-repeat center;
    vertical-align: middle;
    text-align: center;
    line-height: 500px;
  }
  .banner img{
    display: inline-block;
    vertical-align: middle;
  }
  
  .down_box{
    width:104%;
    margin: 0 auto;
    vertical-align: middle;
    text-align: center;
    padding-top: 30px;
    
  }
  
  .down_box .text{
    font-size: 20px;
    font-weight: 200;
    margin-top: 10px;
    margin-bottom: 50px;
  }
  
  .down_card{
    width:100%;
    overflow: hidden;
  }
  .down_card li {
    width:32%;
    height: 216px;
    float: left;
    margin: 1px;
    padding-top: 20px;
    border:1px solid rgba(191,191,191,0.5);
    text-align: left;
  }
  .card_img{
    width: 168px;
    height: 166px;
    margin-left: 20px;
    float: left;
  }
  .card_img img{
    width: 100%;
    height: 100%;
  }
  .down_card li .text_mt{
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  
  .down_box .dcenter1{
    background: rgba(191,191,191,0.1);
    width:100%;
    overflow: hidden;
    padding-top: 30px;
  }
  .down_box .dcenter{
    /*background: rgba(191,191,191,0.1);*/
    width:100%;
    overflow: hidden;
    padding-top: 30px;
  }
  .dcenter .d_img1 ,.dcenter .d_img2{
    width: 50%;
    float: left;
    text-align: center;
  }
  .dcenter .d_img1{
    padding-top: 200px;
  }
  .d_img1 p{
    margin-top: 20px;
    font-size: 20px;
    font-weight: 200;
  }
  .dcenter .d_img2{
    padding: 100px;
  }

</style>
