<template>
  <div class="menu">
    <h4><span>Colony Bit</span></h4>
    <ul>
      <li v-for="route in routes">
        <router-link :to="route.path">{{route.titulo}}</router-link>
      </li>
    </ul>
    <section>
    
      <h4><span>Notificação</span>
      <span>Perfil</span></h4>
      
    </section>
  </div>
</template>

<script>  
export default {
  props: ['routes']
}
</script>


<style lang="scss" scoped>
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    box-shadow: 0px 6px 4px black;
    margin-bottom: -5.11%;
  }

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    width: 140px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #48555E;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 600;
  }
  h4 {
          width: 200px;
          color: #39434D;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          
        }
        .icons {
        display: flex;
        justify-content: space-around;
        width:  50%;
        margin-top: 30px;
      }
</style>

