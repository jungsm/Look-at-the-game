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
  <input v-model="searchQuery" @input="performSearch" type="text" placeholder="검색어를 입력하세요">
</template>

<script>
export default {

}
</script>

<style>

</style>