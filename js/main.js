document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('img, video').forEach((el) => {
  el.draggable = false;
  el.addEventListener('dragstart', (e) => e.preventDefault());
});

const video = document.getElementById('bg-video');
const videoBg = document.querySelector('.video-bg');

function handleVideoFallback() {
  videoBg.classList.add('no-video');
}

if (video) {
  video.addEventListener('error', handleVideoFallback);

  video.play().catch(() => {
    handleVideoFallback();
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    video.pause();
    videoBg.classList.add('no-video');
  }
}
