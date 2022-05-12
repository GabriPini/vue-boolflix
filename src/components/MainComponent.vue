<template>
 <main>
  <!-- Container le card dei vari film e serie tv  -->
  <section class="container-fluid">
    <LoadingComponent v-if="movieList.length == 0 && tvList.length == 0"/>
   <div >
    <MovieComponent v-if="movieList.length > 0" :movieList="movieList"/>
    <TvComponent v-if="tvList.length > 0" :tvList="tvList"/>
   </div>
  </section>
 </main>
</template>

<script>
import MovieComponent from "@/components/MovieList.vue";
import TvComponent from "@/components/TvList.vue";
import LoadingComponent from '@/components/LoadingComponent.vue';
export default {
 name: "MainComponent",
 components: {
  MovieComponent,
  TvComponent,
  LoadingComponent,
 },
 props: ["movieList", "tvList"],
 data: function () {
  return {
   /* percorso per stampare le immagini in pagina  */
   imgBaseUrl: "https://image.tmdb.org/t/p/w342/",
  };
 },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";


main {
 min-height: calc(100vh);
 background-color: $mainBgColor;
}


</style>