<template>
  <div class="Navbar">
    <div class="Navbar-Brand">
      <router-link to="/"><span class="Navbar-name">겜겜봐</span></router-link>
    </div>
  </div>
</template>

<style>
.Navbar {
  
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgb(189, 189, 189);
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  padding: 0 700px;
}

.Navbar-Brand {
  width: 100%;
}

.Navbar-name {
  font-size: 24px;
  /* Remove margin-left to keep the text centered */
}

@media (max-width: 1480px) {
  .Navbar {
      padding: 0 300px;
  }
}
</style>
