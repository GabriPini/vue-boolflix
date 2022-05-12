<template>
  <div class="row justify-content-center pt-5" >
     <!-- sezione Film -->
    <div  class="col-12 text-white text-center mt-4 pt-5">
     <h2 class="fw-bold display-4">FILM</h2>
    </div>
    <!-- Ciclo all interno della lista dei film (al quale ho aggiunto una A alla :key per evitare l'errore della key duplicata)-->
    <div
     class="col-lg-2 col-md-3 col-sm-4 text-white text-center ms_video-card mx-1 my-3"
     v-for="(element, index) in movieList"
     :key="'A' + index"
     @mouseover="ActorList(element.id) , GenreList(element.genre_ids)"
    >
     <!-- stampo l'immagine del film in questione se presente , altrimenti mostro solo il titolo del film  -->
     <div class="ms_cover-image" >
      <h3 v-if="element.poster_path == null" class="altFoto">{{ element.title }}</h3>
      <img
       v-else
       :src="imgBaseUrl + element.poster_path"
       :alt="element.title"
      />
     </div>
     <!--nella lista mostro le varie infomazioni riguardanti il film che compaiono solo all'hoover della card  -->
     <ul class="p-2">
      <li><span class="fw-bold">Titolo:</span> {{ element.title }}</li>
      <li>
       <span class="fw-bold">Titolo originale:</span>
       {{ element.original_title }}
      </li>
        <li>
         <span class="fw-bold">Genere:</span>
         <div v-for="(genre, index) in ListGenre" :key="'C'+ index">
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
      <li v-if="ListActor.length>0">
         <span class="fw-bold">Attori:</span>
         <div v-for="(actor, index) in ListActor" :key="index">
           <span class="text-success">{{ListActor[index].name}}</span>
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
 name: "MovieComponent",
 components: {
  StarComponent,
 },
 props: ["movieList"],
 data: function () {
  return {
    ListActor:[],
    ListGenre:[],
   /* percorso per stampare le immagini in pagina  */
   imgBaseUrl: "https://image.tmdb.org/t/p/w342/",
  };
 },
 methods:{
   ActorList(movie){
     axios.get(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=f2f36017261317fa70370c98c6837f2a&language=en-US`)
     .then((response)=>{
       this.ListActor=response.data.cast.slice(0,5)
     })
   },
   GenreList(element){
     axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f2f36017261317fa70370c98c6837f2a&language=en-US")
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