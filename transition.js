(function(){
  // Inject curtain overlay
  var el = document.createElement('div');
  el.id = 'pg-trans';
  document.body.appendChild(el);

  // Entry: panel starts covering, sweeps upward to reveal page
  // Skip on home page — the loader already handles the entry reveal
  if(document.getElementById('loader')){
    el.style.transition = 'none';
    el.classList.add('pt-revealed'); // instantly hide panel
  } else {
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        el.classList.add('pt-revealed');
      });
    });
  }

  // Exit: fade content, then navigate (next page entry shows curtain reveal)
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href]');
    if(!a) return;
    var href = a.getAttribute('href');
    if(!href) return;
    if(href.startsWith('http') || href.startsWith('//') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;
    if(a.target === '_blank') return;
    if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    var target = a.href;
    document.body.classList.add('pt-exiting');
    setTimeout(function(){ window.location.href = target; }, 420);
  });
})();
