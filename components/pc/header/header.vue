<template>
  <header
    class="flex items-center justify-between h-[60px] bg-bg2"
  >
    <div class="wrap flex items-center justify-between">
      <div class="w-[100px] h-[50px] bg-red text-tx5 centerXY">
        span-admin
      </div>
      <el-select v-model="locale">
        <el-option label="cn" value="cn" />
        <el-option label="en" value="en" />
      </el-select>
    </div>
    <!-- <div>this is pc id: {{ store.appId }}</div> -->
  </header>
</template>

<script setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped></style>
