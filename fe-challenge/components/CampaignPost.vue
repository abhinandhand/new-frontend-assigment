<template>
  <div class="post__item">
    <CampaignCarousel :carousel="post.images" :influencer="influencerProfile"/>
    <div class="post__date">
      Posted on <DisplayDate :postingDate="post.postingDate"/>
    </div>

    <div class="post__stats-box">
      <CampaignStat class="post__stats-items" :statLabel="'Impressions'" :statValue="post.stats.impression"/>
      <CampaignStat class="post__stats-items" :statLabel="'Reach'" :statValue="post.stats.reach"/>
      <CampaignStat class="post__stats-items" :statLabel="'Engagement'" :statValue="post.stats.engagement"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CampaignPost",
  props: {
    post: Object,
  },

  computed: {
    influencerProfile() {
      return {
        handle: this.post.handle,
        img: this.post.influencerImage,
        name: this.post.influencerName,
      };
    },
  },
};
</script>

<style lang="scss">
.post {
  &__item {
    padding: 1rem 0.8rem;
    height: 30rem;
    position: relative;
  }

  &__date {
    text-align: center;
    padding: 1rem 0rem;
  }

  &__stats-box {
    display: flex;
    justify-content: center;
  }

  &__stats-items {
    margin: 0 0.2rem;
    flex: 1;
  }
}
</style>