<template>
  <videoOrganizationsetTeam></videoOrganizationsetTeam>
  <div>    
    <div style="max-width: 1024px; margin: auto">
      <!-- <div class="row"> -->
      <div class="d-flex justify-content-around" style="padding-bottom: 250px">
        <div class="span">
          <h1 class="m-3" style="border-bottom: 1px solid #939699">會員帳號</h1>
          <div class="" style="">
            <ul>
              <li
                v-for="(item, index) in accountMember"
                :key="index"
                style="cursor: pointer; list-style: none; font-size: 28px"
              >
                {{ item.id
                }}<i
                  class="fas fa-trash"
                  style="width: 100px"
                  @click="delaccountMember(index)"
                ></i>
              </li>
            </ul>
          </div>
          <div class="input-group">
            <input
              type="text"
              class="form-control userAccount"
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
        <div class="span">
          <h1 class="m-3" style="border-bottom: 1px solid #939699">團隊名稱</h1>
          <div class="">
            <ul>
              <li
                class=""
                v-for="(item, index) in teamName"
                :key="index"
                style="cursor: pointer; list-style: none; font-size: 28px"
              >
                {{ item.id
                }}<button
                  type="button"
                  class="btn btn-primary mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fas fa-cog"></i></button
                ><button class="btn btn-primary"  @click="delteamName(index)"><i
                  class="fas fa-trash"                  
                 
                ></i></button>
              </li>
            </ul>
          </div>
          <div class="input-group">
            <input
              type="text"
              class="form-control teamName"
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
// import setTeam from "@/components/videoOrganizationsetTeam.vue"
// import setTeam from ''
import videoOrganizationsetTeam from "../components/videoOrganizationsetTeammodal.vue"
export default {
  data() {
    return {
      accountMember: [
        {
          id: "王曉明",
        },
      ],
      teamName: [
        {
          id: "紅白隊",
        },
      ],
    };
  },
  components: {
    videoOrganizationsetTeam
  },
  methods: {
    delaccountMember(index) {
      // this.accountMember[index]
      console.log(this.accountMember[index].id);
      this.accountMember.splice(index, 1);
    },
    delteamName(index) {
      console.log(this.teamName[index].id);
      this.teamName.splice(index, 1);
    },
    join() {
      let userAccount = document.querySelector(".userAccount").value;
      if (userAccount !== "") {
        this.accountMember.push({ id: userAccount });
        console.log(document.querySelector(".userAccount").value);
        document.querySelector(".userAccount").value = "";
      }
    },
    build() {
      let teamName = document.querySelector(".teamName").value;
      if (teamName !== "") {
        this.teamName.push({ id: teamName });
        document.querySelector(".teamName");
        document.querySelector(".teamName").value = "";
      }
    },
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
