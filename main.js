// Mobile nav toggle
const mb=document.getElementById('mb'),mn=document.getElementById('mn');
if(mb)mb.addEventListener('click',()=>mn.classList.toggle('open'));
document.addEventListener('click',(e)=>{if(mb&&!mb.contains(e.target)&&!mn.contains(e.target))mn.classList.remove('open');});
// Scroll fade-in
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('vis'),+e.target.dataset.d||0);
      obs.unobserve(e.target);
    }
  });
},{threshold:.1});
document.querySelectorAll('.fu').forEach((el,i)=>{el.dataset.d=(i%5)*90;obs.observe(el);});
