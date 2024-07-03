<script setup lang="ts">

const router = useRouter();
const route = useRoute();

const itemId = route.params.id

const {data} = await useAsyncData('product', () => $fetch(`https://dummyjson.com/products/${itemId}`))
//const {pending, data} = await useLazyFetch(`https://dummyjson.com/products/${itemId}`)

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Страница не найдена'
  })
}

const cartStore = useCartStore()
const {productQuantity} = storeToRefs(cartStore)

</script>

<template>
  <div>


    <div class="mb-5 mt-3">
      <NuxtLink to="/"
                class="text-black-alpha-90 border-primary-500 px-3 py-2 border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 no-underline">
        На главную
      </NuxtLink>
    </div>

    <div class="flex w-full align-content-center justify-content-start">
      <img :src="data.thumbnail" class="w-20rem">
    </div>

    <h3 class="font-bold">{{ data.title }}</h3>
    <p>${{ data.price }}</p>
    <p class="text-overflow-ellipsis">{{ data.description }}</p>

    <div class="w-12 md:w-4 flex flex-row gap-5">
      <button type="button"
              @click="cartStore.addProductToCart(data)"
              class="w-full bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
        В корзину
      </button>
      <button
          v-if="productQuantity(data.id)>0"
          type="button"
          @click="cartStore.removeProductFromCart(data.id)"
          class="w-full bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
        Убрать
      </button>
    </div>
    <p v-if="productQuantity(data.id)>0" class="m-1 pb-5 p-0">В корзине: {{ productQuantity(data.id) }}</p>
  </div>
</template>

<style scoped>

</style>