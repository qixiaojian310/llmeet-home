<template>
  <div class="home">
    <div class="home-bg">
      <!-- 更大、更丰富的波浪 SVG -->
      <svg
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#005A9E" />
            <stop offset="100%" stop-color="#00B3FF" />
          </linearGradient>
        </defs>
        <!-- 主体大浪 -->
        <path
          d="M0,60
             C200,10 400,110 600,60
             C800,10 1000,110 1200,60
             L1200,200 L0,200 Z"
          fill="url(#wave-gradient)"
        />
        <!-- 上层浪花：半透明的白色小浪 -->
        <path
          d="M0,80
             C150,30 350,130 600,80
             C850,30 1050,130 1200,80
             L1200,200 L0,200 Z"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
    </div>
    <div class="home-container">
      <div class="title">
        <img class="icon" src="/llmeet-icon.png" alt="" />

        <p>LLMeet</p>
      </div>
      <div class="sub-title">
        <p>
          A powerful tool for your team to organize your meeting and convert
          summarization.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import AsciiVideo from './AsciiVideo.vue';
</script>

<style scoped lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .home-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      #00254a 0%,
      #005a9e 50%,
      #00b3ff 100%
    );
    top: -20px; left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    filter: blur(10px);
    opacity: 1;
    z-index: -1;
  }

  .home-bg .wave {
    position: absolute;
    bottom: 20px;       /* 拉低一点，让浪头露得更足 */
    left: 0;
    width: 200%;         /* 保持循环无缝 */
    height: 200px;       /* 根据 viewBox 高度同步调整 */
    transform: translateX(0);
    animation: wave-move 8s linear infinite;
  }

  @keyframes wave-move {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .home-container {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .title {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: end;
      height: 150px;
      gap: 10px;
      .icon {
        width: 100px;
        height: 100px;
        border-radius: 10px;
      }

      p {
        font-family: NerkoOne;
        font-size: 50px;
      }
    }

    .sub-title {
      width: 500px;
      text-align: left;

      p {
        font-family: NerkoOne;
        font-size: 20px;
      }
    }
  }
}
</style>
