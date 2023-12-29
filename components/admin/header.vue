<template>
  <header
    class="h-[--header-height] bg-base-bg2 flex items-center justify-between px-[15px] fixed top-0 left-0 right-0 gap-[20px] z-10"
  >
    <div class="h-[--header-height] flex items-center gap-[100px] w-full">
      <AdminCompLogo />
      <div class="flex-x gap-[20px] justify-between w-full">
        <h3><BaseClock /></h3>
        <div class="flex-x gap-[20px]">
          <BaseSwitchDark />
          <AdminCompLocale />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
