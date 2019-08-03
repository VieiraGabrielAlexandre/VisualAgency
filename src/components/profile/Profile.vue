<template>
  <div class="body">
   <div class="content">
      <div class="tab">
        <h4 >Pessoal</h4>
        <h4 >Banco</h4>
        <h4 >Referral</h4>
      </div>

      <div class="icons">
        <div class="obterLink">
          <img src="../../assets/link.png" width="30%" />
          <span><b>Obtenha o seu Link</b></span>
        </div>
        <div class="convideAmigos">
          <img src="../../assets/email.png" width="30%" />
          <span><b>Convide seus Amigos</b></span>
        </div>
        <div class="ganheBitcoin">
          <img src="../../assets/bit.png" width="30%" />
          <span><b>Ganhe Bitcoin</b></span>
        </div>
      </div>

      <div class="qrCodeContainer">
        <div class="qrCode">
          <img src="../../assets/qrcode.png"/>
        </div>
        <div class="referral">
          <div class="topData">
            <div><b>Referral Id</b></div>
            <div><b>Valor Comissão</b></div>
            <div><b>Saldo</b></div>
            <div><font color="white">123ABC456DEF</font></div>
            <div><font color="white">20%</font></div>
            <div><font color="white">1.0912129 BTC</font></div>
          </div>
          <br>
          <span<b>Referral Link</b></span>
          <div>
            <input type="text" placeholder="https://colonybit.com/8a5b4as5b4s-john-doe"/>
            <button><img src="../../assets/document.png" ></button>
          </div>
        </div>
      </div>

      <div class="socialMidia">
        <span>Compartilhe:</span>
        <img src="../../assets/facebook.png" />
        <img src="../../assets/twitter.png" />
        <img src="../../assets/linkedin.png" />
        <img src="../../assets/instagram.png" />
      </div>

      <div class="thirdContainer">
        <div class="invite">
          <span><b>Convide um referral</b></span>
          <span>Convide alguém para ser o seu referral, use o username e expanda seus contatos</span>
          <div class="input">
            <input type="text" />
            <button> <img src="../../assets/checked.png" /></button>
          </div>
        </div>
        <div class="static">
          <span class="static"><b>Estatisticas</b></span>
          <div CLASS="info">
            <div class="views">
              <span>3</span>
              <img src="../../assets/eye.png" />
              <span><b>Views do Referral</b></span>
            </div>
            <div class="people">
              <span>2</span>
              <img src="../../assets/clipboard.png" />
              <span><b>Pessoas Cadastradas</b></span>
            </div>
          </div>
        </div>
      </div>

      <div class="history">
        <span>Histórico de Ganho</span>
        <table>
          <tr class="titulo">
            <th >Data</th>
            <th>Valor Ganho</th>
            <th>Username</th>
          </tr>
          <tr>
            <td>11/11/11 as 10:34</td>
            <td>0.1561BTC</td>
            <td>JohDoe</td>
          </tr>
          <tr>
            <td>11/11/11 as 10:33</td>
            <td>0.1562BTC</td>
            <td>JohDoe</td>
          </tr>
          <tr>
            <td>11/11/11 as 10:32</td>
            <td>0.1563BTC</td>
            <td>JohDoe</td>
          </tr>
          <tr>
            <td>11/11/11 as 10:31</td>
            <td>0.1564BTC</td>
            <td>JohDoe</td>
          </tr>
          <tr>
            <td>11/11/11 as 10:30</td>
            <td>0.1565BTC</td>
            <td>JohDoe</td>
          </tr>
        </table>
      </div>

      <div class="back">
        <router-link to="/">< Voltar para o Dashbord</router-link>
      </div>
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
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(111, 122, 133);

    .content {
      width: 100%;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;

      .tab {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid  rgb(111, 122, 133);
        width: 50%;

        h4 {
          width: 10%;
          color: #39434D;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          cursor: pointer;
          margin-right: 6%;
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

        .obterLink, .convideAmigos, .ganheBitcoin {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
          width: 50%;
          height: 100px;
        }

        span {
          margin-top: 20px;
          color: rgb(111, 122, 133);
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;
          width: 49%;
        }

      }

      .qrCodeContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
        height: 19%;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 2px solid  rgb(111, 122, 133);

        .qrCode {
          width: 21%;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .referral {
          display: flex;
          flex-direction: column;
          width: 76%;
          justify-content: space-around;


          .topData {
            width: 100%;
            flex-wrap: wrap;
            display: flex;
            justify-content: space-between;
            height: 45%;

            div {
              width: 30%;
            }
          }

          span {
            height: 20%;
            margin-top: 5%;
          }

          div {
            display: flex;
            justify-content: space-between;
            height: 30%;
            align-items: flex-end;

            input {
              width: 83%;
              background: transparent;
              border: 1px solid grey;
              border-radius: 4px;
              height: 25px;
            }

            input::placeholder {
              color:rgb(111, 122, 133);
              padding-left: 20px;
              font-family: Arial, Helvetica, sans-serif;
            }

            button {
              width: 16%;
              height: 29px;
              padding: 0;
              border: 0;
              background: #24cc9d;
              border-radius: 2px;

              img {
                width: 25%;
                height: 53%;
              }
            }
          }
        }
      }

      .socialMidia {
        width: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        padding-bottom: 20px;

        span {
          color:rgb(111, 122, 133);
        }

        img {
          width:3%;
          padding: 0 10px;
        }
      }

      .thirdContainer {
        width: 50%;
        border-top: 2px solid  rgb(111, 122, 133);
        border-bottom: 2px solid  rgb(111, 122, 133);
        display: flex;


        .invite {
          display: flex;
          flex-direction: column;
          border-right: 2px solid  rgb(111, 122, 133);
          width:50%;

          span:nth-child(1) {
            font-size: 17px;
            margin-top: 30px;
          }

          span:nth-child(2) {
            font-size: 14px;
            color: white;
            width: 60%;
            margin: 20px 0;
          }


          div.input {
            margin-bottom: 30px;
            display: flex;

          input {
              width: 75%;
              background: transparent;
              border: 1px solid grey;
              border-radius: 4px;
              height: 25px;

            }

            input::placeholder {
              color:rgb(111, 122, 133);
              padding-left: 20px;
              font-family: Arial, Helvetica, sans-serif;
            }

            button {
              width: 70px;
              height: 29px;
              padding: 0;
              border: 0;
              background: #24cc9d;
              border-radius: 2px;
              margin-left: 5px;

              img {
                width: 20%;
                height: 70%;
              }
            }
          }
        }

        .static {
          display: flex;
          flex-direction: column;
          width: 50%;

          span.static {
            font-size: 17px;
            margin: 30px 0;
            margin-left: 50px;
          }

          .info {
            display: flex;
            width: 100%;

            .views {
              display: flex;
              flex-direction: column;
              width: 50%;
              justify-content: center;
              align-items: center;

              span:nth-child(1) {
                color: #24cc9d;;
                font-size: 30px;
              }

              img {
                width: 30%;
                margin: 20px 0;
              }

              span:nth-child(3) {
                font-size: 13px;
                margin: 0;
                padding: 0;
                width: 40%;
                text-align: center;
                margin-bottom: 20px;
              }


            }

            .people {
              display: flex;
              flex-direction: column;
              width: 50%;
              justify-content: center;
              align-items: center;

              span:nth-child(1) {
                color: #24cc9d;;
                font-size: 30px;
              }

              img {
                width: 30%;
                margin: 20px 0;
              }

              span:nth-child(3) {
                font-size: 13px;
                margin: 0;
                padding: 0;
                width: 40%;
                text-align: center;
                margin-bottom: 20px;
              }

            }
          }

        }
      }

      .history {
        width: 50%;
        padding-bottom: 0px;
        margin-top: 30px;
        table {
          width: 100%;
          text-align: left;

          th {
            border-bottom: 1px solid grey;
            height: 20px;
          }

          td {
            border-bottom: 1px solid grey;
            height: 20px;
          }


        }
      }

      .back {
        width: 50%;
        height: 100px;
        margin-top: 5px;

        a {
          text-decoration: none;
          color: grey;
        }
      }

    }

  }
</style>

