<template>
  <span>
      {{postingDate | moment("MMMM Do YYYY")}}
  </span>
</template>

<script>
export default {
  props: {
    postingDate: String,
  },
};
</script>

<style>
</style>