<template>
  <div>
    <h1>修改資料</h1>
    <!-- <hr /> -->
    <div class="container" style="margin: 0 auto;padding-bottom:150px">
      <div class="row">
        <div class="card">
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="帳號"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="姓名"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="電子郵件"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="行動電話"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="室內電話"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="公司"
              style="width: 50%; margin: auto"
            />
          </div>
          <div class="m-3">
            <input
              type="input"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="地址"
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
<style  lang="less">
.container {
  max-width: 1624px;
  margin: auto;
  padding: 0px 5%;
}
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
