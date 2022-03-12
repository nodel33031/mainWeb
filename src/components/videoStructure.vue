<template>
  <nav class="navbar navbar-expand-sm navbar-light px-2">
    <div class="logo">
      <img src="../assets/LOGO_210623.jpg" alt="" style="height:60px"/>
    </div>
    <ul class="navbar-nav ms-auto mb-lg-0">
      <li class="nav-item">
        <router-link
          to="/videoMain/videolist_handout"
          id="prevent_header"
          class="m-3"
          >互動講義</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/videoResource" id="prevent_header" class="m-3"
          >素材總管</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/videoMemberplace/videoEditinfo"
          id="prevent_header"
          class="m-3"
          >會員中心</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/" id="prevent_header" class="m-3">登出</router-link>
      </li>
    </ul>
  </nav>
  <router-view name="videoMain"></router-view>

  <div
    class="footer"
    style="
      background-color: #1b1f71;
      width: 100%;
      height: 200px;
      margin-top: 100px;
      text-align: left;
    "
  >
    <div class="p-4" style="border-bottom: 1px solid #fff">
      <img src="../assets/ly-logo.svg" />
    </div>
    <p class="p-4" style="color:#fff">Copyright © 2021 柳吟國文 All Rights Reserved.</p>
  </div>
</template>
<script></script>
<style lang="less">
.btnBlue {
  background: #fff;
  color: #1b1f71;
  border: 2px solid #1b1f71;
  &:hover {
    border: 2px solid #1b1f71;
    border-radius: 5px;
    background: #1b1f71;
    color: #fff;    
    
  }
}
.logo img{ 
    /* width:100%; */
    height: 80px;
    margin: 15px;
}
#prevent_header {
  text-decoration: none;
  color: #1b1f71;
  font-weight: 600;
  font-size: 18px;
  background-image: linear-gradient(#00174d, #e6e6e6);
  background-position: left bottom;
  background-size: 0 2.5px;
  background-repeat: no-repeat;
  transition: background-size 0.5s;
  &:hover {
    background-size: 100% 2.5px;
  }
}

  
</style>
