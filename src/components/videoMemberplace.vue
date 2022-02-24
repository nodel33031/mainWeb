<template>
  <!-- <videoHeader /> -->
  <h1 class="mt-5">會員專區</h1>
  <div class="container">    
    <hr class="m-3" />
    <div class="d-flex">
      <router-link to="/videoMain/videolist_handout">
        <button class="me-3">返回</button>
      </router-link>
      <router-link to="/videoMemberplace/videoEditinfo">
        <button>修改資料</button>
      </router-link>
      <router-link to="/videoMemberplace/videoChangepassword">
        <button>更換密碼</button>
      </router-link>
      <router-link to="/videoMemberplace/videoOrganization">
        <button>團隊管理</button>
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
<style >
.container {
  max-width: 1624px;
  margin: auto;
  padding: 40px 5%;
}
  
</style>
