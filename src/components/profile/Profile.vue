<template>
  <div class="body">
   <div class="content">
      <div class="tab">
        <h4 >Pessoal</h4>
        <h4 >Banco</h4>
        <h4 >Referral</h4>
      </div>
      <div class="icons">
        <img src="../../assets/success.png" width="7%" />
        <img src="../../assets/success.png" width="7%" />
        <img src="../../assets/success.png" width="7%" />
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .body {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    .content {
      width: 100%;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .tab {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid #39434D;
        width: 50%;

        h4 {
          width: 10%;
          color: #39434D;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          cursor: pointer;
        }

        h4:hover {
          font-size: 14px;
                    color: rgb(48, 66, 85);
        }

        h4:nth-child(3) {
          color: #3F7E75;
        }
      }

      .icons {
        display: flex;
        justify-content: space-around;
        width:  50%;
        margin-top: 30px;
      }
    }

  }
</style>

