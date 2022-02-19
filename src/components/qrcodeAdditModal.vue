<template>
  <div
    class="modal fade"
    id="AdditModal"
    tabindex="-1"
    aria-labelledby="AdditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="AdditModal">名稱修改</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <input
                class="currentFilename"
                id="currentFilename"
                type="text"
                placeholder="名稱修改"
                style="background-color: #dfdfdf"
                :value="filename"
                
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateFilename()"
            data-bs-dismiss="modal"
          >
            修改
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Modal from 'bootstrap/js/dist/modal';
export default {
  props: { filename: String, Index: Number },
  emit: ["updateFilename","Index"],
  data() {
    return {
      currentFilename: "",
      currentIndex: "",
    };
  },
  methods: {
    updateFilename() {
      // console.log(document.getElementsByClassName('currentFilename'));
      this.currentFilename = document.getElementById("currentFilename").value;
      this.currentIndex = console.log(this.currentFilename);
      this.$emit("updateFilename", this.currentFilename,this.Index);
      console.log(this.Index);

    },
  },

};
</script>
