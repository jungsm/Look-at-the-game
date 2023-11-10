<template>
  <div class="container">
    <ul class="menu">
      <li>MMORPG</li>
      <li>AOS</li>
      <li>FPS</li>
      <li>리듬게임</li>
      <li>슈팅게임</li>
      <li>레이싱</li>
    </ul>
  </div>
</template>

<style>
.container {
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 100px auto; /* 가운데 정렬을 위한 마진 설정 */
  border-bottom: 1px solid rgb(129, 129, 129);
    padding-bottom: 20px;
}

.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  flex-wrap: wrap; /* 화면이 작아질 때 아이템을 다음 줄로 이동 */
}

.menu li {
    
  font-size: 24px;
  margin: 10px; /* 아이템 간격 설정 */
  text-align: center;
  flex: 1; /* 아이템이 같은 너비로 자동 조절 */
}
</style>
