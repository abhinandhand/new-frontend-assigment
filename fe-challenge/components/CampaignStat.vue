<template>
  <div class="stat__box">
      <div>
          {{ statValue}}<span v-show="statLabel === 'Engagement'">%</span>
      </div>
      <div>
          {{statLabel}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    statLabel: String,
    statValue: {
      type: Number,
      default: "0",
    },
  },
};
</script>

<style lang="scss">
.stat {
  &__box {
    background-color: #2b2c30;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 5px;
  }
}
</style>