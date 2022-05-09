<template>
 <header class="">
  <section class="container-fluid m-0">
   <div class="row">
    <div id="ms_main-logo" class="col-10">
     <img
      src="https://fontmeme.com/permalink/220509/c48f1152bd1b17d52da6c2552ce9ee40.png"
      alt="Piniflix-logo"
     />
    </div>
    <div
     id="ms_searchbar"
     class="col-2 gap-1 d-flex justify-content-end align-items-center"
    >
     <input
      class="p-1"
      type="text"
      v-model="searchKey"
      @keyup.enter="$emit('getsearchkey', searchKey)"
     />
     <button class="btn btn-light" @click="getMovies()">click</button>
    </div>

    <div v-for="(element, index) in movieArray" :key="index">
     <ol class="text-light pt-5">
      <li>{{ element.title }}</li>
      <li>{{ element.original_title }}</li>
      <li>{{ element.original_language }}</li>
      <li>{{ element.vote_average }}</li>
     </ol>
    </div>
   </div>
  </section>
 </header>
</template>

<script>
import axios from "axios";
export default {
 name: "HeaderComponent",
 data: function () {
  return {
   searchKey: "",
   movieArray: [],
  };
 },
 methods: {
  getMovies() {
   axios
    .get(
     "https://api.themoviedb.org/3/search/movie?api_key=f2f36017261317fa70370c98c6837f2a&query=" +
      this.searchKey
    )
    .then((answer) => {
     console.log(answer.data.results);
     this.movieArray = [...answer.data.results];
    });
  },
 },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";
header {
 background-color: $headerBgColor;
}
</style>