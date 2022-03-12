<template >    
    <div>
        <router-link to="/test/a" class="nav-link fs-2 fw-bold d-inline" >TestA</router-link>  
        <router-link to="/test/b" class="nav-link fs-2 fw-bold d-inline" >TestB</router-link> 
    </div>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
</template>
<script>
export default{
    components:{

    },
    data(){

    },
    methods:{

    },


}
    


    
</script>