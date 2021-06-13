<template>
  <div class="row landing g-5">
    <div class="col-md-9">
      <div class="d-flex justify-content-between">
        <base-tabs />
        <button class="btn btn-add align-items-center">
          <base-icon name="plus" class="icon" />
          <span class="ms-2">Add ...</span>
        </button>
      </div>
    </div>
    <div class="col-md-9">
      <img src="../assets/img/cover.png" class="img-fluid w-100" alt="" />
      <div class="intro-text">
        <h4 class="title">A walking trail of Montmartre, Paris</h4>
        <p class="desc">
          Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the
          leafy hilltop village of Montmartre was once the play area of Paris’s
          most famous artists, bohemians and creatures of the night. These days,
          the winding cobbled streets host chic cafes, retro boutiques and fine
          French dining but, if you look closely enough, those in search of
          historical secrets can still find traces of the old La Bohème hidden
          between the tourist traps…
        </p>
      </div>
      <div class="w-100 mb-5 tags">
        <p class="title">Tags</p>
        <span class="badge badge-pill">
          <base-icon name="plus"></base-icon>
        </span>
        <span class="badge badge-pill"
          >Montmartre
          <base-icon name="close"></base-icon>
        </span>
        <span class="badge badge-pill"
          >Badge
          <base-icon name="close"></base-icon>
        </span>
      </div>
      <div class="mt-3">
        <p class="title">Categories</p>
      </div>
      <div class="row row-cols-lg-6 g-2">
        <div class="col" v-for="item in 8" :key="item">
          <div class="card border-0 h-100">
            <img
              :src="require(`../assets/img/cat${item}.png`)"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <base-check-list></base-check-list>
    </div>
  </div>
</template>

<style lang="scss">
.landing {
  .btn-add {
    box-sizing: border-box;
    height: 40px;
    width: 118px;
    color: #84898d;
    border: 1px solid #bcdee8;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    background-color: #f8fbfc;
    &:focus,
    &:hover {
      color: #84898d;
      border: 1px solid #bcdee8;
      outline: 0;
      box-shadow: 0;
    }
    .icon {
      height: 24px;
      width: 24px;
    }
  }
  .intro-text {
    margin-top: 30px;
    h4.title {
      padding-bottom: 15px;
      border-bottom: 1px dashed #84898d;
      color: #212121;
      font-family: "SF Pro Display";
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 0.54px;
      line-height: 42px;
      margin-bottom: 30px;
    }
    .desc {
      color: #84898d;
      font-family: Avenir;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 32px;
    }
  }
}
.chip {
  height: 42px;
  line-height: 42px;
  border-radius: 21px;
}
.chip img {
  height: 42px;
  width: 42px;
}
.chip .close {
  height: 42px;
  line-height: 42px;
  border-radius: 21px;
}
.badge {
  border: 1px solid #bcdee8;
  margin-right: 10px;
  border-radius: 32px;
  background-color: #f8fbfc;
  opacity: 0.8;
  color: #373a3e;
  font-family: Avenir;
  font-size: 16px;
  font-weight: 300;
}
.title {
  color: #373a3e;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
}
.tags {
  border-top: 1px dashed #84898d;
  padding-top: 15px;
}
</style>