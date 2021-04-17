<template>
  <div class="container">
    <h1>Welcome</h1>
  </div>
</template>

<script>
export default {

  async fetch({ store, error}){
    try {
      await store.dispatch('campaigns/fetchCampaigns');
    }catch(err){

    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
