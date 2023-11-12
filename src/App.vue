<template>
 <div class="wrap">
  <Navbar />
  <section class="main">
    <Menu/>
    <router-view :FpsData="FpsData" :MmorpgData="MmorpgData" :AosData="AosData" :RacingData="RacingData" :RhythmData="RhythmData" :ShootingData="ShootingData">
      </router-view> 
  </section>
  <Footer />
 </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Fps from './assets/Fps.js'
import Mmorpg from './assets/Mmorpg.js'
import Aos from './assets/Aos.js'
import Racing from './assets/Racing.js'
import Rhythm from './assets/Rhythm.js'
import Shooting from './assets/Shooting.js'
import './reset.css'
export default {
  name: 'App',
    data() {
    return {
        FpsData: Fps,
      MmorpgData: Mmorpg,
      AosData: Aos,
      RacingData: Racing,
      RhythmData: Rhythm,
      ShootingData: Shooting,
    };
  },
  components: {
    Navbar : Navbar,
    Footer : Footer,
  }
}
</script>

<style>
.wrap {
  font-family: 'Noto Sans KR', sans-serif;
 width: 100%;
 height: 1080px;
}
.main{
 max-width: 1200px; 
 margin: 0 auto;
}

</style>
