<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="logo">
        <img src="../assets/LOGO_210623.jpg" alt="">
    </div>
    <div class="col-6">
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          @click="videolist_handout()" 
          checked
        />
        <label class="btn btn-outline-primary m-3" for="btnradio1">互動講義</label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          @click="videoResource()"          
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
    </div>
    <div class="col-4">
          <!-- <router-link
      to="/videoMemberplace/videoEditinfo"
      id="prevent_handout"
      class="m-3"
      style="text-decoration: none"
      ><button type="button" class="btn btn-outline-dark m-2">會員專區</button></router-link
    >  -->
      <a href="/videoMemberplace/videoEditinfo"><button type="button" class="btn btn-outline-dark m-2">會員專區</button></a>
      <a href="/"><button type="button" class="btn btn-outline-dark m-2">登出 </button></a> 
    </div>
  </nav>
  <div class="d-flex mt-4 bg-light">
    <router-link
      to="/videoMain/videolist_handout"
      id="prevent_handout"
      class="m-3"
      style="text-decoration: none"
      >個人講義</router-link
    >
    <router-link
      to="/videoMain/videolist_garbage"
      class="m-3"
      style="text-decoration: none"
      >就是垃圾桶</router-link
    >
  </div>

  <div class="container">
  <div class="col-4 m-left m-5">
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
    <router-view name="videolist_handout"></router-view>
    <router-view name="videolist_garbage"></router-view>
  </div>
  <!-- </div> -->
</template>
<script>
// import videoHeader from "../components/videoHeader.vue"
export default {
  data() {
    return {
      
    };
  },
  components:{
    // videoHeader
  },
  methods: {
      videoResource(){
        window.location.href='/videoResource';
      },
      videolist_handout(){
        window.location.href='/videolist_handout';
      },
  },
  mounted() {

  },
};
</script>
<style>
hr.style-one {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
.logo img{ 
    height: 80px;
    margin: 15px;
}

</style>
