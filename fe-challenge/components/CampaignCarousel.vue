<template>
<div class="carousel__container">
    <div class="carousel__blur" :style="{backgroundImage:'url('+carousel[imageIndex]+')'}"></div>
    <figure class="carousel__figure">
          <img class="carousel__image" :id="_uid+'_'+i" v-for="(image, i) in carousel" :key="i"   :class="i === imageIndex ? 'carousel__opaque':'carousel__non-opaque'" 
                 :src="image"  />
          <img class="carousel__image" v-show="carousel.length === 0" :id="_uid+'_default'"  
                 src="https://www.richardtmoore.co.uk/wp-content/uploads/2016/10/btx-placeholder-04.jpg"  />
          <!-- <div  class="carousel__deco--shine">
            <div></div>
          </div> -->
          <CampaignInfluncer :influencer="influencer" />
    </figure>
    <div class="chevron__svg-rightbox" :id="'right_'+_uid" v-show="(carousel.length > imageIndex+1)" @click="imageIndex++">
              <img class="chevron__svg-icon" src="/chevron-circle-right-solid.svg" alt="">
    </div>
    <div class="chevron__svg-leftbox" :id="'right_'+_uid" v-show="imageIndex >= 1" @click="imageIndex--">
              <img class="chevron__svg-icon" src="/chevron-circle-left-solid.svg" alt="">
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      imageIndex: 0,
    };
  },

  props: {
    carousel: {
      type: Array,
      default: [],
    },
    influencer: Object,
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__container {
    height: 23rem;
    position: relative;
    overflow: hidden;
  }

  &__blur {
    height: 100%;
    width: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.5s ease-in-out 0s;
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
    transition: opacity 0.5s ease-in-out 0s;
  }
  &__opaque {
    opacity: 1;
  }

  &__non-opaque {
    opacity: 0;
  }

  &__deco--shine {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background-image: linear-gradient(45deg,rgba(0,0,0,1) 0,rgba(255,255,255,.25) 65%,transparent 100%);
  }
}
#img10 {
  z-index: 2;
}

.chevron {
  &__svg-rightbox {
    position: absolute;
    z-index: 50;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    margin-right: 0.8rem;
    cursor: pointer;
  }

  &__svg-leftbox {
    position: absolute;
    z-index: 50;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    margin-left: 0.8rem;
    cursor: pointer;
  }

  &__svg-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  &__svg-inline--fa {
    fill: red;
  }
}
</style>