<template>
    <nav class="navbar navbar-expand-sm navbar-light px-2">
    <div class="logo">
      <img src="../assets/LOGO_210623.jpg" alt="" />
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
  <h1 class="mt-1">會員專區</h1>
  <div class="container">    
    <hr class="m-3" />
    <div class="d-flex pb-5">
      <router-link to="/videoMain/videolist_handout">
        <div class="me-3 btn btnBlue">返回</div>
      </router-link>
      <router-link to="/videoMemberplace/videoEditinfo">
        <!-- <button>修改資料</button> -->
        <div class="me-1 btn btnBlue">修改資料</div>
      </router-link>
      <router-link to="/videoMemberplace/videoChangepassword">
        <!-- <button>更換密碼</button> -->
        <div class="me-1 btn btnBlue">更換密碼</div>
      </router-link>
      <router-link to="/videoMemberplace/videoOrganization">
        <!-- <button>團隊管理</button> -->
        <div class="me-1 btn btnBlue">團隊管理</div>
      </router-link>
    </div>
    <router-view name="videoEditinfo"></router-view>
    <router-view name="videoOrganization"></router-view>
    <router-view name="videoChangepassword"></router-view>
  </div>
  <qrcodeFooter />

</template>
<script>
import qrcodeFooter from "../components/qrcodeFooter.vue"

export default {
  data() {
    return {};
  },
  components: {    
    qrcodeFooter,
  },
  methods: {},
};
</script>
<style lang="less">
.container {
  max-width: 1624px;
  margin: auto;
  // padding: 40px 5%;
}
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
.logo img {
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
