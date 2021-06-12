<template>
  <div class="container-fluid px-0 d-flex">
    <aside class="aside">
      <ul>
        <li class="active">Description</li>
        <li class="fw-bold">
          Points
          <div>
            <div class="d-flex align-items-center">
              <div class="number">1</div>
              <p class="mb-0">Abbesses Metro Station</p>
            </div>
            <div class="d-flex align-items-center">
              <div class="number">2</div>
              <p class="mb-0">Pigalle and the Moulin R...</p>
            </div>
            <div class="d-flex align-items-center">
              <div class="number"><base-icon name="plus" /></div>
              <p class="mb-0">Create new point</p>
            </div>
          </div>
        </li>
        <li class="menu">
          <router-link to="/media" tag="span">Media</router-link>
        </li>
        <li class="menu">Settings</li>
      </ul>
    </aside>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.aside {
  left: 0;
  width: 25%;
  background: #f7f8f9;
  min-height: 100vh;
  ul {
    list-style-type: none;
    font-weight: 300;
    font-size: 20px;
    color: #373a3e;
    font-family: Avenir-Heavy;
    padding-left: 0;
    li {
      padding: 20px 3rem;
      font-weight: 500;
    }
    li.active {
      background-color: #ffffff;
      box-shadow: 0 0 2px 0 rgba(132, 137, 141, 0.2);
      border-bottom: 2px solid #2daee1;
      font-weight: 900;
    }
    li.menu {
      font-weight: 900;
      color: #373a3e;
      cursor: pointer;
    }
    li div {
      font-size: 17px;
      opacity: 0.7;
      font-weight: 500;
      white-space: pre;
      margin: 10px 0;
    }

    li div .number {
      height: 48px;
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.5px solid #d3dce0;
      background-color: #ffffff;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
}
</style>