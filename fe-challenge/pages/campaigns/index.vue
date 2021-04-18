<template>
    <div class="campaign__page">
      <div class="campaign__container">
          <div class="campaign__container-item" v-for="campaign in campaigns.campaignList" :key="campaign.handle">
            <CampaignPost :post="campaign"/>
          </div>
      </div>
   </div>
</template>

<script>
import {mapState} from 'vuex';

export default {

  async fetch({ store, error}){
    try {
      await store.dispatch('campaigns/fetchCampaigns');
    }catch(err){

    }
  },

  computed: {
    ...mapState(['campaigns'])
  }
}
</script>

<style lang="scss">
.campaign {
    &__page {
      min-height: 100vh;
      background-color: $color-background;
      color: $color-white;
    }

    &__container {
        display: grid;
        // grid-template-columns: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, minmax(75px, auto));
        padding: 2rem 1.8rem;
        grid-row-gap: 2.2rem;
        grid-column-gap: 1.8rem;

        &-item{
            //background-color: #7b847b14;
        }
    }
}
</style>
