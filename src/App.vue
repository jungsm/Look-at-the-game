<template>
 <div class="wrap">
  <Navbar />
  <div class="main">
    <Menu/>
    <Content/>
    </div>
 </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'
import './reset.css'
export default {
  name: 'App',
  components: {
    Navbar : Navbar,
    Menu : Menu,
    Content : Content
  }
}
</script>

<style>
.wrap {
 width: 100%;
 height: 1080px;
}
.main{
 max-width: 1200px; 
 margin: 0 auto;
}
</style>
