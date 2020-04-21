<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  padding: 10px;
}

.nothing {
  margin-top: 25vh;
  color: #80868b;
  cursor: default;
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.75rem;
  text-align: center;
}

.margin-20 {
  margin: 20px;
}

.text-align-center {
  text-align: center;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
