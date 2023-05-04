<template>
    <div v-if="products.length > 0">
        <ProductListItem
        v-for="product in products"
        v-on:remove-from-cart="$emit('remove-from-cart', $event)"
        :key="product.id"
        :products="product"/>
    </div>
    <p v-else> You haven't added anthing to your cart!</p>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
export default {
    name: 'ProductList',
    props: ['products'],
    components: {
        ProductListItem,
    },
}
</script>

<style>

</style>