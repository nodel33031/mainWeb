
<template>
  <div class="qrcodeHome">
    <Header></Header>
    <Main></Main>
    <Searchmodal></Searchmodal>
    <Footer></Footer>
  </div>
  
</template>
<script>
import Header from "@/components/qrcodeHeader.vue";
import Main from "@/components/qrcodeMain.vue";
import Searchmodal from "@/components/qrcodeSearchmodal.vue";
import Footer from "@/components/qrcodeFooter.vue";
export default {
  name: "qrcodeHome",
  components: {
    Header,
    Main,
    Searchmodal,
    Footer,
  },
};
</script>
<style>
.qrcodeHome {
  height: 100%;
}
</style>

