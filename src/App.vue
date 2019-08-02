<template>
  <div id="app">
    <div class="menu">
      <Menu :routes="routes"/>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Menu from './components/shared/menu/Menu'
import { routes } from './routes'
export default {

  data() {
    return {
      routes
    }
  },

  components: {
    'Menu': Menu
  }
}
</script>

<style lang="scss">
  #app {
    background: #1B242D;
  }


  body {
    margin: 0;
    padding: 0;
  }

</style>
