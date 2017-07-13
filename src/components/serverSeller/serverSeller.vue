<template>
  <div>
    <Vheader></Vheader>
    <div class="content-seller">
      <div class="content">
        <div class="seller">服务商</div>
        <div class="seller-ul">
          <ul>
            <router-link to="/businessView" target="_blank">
              <li>
                <a>
                  <div class="home_clean">
                    <img src="../home/image/clean1.jpg" alt="">
                    <p style="margin-top: 15px">
                      <b>云足疗</b>
                    </p>
                    <p class="pp">
                      已接单233单
                      <span>好评98%</span>
                    </p>
                  </div>
                </a>
              </li>
            </router-link>
           
        
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
        
            </li>
            <div class="sellerIn">
        
            </div>
          </ul>
          <ul>
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="home_clean">
                  <img src="../home/image/clean1.jpg" alt="">
                  <p style="margin-top: 15px">
                    <b>云足疗</b>
                  </p>
                  <p class="pp">
                    已接单233单
                    <span>好评98%</span>
                  </p>
                </div>
              </a>
        
            </li>
            <div class="daowayApp">
              <img src="./daowayApp.png" alt="">
            </div>
          </ul>
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
  .content-seller{
    background-color: #fbf8f8;
  }
  .seller{
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
  .pp{
    margin: 10px 0 0 0;
  }
  .sellerIn,.daowayApp{
    width:230px;
    height: 350px;
    float: left;
    margin-right: 12px;
    margin-bottom: 12px;
    background: url("./sellerIn.jpg") no-repeat;
  }
  .daowayApp{
    background: url("./fuwushang2_10.jpg") no-repeat;
    padding-top: 20px;
  }
  .daowayApp img{
    width: 200px;
  }
  .home_clean b{
    font-size: 18px;
  }
  .home_clean p{
    color:#5e5e5e;
  }
  .home_clean span{
    display: inline-block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    float: right;
  }
  
  /*content样式*/
  .content{
    position: relative;
    width: 79%;
    margin: 0px auto 0px;
    text-align: center;
    background-color: #fbf8f8;
    overflow: hidden;
  }
  .content h3{
    font-size: 30px;
  }
  .list_text{
    font-size: 20px;
    margin:0px auto;
  }
  .item_text{
    margin:20px auto;
  }
  .massage{
    margin:10px auto;
    font-size: 20px !important;
    font-weight: bold;
  }
  .content a:hover{
    text-decoration: none;
  }
  .mone{
    float: right;
  }
  .content ul{
    width:100%;
    overflow: hidden;
  }
  .content ul li{
    position: relative;
    width:228px;
    float: left;
    border: 1px solid rgba(234,234,234,0.8);
    margin-right: 12px;
    margin-bottom: 12px;
    text-align: left;
  }
  .content ul li:hover{
    box-shadow: 3px 3px 10px 3px #DBDBDB;
  }
  .home_clean {
    width: 210px;
    margin: 10px;
  }
  .home_clean img{
    display: inline-block;
    width:100%;
    height:100%;
  }
  .home_clean h4{
    font-weight: bold;
  }
  .home_clean p{
    font-size: 12px;
    color: #333333;
  }
  .home_clean span {
    color: #333333;
  }
  .home_clean .money{
    font-size: 20px;
    color: #DE7377;
    font-weight: bold;
  }
  .home_clean .btn{
    color: #fff;
    background-color:#DE7377;
    position: absolute;
    right: 10px;
    bottom: 8px;
  }

</style>

