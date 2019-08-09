<template>
  <div id="app">
    <header>
      <h2>Public Message Board</h2>
    </header>    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footer>&copy; Stefan Bobrowski 2019</footer>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header h2 {
  padding: 20px;
  color:#42b983;
  background-color:#2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  padding: 20px;
  color:#42b983;
  background-color:#2c3e50;
}

@media screen and (max-width: 400px) {

  header h2 {
    font-size: 22px;
    line-height: 26px;
  }

}
</style>
