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
  <div class="bg-light px-3">
    <div class="col-5 d-flex">
      <div
        style="display-inline: block"
        id="handout_header"
        class="mystyle routerList"
      >
        <router-link
          to="/videoMain/videolist_handout"    
          style="text-decoration: none"      
          @click="handout()"          
          class="m-3 handout"
          
          >個人講義</router-link
        >
      </div>
      <div
        style="display-inline: block;"
        class="routerList"
        id="garbage_header"
      >
        <router-link
          to="/videoMain/videolist_garbage"  
          style="text-decoration: none"           
          @click="garbage()"          
          class="m-3 garbage"
          
          >就是垃圾桶</router-link
        >
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

  components: {},
  methods: {
    handout() {
      document.getElementById("handout_header").classList.add("mystyle");
      document.getElementById("garbage_header").classList.remove("mystyle");
    },
    garbage() {
      document.getElementById("garbage_header").classList.add("mystyle");
      document.getElementById("handout_header").classList.remove("mystyle");
    },
    // setCSS(){
    //   document.getElementById("handout").classList.add("mystyle");
    // }
  },
  mounted() {
    // this.setCSS();
  },
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
.garbage,.handout{
  color: #bdbdbd;
  font-weight: 600;
  font-size: 18px;
  background-image: linear-gradient(#00174d, #e6e6e6);
  background-position: left bottom;
  background-size: 0 2.5px;
  background-repeat: no-repeat;
  transition: background-size 0.5s;
      &:hover{
      color: #1b1f71;
      background-size: 100% 2.5px;
    }
}
.mystyle {    
  text-decoration:underline 2.5px;  
  .handout{
    color:#1b1f71;    
  }
  .garbage{
    color:#1b1f71
  }
}
.navbar {  
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.routerList {
  padding: 1rem 0px;
}
</style>
