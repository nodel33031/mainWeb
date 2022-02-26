<template>
  <div>
    <h1>更換密碼</h1>
    <!-- <hr /> -->
    <div class="container" style="margin: 0 auto;padding-bottom:450px">
      <div class="row">
        <div class="card">
          <div class="mt-5 m-auto col-8 ">
            <input
              type="input"
              class="form-control "
              id="exampleFormControlInput1"
              placeholder="新密碼"              
            />
          </div>
          <div class="mt-3 m-auto col-8 ">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="確認新密碼"              
            />
          </div>   
          <div class="m-5 ">
            <div class="btn btnBlue col-6" >儲存</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
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