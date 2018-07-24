<template>
<div class="container">
	<div class="row">
		<div class="col s12">

            <h1>DASHBOARD</h1>

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