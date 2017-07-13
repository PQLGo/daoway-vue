<template>
  <header id="header" class="header">
    <div class="header-container">
      <div class="header-logo">
        <router-link to="/home">
          <img src="./image/logo.png" alt="">
        </router-link>
      </div>
      <div class="navbar header-nav">
        <ul class="nav nav-pills nav-content">
          <li>
            <span>
              <span class="city-point-span">
                <img src="./image/citypoint.png" alt="">
                <span>广州</span>
              </span>
              <router-link to="/switchCity" class="qiecity">切换城市</router-link>
            </span>
          </li>
          <li>
            <router-link to="/home" class="active">首页</router-link>
          </li>
          <li>
            <router-link to="/downloadApp">下载APP</router-link>
          </li>
          <li>
            <router-link to="/serverSeller">服务商</router-link>
          </li>
          <li>
            <router-link to="/businessSettled">商家入驻</router-link>
          </li>
          <li>
            <router-link to="/aboutUs">关于我们</router-link>
          </li>
          <li class="Business-login-li">
            <router-link to="/login" target="_blank" class="Business-login">
              <span>商家登录</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  
  export default {
  
  }
</script>

<style>
  #header{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .header-container{
    width: 1200px;
    margin: 0 auto;
    height: 65px;
  }
  .header-logo{
    float: left;
    text-align: center;
    padding: 12px 0 12px 20px;
  }
  .header-nav{
    float: right;
  }
  .nav-content{
    padding: 14px 0;
  }
  .city-point-span{
    display: inline-block;
    padding-top: 5px;
  }
  .city-point-span{
    text-decoration:none;
  }
 .city-point-span span{
    color:#121212;
    font-weight: bold;
    font-family: '微软雅黑';
    font-size: 16px;
  }
  .nav-content a{
    padding-top: 11px;
    display: inline-block;
    color:#121212;
    font-weight: bold;
    font-family: '微软雅黑';
    font-size: 16px;
  }
  .Business-login{
    background-color: red;
    display: inline-block;
    border-radius: 30px;
  }
  .Business-login span{
    color: #fff;
    font-weight: bold;
  }
  #header a:hover{
    color: red;
  }
  #header a:active{
    color: red;
  }
  .qiecity{
    text-decoration: none!important;
  }

  .nav > li > a:hover{
    text-decoration: none !important;
    background-color:#fff !important;
  }
  .nav>.Business-login-li>a:hover{
    color: #fff !important;
    font-weight: bold !important;
    background-color: red !important;
  }
</style>
