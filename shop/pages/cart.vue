<script setup lang="ts">
const cartStore = useCartStore()
const {productQuantity, productAmount} = storeToRefs(cartStore)

</script>

<template>
  <div>
    <div class="mb-5 mt-3">
      <NuxtLink to="/"
                class="text-black-alpha-90 border-primary-500 px-3 py-2 border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 no-underline">
        На главную
      </NuxtLink>
    </div>
    <h2>Корзина</h2>
    <p>Всего товаров: <strong>{{ cartStore.totalCartProducts }}</strong> на сумму
      <strong>${{ cartStore.totalProductsPrice }}</strong></p>

    <div class="flex flex-column md:flex-row" v-for="(product, i) in cartStore.cart" :key="i">

      <div class="
        w-full
        md:w-full

        flex
        flex-column

        sm:flex-column
        md:flex-column
        lg:flex-row

        gap-5
        align-items-center justify-content: space-between
        border-round border-1 surface-border p-3 m-1">

        <div class="flex align-content-center justify-content-start"><img :src="product.thumbnail" class="w-10rem"></div>

        <div class="w-12 flex flex-column align-items-center text-center">
          <h3 class="font-bold m-0 p-0">{{ product.title }}</h3>
          <p>${{ product.price }}</p>
        </div>

        <div class="
        w-12
        flex flex-column
        gap-3
        align-items-start
        ">
          <button type="button"
                  @click="cartStore.addProductToCart(product)"
                  class="w-full h-3rem bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
            Добавить
          </button>
          <button
              v-if="productQuantity(product.id)>0"
              type="button"
              @click="cartStore.removeProductFromCart(product.id)"
              class="w-full h-3rem bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
            Убрать
          </button>
          <div class="flex flex-row gap-2">
            <p class="m-1 p-0">Количество: {{ productQuantity(product.id) }}</p>
            <p class="m-1 p-0">На сумму: ${{ productAmount(product.id) }}</p>
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>

</style>