<template>
  <div class="menu">
    <span>Logo</span>
    <ul>
      <li v-for="route in routes">
        <router-link :to="route.path">{{route.titulo}}</router-link>
      </li>
    </ul>
    <section>
      <span>Perfil</span>
      <span>Notificação</span>
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
    margin-bottom: -3.11%;
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
</style>

