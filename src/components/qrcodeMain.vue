<template>
  <Header></Header>
  <Searchmodal v-on:sureMovie="emitMain"></Searchmodal>

  <div class="container" style="padding-bottom: 12rem">
    <div class="row">
      <div class="col">
        <!-- Content here -->
        <h2>選擇QR code網址產生方式</h2>
        <div class="radio d-flex pb-3">
          <div class="form-check pe-5 fs-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              v-on:click="selfmade()"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              自訂名稱
            </label>
          </div>
          <div class="form-check fs-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              v-on:click="random()"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              系統隨機
            </label>
          </div>
        </div>
        <div class="">
          <input
            class="w-100 main1input form_data1"
            id="input_text"
            name="input_text"
            type="text"
            placeholder="請輸入自訂名稱"
            v-model="webqrcode.imgUrl"
          />
          <h2 class="py-3">播放清單名稱</h2>
          <input
            id="playlist_name"
            class="w-100 main1input form_data"
            name="playlist_name"
            type="text"
            placeholder="請輸入播放清單名稱(可不填)"
          />
        </div>
      </div>
      <div class="col">
        <div
          class="qrcode m-auto border"
          id="qrimg"
          style="height: 400px; width: 400px"
        >
          <!-- <img id="qrimg" src="https://picsum.photos/300/300/?random=10" /> -->
        </div>
        <div
          id="imgwebqrcode"
          style="
            background-color: rgb(211, 211, 211);
            width: 400px;
            margin: 0 auto;
          "
        >
          {{ "https://web.ly-edu.com.tw/to/" + webqrcode.imgUrl }}
        </div>
        <!-- <div>User {{ $route.params.id }}</div> -->
      </div>
    </div>
    <br />
    <div class="row">
      <h2>新增影片名稱</h2>
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th>排序</th>
              <th>影片</th>
              <th>影片題目</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, i) in videoList.videos" :key="item.id">
              <td>
                <input
                  class="qrcodeformstyle1 main1input form_data"
                  id="videoOrder"
                  name="videoOrder"
                  type="text"
                  placeholder="順序"
                  v-model="this.videoList.videos[i].order"
                />
              </td>
              <td>
                <input
                  class="qrcodeformstyle main1input form_data"
                  id="video_name"
                  name="video_name"
                  type="text"
                  placeholder="請輸入影片名稱"
                  v-model="this.videoList.videos[i].video_name"
                />
              </td>
              <td>
                <input
                  class="qrcodeformstyle main1input form_data"
                  id="videoTitle"
                  name="videoTitle"
                  type="text"
                  placeholder="請輸入影片題目"
                  v-model="this.videoList.videos[i].comment"
                />
              </td>
              <td>
                <input
                  class="qrcodeformstyle main1input form_data"
                  id="videoID"
                  name="videoID"
                  type="text"
                  placeholder="請搜尋影片ID"
                  v-model="emitName[i]"
                />
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fa fa-search"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div style="text-align: left">
          <button
            type="button"
            v-on:click="addlist()"
            class="btn btn-primary me-2"
          >
            增加
          </button>
          <button type="button" v-on:click="del()" class="btn btn-primary">
            刪除
          </button>
          <br />
          <br />
          <input
            type="button"
            class="btn btn-primary"
            value="送出"
            @click="doSumbit()"
          />
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>
<style>
.qrcode {
  width: 300px;
  height: 300px;
}
.main1input {
  border: none;
  border-bottom: 1px solid #4f4f4f;
}
table .main1input {
  border-bottom: none;
  /* color: rgb(211, 211, 211); */
}
h2 {
  text-align: start;
}
</style>
<script>
import Header from "@/components/qrcodeHeader.vue";
import Searchmodal from "@/components/qrcodeSearchmodal.vue";
import Footer from "@/components/qrcodeFooter.vue";
export default {
  data() {
    return {
      videoList: {
        custom_url: null,
        playlist_name: null,
        videos: [
          {
            order: 1,
            video_name: null,
            comment: null,
            video_id: null,
          },
        ],
      },
      products: [{}],
      webqrcode: {
        imgUrl: "",
      },
      emitName: [],
      myObj: {
        web: String,
      },
    };
  },
  components: {
    Searchmodal,
    Header,
    Footer,
  },
  created() {
    // this.products = products;
    this.webqrcode.imgUrl = _uuid();

    function _uuid() {
      let d = Date.now();
      if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    }
  },
  methods: {
    doSumbit() {
      this.videoList.custom_url =
        document.getElementsByTagName("input")[3].value;
      this.videoList.playlist_name =
        document.getElementsByTagName("input")[4].value;

      console.log(JSON.stringify(this.videoList));
      const apiUrl = "http://192.168.0.20:8000/qrcode/create";
      fetch(apiUrl, {
        body: JSON.stringify(this.videoList), // must match 'Content-Type' header
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // *client, no-referrer
      })
        .then((response) => {
          32;
          return response.blob();
        })
        .then((imageBlob) => {
          // console.log( document.querySelector(".qrcodeIMG"));
          if(document.querySelector(".qrcodeIMG") == null){
            let img = document.createElement("IMG");
            img.className = "qrcodeIMG";
            document.querySelector("#qrimg").appendChild(img);
            img.src = URL.createObjectURL(imageBlob);
            console.log( document.querySelector(".qrcodeIMG"));

          }

        });
      console.log(this.videoList.videos[0].order);
      console.log(this.emitName);
    },
    addlist() {
      this.videoList.videos.push({
        order: this.videoList.videos.length + 1,
        video_name: null,
        comment: null,
        video_id: null,
      });
    },
    del() {
      console.log(this.videoList.videos);
      let index = this.videoList.videos.length - 1;
      // const math =this.products.length-1
      if (this.videoList.videos.length < 2) {
        this.emitName.splice(index, 1);
        window.location.reload();
        alert("無新增欄位可以刪除");
        return;
      }
      this.videoList.videos.pop();
      this.emitName.splice(index, 1);
    },
    selfmade() {
      // console.log(this.webqrcode.imgUrl);
      document.getElementById("input_text").value = "";
      document.getElementById("imgwebqrcode").innerText = "";
    },
    random() {
      document.getElementById("input_text").value = this.webqrcode.imgUrl;
      document.getElementById("imgwebqrcode").innerText =
        "https://web.ly-edu.com.tw/to/" + this.webqrcode.imgUrl;
    },
    emitMain(data, data2) {
      console.log(data, data2);
      this.emitName.push(data);
      let i = this.emitName.length;
      console.log(i);
      // this.emitName[i-1]=this.videoList.videos[i-1].video_id
      // this.videoList.videos[i].video_id=this.emitName[i]
      console.log(this.videoList.videos[i - 1].video_id);
      this.videoList.videos[i - 1].video_id = data;
      this.videoList.videos[i - 1].video_name = data2;
    },
  },
};
</script>
