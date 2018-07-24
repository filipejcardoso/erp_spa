<template>
<div>
  <nav>
    <div class="nav-wrapper deep-purple">
      <a href="http://eletrobidu.com.br"><span class="brand-logo center">eletrobidu.com.br</span></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">

        <li><router-link to="/dashboard"><i class="material-icons left">timeline</i>Dashboard</router-link></li>
        <li><router-link to="/produtos"><i class="material-icons left">receipt</i>Produtos</router-link></li>
        <li><router-link to="/login"><i class="material-icons left">exit_to_app</i>Sair</router-link></li>

      </ul>
      
      <ul class="sidenav" id="mobile-demo">

                <li v-on:click="esconder">
                  <router-link class="waves-effect waves-cyan" to="/dashboard">
                    <i class="material-icons">timeline</i>Dashboard
                  </router-link>
                </li>
                <li v-on:click="esconder">
                  <router-link class="waves-effect waves-cyan" to="/produtos">
                    <i class="material-icons">receipt</i>Produtos
                  </router-link>
                </li>
                <li v-on:click="esconder">
                  <router-link class="waves-effect waves-cyan" to="/login">
                    <i class="material-icons">exit_to_app</i>Sair
                  </router-link>
                </li>
      </ul>

    </div>
  </nav>
</div>
</template>

<script>
export default {
  methods: {
    esconder: function (event) {
        $('.sidenav').sidenav('close')
    }
  },
  created()
  {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
        
  }
}
</script>

<style>
</style>
