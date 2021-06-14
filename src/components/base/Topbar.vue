<template>
  <nav class="custom-nav" style="padding: 0 3rem">
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
          <li class="dropdown">
            <img src="@/assets/avatar-img.png" class="user-avatar pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" alt="" />
            <ul class="dropdown-menu p-0 border-0" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item profile-dropdown user-details py-2" href="#">
                  <div class="d-flex w-100 justify-content-between">
                    <div class="d-flex align-items-start">
                      <img src="@/assets/avatar-img.png" class="user-avatar pointer" width="60" id="dropdownMenuButton1"  data-bs-toggle="dropdown" aria-expanded="false" alt="" />
                      <div class="ms-3">
                        <h4 class="name mb-0">Lawrence Powers</h4>
                        <p class="desc">My page</p>
                      </div>
                    </div>
                    <img src="@/assets/img/barcode.png" width="30" height="30" />
                  </div>
                </a>
              </li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
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
  .dropdown-menu {
    min-width: 300px;
    li {
      margin-right: 0 !important;
    }
    .user-details {
      background: #f8fbfc;
      display: flex;
      justify-content: space-between;
      border: 1px solid #bcdee8;
      .name {
        font-size: 16px;
      }
      .desc {
        font-size: 13px;
        color: #373a3e;
        font-weight: 600;
      }
    }
  }
}
</style>