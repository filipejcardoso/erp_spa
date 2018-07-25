<template>
<div class="container">
	<div class="row">
		<div class="col s12">
            <h1>PRODUTOS</h1>

            <table class="highlight">
                <thead>
                <tr>
                    <th width="10%">-</th>
                    <th width="50%">Nome</th>
                    <th width="10%">Codbarras</th>
                    <th width="10%">Marca</th>
                    <th width="10%">UN.</th>
                    <th width="10%">Valor</th>
                </tr>
                </thead>

                <tbody>
                <tr class="line" v-for="(item, index) in list_produtos" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.codbarras }}</td>
                    <td>{{ item.marca.descricao }}</td>
                    <td>{{ item.unidades_medida.descricao }}</td>
                    <td>{{ item.preco_venda }}</td>
                </tr>
                </tbody>
            </table>
            
		</div>
	</div>
</div>	
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  mounted(){
    this.loadProdutosList()
  },
  methods: {
    ...mapActions('Produtos',['setListProdutos']),
    loadProdutosList: async function() {
        await this.setListProdutos()
    }
  },
  computed : {
    ...mapState('Produtos',['list_produtos'])
  }
}    
</script>


<style>
	.line{border-bottom: solid 1px #ddd;}
	.line:hover{cursor: pointer;}
</style>