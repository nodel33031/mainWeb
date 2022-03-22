<template>
  <div>
    <div class="header">
      <a
        ><img
          src="https://www.ly-edu.com.tw/themes/lyedu/assets/img/ly-logo-blue.svg"
          alt="LOGO"
      /></a>
    </div>
    <video
      ref="refMyVideo"
      class="video-js vjs-big-play-centered vjs-16-9 vjs-default-skin vjs-fluid"
      controls
      data-setup="{}"
      playsinline
      webkit-playsinline
      preload="auto"
      width="100%"
      height="100%"
    >
      <source
        id="source"
        type="application/x-mpegURL"
        src="http://192.168.0.20:8000/video/play/16716?type=m3u8&fileName=高三國文_高中學測國語文寫作_第五回_閱讀訓練、短文寫作_柳吟老師.mp4.mp4"
        
      />
    </video>
    <!-- <div>{{options}}</div> -->
    <button
    type="button"
    class="list-group-item list-group-item-action m-auto btn_list"
    v-for="(item, index) in BIGdata"
    :key="item.id"
    @click="selecTr(index)"
  >
    第{{ index + 1 }}部{{ item.video_name }}
  </button>
    <div class="listBr"></div>
    <input
      id="routerID"
      class="routerID"
      type="text"
      v-model="this.$route.params.id"
    />
  </div>
</template>
<script>

import {
  defineComponent,
  nextTick,
  getCurrentInstance,
  ref,
  onMounted,  
} from "vue";

export default defineComponent({
  name: "videoJsPlay",
  setup() {
    onMounted(() => {
      initVideoJS();
      connectAPI();
    });
    const options =ref();
    const proxy = getCurrentInstance();
    const BIGdata = ref();
    const refMyVideo = ref();    
    const connectAPI = () => {
      let routerID = document.getElementById("routerID").value;
      console.log(routerID);
      const apiUrl = `http://192.168.0.20:8000/to/${routerID}`;
      fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          // console.log(data[0]);
          // console.log(data[data.length - 1]);
          BIGdata.value = data;
          // console.log(data);
          console.log(BIGdata.value);
        });
    };
    const initVideoJS = () => {
      //页面dom元素渲染完毕，执行回调里面的方法
      nextTick(() => {
        let myPlayer = proxy.appContext.config.globalProperties.$video(
          refMyVideo.value,
          {
            playsinline: true, //ios拒绝全屏播放
            webkitPlaysinline: true,
            //自动播放属性,muted:静音播放
            autoplay: false,
            errorDisplay: true,
            muted: false, //静音模式 、、 解决首次页面加载播放。
            preload: "auto", //是否预加载
            controls: true, //将显示视频控件, 如果不需要则去掉controls即可
            loop: true,
          }
        );
        myPlayer.on("play", function () {
          console.log("play");
          //一秒之后暂停
          setTimeout(() => {
            this.pause();
            console.log("pause");
          }, 1000);
        });
      });
    };
    const selecTr = (index)=> {
      console.log(BIGdata.value);      
      let movieName = BIGdata.value[index].video_name;
      let movieIndex = BIGdata.value[index].yakitory_id;
      console.log(movieName);  
      options.value = encodeURI(`http://192.168.0.20:8000/video/play/${movieIndex}?type=m3u8&fileName=${movieName}`);
      console.log(`http://192.168.0.20:8000/video/play/${movieIndex}?type=m3u8&fileName=${movieName}`);
      // console.log(document.getElementById("source").src);    
       document.getElementById("source").src = encodeURI(`http://192.168.0.20:8000/video/play/${movieIndex}?type=m3u8&fileName=${movieName}`)
      // console.log(document.getElementById("source"));  
    };

    return { refMyVideo ,BIGdata,selecTr,options};
  },
});
</script>
