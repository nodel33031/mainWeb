<template>
    <Header />
    <!-- <router-link to="/Main">Main</router-link> -->
  <div style="padding: 100px">    
    <div class="container">      
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label>User Name</label>
        <input type="text" v-model="userName" required />
        <br />
        <label class="me-2">Password</label>
        <input type="password" v-model="password" required />
        <br />
        <button type="submit" @click="login()">Log In</button>
      </form>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
export default {
  data() {
    return {
    //  user: {
       username: '',
       password: '',
    //  }
    };
  },
  components:{
      Header,
  },
  methods: {
    login() {
      let accountInfo = new Object;
      accountInfo.account = this.userName;
      accountInfo.password = this.password;
      accountInfo.timeStamp = new Date();
      // this.$router.push("../views/viewboard");
      const apiUrl = `http://192.168.0.20:8000/user/login?sys=qrcode_mgr`;
    //   const vm = this
      fetch(apiUrl,{method: 'POST',
                    body: JSON.stringify(accountInfo),
                    headers: {'Content-Type': 'application/json'}
                    })
        .then((response) => {
          console.log(response);
          return response.json();          
        })
        .then((data) => {
            console.log(data[0]);
            if(data[0] == "ewhiteboard"){
              this.$router.push("../views/viewboard");
              // console.log(12313545644);
            }else if(data[0]=="video_mgr"){
              this.$router.push("../components/Main");                
            }else if(data[0]=="qrcode_mgr"){
              this.$router.push("../components/qrcodeHome");
            }
        });
      

    },
  },
};
</script>
