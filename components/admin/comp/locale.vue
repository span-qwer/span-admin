<template>
  <div class="w-[100px]">
    <el-select v-model="locale" class="!text-base-sz2">
      <el-option label="简体中文" value="cn" class="!text-base-sz2" />
      <el-option label="English" value="en" class="!text-base-sz2" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocales()
</script>

<style scoped></style>
