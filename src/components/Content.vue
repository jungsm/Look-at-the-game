<template>
  <div class="content-container">
    <div class="content" v-for="i in 12" :key="i">
      <div class="content-img"></div>
      <p>장르</p>
      <p>플랫폼</p>
    </div>
  </div>
</template>

<style>
.content-container {
  display: flex;
  justify-content: space-around; /* 좌우로 정렬하고 간격을 일정하게 유지 */
  flex-wrap: wrap; /* 화면이 좁아지면 아이템을 다음 줄로 이동 */
}

.content {
  width: 250px;
  height: 300px;
  font-size: 16px;
  margin-bottom: 20px; /* 아이템 간의 간격을 조절 (원하는 만큼) */
}

.content-img {
  width: 100%;
  height: 200px;
  background: black;
}
</style>
