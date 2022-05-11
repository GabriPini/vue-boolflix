<template>
 <div id="app">
  <HeaderComponent @click="getVideoList"/>
  <MainComponent :movieList="movieList" :tvList="tvList" />
 </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import Axios from "axios";
export default {
 name: "App",
 components: {
  HeaderComponent,
  MainComponent,
 },
 data: function () {
  return {
   movieList: [],
   tvList: [],
  };
 },
 methods: {
  getVideoList(key) {
   /* Chiamata API per i film */
   if (key.length > 0) {
    Axios.get(
     "https://api.themoviedb.org/3/search/movie?api_key=f2f36017261317fa70370c98c6837f2a&language=it&query=" +
      key
    )
     .then((answer) => {
      this.movieList = [...answer.data.results];
     })
     .catch((error) => {
      console.error();
      error;
      this.error = `Sorry There is a problem! ${error}`;
     });
    /* Chiamata API per le serie Tv */
    Axios.get(
     "https://api.themoviedb.org/3/search/tv?api_key=f2f36017261317fa70370c98c6837f2a&language=it&query=" +
      key
    )
     .then((answer) => {
      this.tvList = [...answer.data.results];
     })
     .catch((error) => {
      console.error();
      error;
      this.error = `Sorry There is a problem! ${error}`;
     });
   }
  },
 },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import "@/assets/scss/variables.scss";
</style>
