<template>
  <aside class="aside">
    <ul>
      <li class="active">Description</li>
      <li>
        Points
        <!-- <div>
          <p><span>1</span> Abbesses Metro Station</p>
          <p><span>2</span> Pigalle and the Moulin R...</p>
          <p>Create new point</p>
        </div> -->
      </li>
      <li>Media</li>
      <li>Settings</li>
    </ul>
  </aside>
</template>
<style lang="scss" scoped>
.aside {
  left: 0;
  width: 25%;
  background: #f7f8f9;
  height: 100%;
  ul {
    list-style-type: none;
    font-weight: 300;
    font-size: 20px;
    color: #373a3e;
    font-family: Avenir-Heavy;
    padding-left: 0;
    li {
      padding: 20px 3rem;
    }
    li.active {
      background-color: #ffffff;
      box-shadow: 0 0 2px 0 rgba(132, 137, 141, 0.2);
      border-bottom: 2px solid #2daee1;
    }
  }
}
</style>