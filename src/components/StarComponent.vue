<template>
 <!-- STARS -->
 <div>
  <strong>Voto:</strong>
  <!-- icona della stella importata tramite font-awesome -->
  <font-awesome-icon
   v-for="star in starsAverageCalc"
   :key="star"
   icon="fa-solid fa-star ms-1"
  />
 </div>
 <!-- / STARS -->
</template>


<script>
export default {
 props: {
  vote: Number,
 },
 computed: {
  starsAverageCalc() {
   return Math.round(this.vote / 2); // funzione che divide il punteggio totale / 2 -> il punteggio così sarà sulla base di max 5 stelline
  },
 },
};
</script>



<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.fa-star {
 color: $starColor;
}
</style>