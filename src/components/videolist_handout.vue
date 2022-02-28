<template>
  <!-- <div class="container"> -->
  <!-- <span>
      講義名稱
    </span> -->
  <div style="position: static; text-align: right; " class="my-2">
    
    <!-- <div class="input-group mb-3"> -->
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        style="display:inline-block;max-width:20rem"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="setDatabase()"
      >
        查詢
      </button>
    <!-- </div> -->
    
    <div class="btn btnBlue mx-2">建立目錄</div>
    <div class="btn btnBlue">上傳講義</div>
  </div>
  <div class="row bg-light">
    <div class="col-1">
      <p></p>
    </div>
    <div class="col-3">
      <div class="py-3">講義名稱</div>
    </div>
    <div class="col-1">
      <div class="py-3">大小</div>
    </div>
    <div class="col-4">
      <div class="py-3">線上使用</div>
    </div>
    <div class="col-2">
      <div class="py-3">其他功能</div>
    </div>
  </div>
  <div
    class="row"
    v-for="item in database"
    :key="item.id"
    style="cursor: pointer"
  >
    <div class="col-1">
      <!-- <p>{{ item.fileName }}</p> -->      
    </div>
    <div class="col-1"> 
      <img :src="imgUrlfile" style="width:30px;height:30px" alt="">
      <img :src="imgUrlpdf" style="width:30px;height:30px" alt="">
    </div>
    <div class="col-2">      
      <p>{{ item.fileName }}</p>        
    </div>
    <div class="col-1">
      <!-- <p>{{ item.state }}</p> -->
    </div>
    <div class="col-4">
      <!-- <p>{{ item.state }}</p> -->
    </div>
    <div class="col-2">
      <!-- <p>{{ item.state }}</p> -->
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      database: [],
      imgUrlfile:'/img/logo.82b9c7a5.png',
      imgUrlpdf:'/img/PDF.a5dd5602.jpg'      
    };
  },
  methods: {
    getData() {
      const apiUrl =
        // "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
        "http://192.168.0.20:8000/file/get/video_mgr"
      fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.database = data;
          console.log(this.database.length);
          console.log(this.database[0]);
          console.log(this.database[0].directory);
        });
    },
    setDatabase(){      
      if(this.database[0].directory==true){
        this.setImg=true;   
        console.log(this.setImg);     
      }            
    }
  },
  mounted() {
    this.getData();    
  },
};
</script>
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


</style>
