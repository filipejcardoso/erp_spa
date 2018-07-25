<template>
<div class="container">
	<div class="row">
		<div class="col s12">
            <div class="section"></div>
            <main>
                <center>
                <img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" />
                <div class="section"></div>

                <h5 class="indigo-text">Bem-Vindo, faça o login no ERP</h5>
                <div class="section"></div>

                <div class="container">
                    <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

                    <div class="col s12" method="post">
                        <div class='row'>
                        <div class='col s12'>
                        </div>
                        </div>

                        <div class='row'>
                        <div class='input-field col s12'>
                            <input class='validate' v-model="user.username" v-on:keyup.13="login()"  type='text' name='username' id='username' />
                            <label for='username'>Entre com seu usuário</label>
                        </div>
                        </div>

                        <div class='row'>
                        <div class='input-field col s12'>
                            <input class='validate'  v-model="user.password" v-on:keyup.13="login()" type='password' name='password' id='password' />
                            <label for='password'>Entre com sua senha</label>
                        </div>
                        <label style='float: right;'>
                                            <span class='pink-text' href='#!'><b>Módulo Comercial</b></span>
                                        </label>
                        </div>

                        <br />
                        <center>
                        <div class='row'>
                            <button type='submit' v-on:click="login()" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
                        </div>
                        </center>
                    </div>
                    </div>
                </div>
                <span>EletroBidu Comercial Elétrica LTDA-ME</span>
                </center>

                <div class="section"></div>
                <div class="section"></div>
            </main>
  		</div>
	</div>
</div>	
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      user:{
        username:'',
        password:''
      }
    }
  },
  mounted(){
  },
  methods: {
    ...mapActions('Autenticacao',['loginAction']),
    login: async function() {
        if(await this.loginAction(this.user))
          this.$router.push('dashboard')
        else  
          alert('Usuário ou senha incorreto!')
    }
  },
  computed : {
    ...mapState('Autenticacao',['token'])
  }
}
</script>


<style>
   body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }

    body {
      background: #fff;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=username]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=username]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #e91e63;
      box-shadow: none;
    }</style>