<template>
  <v-container fluid>
    <h2 class="text-h5 text-center mb-3 mt-5">A venda</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th colspan="2" class="text-left">Tipo</th>
            <th class="text-right">Valor</th>
          </tr>
        </thead>
        <tbody>
          <div class="casa-venda">
            <h1></h1>
            <ul>
              <li v-for="casa of casas" :key="casa.id">
                <p>
                  <strong>{{ casa.titulo }}</strong>
                </p>
                <td>
                  <v-img width="300px" align="justify" :src="casa.url" />
                </td>
                <br />
                <td class="text-right">{{ casa.nome }}</td>
                <br />
                <td class="text-right">R$ {{ casa.valor }}</td>
                <br />
                <td class="text-right">{{ casa.endereco }}</td>
                <br />
                <td class="text-right">Quartos:{{ casa.numQuartos }}</td>
                <br />
              </li>
            </ul>
          </div>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "CasaVenda",
  data() {
    return {
      casavenda: [],
      casas: [
        {
          id: 1,
          nome: "Casa 1",
          url: "https://www.plantapronta.com.br/projetos/161/01.jpg",
          titulo: "Bairro: Bela Vista",
          valor: 200000,
          endereco: "Rua Paim,262",
          numQuartos: 2,
        },
        {
          id: 2,
          nome: "Casa 2",
          url: "https://www.plantapronta.com.br/projetos/161/01.jpg",
          titulo: "Bairro: Centro",
          valor: 100000,
          endereco: "Rua Cleberson",
        },
        {
          id: 3,
          nome: "Casa 3",
          url: "https://www.plantapronta.com.br/projetos/161/01.jpg",
          titulo: "Bairro: Itaim Bibi",
          valor: 300000,
          endereco: "Rua Lilian",
        },
      ],
    };
  },
  computed: {
    
  },
  created() {
    this.casaListaOrdenada();
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.casavenda = json;
        console.log(this.casavenda);
      });
  },
  methods: {
    casaListaOrdenada() {
      this.casas = this.casas
        .slice(0) //começar da posição 0
        .sort(
          (a, b) => (a.valor < b.valor ? -1 : 1));
    },
  }
};
</script>
<style scoped>
.casa-imagem {
  width: 100%;
}
</style>