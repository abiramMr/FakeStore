<template>
  <section class="h-[calc(100svh_-_8svh)] px-3 w-[4svw] bg-black_100">
    <ul class="size-full flex flex-col gap-3 items-center justify-end">
      <li>
        <button><LogOut color="#ffd500" :size="30" /></button>
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { LogOut } from 'lucide-vue-next'
</script>
<style lang="scss" scoped></style>
