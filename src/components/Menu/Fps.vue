<template>
  <div class="content-container">
    <div class="content" v-for="i in FpsData" :key="i.id">
      <div class="content-img"></div>
   <p>{{i.title}}</p>
      <p>플랫폼</p>
    </div>
  </div>
</template>

<script>
import './Css.css'
export default {
  name : 'Content',
  props : {
    FpsData : Array,


  }
}
</script>


<style>

</style>
