<template>
  <div class="col-md-12 audio-section mb-3">
    <div class="audio-flex">
      <p class="audio">{{ title }}</p>
      <base-icon :name="icon" class="icon" />
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String },
    icon: { type: String },
  },
};
</script>
<style lang="scss" scoped>
.audio-section {
  border-top: 1px solid #d3dce0;
  padding-top: 15px;
  .audio-flex {
    display: flex;
    justify-content: space-between;
  }
  .audio {
    color: #373a3e;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
  }
  .icon {
    color: #2daee1;
    font-size: 24px;
  }
}
</style>