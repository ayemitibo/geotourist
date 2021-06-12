<template>
  <aside class="aside">
    <ul>
      <li class="active">Description</li>
      <li>
        Points
        <div>
          <div class="d-flex align-items-center">
            <div class="number">1</div>
            <p>Abbesses Metro Station</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="number">2</div>
            <p>Pigalle and the Moulin R...</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="number"><base-icon name="plus" /></div>
            <p>Create new point</p>
          </div>
        </div>
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
    li div {
      font-size: 17px;
      opacity: 0.7;
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