<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed clipped class="deep-purple lighten-5" app>
      <v-list dense class="deep-purple lighten-5">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
          <v-list-tile v-else :key="i" v-on:click="`${item.action}`()">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="deep purple" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">EletroBidu&nbsp;<span class="text">ERP</span></span>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-app>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		data: () => ({
		drawer: null,
		items: [
			{ icon: 'receipt', text: 'Produtos', action: 'produtos' },
			{ icon: 'exit_to_app', text: 'Sair', action: 'logout' },
		]
		}),
		props: {
		source: String
		},
		methods:{
			...mapActions('Autenticacao', ['logoutAction']),
			...mapActions('Produtos', ['setListProdutos']),
			logout: async function() {
			await this.logoutAction()
			this.$router.push('login')
			},
			produtos: async function() {
			await this.setListProdutos()
			this.$router.push('produtos')
			}
		}
	}
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .v-navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }
</style>