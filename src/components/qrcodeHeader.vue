<template>
    <div class="logo">
        <img src="../assets/LOGO_210623.jpg" alt="">
    <div id="nav">
        <router-link to="/qrcodeMain">QRcode產生器</router-link> |
        <router-link to="/qrcodeMain2">影片管理系統</router-link> |
        <router-link to="/qrcodeUploadmodal">上傳影片</router-link>
    </div>        
    </div>

</template>
<style >
.logo{
    width: 100%;
    display: flex;
}

.logo img{ 
    /* width:100%; */
    height: 80px;
    margin: 15px;
}
</style>