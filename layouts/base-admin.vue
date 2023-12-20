<template>
  <div class="base-admin">
    <AdminHeader />
    <main class="pt-[--header-height] flex min-h-screen">
      <AdminMenu />
      <div class="relative flex-1 p-[20px]">
        <BaseIndicator />
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup></script>
