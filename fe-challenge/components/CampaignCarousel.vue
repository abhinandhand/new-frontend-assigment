<template>
<div class="carousel__container">
    <div class="carousel__blur" :style="{backgroundImage:'url('+carousel[0]+')'}"></div>
    <figure class="carousel__figure">
        <img class="carousel__image" :src="carousel[0]" alt="">
        <CampaignInfluncer :influencer="influencer" />
    </figure>
</div>

</template>

<script>
export default {
  props: {
    carousel: {
      type: Array,
      default: [],
    },
    influencer: Object,
  },
};
</script>

<style lang="scss">
.carousel {
  &__container {
    height: 23rem;
    position: relative;
    overflow:hidden;
  }

  &__blur {
    height: 100%;
    width: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__figure {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  &__image {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>