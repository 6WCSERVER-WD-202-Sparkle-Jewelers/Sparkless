<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg" style="background-color: #0B132B">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="../assets/Logo.png" alt="" width="55" height="35">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style=" color: #FFFFFF;"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Home -->
        <li class="nav-item">
          <router-link to="/" id="home-link">
            <h4>Home</h4>
          </router-link>
        </li>
         <!-- Products -->
        <li class="nav-item">
          <router-link to="/products" id="product-link">
            <h4>Products</h4>
          </router-link>
        </li>
        <!-- About -->
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <!-- Contact -->
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
        <div class="nav-icon">
          <router-link to="/cart" id="cart-link">
            <button class="cart-btn"><i class="bi bi-cart2" style="font-size: 25px; color: #FFFFFF;"></i></button>
          </router-link>
         
         
        </div>
        
      
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveNavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-family: 'Poppins', sans-serif;
    font-size: large;
  }


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #FFFFFF;
} */
.nav-item a{
  color: #FFFFFF;
  text-decoration: none;
  display:inline-block;
  margin: 0 20px;
  padding-top: 15px;
}
.nav-item a:hover{
  color: #3A506B;
}
.nav-icon i{
  align-items: center;
  margin-right: 20px;
}
.cart-btn{
  background-color: #0B132B;
}
</style>
