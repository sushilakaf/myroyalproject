document.addEventListener('DOMContentLoaded', () => {
  const textWrapper = document.querySelector('.ml2');
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({ loop: false })
      .add({
        targets: '.ml2 .letter',
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        delay: (_, i) => 30 * i
      });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar scroll behavior
  const navShell = document.querySelector('.nav-shell');
  if (navShell) {
    const onScroll = () => {
      if (window.scrollY > 24) navShell.classList.add('scrolled');
      else navShell.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
});
