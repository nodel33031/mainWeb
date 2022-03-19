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
        type="application/x-mpegURL"
        src="http://192.168.0.20:8000/video/play/1288?type=m3u8&fileName=107-10-17_國一國文輔導_論語選_鄒彤憶老師_第6題.mp4"
      />
    </video>
  </div>
</template>
<script>
export default{
    data(){
        return{
            dataBaseU:null,
            
        }
    }
}
// import {
//   defineComponent,
//   nextTick,
//   getCurrentInstance,
//   ref,
//   onMounted,
// } from "vue";

// export default defineComponent({
//   name: "videoJsPlay",
//   setup() {
//     onMounted(() => {
//       initVideoJS();
//     });

//     const proxy = getCurrentInstance();
//     const refMyVideo = ref();
//     const initVideoJS = () => {
//       //页面dom元素渲染完毕，执行回调里面的方法
//       nextTick(() => {
//         let myPlayer = proxy.appContext.config.globalProperties.$video(
//           refMyVideo.value,
//           {
//             playsinline: true, //ios拒绝全屏播放
//             webkitPlaysinline: true,
//             //自动播放属性,muted:静音播放
//             autoplay: false,
//             errorDisplay: true,
//             muted: false, //静音模式 、、 解决首次页面加载播放。
//             preload: "auto", //是否预加载
//             controls: true, //将显示视频控件, 如果不需要则去掉controls即可
//             loop: true,
//           }
//         );
//         myPlayer.on("play", function () {
//           console.log("play");
//           //一秒之后暂停
//           setTimeout(() => {
//             this.pause();
//             console.log("pause");
//           }, 1000);
//         });
//       });
//     };

//     return { refMyVideo };
//   },
// });
</script>
