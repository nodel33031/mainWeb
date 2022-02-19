<template>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="col-8 ">
        <button type="button" class="btn btn-outline-success m-2">互動講義</button>
        <button type="button" class="btn btn-outline-success m-2">素材總管</button>
        <button type="button" class="btn btn-outline-success m-2">教育商店</button>
        <button type="button" class="btn btn-outline-success m-2">支援服務</button>
        </div>
        <div class="col-4">
        <button type="button" class="btn btn-outline-dark m-2">會員專區</button>
        <button type="button" class="btn btn-outline-dark m-2">登出</button>   
        </div>        
    </nav> 
    <!-- <div class="container">           -->
        <div class="d-flex  mt-4  bg-light" >
            <router-link to="/Main/list_handout"  id="prevent_handout" class="m-3 " style="text-decoration: none;">個人講義</router-link>            
            <router-link to="/Main/list_garbage" class="m-3" style="text-decoration: none;">就是垃圾桶</router-link>
        </div>
        <div class="col-4 m-left m-3">
            <form class="d-flex ">
                <input class="form-control " type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>              
        </div>       
        <div class="pt-5 container">
            <router-view name="list_handout"></router-view>
            <router-view name="list_garbage"></router-view>
        </div>    
  <!-- </div> -->
</template>
<script>
export default {
    data(){
    },
    methods:{
    },
    mounted(){
    }

};
</script>
<style >
hr.style-one {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
    
</style>
