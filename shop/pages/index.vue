<script setup>

const cartStore = useCartStore()
const { productQuantity } = storeToRefs(cartStore)

const {data} = await useAsyncData('products', () => $fetch(`https://dummyjson.com/products`))

const trimmingText = (text) => {
  text = text.trim()
  if (text.length <= 100) return text;

  text = text.slice(0, 100);
  return text.trim() + "...";
}
</script>

<template>
  <div>

    <div class="grid flex gap-1 justify-content-around">
      <div v-for="(product, i) in data.products" :key="i"
           class="col-12 xl:col-3 flex flex-column border-round border-1 surface-border p-3 mt-3">

        <RouterLink :to="`/product/${product.id}`" class="no-underline text-color">
          <div class="flex w-full align-content-center justify-content-center">
            <img :src="product.thumbnail" class="w-10rem">
          </div>
          <h3 class="font-bold">{{ product.title }}</h3>
          <p>${{ product.price }}</p>
          <p class="text-overflow-ellipsis">{{ trimmingText(product.description) }}</p>
        </RouterLink>

        <div class="w-full flex flex-row gap-2">
          <button type="button"
                  @click="cartStore.addProductToCart(product)"
                  class="w-full bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
            В корзину
          </button>
          <button
              v-if="productQuantity(product.id)>0"
              type="button"
              @click="cartStore.removeProductFromCart(product.id)"
              class="w-full bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
            Убрать
          </button>
        </div>
        <p v-if="productQuantity(product.id)>0" class="w-full m-1 mt-2">В корзине: {{productQuantity(product.id)}}</p>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>