<template>
  <div class="Navbar">
    <div class="Navbar-Brand">
      <span class="Navbar-name">겜겜봐</span>
    </div>
  </div>
</template>

<style>
.Navbar {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgb(189, 189, 189);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
}

.Navbar-name {
  font-size: 24px;
}

@media (min-width: 768px) {
  .Navbar {
    justify-content: center;
    padding: 0 300px;
  }
}
</style>
