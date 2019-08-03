<template>
  <div class="body">
    <div class="content">
      <div class="header" v-show="!Pin">
        <h1>Alterar Senha</h1>
        <div class="description">
          <span>
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deldus m Ipsum.
          </span>
        </div>
      </div>

      <div class="header" v-show="Pin">
        <h1>Pin</h1>
        <div class="description">
          <span>
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deldus m Ipsum.
          </span>
        </div>
      </div>

      <div class="tab">
        <h4 @click="Pin = false">Senha</h4>
        <h4 @click="Pin = true">Pin</h4>
      </div>

      <section v-show="!Pin" class="password">
        <span>Senha</span>
        <input type="password"  @input="password = $event.target.value"/>
        <span>Nova Senha</span>
        <input type="password"  @input="newPassword = $event.target.value" />
        <span>Confirme sua senha</span>
        <input type="password"  @input="confirmNewPassword = $event.target.value" />
        <button @click="showChangePasswordModal">Alterar Senha</button>
      </section>

      <section v-show="Pin" class="Pin">
        <h3>Alteração do Pin</h3>
        <span>Por questões de segurança vicê irã receber no seu e-mail link para alteração do Pin</span>
        <button @click="changePin = true">Enviar E-Mail</button>
      </section>
    </div>

  <transition name="modal">
    <div v-show="showModal" id="modal">
      <div class="alert">
        <h2>Alterar Senha</h2>
        <span>Eu quero finalizar minha sessão</span>
        <div>
          <button @click="showModal = false">Cancelar</button>
          <button @click="passwordChangedDialog()">Confirmar</button>
        </div>
      </div>
    </div>
  </transition>

  <transition name="modal">
    <div v-show="passwordChanged" id="passwordChanged">
      <div class="alert">
        <img src="../../assets/success.png" alt="Sucess" width="30"/>
        <h2>Senha Alterada com Sucesso</h2>
        <span>Sua Senha foi alterada com sucesso.</span>
        <div>
          <button @click="passwordChanged = false">< voltar</button>
        </div>
      </div>
    </div>
  </transition>

  <transition name="modal">
    <div v-show="changePin" id="changePin">
      <div class="alert">
        <h2>Alteração Pin</h2>
        <span>Enviamos um e-mail de confirmação para alteração do PIN Clique no Link recebido para alterar o novo Pin</span>
        <div>
          <button @click="pinChangedDialog()">< voltar</button>
        </div>
      </div>
    </div>
  </transition>

  <transition name="modal">
    <div v-show="numKeyboardActual" id="numKeyboardActual">
      <div class="alert">
        <h2>Alteração Pin</h2>
        <div class="input">
          <span>Pin Atual</span>
          <span>{{ oldPin }}</span>
        </div>

        <div class="num">
          <button @click="oldPinChange('1')">1</button>
          <button @click="oldPinChange('2')">2</button>
          <button @click="oldPinChange('3')">3</button>
          <button @click="oldPinChange('4')">4</button>
          <button @click="oldPinChange('5')">5</button>
          <button @click="oldPinChange('6')">6</button>
          <button @click="oldPinChange('7')">7</button>
          <button @click="oldPinChange('8')">8</button>
          <button @click="oldPinChange('9')">9</button>
          <button @click="oldPinChange('X')">X</button>
          <button @click="oldPinChange('0')">0</button>
          <button @click="oldPinChange('<')"><-</button>
        </div>
        <div class='actions'>
          <button @click="newPinDialog()">< voltar</button>
          <button @click="newPinDialog()"> Continuar ></button>
        </div>
      </div>
    </div>
  </transition>

  <transition name="modal">
    <div v-show="newPin" id="newPin">
      <div class="alert">
        <h2>Alteração Pin</h2>
        <div class="input">
          <span>Novo Pin</span>
          <span>{{ pin }}</span>
        </div>

        <div class="num">
          <button @click="addNumber('1')">1</button>
          <button @click="addNumber('2')">2</button>
          <button @click="addNumber('3')">3</button>
          <button @click="addNumber('4')">4</button>
          <button @click="addNumber('5')">5</button>
          <button @click="addNumber('6')">6</button>
          <button @click="addNumber('7')">7</button>
          <button @click="addNumber('8')">8</button>
          <button @click="addNumber('9')">9</button>
          <button @click="addNumber('X')">X</button>
          <button @click="addNumber('0')">0</button>
          <button @click="addNumber('<')"><-</button>
        </div>
        <div class='actions'>
          <button @click="newPinSuccess()">< voltar</button>
          <button @click="newPinSuccess()"> Continuar ></button>
        </div>
      </div>
    </div>
  </transition>

  <transition name="modal">
    <div v-show="pinChanged" id="pinChanged">
      <div class="alert">
        <img src="../../assets/success.png" alt="Sucess" width="30"/>
        <h2>Pin Alterada com Sucesso</h2>
        <span>Seu PIN foi alterado com sucesso.</span>
        <div>
          <router-link to="/">< voltar</router-link>
        </div>
      </div>
    </div>
  </transition>

</div>



</template>



<script>
export default {
  data() {
    return {
      Pin: false,
      showModal: false,
      passwordChanged: false,
      changePin: false,
      numKeyboardActual: false,
      newPin: false,
      pinChanged: false,
      pin: "",
      oldPin: "",
      password: "",
      newPassword: "",
      confirmNewPassword: ""
    }
  },

  methods: {

    showChangePasswordModal() {
      this.showModal = true
      console.log("password atual: ",this.password)
      console.log("novo password: ",this.newPassword)
      console.log("Confirmação do novo password: ",this.confirmNewPassword)
      alert(`password atual: ${this.password}`)
      alert(`novo password: ${this.newPassword}`)
      alert(`Confirmação do novo password: ${this.confirmNewPassword}`)

    },

    passwordChangedDialog() {
      this.showModal = false;
      this.passwordChanged = true;
    },

    pinChangedDialog() {
      this.changePin = false
      this.numKeyboardActual = true
    },

    newPinDialog() {
      this.numKeyboardActual = false
      this.newPin = true

      alert(`Pin Atual Digitado: ${this.oldPin}`)
      console.log("Pin Atual: ", this.oldPin)
    },

    newPinSuccess() {
      this.newPin = false
      this.pinChanged = true

      alert(`NOVO PIN DIGITADO: ${this.pin}`)
      console.log("Novo Pin: ", this.pin)
    },

    addNumber(v) {
      if(v == "X") return this.pin = ""
      this.pin = this.pin + v
    },

    oldPinChange(v) {
      if(v == 'X') return this.oldPin = ""
      this.oldPin = this.oldPin + v
    }


  },
}
</script>

<style lang="scss" scoped>
  .body {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100;


    .content {
      width: 60%;
      height: 50vh;
      background: #1B242D;
      display: flex;
      flex-direction: column;
      text-align: center;
      border-left: 1px solid black;
      border-right: 1px solid black;
      margin-top: -150px;
      .header {
            display: flex;
            flex-direction: column;
            align-items: center;

        .description {
          width: 76%;
        }
      }

      .tab {
        display: flex;
        flex-direction: row;
        margin-left: 10%;
        border-bottom: 2px solid #39434D;
        width: 83%;

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
      }

      section {
        display: flex;
        justify-content: center;
        flex-direction: column;


      }

      h1 {
        color: #3F7E75;
        font-family: Arial, Helvetica, sans-serif;
      }

      input {
        width: 50%;
        border:none;
        border-bottom: 2px solid #39434D;
        background: transparent;
        height:20px;
        color: rgb(106, 111, 117);
        outline: none;
        margin-left: 10%;
      }

      span {
        text-align: left;
        color: rgb(106, 111, 117);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 600;
        padding-top: 15px;
        margin-left: 10%;
      }

      button {
        padding: 8px 16px;
        background:transparent;
        color:#39434D;
        font-weight: 500;
        font-size: 16px;
        border: 3px solid #39434D;
        border-radius: 5px;
        margin-top: 5px;
        width: 20%;
        margin-left: 10%;
        margin-top: 25px;
      }

      button:hover {
        cursor: pointer;
        transition: .2s;
        width: 21%;
      }

      section.Pin {
        h3 {
          font-family: Arial, Helvetica, sans-serif;
          color:#3F7E75;
          text-align: left;
          margin-left: 10%;
        }

        span {
          width: 30%;
        }
      }
    }



  }

  #modal {
    position: absolute;
    width: 100%;
    height: 113%;
    background: #151922e3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .alert {
      background: #1B242D;
      width: 350px;
      height: 150px;
      text-align: center;
      color: #39434D;
      font-family: Arial, Helvetica, sans-serif;

      h2 {
        color: #3F7E75;
      }

      button {
        padding: 8px 16px;
        background:transparent;
        color:#39434D;
        font-weight: 500;
        font-size: 16px;
        border: 3px solid #39434D;
        border-radius: 5px;
        margin-top: 5px;

      }

      button:hover {
        cursor: pointer;
        padding: 9px 18px;
        transition: .2s
      }
    }
  }

  #passwordChanged {
    position: absolute;
    width: 100%;
    height: 113%;
    background: #151922e3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .alert {
      background: #1B242D;
      width: 500px;
      height: 350px;
      text-align: center;
      color: #39434D;
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        color: #3F7E75;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      span {
        margin-bottom: 40px;
        color: rgb(211, 211, 211);
      }

      button {
        padding: 8px 35px;
        background:transparent;
        color:#39434D;
        font-weight: 500;
        font-size: 16px;
        border: 3px solid #39434D;
        border-radius: 5px;
        margin-top: 5px;

      }

      button:hover {
        cursor: pointer;
        padding: 8px 37px;
        transition: .2s
      }
    }
  }

  #changePin {
    position: absolute;
    width: 100%;
    height: 113%;
    background: #151922e3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .alert {
      background: #1B242D;
      width: 600px;
      height: 450px;
      text-align: center;
      color: #39434D;
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        color: #3F7E75;
      }

      span {
        margin-bottom: 40px;
        color: rgb(211, 211, 211);
        font-size: 14px;
        width:62%;
      }

      button {
        padding: 8px 35px;
        background:transparent;
        color:#39434D;
        font-weight: 500;
        font-size: 16px;
        border: 3px solid #39434D;
        border-radius: 5px;
        margin-top: 5px;

      }

      button:hover {
        cursor: pointer;
        padding: 8px 37px;
        transition: .2s
      }
    }
  }

  #numKeyboardActual {
    position: absolute;
    width: 100%;
    height: 113%;
    background: #151922e3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .alert {
      background: #1B242D;
      width: 450px;
      height: 600px;
      text-align: center;
      color: #39434D;
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        color: #3F7E75;
      }

      span {
        margin-bottom: 40px;
        color: rgb(211, 211, 211);
        font-size: 14px;
        width:62%;
      }

      .input {
        border-bottom: 1px solid grey;
        width: 80%;
        margin: 20px 0;
        text-align: left;
        padding-bottom: 0px;
        display:flex;
        flex-direction: column;

        span {
        margin-bottom: 0px;
        margin-bottom: 10px;
        color: rgb(211, 211, 211);
        font-size: 14px;
        width:62%;
      }
      }

      .actions {
        margin-top: 30px;

          button {
            padding: 8px 35px;
            background:transparent;
            color:#39434D;
            font-weight: 500;
            font-size: 16px;
            border: 3px solid #39434D;
            border-radius: 5px;
            margin-top: 5px;

          }

          button:hover {
            cursor: pointer;
            padding: 8px 37px;
            transition: .2s
          }
      }

      .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        button {
          height: 60px;
          width: 30%;
          background:#39434D;
          color:white;
          font-weight: 500;
          font-size: 16px;
          border: none;
          cursor: pointer;
          margin-top: 3%;
        }

      }
    }
  }

   #newPin {
    position: absolute;
    width: 100%;
    height: 113%;
    background: #151922e3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .alert {
      background: #1B242D;
      width: 450px;
      height: 600px;
      text-align: center;
      color: #39434D;
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        color: #3F7E75;
      }

      span {
        margin-bottom: 40px;
        color: rgb(211, 211, 211);
        font-size: 14px;
        width:62%;
      }

      .input {
        border-bottom: 1px solid grey;
        width: 80%;
        margin: 20px 0;
        text-align: left;
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;

        span {
        margin-top: 10px;
        margin-bottom: 0;
        color: rgb(211, 211, 211);
        font-size: 14px;
        width:62%;
      }
      }

      .actions {
        margin-top: 30px;

          button {
            padding: 8px 35px;
            background:transparent;
            color:#39434D;
            font-weight: 500;
            font-size: 16px;
            border: 3px solid #39434D;
            border-radius: 5px;
            margin-top: 5px;

          }

          button:hover {
            cursor: pointer;
            padding: 8px 37px;
            transition: .2s
          }
      }

      .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        button {
          height: 60px;
          width: 30%;
          background:#39434D;
          color:white;
          font-weight: 500;
          font-size: 16px;
          border: none;
          cursor: pointer;
          margin-top: 3%;
        }

      }
    }
  }

   #pinChanged {
    position: absolute;
    width: 100%;
    height: 113%;
    background: #151922e3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .alert {
      background: #1B242D;
      width: 500px;
      height: 350px;
      text-align: center;
      color: #39434D;
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        color: #3F7E75;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      span {
        margin-bottom: 40px;
        color: rgb(211, 211, 211);
      }

      a {
        text-decoration: none;
        padding: 8px 35px;
        background:transparent;
        color:#39434D;
        font-weight: 500;
        font-size: 16px;
        border: 3px solid #39434D;
        border-radius: 5px;
        margin-top: 5px;

      }

      a:hover {
        cursor: pointer;
        padding: 8px 37px;
        transition: .2s
      }
    }
  }

  .modal-enter, .modal-leave-active {
    opacity: 0
  }

  .modal-enter-active, .modal-leave-active {
    transition: opacity .5s
  }

</style>

