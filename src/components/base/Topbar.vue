<template>
  <nav class="custom-nav">
    <div class="container">
      <div class="row row-cols-3 g-2 w-100 align-items-center">
        <div class="col">
          <img src="@/assets/geo-logo.png" width="226px" alt="" />
        </div>
        <div class="col">
          <ul class="nav-menu__center">
            <li>Discover</li>
            <li class="active">Create</li>
            <li>
              <button>Download</button>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="nav-menu__icons">
            <li>
              <base-icon name="bookmark" />
            </li>
            <li>
              <base-icon name="bell" />
            </li>
            <li>
              <img src="@/assets/avatar-img.png" class="user-avatar" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.custom-nav {
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(211, 220, 224, 0.2);
  .nav-menu__center {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    justify-content: center;
    li:not(:last-child) {
      margin-right: 43px;
    }
    li {
      font-family: Avenir-Medium;
      font-size: 17px;
      line-height: 23px;
      color: #5b5c5e;
      opacity: 0.9;
      font-weight: 500;
    }
    li.active {
      color: #2daee1;
    }
    li {
      button {
        height: 36px;
        width: 108px;
        border-radius: 24px;
        background-color: #bdbfc2;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 20px;
        color: #fff;
        border: 0;
        &:focus {
          outline: 0;
        }
      }
    }
  }
  .nav-menu__icons {
    list-style: none;
    margin-bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li:not(:last-child) {
      margin-right: 35px;
    }
    li {
      color: #7d888e;
      svg {
        height: 24px;
        width: 24px;
      }
      .user-avatar {
        height: 36px;
        width: 36px;
        border-radius: 50%;
      }
    }
  }
}
</style>