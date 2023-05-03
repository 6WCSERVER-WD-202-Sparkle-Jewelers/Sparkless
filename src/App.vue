<template>
  <div id="app">
   <ResponsiveNavBar/>
   <routerView/>
  </div>
</template>

<script>
import ResponsiveNavBar from "./components/ResponsiveNavBar.vue"

export default {
  name: 'App',
  components: {
    ResponsiveNavBar
  },
 
}
</script>
<style>
  * {
    box-sizing: border-box;
    font-family: sans-serif,'poppins';
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>