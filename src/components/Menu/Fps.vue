<template>
  <div class="container">
    <ul class="menu">
    <router-link to="/mmorpg">
      <li class="ll">MMORPG</li>
    </router-link>
    <router-link to="/aos">
      <li>AOS</li>
      </router-link>
      <router-link to="/">
      <li>FPS</li>
      </router-link>
      <router-link to="/rhythm">
      <li>리듬게임</li>
      </router-link>
      <router-link to="/shooting">
         <li>슈팅게임</li>
        </router-link>
      <router-link to="/racing">
      <li>레이싱</li>
      </router-link>
    </ul>
  </div>
  <div class="content-container">
    <div class="content" v-for="i in FpsData" :key="i.id">
      <router-link  :to="'/detail2/'+ i.id">
      <div class="content-img"> <img :src="i.image" alt=""></div>
   <p>{{i.title}}</p>
  </router-link>
  <p>플랫폼: {{ FpsData[i.id].platform}}</p>
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


<style scoped>
 .menu a:nth-child(3) {
  
  color: #df0000;
}
.menu a:nth-child(3)::after{
  width: 10rem;
  border-bottom: 4px solid red;
  content: "";
  display: block;
  border-bottom: 3px solid red;
  position: absolute;
  bottom: -50%;
  left: 26rem;
  right: 0;
}

</style>
