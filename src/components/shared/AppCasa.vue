<template>
  <div class="app-casa">
    <v-app-bar color="blue-grey lighten-2" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Casas</v-toolbar-title>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue-grey--text text--lighten-2"
        >
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-home-heart</v-icon>
          </v-btn>

          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/venda">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-currency-usd</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Venda</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on"> </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppCasa",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>


<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>

