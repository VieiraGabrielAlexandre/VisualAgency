<template>
  <div class="body">
    <div class="content">
      <div class="tab">
        <h4>Pessoal</h4>
        <h4>Banco</h4>
        <h4>Referral</h4>
      </div>
      <div class="icons">
        <img src="../../assets/link.png" width="10%" />
        <img src="../../assets/email.png" width="10%" />
        <img src="../../assets/bit.png" width="10%" />
      </div>
      <div class="texto">
        <h4>
          Obtenha seu
          <br />Link
        </h4>
        <h4>
          Convide seus
          <br />Amigos
        </h4>
        <h4>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGanhe Bitcoin</h4>
      </div>
      <div class="tab"></div>
      <div class="sub">
        <div class="qrcode">
          <img src="../../assets/qrcode.png" width="120px" />
        </div>
        <div class="textomeio">
          <h4>
            Referral ID:
            <br />
            <font color="white">12345AXB</font>
          </h4>
          <h4>
            Valor Comissão:
            <br />
            <font color="white">
              20%
              <br />
            </font>
          </h4>
          <h4>
            Saldo
            <br />
            <font color="white">1.000000</font>
          </h4>
        </div>
        
      </div>
      <div class="meiobaixo">
        <h4>Referral Link</h4>
      </div>
        <p><font color="#39434d"></font></p>
        <input type="text" id="link" value="https:\\colonybit.com\carteira1212121"><!--<img src="../../assets/btncopiar.png" width="4%">-->
        <h4>Compartilhe:</h4><i class="fas fa-cloud"></i>
      <div class="tab2"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

 
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .tab {
      display: flex;
      flex-direction: row;
      border-bottom: 2px solid #39434d;
      width: 50%;

      h4 {
        width: 10%;
        color: #39434d;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        cursor: pointer;
      }

      h4:hover {
        font-size: 14px;
        color: rgb(48, 66, 85);
      }

      h4:nth-child(3) {
        color: #3f7e75;
      }
    }

    .icons {
      display: flex;
      justify-content: space-around;
      width: 40%;
      height: 10%;
      margin-top: 30px;
    }
  }
  h4 {
    width: 200px;
    color: #39434d;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  .sub {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-top: 40px;
  }
  .texto {
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin-top: 10px;
  }
  .qrcode {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: -20px;
    float: left;
    align-items: left;
  }
  .textomeio {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin-top: -40px;
  }
  .meiobaixo {
    display: flex;
    justify-content: space-around;
    margin-top: -80px;
    width: 255px;
    align-items: left;
    margin-left: -55px;
  }

  input {
    border-width: 0.01cm;
    border-radius: 5px;
    width: 20%;
    height: 20px;
    margin-top: -45px;
    float: right;
    background-color: transparent;
    color: #39434d;
  }
  .tab2 {
      display: flex;
      flex-direction: row;
      border-bottom: 2px solid #39434d;
      width: 50%;
      margin-top: 40px;
  }
  .divdivisoria {
    display: flex;
    flex-direction: row;
    position: relative;
    float:left;
    padding:0 20px;
  }
}
</style>
<script>
  function copiarTexto() {
    var textoCopiado = document.getElementById("link");
    textoCopiado.select();
    document.execCommand("Copy");
    alert("Texto Copiado: " + textoCopiado.value);
  }
</script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
