<script setup lang="ts">
const error = useError()
</script>

<template>
  <div class="w-25rem h-screen mx-auto flex flex-column justify-content-center align-content-center text-center">
    <h1 class="font-bold text-8xl m-0">{{error.statusCode}}</h1>
    <h2>{{ error.message }}</h2>
    <NuxtLink to="/" class="mt-3 bg-primary-400 border-primary-500 px-3 py-2 text-base text-white border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 no-underline">На главную</NuxtLink>
  </div>

</template>

<style scoped>

</style>