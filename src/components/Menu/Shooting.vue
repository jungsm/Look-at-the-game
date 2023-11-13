<template>
  <div class="container">
    <ul class="menu">
    <router-link to="/mmorpg">
      <li>MMORPG</li>
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
    <div class="content" v-for="i in  ShootingData" :key="i.id">
      <router-link  :to="'/detail4/'+ i.id">
      <div class="content-img"> <img :src="i.image" alt=""></div>
   <p>{{i.title}}</p>
  </router-link>
      <p>플랫폼</p>
    </div>
  </div>
</template>
<script>
import './Css.css'
export default {
  name : 'Content',
  props : {
    ShootingData : Array,


  }
}
</script>

<style scoped>
 .menu a:nth-child(5) {
  
  color: #df0000;
}
.menu a:nth-child(5)::after{
  width: 13rem;
  border-bottom: 4px solid red;
  content: "";
  display: block;
  border-bottom: 3px solid red;
  position: absolute;
  bottom: -50%;
  left: 50rem;
  right: 0;
}

</style>
