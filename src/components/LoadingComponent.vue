<template>
    <div  class="fingerprint-spinner">       
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <h2 class="p-5 text-white text-center">Cerca qualcosa da guardare</h2>
        
    </div>
</template>

<script>
export default {
name:'LoadingComponent'
}
</script>

<style>
.fingerprint-spinner, .fingerprint-spinner * {
      box-sizing: border-box;
    }

    .fingerprint-spinner {
      height: 400px;
      width: 100%;
      padding-top:300px ;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }

    .fingerprint-spinner .spinner-ring {
      position: absolute;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: #d3191f;
      animation: fingerprint-spinner-animation 1500ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
      margin: auto;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    .fingerprint-spinner .spinner-ring:nth-child(1) {
      height: calc(300px / 9 + 0 * 300px / 9);
      width: calc(300px / 9 + 0 * 300px / 9);
      animation-delay: calc(50ms * 1);
    }

    .fingerprint-spinner .spinner-ring:nth-child(2) {
      height: calc(300px / 9 + 1 * 300px / 9);
      width: calc(300px / 9 + 1 * 300px / 9);
      animation-delay: calc(50ms * 2);
    }

    .fingerprint-spinner .spinner-ring:nth-child(3) {
      height: calc(300px / 9 + 2 * 300px / 9);
      width: calc(300px / 9 + 2 * 300px / 9);
      animation-delay: calc(50ms * 3);
    }

    .fingerprint-spinner .spinner-ring:nth-child(4) {
      height: calc(300px / 9 + 3 * 300px / 9);
      width: calc(300px / 9 + 3 * 300px / 9);
      animation-delay: calc(50ms * 4);
    }

    .fingerprint-spinner .spinner-ring:nth-child(5) {
      height: calc(300px / 9 + 4 * 300px / 9);
      width: calc(300px / 9 + 4 * 300px / 9);
      animation-delay: calc(50ms * 5);
    }

    .fingerprint-spinner .spinner-ring:nth-child(6) {
      height: calc(300px / 9 + 5 * 300px / 9);
      width: calc(300px / 9 + 5 * 300px / 9);
      animation-delay: calc(50ms * 6);
    }

    .fingerprint-spinner .spinner-ring:nth-child(7) {
      height: calc(300px / 9 + 6 * 300px / 9);
      width: calc(300px / 9 + 6 * 300px / 9);
      animation-delay: calc(50ms * 7);
    }

    .fingerprint-spinner .spinner-ring:nth-child(8) {
      height: calc(300px / 9 + 7 * 300px / 9);
      width: calc(300px / 9 + 7 * 300px / 9);
      animation-delay: calc(50ms * 8);
    }

  

    @keyframes fingerprint-spinner-animation {
      100% {
        transform: rotate( 360deg );
      }
    }
</style>