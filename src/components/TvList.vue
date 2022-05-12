<template>
  <div class="row justify-content-center pt-">
    <!-- Sezione Serie Tv  -->
    <div  class="col-12 text-white text-center mt-4 pt-5">
     <h2 class="fw-bold display-4">SERIE TV</h2>
    </div>
    <!-- ciclo all'interno dell'array delle serie tv  -->
    <div
     class="col-lg-2 col-md-3 col-sm-4 text-white text-center ms_video-card mx-1 my-3"
     v-for="(element, index) in tvList"
     :key="index"
     @mouseover="ActorList(element.id) , GenreList(element.genre_ids)" 
    >
     <!-- stampo immagine serie tv , semancante stampo il titolo  -->
     <div class="ms_cover-image">
      <h3 v-if="element.poster_path === null" class="altFoto">{{ element.name }}</h3>
      <img v-else :src="imgBaseUrl + element.poster_path" :alt="element.name" />
     </div>
     <!--nella lista mostro le varie infomazioni riguardanti il film che compaiono solo all'hoover della card  -->
     <ul class="p-2">
      <li><span class="fw-bold">Titolo:</span> {{ element.name }}</li>
      <li>
       <span class="fw-bold">Titolo originale:</span>
       {{ element.original_name }}
      </li>
      <li >
         <span class="fw-bold">Genere:</span>
         <div v-for="(genre, index) in ListGenre" :key="index">
           <span class="text-warning" v-if="genre.id == element.genre_ids[0]"> {{genre.name}}</span>
           <span class="text-warning" v-if="genre.id == element.genre_ids[1]"> {{genre.name}}</span>
           <span class="text-warning" v-if="genre.id == element.genre_ids[2]"> {{genre.name}}</span>
           <span class="text-warning" v-if="genre.id == element.genre_ids[3]"> {{genre.name}}</span>
           <span class="text-warning" v-if="genre.id == element.genre_ids[4]"> {{genre.name}}</span>
         </div>
      </li>
      <!-- Mostro una bandiera in base alla lingua del film insieme alla sigla della lingua, se presente nella libreria esterna installata tramite terminale la mostro 
      implemento di regole di eccezione dato che la sigla della lingua non combacia con la sigla nella libreria  -->
      <li v-if="element.original_language === 'en'">
       <span class="fw-bold">Lingua:</span>
       <country-flag country="gb" />
       {{ element.original_language.toUpperCase() }}
      </li>
      <li v-else-if="element.original_language === 'ja'">
       <span class="fw-bold">Lingua:</span>
       <country-flag country="jp" />
       {{ element.original_language.toUpperCase() }}
      </li>
      <li v-else-if="element.original_language === element.original_language">
       <span class="fw-bold">Lingua:</span>
       <country-flag :country="element.original_language" />
       {{ element.original_language.toUpperCase() }}
      </li>
      <li v-if="ListActorTv.length>0">
         <span class="fw-bold">Attori:</span>
         <div v-for="(actor, index) in ListActorTv" :key="index">
           <span class="text-success">{{ListActorTv[index].name}}</span>
         </div>
         </li>
      <li><StarComponent :vote="element.vote_average" /></li>
      <li><span class="fw-bold">Overview:</span> {{ element.overview }}</li>
     </ul>
    </div>
  </div>
</template>


<script>
/* importo le stelle da usare per mostrare la valutazione gia formattata da 0 a 5  */
import StarComponent from "@/components/StarComponent.vue";
import axios from 'axios'
export default {
 name: "TvComponent",
 components: {
  StarComponent,
 },
 props: ["tvList"],
 data: function () {
  return {
   /* percorso per stampare le immagini in pagina  */
   imgBaseUrl: "https://image.tmdb.org/t/p/w342/",
  ListActorTv:[],
  ListGenre:[],
  };
 },
 methods:{
   ActorList(movie){
     axios.get(`https://api.themoviedb.org/3/tv/${movie}/credits?api_key=f2f36017261317fa70370c98c6837f2a&language=en-US`)
     .then((response)=>{
       this.ListActorTv=response.data.cast.slice(0,5)
     })
   },
   GenreList(element){
     axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=f2f36017261317fa70370c98c6837f2a&language=en-US")
     .then((response)=>{
      if(element.genre_ids == response.data.id ){
        this.ListGenre = response.data.genres
        }

     })
   }
 }
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/card.scss";
</style>