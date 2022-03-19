<template>
<qrcodeHeader></qrcodeHeader>
  <div class="container" style="padding-bottom:12rem">
    <div class="row">
      <div class="position-relative m-3">
        <h2 class="text-center">查詢影片</h2>
        <Loading :active="isLoading"></Loading>
      </div>

      <div class="d-flex ps-5">
        <input
          class="form-control searchValue"
          id="searchValue"
          type="text"
          placeholder="以(ex:影片ID、影片名稱)"
          aria-label="Search"
          @input="searchfilter()"
        />
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            @click="this.currentSelect = `id`"
          />
          <label class="btn btn-outline-primary" for="btnradio1">影片 ID</label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            @click="this.currentSelect = `keyword`"
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio2"
            >影片名稱</label
          >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            @click="this.currentSelect = `state`"
          />
          <label class="btn btn-outline-primary" for="btnradio3"
            >影片狀態</label
          >
        </div>
        <button type="button" class="btn btn-primary mx-3" @click="getData()">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div class="text-center my-3">
        <div class="pt-3 overflow-auto" style="height: 400px">
          <div class="container">
            <div class="row bg-light text-dark">
              <div class="col-2">
                <p class="m-2">ID</p>
              </div>
              <div class="col-6">
                <p class="m-2">名稱</p>
              </div>
              <div class="col-2">
                <p class="m-2">狀態</p>
              </div>
              <div class="col-1">
                <p class="m-2">編輯</p>
              </div>
              <div class="col-1">
                <p class="m-2">刪除</p>
              </div>
            </div>
            <div
              class="row tr"
              v-for="(item, index) in datasource"
              :key="item.id"
              style="cursor: pointer"
              :class="{ active: index == selectThisColor }"
              @click="selectThis(index)"
            >
              <div class="col-2">
                <p class="m-2">{{ item.id }}</p>
              </div>
              <div class="col-6">
                <p class="m-2">{{ item.filename }}</p>
              </div>
              <div class="col-2">
                <p class="m-2">{{ item.state }}</p>
              </div>
              <div class="col-1">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#AdditModal"
                  style="margin-top: 5px"
                  @click="selectTr(index)"
                >
                  編輯
                </button>
              </div>
              <div class="col-1">
                <button
                  class="btn btn-outline-danger btn-sm"
                  style="margin-top: 5px"
                  @click="removeTodo(index)"
                >
                  刪除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-auto text-center">
        <button class="btn btn-outline-secondary m-3" @click="previousPage()">
          <i class="bi bi-chevron-compact-left"></i>上一頁
        </button>
        <button class="btn btn-outline-secondary m-3" @click="nextPage()">
          下一頁<i class="bi bi-chevron-compact-right"></i>
        </button>
      </div>
      
    </div>
    
  </div>
  <Footer></Footer>
  <AdditModal
    :filename="this.currentFilename"
    :Index="this.currentIndex"
    v-on:updateFilename="emitfileName"
  ></AdditModal>
</template>
<script>
// import qrcodeHeader from "@/components/qrcodeHeader.vue";
import AdditModal from "../components/qrcodeAdditModal.vue";
import qrcodeHeader from "../components/qrcodeHeader.vue";
import Footer from "@/components/qrcodeFooter.vue";
export default {
  data() {
    return {
      datasource: [],
      count: 0,
      pageNum: 0,
      contain: false,
      totalPages: [],
      currentSelect: "keyword",
      searchValue: "",
      currentIndex: 0,
      currentFilename: "",
      isLoading:false,
      selectThisColor:null,
    };
  },
  components: {
    AdditModal,
    qrcodeHeader,
    Footer,
    
  },
  methods: {
    selectThis(index){
      this.selectThisColor = index;

    },
    selectTr(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      console.log(this.datasource[this.currentIndex].filename);
      this.currentFilename = this.datasource[this.currentIndex].filename;
    },
    searchfilter() {
      this.searchValue = document.querySelector(".searchValue").value;
      console.log(this.searchValue);
    },
    // 上一頁
    previousPage() {      
      if (this.contain == false) {
        alert(`請輸入查詢關鍵字><"`);
      } else if (this.pageNum <= 0) {
        this.pageNum = 0;
      } else {
        this.pageNum--;
        let pageNum = this.pageNum;
        let searchValue = this.searchValue;
        let currentSelect = this.currentSelect;
        const apiUrl = `http://192.168.0.20:8000/search/video/${searchValue}?pageNum=${pageNum}&queryCount=50&queryBy=${currentSelect}`;
        fetch(apiUrl)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            this.datasource = data.content;
            console.log(this.pageNum);
          });
      }
    },
    // 下一頁
    nextPage() {
      if (this.pageNum < this.totalPages - 1 && this.contain == true) {
        this.pageNum++;
        let pageNum = this.pageNum;
        let searchValue = this.searchValue;
        let currentSelect = this.currentSelect;
        const apiUrl = `http://192.168.0.20:8000/search/video/${searchValue}?pageNum=${pageNum}&queryCount=50&queryBy=${currentSelect}`;
        fetch(apiUrl)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            this.datasource = data.content;
            console.log(data.content[0].id);
            console.log(this.pageNum);
            //  totalPages =  data.totalPages  ;
          });
      } else if (this.contain == false) {
        alert(`請輸入查詢關鍵字><"`);
      }
    },
    // 搜尋鍵
    getData() {      
      this.contain = true;
      this.pageNum = 0;
      let pageNum = this.pageNum;
      let searchValue = this.searchValue;
      let currentSelect = this.currentSelect;
      const apiUrl = `http://192.168.0.20:8000/search/video/${searchValue}?pageNum=${pageNum}&queryCount=50&queryBy=${currentSelect}`;
      if (this.searchValue == "") {
        alert("請輸入搜尋字串");
      }
      fetch(apiUrl)
        .then((response) => {
          this.isLoading=true
          return response.json();
        })
        .then((data) => {
          this.datasource = data.content;
          console.log(data.totalPages);
          this.totalPages = data.totalPages;
          this.isLoading=false
        });
    },
    // 刪除
    removeTodo(index) {
        this.datasource.splice(index, 1);
      alert("待修改");
    },
    emitfileName(data, Index) {
      console.log(data);
      console.log(Index);

      console.log(this.datasource[Index].filename);
      this.datasource[Index].filename = data;
      const apiUrl =`http://192.168.0.20:8000/video/edit/`+this.datasource[Index].id +"?newName="+data;
      console.log(apiUrl);
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.modalDatabase = data.content;
        });
    },
  },
};
</script>
<style>
  .active{
    color: blue;
  }
</style>
