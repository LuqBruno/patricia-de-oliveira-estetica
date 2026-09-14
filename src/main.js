const revealPage=()=>document.body.classList.add('ready');
window.addEventListener('load',revealPage,{once:true});
setTimeout(revealPage,1400);

const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  links.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));

const elements=document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  }),{threshold:.12});
  elements.forEach(element=>observer.observe(element));
}else{
  elements.forEach(element=>element.classList.add('visible'));
}
