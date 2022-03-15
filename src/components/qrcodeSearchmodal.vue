<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">搜尋影片</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center" style="height: 500px">
          <div class="ms-5">
            <input
              id="searchValue"
              type="text"
              class="w-75 fs-3 text-center main1input"
              placeholder="請輸入影片名稱"
              value=""
            />
            <button
              type="button"
              class="btn btn-primary mx-3"
              @click="modalSearch()"
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="pt-3 overflow-auto me-5 mt-3" style="height: 400px">
            <div class="container w-100 fs-5">              
              <div
                class="row m-2 tr"
                v-for="(item, index) in modalDatabase"
                :key="item.id"
                style="cursor: pointer"
                @click="selectTr(index)"
                :class="{ active: index == currentIndex }"
              >
                <div class="col-2">
                  <div class="">{{ item.id }}</div>
                </div>
                <div class="col-8">
                  <div class="">{{ item.filename }}</div>
                </div>
                <div class="col-2">
                  <div class="">{{ item.state }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="sureMovie()"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
td {
  text-align: left;
}
.tr:hover {
  background-color: rgb(251, 255, 217);
}
.active {
  color: blue;
}
</style>
<script>
export default {
  emit: ["sureMovie"],
  data() {
    return {
      modalDatabase: [],
      currentIndex: 0,
      searchValue:"",
    };
  },
  created() {
  },
  methods: {
    modalSearch() {
      this.searchValue=document.getElementById('searchValue').value;      
      let searchValue =this.searchValue;
      if(searchValue==""){
        alert("請輸入關鍵字")

      }

      const apiUrl = `http://192.168.0.20:8000/search/video/${searchValue}?pageNum=0&queryCount=50&queryBy=keyword`;
      fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.modalDatabase = data.content;
          console.log(this.modalDatabase.length);
        });
    },
    selectTr(index) {
      this.currentIndex = index;
      console.log(this.modalDatabase[this.currentIndex].id);
      console.log(this.modalDatabase[this.currentIndex].filename);

    },
    sureMovie() {
      this.movieName = this.modalDatabase[this.currentIndex].id;
      // console.log(this.currentIndex);
      console.log(this.modalDatabase[this.currentIndex].id);
      this.$emit("sureMovie", this.modalDatabase[this.currentIndex].id,this.modalDatabase[this.currentIndex].filename);
      // console.log(123456);
    },
  },
  computed: {},
};
</script>
