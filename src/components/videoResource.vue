<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="logo">
        <img src="../assets/LOGO_210623.jpg" alt="">
    </div>
    <div class="col-8">
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          @click="videoMain()"          
        />
        <label class="btn btn-outline-primary m-3" for="btnradio1">互動講義</label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          @click="videoResource()" 
          checked         
        />
        <label class="btn btn-outline-primary m-3" for="btnradio2" >素材總管</label>
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio4"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary m-3" for="btnradio4">支援服務</label>
      <!-- </div> -->
    </div>
    <div class="col-4">
      <button type="button" class="btn btn-outline-dark m-2" @click="videoMemberplace()">會員專區</button>
      <button type="button" class="btn btn-outline-dark m-2">登出</button>
    </div>
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