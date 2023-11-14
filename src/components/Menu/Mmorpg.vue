<template>
  <div class="container">
    <ul class="menu">
    <router-link to="/">
      <li class="">MMORPG</li>
    </router-link>
    <router-link to="/aos">
      <li>AOS</li>
      </router-link>
      <router-link to="/fps">
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
    <div class="content" v-for="i in  MmorpgData" :key="i.id">
      <router-link  :to="'/detail/'+ i.id">
      <div class="content-img"> <img :src="i.image" alt=""></div>
   <p>{{i.title}}</p>
  </router-link>
      <p>플랫폼: {{ MmorpgData[i.id].platform}}</p>
    </div>
  </div>
</template>
<script>
import './Css.css'
export default {
  name : 'Content',
  props : {
    MmorpgData : Array,


  }
}
</script>


<style scoped>
 .menu a:nth-child(1) {
  
  color: #df0000;
}
.menu a:nth-child(1)::after{
  width: 14rem;
  border-bottom: 4px solid red;
  content: "";
  display: block;
  border-bottom: 3px solid red;
  position: absolute;
  bottom: -50%;
  left: 0rem;
  right: 0;
}

</style>