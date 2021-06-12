<template>
  <div class="row mt-4">
    <div class="col-md-7 offset-md-1">
      <h2 class="mb-3">Media</h2>
      <div class="col-md-12 audio-section">
        <div class="audio-flex">
          <p class="audio">Audio</p>
          <base-icon name="microphone" class="icon" />
        </div>
        <div class="d-flex align-items-center ms-3">
          <base-icon name="sound" style="color: #84898d"></base-icon>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">
                  Some recording
                  <p>15–19 Place Saint-Pierre, Paris · 17 Dec, 13:45</p>
                </th>
                <td colspan="2">13:24</td>
                <td><base-icon name="dots" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex align-items-center ms-3">
          <base-icon name="sound" style="color: #84898d"></base-icon>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">
                  Rec 4
                  <p>7 Rue Livingstone, Paris · 15 Dec, 22:06</p>
                </th>
                <td colspan="2">01:12:47</td>
                <td><base-icon name="dots" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-12 audio-section">
        <div class="audio-flex">
          <p class="audio">Photos</p>
          <base-icon name="camera" class="icon" />
        </div>
        <div class="d-flex align-items-center ms-3">
          <base-icon name="sound" style="color: #84898d"></base-icon>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">
                  Some recording
                  <p>15–19 Place Saint-Pierre, Paris · 17 Dec, 13:45</p>
                </th>
                <td colspan="2">13:24</td>
                <td><base-icon name="dots" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex align-items-center ms-3">
          <base-icon name="sound" style="color: #84898d"></base-icon>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">
                  Rec 4
                  <p>7 Rue Livingstone, Paris · 15 Dec, 22:06</p>
                </th>
                <td colspan="2">01:12:47</td>
                <td><base-icon name="dots" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <base-check-list class="col-md-3"></base-check-list>
  </div>
</template>
<style lang="scss" scoped>
h2 {
  color: #84898d;
  font-family: Avenir;
  font-size: 32px;
  font-weight: 500;
}
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
  table th {
    color: #373a3e;
    font-family: Avenir;
    font-size: 17px;
    p {
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 0;
    }
  }
}
</style>