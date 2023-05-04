<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <div
        v-for="product in products"
        class="product-item"
        v-bind:key="product.id"
      >
        <img v-bind:src="product.imageUrl" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
          <button>View Details</button>
        </router-link>
      </div>
      <div class="foot">
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductsPage',
    data() {
      return {
        products:[],
      };
    },
    async created() {
    const result = await axios.get('/api/products');
    const products = result.data;
    this.products = products;
    }
};
</script>

<style scoped>

  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px#3A506B;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>

