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
  <div class="container">
  <div class="mt-5">
    <div class="col-4 ms-5">
    <form class="d-flex">
      <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
  <div class="col-8 " >
    <button
      class="btn btn-outline-success me-2"
      style="position: relative; top: -40px; left: 600px"
    >
      建立目錄
    </button>
    <button
      class="btn btn-outline-success"
      style="position: relative; top: -40px; left: 600px"
    >
      上傳講義
    </button>
  </div>
  </div>
  </div>
  <div class="container">
    <div class="row" style="background-color:lightgreen">
      <div class="col-1">
        <p></p>
      </div>
      <div class="col-2">
        <p>講義名稱</p>
      </div>
      <div class="col-1">
        <p>大小</p>
      </div>
      <div class="col-2">
        <p>附加檔案</p>
      </div>
      <div class="col-2">
        <p>講義備課</p>
      </div>
      <div class="col-2">
        <p>線上使用</p>
      </div>
      <div class="col-2">
        <p>其他功能</p>
      </div>
    </div>
    <div
      class="row"
      v-for="item in database"
      :key="item.id"
      style="cursor:pointer"
    >
      <div class="col-1">
        <p>{{item.rank}}</p>
      </div>
      <div class="col-2">
        <p>{{item.city}}</p>
      </div>
      <div class="col-1">
        <p>{{item.state}}</p>
      </div>
      <div class="col-2">
        <p>{{item.state}}</p>
      </div>
      <div class="col-2">
        <p>{{item.state}}</p>
      </div>
      <div class="col-2">
        <p>{{item.state}}</p>
      </div>
      <div class="col-2">
        <p>{{item.state}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        };

    },
    methods:{
    videoMain(){
        window.location.href='/videoMain/videolist_handout';
      },
    videoMemberplace(){
        window.location.href='/videoMemberplace/videoEditinfo';
     },


    },
}
</script>
<style >
.logo img{ 
    /* width:100%; */
    height: 80px;
    margin: 15px;
}
  
</style>