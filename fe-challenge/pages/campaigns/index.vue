<template>
    <div class="campaign__page">
      <div class="campaign__container" v-if="campaigns.campaignList.length">
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
      this.$router.push({path: '/error'
     })
    }
  },

  computed: {
    ...mapState(['campaigns'])
  },

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
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, minmax(75px, auto));
        padding: 2rem 1.8rem;
        grid-row-gap: 2.2rem;
        grid-column-gap: 1.8rem;

        @include respond(sm-desktop){
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, minmax(75px, auto));
        }

        @include respond(tab-land){
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, minmax(75px, auto));
        }

        @include respond(tab-port){
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, minmax(75px, auto));
        }

        @include respond(mobile){
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, minmax(75px, auto));
        }

        &-item{
            //background-color: #7b847b14;
        }
    }
}
</style>
