<template>
  <div>
    <!-- <hr /> -->
    <div style="max-width: 1024px; margin: auto">
      <!-- <div class="row"> -->
      <div
        class="d-flex justify-content-around m-5"
        style="padding-bottom: 380px"
      >
        <div class="card">
          <h1 class="m-3">會員帳號</h1>
          <div class="m-3">
            <ul>
              <li>321</li>
              <li>2513251</li>
              <li>143251</li>
              <li>12312</li>
              <li>2131</li>
            </ul>
          </div>
          <div class="input-group mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="使用者帳號"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary p-3 btnBlue"
              type="button"
              id="button-addon2"
              @click="join()"
            >
              加入
            </button>
          </div>
        </div>
        <div class="card">
          <h1 class="m-3">團隊名稱</h1>
          <div class="m-3">
            <ul>
              <li>321</li>
              <li>2513251</li>
              <li>143251</li>
              <li>12312</li>
              <li>2131</li>
            </ul>
          </div>
          <div class="input-group mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="團隊名稱"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btnBlue p-3"
              type="button"
              id="button-addon2"
              @click="build()"
            >
              建立
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  components: {

  },
  methods: {
    
  },
};
</script>
<style lang="less">
.card {
  min-width: 400px;
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
</style>
