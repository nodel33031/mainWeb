<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="logo">
      <img src="../assets/LOGO_210623.jpg" alt="" />
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
    </div>
  </nav>
  <div class="bg-light ">
    <div class="col-5 d-flex" > 
      <div style="display-inline:block;" id="handout_header" class="mystyle" > 
        <router-link to="/videoMain/videolist_handout" style="text-decoration:none;" @click="handout()" id="handout" class="m-3">個人講義</router-link>
      </div> 
      <div style="display-inline:block;text-decoration:none;" id="garbage_header"> 
        <router-link to="/videoMain/videolist_garbage" style="text-decoration:none;" @click="garbage()" id="garbage" class="m-3">就是垃圾桶</router-link>
      </div> 
    </div> 
  </div>
  

  <div class="container">
    <router-view name="videolist_handout"></router-view>
    <router-view name="videolist_garbage"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  components: {
   
  },
  methods: {
    handout(){
      document.getElementById("handout_header").classList.add("mystyle");
      document.getElementById("garbage_header").classList.remove("mystyle");
      

    },
    garbage(){
      document.getElementById("garbage_header").classList.add("mystyle");
      document.getElementById("handout_header").classList.remove("mystyle");

    }

  },
  mounted() {},
};
</script>
<style lang="less">
hr.style-one {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
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
.mystyle{  
  background-color: red;
}

</style>
