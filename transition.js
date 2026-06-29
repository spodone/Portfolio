(function(){
  // Enter: fade + scale in from slightly larger
  document.body.classList.add('page-entering');
  requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove('page-entering')));

  // Exit: fade + scale down, then navigate
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if(!link) return;
    const href = link.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http') || link.target === '_blank') return;
    e.preventDefault();
    document.body.classList.add('page-exiting');
    setTimeout(()=>{ window.location.href = href; }, 420);
  });
})();
