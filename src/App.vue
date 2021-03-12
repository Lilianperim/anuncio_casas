<template>
  <v-app>
    <AppCasa></AppCasa>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppCasa from "./components/shared/AppCasa";

export default {
  name: "App",
  components: {
    AppCasa,
  },
};
</script>

<style scoped>
</style>
