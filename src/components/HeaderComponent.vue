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
     <!-- input con funzione search implementata  -->
     <input
      class="p-1"
      type="text"
      v-model="searchKey"
      @keyup.enter="$emit('click', searchKey)"
     />
     <button class="btn fw-bold btn-light" @click="$emit('click', searchKey)">
      Search
     </button>
    </div>
   </div>
  </section>
 </header>
</template>

<script>
export default {
 name: "HeaderComponent",
 data: function () {
  return {
   searchKey: "",
   movieList: [],
   tvList: [],
  };
 },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";
header {
 background-color: $headerBgColor;
 img {
  height: 75px;
 }
}
</style>