<template>
  <section class="content">
    <div class="content-textbox">
     
    <div class="titlebox">
      <span class="title">
      {{ AosData[$route.params.id].title}}
      </span>
    </div>
    <div class="textbox">
      <ul class="text-left">
        <li>플랫폼</li>
        <li>장르</li>
        <li>제작사</li>
        <li>출시연도</li>
        <li>게임소개</li>
      </ul>
      <ul class="text-right">
        <li>{{ AosData[$route.params.id].platform}}</li>
        <li>{{ AosData[$route.params.id].tag}}</li>
        <li>{{ AosData[$route.params.id].producer}}</li>
        <li>{{ AosData[$route.params.id].date}}</li>
      </ul>
    </div>
    <span class="introduction">{{ AosData[$route.params.id].content}}</span>
    </div>
    <div class="content-img">
      <img :src="AosData[$route.params.id].image" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "Detail",
  props: {
   AosData: Array,
  
  },
  }

</script>

<style scoped>
.content{
  display: flex;
    width: 100%;
  height: 1080px;
    margin-top: 30px;
}
.content-textbox{
  margin-top: 80px;
    width: 50%;
}
.titlebox{
  width: 100%;
  font-size: 32px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgb(248, 113, 113);
  
}
.textbox{
  line-height: 4.0;
  display: flex;
  font-size: 16px;
}
.text-left{
  width: 17%;
  
}
.text-right{
  width: 85%;
}
.text-right{
  font-weight: 200;
}
.content-img{
    padding-left:3rem;
    width: 40%;
    height: 550px;
}
.content-img img{
  border-radius: 6px;
}
.introduction{
  font-weight: 200;
  line-height: 2.0;
}
</style>