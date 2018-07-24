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
                <tr class="line" v-for="(item, index) in produtos" :key="item.id">
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
export default {
  data()
  {
    return{
      produtos: []
    }
  },
  methods: {
    loadProdutos(){
      const url = `${process.env.API_URL}/produtos`;
      const header = {Authorization:`Bearer ${this.$store.state.token}`}

      this.axios.get(url,{ headers: header })
      .then(response => {

        this.produtos = response.data['records'];
      })
      .catch(e => {
      })
    },
   },
  created(){
      this.loadProdutos();
  }
}
</script>


<style>
	.line{border-bottom: solid 1px #ddd;}
	.line:hover{cursor: pointer;}
</style>