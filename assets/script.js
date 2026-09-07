// Minimal JS: update year and add a tiny animation hook
document.addEventListener('DOMContentLoaded', function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // reduce motion respect
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    // subtle floating on the avatar accent
    const heroAccent = document.querySelector('.hero-accent');
    if(heroAccent){
      let t = 0;
      function float(){
        t += 0.01;
        heroAccent.style.transform = `rotate(${7 + Math.sin(t) * 2}deg) translateY(${Math.sin(t * 0.9) * 6}px)`;
        requestAnimationFrame(float);
      }
      requestAnimationFrame(float);
    }
  }
});
