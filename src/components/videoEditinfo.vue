<template>
  <div>
    <h1>修改資料</h1>
    <!-- <hr /> -->
    <div class="container" style="margin: 0 auto; padding-bottom: 150px">
      <!-- <div class="row"> -->
      <div class="card">
        <div class="m-auto mt-5 col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="帳號"            
          />
        </div>
        <div class="m-auto mt-3 col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="姓名"            
          />
        </div>
        <div class="m-auto mt-3 col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="電子郵件"            
          />
        </div>
        <div class="m-auto mt-3 col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="行動電話"            
          />
        </div>
        <div class="m-auto mt-3 col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="室內電話"            
          />
        </div>
        <div class="m-auto mt-3 col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="公司"            
          />
        </div>
        <div class="mt-3 m-auto col-8">
          <input
            type="input"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="地址"            
          />
        </div>
        <div class="m-5">
          <div class="btn btnBlue col-6" >儲存</div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<style lang="less">
.container {
  max-width: 1024px;
  margin: auto;
  padding: 0px 5%;
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
.card {
  max-width: 544px;
  margin: auto;
  box-shadow: 0px 4px 15px rgb(224, 221, 221);  
}
</style>
