<template>
  <div>
    <canvas
      @mousedown="onCanvasMouseDown()"
      @mouseup="onCanvasMouseUp()"
      id="testcanvas"
      style="z-index: 2; position: absolute; left: 0; width: 100%"
    >
    </canvas>
    <!-- 這不一定要用ref -->
    <pdf
      ref="pdf"
      id="pdf"
      :src="url"
      :page="pageNum"
      :rotate="pageRotate"
      @progress="loadedRatio = $event"
      @page-loaded="pageLoaded($event)"
      @num-pages="pageTotalNum = $event"
      @error="pdfError($event)"
      @link-clicked="page = $event"
    >
    </pdf>
    <div class="tools" :class="{ hideNavBar }" style="z-index: 5">
      <div class="btn right" @click="hideNavBar = !hideNavBar"></div>
      <button
        :theme="'default'"
        type="submit"
        :title="'基礎按鈕'"
        @click.stop="prePage"
        class="mr10"
      >
        <i class="fa fa-arrow-left" style="width: 100px">上一頁</i>
      </button>
      <button
        :theme="'default'"
        type="submit"
        :title="'基礎按鈕'"
        @click.stop="nextPage"
        class="mr10"
      >
        <i class="fa fa-arrow-right" style="width: 100px">下一頁</i>
      </button>
      <button @click="resetCanvas()">
        <i class="fa fa-chalkboard" style="width: 100px">清除</i>
      </button>
      <button @click="back()">
        <i class="fa fa-undo" style="width: 100px"> 恢復</i>
      </button>
      <button>
        <i
          class="fas fa-palette"
          style="width: 100px"
          @click="hideNavBar_color = !hideNavBar_color"
          >色彩選擇</i
        >
      </button>
      <button>
        <i
          class="fas fa-bold"
          style="width: 100px"
          @click="hideNavBar_bold = !hideNavBar_bold"
          >大小調整</i
        >
      </button>
      <button
        class="penMode"
        @click="
          currentTool = 'paint-brush';
          changePaint();
        "
      >
        <i class="fas fa-pen" style="width: 100px">畫筆模式</i>
      </button>
      <button
        class="highlighterMode"
        @click="
          currentTool = 'highlighter';
          changeHighlighter();
        "
      >
        <i class="fas fa-pen-alt" style="width: 100px">螢光筆模式</i>
      </button>
      <button
        class="eraserMode"
        @click="
          currentTool = 'eraser';
          changeEraser();
        "
      >
        <i class="fas fa-eraser" style="width: 100px">橡皮擦</i>
      </button>
      <button
        class="squareMode"
        @click="
          currentTool = 'square';
          changeSquare();
        "
      >
        <i class="fas fa-square" style="width: 100px">方形框</i>
      </button>
      <!-- <button>
        <i class="fas fa-desktop">全螢幕</i>
      </button> -->
      <!-- <button @click="getCanvasMousePosition()">555555</button> -->
      <div class="page" style="color: white">
        {{ pageNum }}/{{ pageTotalNum }}
      </div>
    </div>
    <div class="toolbar_color" :class="{ hideNavBar_color }" style="z-index: 5">
      <div class="div_span">
        <span @click="hideNavBar_color = !hideNavBar_color">╳</span>
      </div>
      <div
        v-for="(color, index) in colors"
        class="color"
        :class="`color-${color.name}` + isColorActive(color.name)"
        :key="index"
        @click="currentColor = color"
        style="display: inline-block"
      ></div>
    </div>
    <div class="toolbar_bold" :class="{ hideNavBar_bold }" style="z-index: 5">
      <span @click="hideNavBar_bold = !hideNavBar_bold">╳</span>
      <div style="margin: 20px">
        <div style="margin: 0 auto; font-size: 50px">{{ textSize }}</div>
        <i
          class="fas fa-caret-up"
          @click="textSize++"
          style="position: absolute; top: 15%; left: 47%"
        ></i>
        <i
          class="fas fa-caret-down"
          @click="textSize--"
          style="position: absolute; down: 25%; left: 47%"
        ></i>
      </div>
    </div>
  </div>
</template>
<style lang="less" src="./viewBoard.less"></style>
<script>
import pdf from "vue3-pdf";
export default {
  name: "viewboard",
  components: {
    pdf,
  },
  data() {
    return {
      backgroundColor: "#dfdfdf",
      isMenuOpen: true,
      isDrawing: false,
      isPencil: true,
      isEraser: false,
      isFullScreen: false,
      lastX: 0,
      lastY: 0,
      hideNavBar: false,
      hideNavBar_color: true,
      hideNavBar_bold: true,
      textSize: 10,
      canvasContext: null,
      // tempPosition: null,
      tempCanvas: [],
      tempCanvasIndex: -1,
      isCanvasMouseDown: false,
      tempPosition: null,
      colors: [
        { name: "272727", code: "#272727" }, //第一排
        { name: "4D0000", code: "#4D0000" },
        { name: "820041", code: "#820041" },
        { name: "5E005E", code: "#5E005E" },
        { name: "3A006F", code: "#3A006F" },
        { name: "000093", code: "#000093" },
        { name: "003D79", code: "#003D79" },
        { name: "005757", code: "#005757" },
        { name: "01814A", code: "#01814A" },
        { name: "007500", code: "#007500" },
        { name: "548C00", code: "#548C00" },
        { name: "5B5B00", code: "#5B5B00" },
        { name: "796400", code: "#796400" },
        { name: "9F5000", code: "#9F5000" },
        { name: "842B00", code: "#842B00" },
        { name: "743A3A", code: "#743A3A" },
        { name: "707038", code: "#707038" },
        { name: "3D7878", code: "#3D7878" },
        { name: "5151A2", code: "#5151A2" },
        { name: "7E3D76", code: "#7E3D76" },
        { name: "6C6C6C", code: "#6C6C6C" }, //第二排
        { name: "AE0000", code: "#AE0000" },
        { name: "F00078", code: "#F00078" },
        { name: "D200D2", code: "#D200D2" },
        { name: "2828FF", code: "#2828FF" },
        { name: "8600FF", code: "#8600FF" },
        { name: "0072E3", code: "#0072E3" },
        { name: "00CACA", code: "#00CACA" },
        { name: "02DF82", code: "#02DF82" },
        { name: "00DB00", code: "#00DB00" },
        { name: "8CEA00", code: "#8CEA00" },
        { name: "C4C400", code: "#C4C400" },
        { name: "D9B300", code: "#D9B300" },
        { name: "FF8000", code: "#FF8000" },
        { name: "F75000", code: "#F75000" },
        { name: "B87070", code: "#B87070" },
        { name: "AFAF61", code: "#AFAF61" },
        { name: "6FB7B7", code: "#6FB7B7" },
        { name: "9999CC", code: "#9999CC" },
        { name: "B766AD", code: "#B766AD" },
        { name: "9D9D9D", code: "#9D9D9D" }, // 第三排
        { name: "FF0000", code: "#FF0000" },
        { name: "FF60AF", code: "#FF60AF" },
        { name: "FF44FF", code: "#FF44FF" },
        { name: "B15BFF", code: "#B15BFF" },
        { name: "7D7DFF", code: "#7D7DFF" },
        { name: "46A3FF", code: "#46A3FF" },
        { name: "4DFFFF", code: "#4DFFFF" },
        { name: "4EFEB3", code: "#4EFEB3" },
        { name: "53FF53", code: "#53FF53" },
        { name: "B7FF4A", code: "#B7FF4A" },
        { name: "FFFF37", code: "#FFFF37" },
        { name: "FFDC35", code: "#FFDC35" },
        { name: "FFAF60", code: "#FFAF60" },
        { name: "FF8F59", code: "#FF8F59" },
        { name: "D9B3B3", code: "#D9B3B3" },
        { name: "CDCD9A", code: "#CDCD9A" },
        { name: "A3D1D1", code: "#A3D1D1" },
        { name: "C7C7E2", code: "#C7C7E2" },
        { name: "D2A2CC", code: "#D2A2CC" },
      ],
      currentColor: null,
      currentTool: "paint-brush",
      //pdf資料
      url: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      pageNum: 1,
      pageTotalNum: 14,
      pageRotate: 0,
      // 加載進度
      loadedRatio: 0,
      curPageNum: 0,
      tempSquare: null, 
      tempPositionSquare:null     
    };
  },
  methods: {
    // setCanvasTempPositionSquare(x,y){
    //   this.tempPositionSquare={x,y}
    // },
    // setTempSquare() {
    //   let ctx = this.canvasContext;
    //   let canvas = ctx.canvas;
    //   let tempSquare = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //   this.tempSquare = tempSquare;
    // },
    // getCanvasMousePosition(offsetX, offsetY) {
    //   let canvasPosition = this.canvasContext.canvas.getBoundingClientRect();
    //   let x = offsetX - canvasPosition.x;
    //   let y = offsetY - canvasPosition.y;
    //   return { x, y };
    // },
    onCanvasMouseDown() {
      this.isCanvasMouseDown = true;
      // this.setTempSquare();
    },
    onCanvasMouseUp() {
      this.isCanvasMouseDown = false;
      let ctx = this.canvasContext;
      let canvas = ctx.canvas;
      this.tempCanvas.push(
        this.canvasContext.getImageData(0, 0, canvas.width, canvas.height)
      );
      this.tempCanvasIndex += 1;
      let tempSquare = ctx.getImageData(0, 0, canvas.width, canvas.height);
      window.history.pushState(tempSquare, null);
    },
    // setTempCanvas() {
    //   let ctx = this.canvasContext;
    //   let canvas = ctx.canvas;
    //   let tempCanvas = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //   this.tempCanvas = tempCanvas;
    //   console.log(tempCanvas);
    // },
    resetCanvas() {
      let canvas = this.canvasContext.canvas;
      this.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      this.tempCanvas = [];
      this.tempCanvasIndex = -1; 
    },

    back() {
      if (this.tempCanvasIndex <= 0) {
        console.log(this.tempCanvasIndex);
        console.log(this.tempCanvas);
        this.resetCanvas();
      } else {
        console.log(this.tempCanvas);
        this.tempCanvasIndex -= 1;
        this.tempCanvas.pop();
        this.canvasContext.putImageData(
          this.tempCanvas[this.tempCanvasIndex],
          0,
          0
        );
      }
    },
    changeHighlighter() {
      this.currentTool = "highlighter";
      document.querySelector(".penMode").style.color = "black";
      document.querySelector(".eraserMode").style.color = "black";
      document.querySelector(".squareMode").style.color = "black";
      document.querySelector(".highlighterMode").style.color = "green";
    },
    changePaint() {
      this.currentTool = "paint-brush";
      document.querySelector(".penMode").style.color = "green";
      document.querySelector(".eraserMode").style.color = "black";
      document.querySelector(".squareMode").style.color = "black";
      document.querySelector(".highlighterMode").style.color = "black";
    },
    changeEraser() {
      this.currentTool = "eraser";
      document.querySelector(".penMode").style.color = "black";
      document.querySelector(".eraserMode").style.color = "green";
      document.querySelector(".squareMode").style.color = "black";
      document.querySelector(".highlighterMode").style.color = "black";
    },
    changeSquare() {
      this.currentTool = "square";
      document.querySelector(".penMode").style.color = "black";
      document.querySelector(".eraserMode").style.color = "black";
      document.querySelector(".squareMode").style.color = "green";
      document.querySelector(".highlighterMode").style.color = "black";
    },
    isColorActive(color) {
      return this.currentColor && color == this.currentColor.name
        ? " active"
        : "";
    },
    setWindowEvent() {
      const canvas = document.querySelector("#testcanvas");
      console.log(pdf);
      canvas.addEventListener("mousedown", (e) => {
        this.isDrawing = true;
        this.lastX = e.offsetX;
        this.lastY = e.offsetY;
        console.log(this.lastX, this.lastY);
      });

      canvas.addEventListener("mouseup", () => {
        this.isDrawing = false;
      });

      canvas.addEventListener("mouseout", () => {
        this.isDrawing = false;
      });

      canvas.addEventListener("mousemove", (e) => {
        const ctx = canvas.getContext("2d");
        if (this.isDrawing == true) {
          if (this.isPencil == true) {
            if (this.isCanvasMouseDown == true) {              

              switch (this.currentTool) {
                case "paint-brush":
                  ctx.globalCompositeOperation = "source-over";
                  ctx.globalAlpha = 1;
                  ctx.strokeStyle = this.currentColor.code;
                  ctx.lineJoin = "round";
                  ctx.lineCap = "round";
                  ctx.lineWidth = this.textSize * 3;
                  // 開始設定路徑
                  ctx.beginPath();
                  // 將畫筆移動到下筆座標點
                  ctx.moveTo(this.lastX, this.lastY);
                  // 從目前畫筆位置畫線到新座標點 (滑鼠所在位置)
                  ctx.lineTo(e.offsetX, e.offsetY);
                  // 上面都是在規劃路徑, 這裡才是將線畫出來
                  ctx.stroke();
                  this.lastX = e.offsetX;
                  this.lastY = e.offsetY;
                  break;
                case "eraser":
                  ctx.globalCompositeOperation = "destination-out";
                  ctx.globalAlpha = 1;
                  ctx.lineJoin = "round";
                  ctx.lineCap = "round";
                  ctx.lineWidth = this.textSize * 3;
                  // 開始設定路徑
                  ctx.beginPath();
                  // 將畫筆移動到下筆座標點
                  ctx.moveTo(this.lastX, this.lastY);
                  // 從目前畫筆位置畫線到新座標點 (滑鼠所在位置)
                  ctx.lineTo(e.offsetX, e.offsetY);
                  // 上面都是在規劃路徑, 這裡才是將線畫出來
                  ctx.stroke();
                  this.lastX = e.offsetX;
                  this.lastY = e.offsetY;
                  break;
                case "highlighter":
                  ctx.globalCompositeOperation = "xor";
                  ctx.globalAlpha = 0.5;
                  // ctx.globalCompositeOperation = "source-over";
                  ctx.strokeStyle = this.currentColor.code;
                  ctx.lineJoin = "round";
                  ctx.lineCap = "round";
                  ctx.lineWidth = this.textSize * 3;
                  // 開始設定路徑
                  ctx.beginPath();
                  // 將畫筆移動到下筆座標點
                  ctx.moveTo(this.lastX, this.lastY);
                  // 從目前畫筆位置畫線到新座標點 (滑鼠所在位置)
                  ctx.lineTo(e.offsetX, e.offsetY);
                  // 上面都是在規劃路徑, 這裡才是將線畫出來
                  ctx.stroke();
                  this.lastX = e.offsetX;
                  this.lastY = e.offsetY;
                  break;
                case "square":
                  // ctx.globalCompositeOperation = "source-over";
                  // ctx.globalAlpha = 1;
                  // ctx.strokeStyle = this.currentColor.code;
                  // ctx.lineJoin = "round";
                  // ctx.lineCap = "round";
                  // ctx.lineWidth = this.textSize * 3;
                  // ctx.rect(500,500,500,500);                  
                  // ctx.stroke();
                  // ctx.globalCompositeOperation = "source-over";
                  // ctx.globalAlpha = 1;
                  // ctx.strokeStyle = this.currentColor.code;
                  // ctx.lineJoin = "round";
                  // ctx.lineCap = "round";
                  // ctx.lineWidth = this.textSize * 3;
                  // ctx.beginPath();
                  // 將畫筆移動到下筆座標點
                  // ctx.moveTo(this.lastX, this.lastY);
                  // 從目前畫筆位置畫線到新座標點 (滑鼠所在位置)
                  // ctx.lineTo(e.offsetX, e.offsetY);
                  // 上面都是在規劃路徑, 這裡才是將線畫出來
                  // ctx.stroke();
                      // ctx.putImageData(this.tempSquare,0, 0)                      
                      // ctx.rect(tempx, tempy, width, height);
                  break;
              }
            }
          }
        }
      });
    },
    setCanvas() {
      let canvas = document.querySelector("#testcanvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2.5;
      let ctx = canvas.getContext("2d");
      this.canvasContext = ctx;
      console.log("顯示ctx", ctx);
    },
    ////////////////////////////////////////////////////
    // 上一頁函數，
    prePage() {
      var page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },
    // 下一頁函數
    nextPage() {
      var page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
    // 其他的一些回調函數。
    pdfError(error) {
      console.error(error);
    },
  },
  mounted() {
    this.setCanvas();
    this.currentColor = this.colors[0];
    this.setWindowEvent();
  },
};
</script>
