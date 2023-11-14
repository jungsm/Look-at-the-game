<template>
    <div>
      <Menu />
      <div class="content-container">
        <div class="content" v-for="(item, index) in displayedData.slice(0,12)" :key="index">
            <div class="content-img">
              <img :src="item.image" alt="">
            </div>
            <p>{{ item.title }}</p>
          <p>플랫폼: {{item.platform}}</p>
        </div>
      </div>
      <div class="pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">&lt;</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">&gt;</button>
      </div>
    </div>
  </template>
  
  <script>
  import Menu from './Menu.vue'
  
  export default {
    props: {
      FpsData: Array,
      MmorpgData: Array,
      AosData: Array,
      RacingData: Array,
      RhythmData: Array,
      ShootingData: Array,
    },
    components: {
      Menu,
    },
    data() {
      return {
        itemsPerPage: 16,
        currentPage: 1,
      };
    },
    computed: {
      allData() {
        return [
          ...this.FpsData,
          ...this.MmorpgData,
          ...this.AosData,
          ...this.RacingData,
          ...this.RhythmData,
          ...this.ShootingData,
        ];
      },
      totalPages() {
        return Math.ceil(this.allData.length / this.itemsPerPage);
      },
      displayedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.allData.slice(startIndex, endIndex);
      },
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
    },
  };
  </script>
  
  <style scoped>
.pagination{
    display: flex;
    justify-content : center;
    padding-bottom: 5rem;
}
.pagination span{
    padding: 1rem;
}
.pagination button{
    width: 2.5rem;
    background: white;
    border: 1px solid rgb(202, 200, 200);
    border-radius: 50%;
    box-shadow: none;
}
.pagination button:hover{
    background: rgb(235, 234, 234);
}
  </style>
  