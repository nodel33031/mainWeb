<template>
  <div>
    <h1>更換密碼</h1>
    <!-- <hr /> -->
    <div class="container" style="margin: 0 auto;padding-bottom:500px">
      <div class="row">
        <div class="card">
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="新密碼"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="確認新密碼"
              style="width: 50%; margin: auto"
            />
          </div>   
          <div class="m-3">
            <div class="btn btnBlue" style="width: 50%">儲存</div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    
</style>