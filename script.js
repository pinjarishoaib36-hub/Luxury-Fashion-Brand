const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d");
let w,h,particles=[];
function resize(){w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);w=innerWidth;h=innerHeight}
function seed(){particles=Array.from({length:90},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+.3,vx:(Math.random()-.5)*.18,vy:-(Math.random()*.35+.05),a:Math.random()*.55+.08}))}
function animate(){ctx.clearRect(0,0,w,h);for(const p of particles){p.x+=p.vx;p.y+=p.vy;if(p.y<-5){p.y=h+5;p.x=Math.random()*w}if(p.x<0)p.x=w;if(p.x>w)p.x=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(220,210,190,${p.a})`;ctx.fill()}requestAnimationFrame(animate)}
addEventListener("resize",()=>{resize();seed()});resize();seed();animate();

const menu=document.getElementById("menuBtn"),nav=document.getElementById("navLinks");
menu.addEventListener("click",()=>nav.classList.toggle("mobile-open"));

let count=0;const toast=document.getElementById("toast");
document.querySelectorAll(".quick").forEach(b=>b.addEventListener("click",()=>{count++;document.getElementById("cartCount").textContent=count;toast.textContent=b.dataset.product+" added to bag";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}));

const modal=document.getElementById("searchModal");
document.getElementById("searchBtn").onclick=()=>{modal.classList.add("open");document.getElementById("searchInput").focus()};
document.getElementById("closeSearch").onclick=()=>modal.classList.remove("open");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formMessage").textContent="You're on the list.";e.target.reset()});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>nav.classList.remove("mobile-open")));
