<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'g-main'
}
</script>

<style scoped>
.main{
  flex-grow: 1;
}
</style>
