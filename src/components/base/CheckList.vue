<template>
  <div class="checklist">
    <p>Check List</p>
    <ul>
      <li><span>Name</span> <base-icon name="mark" class="icon" /></li>
      <li>
        <span>Description</span>
        <base-icon name="mark" class="icon" />
      </li>
      <li>
        <span>Cover photo</span>
        <base-icon name="mark" class="icon" />
      </li>
      <li>
        <span>At least 1 point</span>
        <base-icon name="mark" class="icon" />
      </li>
      <li class="deactive">Narration</li>
      <li class="deactive">Category</li>
    </ul>
    <button>Preview</button>
    <button class="second">Publish</button>
  </div>
</template>
<style lang="scss" scoped>
.checklist {
  padding: 10px;
  border: 0.5px solid rgba(212, 214, 216, 0.5);
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);
  p {
    color: #373a3e;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      padding: 5px;
      display: flex;
      color: #373a3e;
      font-family: Avenir;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0;
      align-items: center;
      justify-content: space-between;
      &.deactive {
        opacity: 0.6;
        color: #373a3e;
        font-family: Avenir;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: 0;
      }
      .icon {
        color: #0bcd74;
        font-size: 25px;
      }
    }
  }
  button {
    height: 40px;
    width: 100%;
    border: 1px solid #bcdee8;
    border-radius: 32px;
    background-color: #f8fbfc;
    margin-bottom: 10px;
    color: #2daee1;
    &.second {
      color: #ffffff;
      background-color: #2daee1;
      box-shadow: 0 6px 9px 0 rgba(45, 174, 225, 0.24);
    }
  }
}
</style>