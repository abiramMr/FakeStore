<template>
  <header class="bg-black_100">
    <div
      class="w-full max-w-[90%] mx-auto h-[8svh] flex justify-between items-center py-3"
    >
      <div class="border-2 border-primary rounded-[2rem] px-4">
        <p class="para text-h3 font-medium italic text-primary">FAKE STORE</p>
      </div>
      <div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <button><LogOut color="#ffd500" :size="30" /></button>
        <button><ShoppingCart color="#ffd500" :size="30" /></button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { LogOut, ShoppingCart } from 'lucide-vue-next'
</script>
<style lang="scss" scoped></style>
