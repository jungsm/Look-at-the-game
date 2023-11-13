<template>
  <section class="content">
    <div class="content-textbox">
       {{ ShootingData[$route.params.id].title}}
    </div>
    <div class="content-img">

    </div>
  </section>
</template>

<script>
export default {
  name: "Detail",
  props: {
    ShootingData : Array,
  
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