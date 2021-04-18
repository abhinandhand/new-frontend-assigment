<template>
  <div  class="error__box">
    <div class="error__msg">
        <div class="__error-img">
            <img src="https://raw.githubusercontent.com/abhinandhand/SnappetChallenge/a1d2eaf0331d16198e8df1e850db263f3b63c76b/src/assets/svg/error.svg" alt="">
        </div>
        <h1>Network Error Occured</h1>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.error {
    &__box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
     }
     &__msg{
         color: $color-secondary-dark;
         text-align: center;
     }
    
     &__img{
         width: 20rem;
     }
}
</style>