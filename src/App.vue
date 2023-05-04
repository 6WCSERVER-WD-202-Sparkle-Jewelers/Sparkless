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
    background-color: #0B132B;
    border: none;
    border-radius: 8px;
    color: #f6edea;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
  button:hover,
  button:focus,
  button:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  }
</style>