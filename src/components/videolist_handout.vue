<template>
  <handoutAddlist v-on:addList="addFile"></handoutAddlist>
  <handoutPost></handoutPost>
  <div style="position: static; text-align: right" class="my-2">
    <input
      type="text"
      class="form-control"
      placeholder="講義名稱"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      style="display: inline-block; max-width: 20rem"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
      @click="setDatabase()"
    >
      查詢
    </button>
    <div style="min-width: 150px; display: inline-block">
      <div
        class="btn btnBlue mx-2"
        data-bs-toggle="modal"
        data-bs-target="#handoutAddlist"
      >
        建立目錄
      </div>
      <div
        class="btn btnBlue"
        data-bs-toggle="modal"
        data-bs-target="#handoutPost"
      >
        上傳講義
      </div>
    </div>
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
    v-for="(item, index) in database"
    :key="index"
    style="cursor: pointer"
  >
    <div class="col-1">
      <!-- <p>{{ item.fileName }}</p> -->
    </div>
    <div class="col-1 p-1">
      <!-- <img src="../assets/png.png" style="width:40px;height:40px" alt=""> -->
      <img
        :src="setDatabase(item.directory, item.fileName)"
        style="width: 40px; height: 40px"
      />
    </div>
    <div class="col-2 p-1 div" @click="SelectThis(index, item.fileName)">
      <p>{{ item.fileName }}</p>
    </div>
    <div class="col-1 p-1">
      <!-- <p>{{ item.state }}</p> -->
    </div>
    <div class="col-4 p-1">
      <!-- <p>{{ item.state }}</p> -->
    </div>
    <div class="col-2 p-1">
      <!-- <p>{{ item.state }}</p> -->
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import handoutAddlist from "@/components/videolist_handoutAddlist.vue";
import handoutPost from "@/components/videolist_handoutPost.vue";
export default {
  data() {
    return {
      database: [],
      imgUrljpg: "/img/jpg.fad41a3a.png",
      imgUrlfile: "/img/file.459e239c.jpg",
      imgUrlpdf: "/img/pdf.9be47a84.jpg",
      imgUrlpng: "/img/png.a72522c6.png",
      filePath: "",
      // test:"parents-test"
    };
  },
  components: {
    handoutAddlist,
    handoutPost,
  },
  methods: {
    // parents(data){
    //   console.log(data);
    // },
    SelectThis(index) {
      console.log(index);
      let file = this.database[index];
      const apiUrl = `http://192.168.0.20:8000/file/get/video_mgr?target=${file.filePath}`;
      // const apiUrl = `http://192.168.0.20:8000/file/get/video_mgr?target=/images/watermark`;
      console.log(apiUrl);
      fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.database = data;
        });
    },
    getData() {
      let filePath = ``;
      const apiUrl =
        // "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
        `http://192.168.0.20:8000/file/get/video_mgr?target=/${filePath}`;
      fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.database = data;
          // console.log(this.database.length);`
          // console.log(this.database[0]);
          // console.log(this.database[0].directory);
          // console.log(this.database[1].fileName);
          // console.log(this.database[1].fileName.substr(-4));
        });
    },
    setDatabase(directory, fileName) {
      if (directory == true) {
        return this.imgUrlfile;
      } else if (fileName.substr(-4) == ".jpg") {
        return this.imgUrljpg;
      } else if (fileName.substr(-4) == ".pdf") {
        return this.imgUrlpdf;
      } else if (fileName.substr(-4) == ".png") {
        return this.imgUrlpng;
      } else {
        return this.imgUrlfile;
      }
    },
    addFile(data) {
      // this.database.push(data);
      // console.log(this.database[0].fileName);
      console.log(data);
    },
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
