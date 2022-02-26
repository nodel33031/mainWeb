<template>
  <!-- <videoHeader /> -->
  <h1 class="mt-5">會員專區</h1>
  <div class="container">    
    <hr class="m-3" />
    <div class="d-flex pb-5">
      <router-link to="/videoMain/videolist_handout">
        <div class="me-3 btn btnBlue">返回</div>
      </router-link>
      <router-link to="/videoMemberplace/videoEditinfo">
        <!-- <button>修改資料</button> -->
        <div class="me-1 btn btnBlue">修改資料</div>
      </router-link>
      <router-link to="/videoMemberplace/videoChangepassword">
        <!-- <button>更換密碼</button> -->
        <div class="me-1 btn btnBlue">更換密碼</div>
      </router-link>
      <router-link to="/videoMemberplace/videoOrganization">
        <!-- <button>團隊管理</button> -->
        <div class="me-1 btn btnBlue">團隊管理</div>
      </router-link>
    </div>
    <router-view name="videoEditinfo"></router-view>
    <router-view name="videoOrganization"></router-view>
    <router-view name="videoChangepassword"></router-view>
  </div>
  <qrcodeFooter />

</template>
<script>
import qrcodeFooter from "../components/qrcodeFooter.vue"

export default {
  data() {
    return {};
  },
  components: {    
    qrcodeFooter,
  },
  methods: {},
};
</script>
<style lang="less">
.container {
  max-width: 1624px;
  margin: auto;
  padding: 40px 5%;
}
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
