<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">English</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">French</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Deutch</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Spanish</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .nav-item {
    .nav-link {
      color: #84898D;
      font-weight: 500;
    }
    .nav-link.active {
      color: #2DAEE1;
      border-bottom: 2px solid #2DAEE1;
    }
  }
</style>