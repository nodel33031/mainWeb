<template>
  <div class="container">
    <div style="position: static">
      <button
        class="btn btn-outline-success me-2"
        style="position: relative; top: -100px; left: 400px"
      >
        建立目錄
      </button>
      <button
        class="btn btn-outline-success"
        style="position: relative; top: -100px; left: 400px"
      >
        上傳講義
      </button>
    </div>
    <div class="row" style="background-color: lightgreen">
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
      style="cursor: pointer"
    >
      <div class="col-1">
        <p>{{ item.rank }}</p>
      </div>
      <div class="col-2">
        <p>{{ item.city }}</p>
      </div>
      <div class="col-1">
        <p>{{ item.state }}</p>
      </div>
      <div class="col-2">
        <p>{{ item.state }}</p>
      </div>
      <div class="col-2">
        <p>{{ item.state }}</p>
      </div>
      <div class="col-2">
        <p>{{ item.state }}</p>
      </div>
      <div class="col-2">
        <p>{{ item.state }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      database: [],
    };
  },
  methods: {
    getData() {
      const apiUrl =
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
      fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.database = data;
          console.log(this.database.length);
          console.log(this.database[0]);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
