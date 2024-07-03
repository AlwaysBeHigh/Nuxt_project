<template>
  <div class="h-screen">

    <div v-if="loading"
         class="h-screen w-full z-999 flex flex-row justify-content-center align-items-center transition-all transition-duration-200">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity=".25"/>
          <path fill="currentColor"
                d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
            <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                              values="0 12 12;360 12 12"/>
          </path>
        </svg>
      </div>
    </div>

    <div class="w-10 mx-auto">

      <div class="flex flex-wrap
        flex-column
        md:justify-content-between
        md:flex-row
        align-content-center p-2 bg-primary border-round mb-5">
        <p class="font-bold текст-LG p-2 p-0 m-0">Интернет магазин</p>
        <p class="font-bold текст-LG p-2 p-0 m-0">Сумма: ${{ cartStore.totalProductsPrice }}</p>
        <NuxtLink to="/cart" class="flex-row justify-content-center align-content-center no-underline bg-primary-400 border-primary-500 px-3 py-2
        text-base text-white text-center
                                    border-1 border-solid border-round
                                    cursor-pointer transition-all transition-duration-200
                                    hover:bg-primary-600 hover:border-primary-600
                                    active:bg-primary-700 active:border-primary-700">Корзина
          ({{ cartStore.totalCartProducts }})
        </NuxtLink>

      </div>
      <NuxtPage/>
    </div>

  </div>
</template>

<script setup>

const cartStore = useCartStore()
const {productQuantity} = storeToRefs(cartStore)

const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});


</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>