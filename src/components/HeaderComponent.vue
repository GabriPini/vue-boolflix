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
     <button class="btn fw-bold btn-light" @click="getVideo()">Search</button>
    </div>

    <div
     class="col-2 border ms_movie"
     v-for="(element, index) in movieList"
     :key="index"
    >
     <ol>
      <li>{{ element.title }}</li>
      <li>{{ element.original_title }}</li>
      <li v-if="element.original_language === 'en'">
       <country-flag country="gb" />
       {{ element.original_language.toUpperCase() }}
      </li>
       <li v-else-if="element.original_language === 'ja'">
       <country-flag country="jp" />
       {{ element.original_language.toUpperCase() }}
      </li>
      <li v-else-if="element.original_language === element.original_language">
       <country-flag :country="element.original_language" />
       {{ element.original_language.toUpperCase() }}
      </li>
      <li>{{ element.vote_average }}</li>
      <!-- <li>{{ element.original_language }}</li> -->
     </ol>
    </div>

    <div
     class="col-2 border ms_tvserie"
     v-for="(element, index) in tvList"
     :key="index"
    >
     <ol>
      <li>{{ element.name }}</li>
      <li>{{ element.original_name }}</li>
      <li v-if="element.original_language === 'en'">
       <country-flag country="gb" />
       {{ element.original_language.toUpperCase() }}
      </li>
         <li v-else-if="element.original_language === 'ja'">
       <country-flag country="jp" />
       {{ element.original_language.toUpperCase() }}
      </li>
      <li v-else-if="element.original_language === element.original_language">
       <country-flag :country="element.original_language" />
       {{ element.original_language.toUpperCase() }}
      </li>
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
   movieList: [],
   tvList: [],
  };
 },
 methods: {
  getVideo() {
   if (this.searchKey.length > 0) {
    axios
     .get(
      "https://api.themoviedb.org/3/search/movie?api_key=f2f36017261317fa70370c98c6837f2a&language=it&query=" +
       this.searchKey
     )

     .then((answer) => {
      // console.log(answer.data.results)
      this.movieList = [...answer.data.results];
     });
    axios
     .get(
      "https://api.themoviedb.org/3/search/tv?api_key=f2f36017261317fa70370c98c6837f2a&language=it_IT&query=" +
       this.searchKey
     )
     .then((answer) => {
      console.log(answer.data.results);
      this.tvList = [...answer.data.results];
     });
   }
  },
 },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";
header {
 background-color: $headerBgColor;
 img {
  height: 100px;
 }
 .ms_tvserie,
 .ms_movie {
   color: white;
  img {
   height: 10px;
  }
 }
}
</style>