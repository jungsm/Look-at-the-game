<template>
  <section class="content">
    <div class="content-textbox">
       {{ AosData[$route.params.id].title}}
    </div>
    <div class="content-img">

    </div>
  </section>
</template>

<script>
export default {
  name: "Detail",
  props: {
    AosData : Array,
  
  },
  }

</script>

<style scoped>
.content{
    width: 100%;
    height: 1000px;
}
.content-textbox{
    width: 50%;
}
.content-img{
    width: 50%;
}
</style>