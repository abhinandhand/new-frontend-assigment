<template>
    <div class="inf__profile">
        <div class="inf__profile-imgbox">
            <img class="inf__profile-img" :src="influencer.img" alt="">
        </div>
        <div class="inf__profile-handlebox">
            <div class="inf__handle-name">{{influencer.name}}</div>
            <div class="inf__handle-id">{{influencer.handle}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    influencer: Object,
  },
};
</script>

<style lang="scss">
.inf {
  &__profile {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0rem 0rem 0.7rem 0.5rem;

    &-imgbox {
      display: inline-block;
    }

    &-handlebox {
      display: inline-block;
    }

    &-img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50px;
      border: 2px solid;
    }
  }

  &__handle-name {
    font-weight: 700;
  }

  &__handle-id {
    color: #cccaca;
    text-align: left;
  }
}
</style>