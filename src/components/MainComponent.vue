<template>
 <main>
  <!-- Container le card dei vari film e serie tv  -->
  <section class="container-fluid">
   <div class="row justify-content-center">
    <!-- sezione Film -->
    <div v-if="movieList.length > 0" class="col-12 text-white">
     <h2>FILM:</h2>
    </div>
    <!-- Ciclo all interno della lista dei film (al quale ho aggiunto una A alla :key per evitare l'errore della key duplicata)-->
    <div
     class="col-2 text-white ms_video-card mx-1 my-3"
     v-for="(element, index) in movieList"
     :key="'A' + index"
    >
     <!-- stampo l'immagine del film in questione se presente , altrimenti mostro solo il titolo del film  -->
     <div class="ms_cover-image">
      <h3 v-if="element.poster_path == null">{{ element.title }}</h3>
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
      <li><StarComponent :vote="element.vote_average" /></li>
      <li><span class="fw-bold">Overview:</span> {{ element.overview }}</li>
     </ul>
    </div>

    <!-- Sezione Serie Tv  -->
    <div v-if="tvList.length > 0" class="col-12 text-white">
     <h2>SERIE TV :</h2>
    </div>
    <!-- ciclo all'interno dell'array delle serie tv  -->
    <div
     class="col-2 text-white ms_video-card mx-1 my-3"
     v-for="(element, index) in tvList"
     :key="index"
    >
     <!-- stampo immagine serie tv , semancante stampo il titolo  -->
     <div class="ms_cover-image">
      <h3 v-if="element.poster_path === null">{{ element.name }}</h3>
      <img v-else :src="imgBaseUrl + element.poster_path" :alt="element.name" />
     </div>
     <!--nella lista mostro le varie infomazioni riguardanti il film che compaiono solo all'hoover della card  -->
     <ul class="p-2">
      <li><span class="fw-bold">Titolo:</span> {{ element.name }}</li>
      <li>
       <span class="fw-bold">Titolo originale:</span>
       {{ element.original_name }}
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
      <li><StarComponent :vote="element.vote_average" /></li>
      <li><span class="fw-bold">Overview:</span> {{ element.overview }}</li>
     </ul>
    </div>
   </div>
  </section>
 </main>
</template>

<script>
/* importo le stelle da usare per mostrare la valutazione gia formattata da 0 a 5  */
import StarComponent from "@/components/StarComponent.vue";
export default {
 name: "MainComponent",
 components: {
  StarComponent,
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

ul {
 list-style: none;
}
main {
 min-height: calc(100vh - 75px);
 background-color: $mainBgColor;
 .ms_video-card {
  background-color: $headerBgColor;
  overflow: hidden;
  height: 360px;
  .ms_cover-image {
   height: 100%;
   overflow: hidden;
   img {
    height: 100%;
    width: 100%;
    object-fit: contain;
   }
  }
  ul {
   display: none;

   li {
    font-size: 0.8rem;
   }
  }
  &:hover ul {
   display: block;
   height: 100%;
   overflow-y: scroll;
   overflow-x: hidden;
  }
  &:hover .ms_cover-image {
   display: none;
  }
 }
}
</style>