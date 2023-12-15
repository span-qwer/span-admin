<template>
  <div
    class="min-h-screen min-w-screen bg-base-bg1 text-base-tx1 text-base-sz2"
  >
    <LazyPcHeader />
    <main class="px-[30px] pt-[--header-height]">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>
