(function(){
  const canvas = document.getElementById('blob-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize(){
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const blobs = [
    { x:.50, y:.80, r:.65, vx:.00008, vy:.00006, base:.13 },
    { x:.20, y:.60, r:.45, vx:.00012, vy:-.00009, base:.07 },
    { x:.80, y:.50, r:.40, vx:-.00010, vy:.00011, base:.06 },
    { x:.50, y:.30, r:.35, vx:.00007, vy:.00014,  base:.04 },
    { x:.35, y:.90, r:.30, vx:-.00009, vy:-.00007, base:.05 },
  ];

  let mx = W * 0.5, my = H * 0.5;
  let smoothX = mx, smoothY = my;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  const puffs = [];
  const MAX_PUFFS = 80;

  function spawnPuff(){
    puffs.push({
      x: smoothX + (Math.random() - 0.5) * 8,
      y: smoothY + (Math.random() - 0.5) * 8,
      r: 60 + Math.random() * 80,
      alpha: 0.025 + Math.random() * 0.015,
      life: 0,
      maxLife: 110 + Math.random() * 70,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.15 - Math.random() * 0.25,
    });
    if(puffs.length > MAX_PUFFS) puffs.shift();
  }

  let t = 0;
  function draw(){
    t++;
    ctx.clearRect(0, 0, W, H);

    blobs.forEach((b, i) => {
      const px = (b.x + Math.sin(t*b.vx*60 + i*1.3)*.18) * W;
      const py = (b.y + Math.cos(t*b.vy*60 + i*2.1)*.15) * H;
      const radius = b.r * Math.min(W, H);
      const alpha  = b.base + Math.sin(t*.008 + i*1.7)*.03;
      const g = ctx.createRadialGradient(px, py, 0, px, py, radius);
      g.addColorStop(0, `rgba(255,255,255,${alpha})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI*2);
      ctx.fill();
    });

    smoothX += (mx - smoothX) * 0.08;
    smoothY += (my - smoothY) * 0.08;
    spawnPuff();

    puffs.forEach(p => {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.r  += 0.8;
      const progress = p.life / p.maxLife;
      const fade = progress < 0.15 ? progress / 0.15 : 1 - (progress - 0.15) / 0.85;
      const a = p.alpha * fade;
      if(a <= 0.001) return;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0,   `rgba(255,255,255,${a})`);
      g.addColorStop(0.5, `rgba(255,255,255,${a * 0.3})`);
      g.addColorStop(1,   'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });

    for(let i = puffs.length - 1; i >= 0; i--){
      if(puffs[i].life >= puffs[i].maxLife) puffs.splice(i, 1);
    }

    const ag = ctx.createRadialGradient(smoothX, smoothY, 0, smoothX, smoothY, 260);
    ag.addColorStop(0, 'rgba(255,255,255,0.015)');
    ag.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = ag;
    ctx.beginPath();
    ctx.arc(smoothX, smoothY, 260, 0, Math.PI*2);
    ctx.fill();

    requestAnimationFrame(draw);
  }
  draw();
})();

// ── SCROLL REVEAL ──
(function(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  function autoReveal(sel, cls) {
    document.querySelectorAll(sel).forEach(el => {
      if(!el.classList.contains('reveal') && !el.classList.contains('reveal-children')){
        el.classList.add(cls);
        observer.observe(el);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Existing explicit markup
    document.querySelectorAll('.reveal, .reveal-children').forEach(el => observer.observe(el));

    // Case page content — individual elements
    autoReveal('.csh, .csp, .csq, .case-cover, .strategy-item, .reflection-item', 'reveal');

    // Card grids — staggered children
    autoReveal('.crg, .exec-grid, .insights-grid, .discovery-grid, .ds-grid', 'reveal-children');
  });
})();
