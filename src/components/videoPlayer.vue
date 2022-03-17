<template>
  <div class="header">
    <a
      ><img
        src="https://www.ly-edu.com.tw/themes/lyedu/assets/img/ly-logo-blue.svg"
        alt="LOGO"
    /></a>
  </div>
  <vue3VideoPlay
    width="375px"
    height="270px"
    title="柳吟影片"
    :src="options.src"
    :type="options.type"
    :autoPlay="false"
  />
  <button
    type="button"
    class="list-group-item list-group-item-action m-auto btn_list"
    v-for="(item, index) in dataBaseU"
    :key="item.id"
    @click="selecTr(index)"
  >
    第{{ index + 1 }}部{{ item.video_name }}
  </button>
  <div class="listBr"></div>
     <input
      id="routerID"
      style="display: none"
      class="routerID"
      type="text"
      v-model="this.$route.params.id"
    />
    <div class="footer">
      <div class="p-4" style="border-bottom: 1px solid #fff">
        <img src="../assets/ly-logo.svg" />
      </div>
      <p class="footer_p">Copyright © 2021 柳吟國文 All Rights Reserved.</p>
    </div>
  
</template>
<script>
export default {
  data() {
    return {
      dataBaseU: null,
      options: {
        src: "http://192.168.0.20:8000/video/play/1288?type=m3u8&fileName=107-10-17_國一國文輔導_論語選_鄒彤憶老師_第6題.mp4",
        type: "m3u8",
        width: "400px", //播放器高度
        height: "170px", //播放器高度
        color: "#409eff", //主题色
        currentTime: 60,
        speed: false, //关闭进度条拖动
        title: "", //视频名称
      },
    };
  },
  mounted() {
    let routerID = document.getElementById("routerID").value;
    console.log(routerID);
    const apiUrl = `http://192.168.0.20:8000/to/${routerID}`;
     console.log(apiUrl);
    fetch(apiUrl)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data[data.length - 1]);
        this.dataBaseU = data;

        console.log(this.dataBaseU[0]);
      });
  },
  methods: {
    selecTr(index) {
      console.log(index);
      console.log(this.options.src);
      let movieName = this.dataBaseU[index].video_name;
      let movieIndex = this.dataBaseU[index].yakitory_id;
      console.log(movieName);
      this.options.src = `http://192.168.0.20:8000/video/play/${movieIndex}?type=m3u8&fileName=${movieName}`;
    },
  },
};
</script>
<style lang="less">
.btn_list{
  margin-bottom:50px ;
}
#refPlayerWrap {
  margin: auto;
}
.header {
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  width: 223px;
  height: 60px;
  padding-left: 15px;
}
.container {
  height: 100%;
  text-align: center;
  background-color: #4d4a4a;
}
.footer {
  background-color: #1b1f71;
  width: 100%;
  height: 200px;
  text-align: left;

}
.footer p {
  color: #fff;
}


@media (min-width: 375px) {
  .header {
    width: 375px;
    padding: 20px 0;
  }
  .footer {
    width: 375px;
  }
  .listBr {
    padding-bottom: 280px;
  }
  .footer {
    background-color: #1b1f71;
    width: 100%;
    height: 200px;
    text-align: left;

    .footer_p {
      padding: 1rem;
      color: #fff;
    }
  }
}
// @media (min-width:400px){

// }
</style>
