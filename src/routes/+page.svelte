<script>
  import { waitForCv } from "$lib";
  import Spinner from "./spinner.svelte";
  /** @type {HTMLVideoElement} */
  let video;
  /** @type {MediaStream} */
  let stream;
  /** @type {HTMLCanvasElement} */
  let canvas;

  let cv_available = waitForCv();

  async function select_camera() {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    video.srcObject = stream;
    video.play();

    let cap = new cv.VideoCapture(video);
    let frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    cap.read(frame);

    requestAnimationFrame(process_video);
  }

  /** @type {FrameRequestCallback}*/
  function process_video(time) {
    requestAnimationFrame(process_video);
  }
</script>

<h1>Cyberpunk 2077 Breach Solver</h1>

<div class="vbox">
  {#await cv_available}
    <Spinner />
  {:then _}
    {#if !stream}
      <button on:click={select_camera}>Start</button>
    {/if}
    <video bind:this={video} class="back-buffer">
      <track kind="captions" />
    </video>
    <canvas bind:this={canvas} class="front-buffer" />
  {/await}
</div>

<style>
  .vbox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  video {
    max-width: 100vw;
    height: 50vh;
  }
</style>
