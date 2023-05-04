<template>
    <div  class="product-container">
    <img class="product-image" :src="products.imageUrl"/>
    <div class="details-wrap">
      <h3>{{ products.name }}</h3>
      <p>${{ products.price }}</p>
    </div>
    <button
        class="remove-button"
        v-on:click="$emit('remove-from-cart', products.id)"
      >Remove From Cart</button>
  </div>
</template>

<script>
    export default {
        name: 'ProductListItem',
        props: ['products'],
    }
</script>

<style scoped>
.product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>