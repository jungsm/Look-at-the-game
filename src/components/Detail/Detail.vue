<template>
  <section class="content">
    <div class="content-textbox">
     
    <div class="titlebox">
      <span class="title">
      {{ MmorpgData[$route.params.id].title}}
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
      <ul>
        <li>{{ MmorpgData[$route.params.id].platform}}</li>
        <li>{{ MmorpgData[$route.params.id].tag}}</li>
        <li>{{ MmorpgData[$route.params.id].producer}}</li>
        <li>{{ MmorpgData[$route.params.id].date}}</li>
        <li>{{ MmorpgData[$route.params.id].content}}</li>
      </ul>
    </div>
       
    </div>
    <div class="content-img">
      <img :src="MmorpgData[$route.params.id].image" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "Detail",
  props: {
   MmorpgData: Array,
  
  },
  }

</script>

<style scoped>
.content{
  display: flex;
    width: 100%;
    height: 600px;
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
  border-bottom: 1px solid rgb(221, 220, 220);
  
}
.textbox{
  line-height: 3.0;
  display: flex;
  font-size: 16px;
}
.text-left{
  width: 25%;
}
.text-right{
  width: 85%;

}
.content-img{
    padding-left:3rem;
    width: 40%;
    height: 550px;
}
.content-img img{
  border-radius: 6px;
}
</style>