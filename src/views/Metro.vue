<template>
  <div class="row g-5">
    <div class="col-md-9">
      <h2 class="mb-3">1 <span>Abbesses Metro Station</span></h2>
      <p>
        Paris’s larger and more well-known cemeteries might be the eternal
        resting place of many recent famous name, but the Cimetière de
        Montmartre is home to more than
      </p>
      <div
        class="
          col-md-12
          d-flex
          align-items-center
          justify-content-between
          audio-section
        "
      >
        <p>Location</p>
        <base-icon name="location" class="icon" />
      </div>
      <div
        id="map-container-google-1"
        class="z-depth-1-half map-container"
        style="height: 300px; margin-bottom: 30px"
      >
        <iframe
          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
      <base-section title="Audio" icon="microphone">
        <div class="d-flex align-items-center">
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
        <div class="d-flex align-items-center">
          <table class="table">
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
      </base-section>

      <base-section title="Photos" icon="camera">
        <div class="d-flex align-items-center ms-3">
          <div class="lightbox">
            <div class="row">
              <div class="col-md-5">
                <img
                  src="@/assets/img/image-1.jpg"
                  alt=""
                  srcset=""
                  class="w-100 rounded"
                />
              </div>
              <div class="col-md-5">
                <img
                  src="@/assets/img/image-2.jpg"
                  alt=""
                  srcset=""
                  class="w-100 rounded"
                />
              </div>
              <div class="col-md-2">
                <img
                  src="@/assets/img/image-3.jpg"
                  alt=""
                  srcset=""
                  class="w-100 rounded mb-2 mb-md-4"
                />
                <img
                  src="@/assets/img/image-1.jpg"
                  alt=""
                  srcset=""
                  class="w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </base-section>

      <base-section title="Tips" icon="microphone">
        <ul>
          <li>Bring a lot of water</li>
          <li>Very crowded on weekends and holidays</li>
          <li>Look for ancient carving on the main door</li>
        </ul>
      </base-section>

      <base-section title="Links" icon="link">
        <div class="col-md-4 rounded">
          <div class="card" style="height: 146px">
            <img
              class="card-img-top"
              src="@/assets/img/image-1.jpg"
              alt="Card image cap"
              style="height: 64px"
            />
            <div class="card-body">
              <h1>MoMA</h1>
              <p class="card-description">
                MoMA is a place that fuels creativity, ignites minds, and
                provides inspiration.
              </p>
            </div>
          </div>
        </div>
      </base-section>
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
  span {
    color: #373a3e;
    margin-left: 15px;
  }
  & + p {
    color: #5b5c5e;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 300;
  }
}
.audio-section {
  border-top: 1px dashed #d3dce0;
  padding-top: 15px;
  p {
    color: #373a3e;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    &.card-description {
      color: #98989d;
      font-family: Avenir;
      font-size: 12px;
      font-weight: 300;
    }
  }
  ul {
    color: #373a3e;
    font-family: Avenir;
    font-size: 15px;
    letter-spacing: -0.2px;
  }
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
.map-container {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.card-body {
  h1 {
    color: #0a0a0a;
    font-family: Avenir;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>