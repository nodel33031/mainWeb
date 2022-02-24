<template>
  <Header />
  <div class="container" style="padding: 150px 150px 370px 150px">
    <div class="cardLogin card" style="padding: 50px">
      <h1>登入</h1>
      <form @submit.prevent="login">
        <label style="margin-right: 10px">帳號</label>
        <input
          id="userName"
          type="text"
          v-model="userName"
          class="mb-2 col-8"
          required
        />
        <br />
        <label style="margin-right: 10px">密碼 </label>
        <input type="password" v-model="password" class="mb-2 col-8" required />
        <br />
        <!-- <button class="btn " type="submit" @click="login()">登入</button> -->
        <div class="btn btnBlue col-10 mt-3" type="submit" @click="login()">
          登入
        </div>
      </form>
    </div>
  </div>
  <!-- </div> -->
  <Footer />
</template>
<style lang="less">
.btnBlue {
  border: 2px solid #1b1f71;
  border-radius: 5px;
  background: #1b1f71;
  color: #fff;
  &:hover {
    background: #fff;
    color: #1b1f71;
    border: 2px solid #1b1f71;
  }
}

.cardLogin {
  max-width: 544px;
  margin: auto;
  padding: 40px 5%;
}
h1 {
  color: #1b1f71;
}
</style>
<script>
import Header from "@/components/videoHeader.vue";
import Footer from "@/components/qrcodeFooter.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    login() {
      let accountInfo = new Object();
      accountInfo.account = this.userName;
      accountInfo.password = this.password;
      accountInfo.timeStamp = new Date();

      // const apiUrl = `http://192.168.0.20:8000/user/login?sys=qrcode_mgr`;
      // fetch(apiUrl,{method: 'POST',
      //               body: JSON.stringify(accountInfo),
      //               headers: {'Content-Type': 'application/json'}
      //               })
      //   .then((response) => {
      //     console.log(response);
      //     return response.json();
      //   })
      //   .then((data) => {
      //       console.log(data[0]);
      //       if(data[0] == "ewhiteboard"){
      //         this.$router.push("../views/viewboard");
      //       }else if(data[0]=="video_mgr"){
      //         this.$router.push("../components/Main");
      //       }else if(data[0]=="qrcode_mgr"){
      // this.$router.push("../components/qrcodeMain");
      //       }
      //   });

      /////測試////
      console.log(document.getElementById("userName").value);
      const userName = document.getElementById("userName").value;

      if (userName == "qrcode") {
        // this.$router.push("../components/qrcodeMain");
        window.location.href = "/qrcodeMain";
      } else if (userName == "video") {
        // this.$router.push("../components/Main");
        window.location.href = "/videoMain/videolist_handout";
      } else if (userName == "board") {
        //  this.$router.push("../views/viewboard");
        window.location.href = "/viewboard";
      }
    },
  },
};
</script>
