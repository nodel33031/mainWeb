<template>
<div class="modal fade" id="handoutAddlist" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">建立資料夾</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body " ref="modal">
        <input placeholder="資料夾名稱" class="fileListName" type="text">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="sureAddlist()" >儲存</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>


export default { 
    emit:["addList"],   
    data(){
        return{
          handoutAddlistFile:"",
        }
    },
    components:{        

    },
    methods:{
      sureAddlist(){        
        this.handoutAddlistFile = document.getElementsByClassName("fileListName")[0].value
        console.log(this.handoutAddlistFile);
        this.$emit('addList',this.handoutAddlistFile);
      }        

    },
    mounted() {
   
    },    
}
</script>