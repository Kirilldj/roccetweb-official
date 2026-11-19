// @ts-nocheck
/* Imperative behaviour of the original single-file site (3D core, i18n, configurator, cases, form).
   Migrate module by module into React components later; markup lives in src/components. */
import { CONFIG } from '../config';

export function initRoccet() {
  if ((window as any).__roccet) return;
  (window as any).__roccet = true;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,MOB=matchMedia("(max-width:860px)").matches;
const D={ru:{n1:"Услуги",n2:"Портфолио",n3:"О студии",n4:"Контакты",cta:"Оставить заявку",h1:"Создаём.",h2:"Автоматизируем.",h3:"Развиваем.",sub:"Цифровые решения для современного бизнеса.",b1:"Наши услуги",b2:"О компании",forge:"Форма ядра:",s0:"Ядро",s1:"Поток",s2:"Кузница",
sv:"Услуги",svl:"Два направления: то, что видят клиенты, и то, что работает за кадром.",c1p:"Разработка сайтов и веб-приложений.",c1a:"Лендинги и многостраничные сайты",c1b:"Веб-приложения и сервисы",c1c:"Интерактивные решения",c2p:"Автоматизация бизнес-процессов и внедрение ИИ.",c2a:"AI-ассистенты и чат-боты",c2b:"CRM-интеграции",c2c:"Автоматизация заявок",
fl:"Как работает автоматизация заявок",flp:"Симуляция: нажмите кнопку и проследите путь заявки.",fn1:"Заявка",fn2:"ИИ-ассистент",fn3:"CRM",run:"Отправить тестовую заявку",
l1:"Заявка получена с сайта",l2:"Ассистент классифицировал запрос и подготовил ответ",l3:"Карточка клиента создана в CRM, менеджер уведомлён",
ab:"О студии",abl:"RoccetWeb объединяет разработку и автоматизацию: сайт приводит клиента, процессы доводят его до результата.",a1h:"Философия",a1:"Меньше шума, больше смысла. Каждый элемент интерфейса отвечает на задачу бизнеса.",a2h:"Подход",a2:"Сначала разбираем процессы, потом проектируем решение и только затем рисуем и пишем код.",a3h:"Скорость",a3:"Лёгкие страницы, оптимизированная графика и понятная структура, которую легко развивать.",
pf:"Портфолио",pfl:"Реальных проектов в этом разделе пока нет: ниже демонстрационные концепты.",demo:"Демонстрационный концепт",close:"Закрыть",
pr:"Процесс",es:"Оценка срока проекта",esp:"Ориентир по срокам. Точную оценку даём после анализа задачи.",et:"Тип проекта",et1:"Лендинг",et2:"Веб-приложение",et3:"Многостраничный сайт",ep:"Страниц / экранов",x1:"3D и сложная анимация",x2:"Интеграция с CRM",x3:"ИИ-ассистент",eo:"Ориентировочно",en:"Срок в неделях, без учёта согласований.",wk:"нед.",use:"Передать в заявку",
ct:"Контакты",ctl:"Расскажите о задаче: ответим и предложим следующий шаг.",fm:"Оставить заявку",fn:"Имя",fc:"Email или Telegram",fmsg:"Задача",send:"Отправить заявку",
e1:"Укажите имя (от 2 символов)",e2:"Укажите email или Telegram",e3:"Опишите задачу (от 10 символов)",ok:"Заявка проверена. Сервер ещё не подключён, поэтому она не отправлена: укажите endpoint в CONFIG.",sent:"Спасибо! Заявка отправлена.",fail:"Не удалось отправить. Попробуйте позже.",foot:"Premium Digital Studio",
p0:["Анализ","Цели, аудитория, процессы."],p1:["Архитектура","Структура, данные, интеграции."],p2:["Дизайн","Визуальный язык и прототипы."],p3:["Разработка","Код, 3D, автоматизация."],p4:["Запуск","Тесты, публикация, поддержка."]},
en:{n1:"Services",n2:"Portfolio",n3:"About",n4:"Contact",cta:"Get in touch",h1:"We create.",h2:"We automate.",h3:"We grow.",sub:"Digital solutions for modern business.",b1:"Our services",b2:"About us",forge:"Core shape:",s0:"Core",s1:"Flow",s2:"Forge",
sv:"Services",svl:"Two directions: what customers see, and what works behind the scenes.",c1p:"Websites and web application development.",c1a:"Landing pages and multi-page sites",c1b:"Web apps and services",c1c:"Interactive solutions",c2p:"Business process automation and AI integration.",c2a:"AI assistants and chatbots",c2b:"CRM integrations",c2c:"Lead handling automation",
fl:"How lead automation works",flp:"Simulation: press the button and follow the lead.",fn1:"Lead",fn2:"AI assistant",fn3:"CRM",run:"Send a test lead",
l1:"Lead received from the website",l2:"Assistant classified the request and drafted a reply",l3:"Client card created in CRM, manager notified",
ab:"About",abl:"RoccetWeb joins development and automation: the site brings the client in, the processes take them to the result.",a1h:"Philosophy",a1:"Less noise, more meaning. Every interface element answers a business goal.",a2h:"Approach",a2:"We study the processes first, design the solution next, and only then draw and code.",a3h:"Speed",a3:"Light pages, optimized graphics and a clear structure that is easy to grow.",
pf:"Portfolio",pfl:"There are no real projects here yet: below are demo concepts.",demo:"Demo concept",close:"Close",
pr:"Process",es:"Project timeline estimate",esp:"A rough guide. We give an exact estimate after analyzing the task.",et:"Project type",et1:"Landing page",et2:"Web application",et3:"Multi-page site",ep:"Pages / screens",x1:"3D and complex animation",x2:"CRM integration",x3:"AI assistant",eo:"Approximately",en:"Weeks, not counting approvals.",wk:"wk",use:"Add to request",
ct:"Contact",ctl:"Tell us about your task: we will reply with a next step.",fm:"Send a request",fn:"Name",fc:"Email or Telegram",fmsg:"Task",send:"Send request",
e1:"Enter a name (2+ characters)",e2:"Enter an email or Telegram",e3:"Describe the task (10+ characters)",ok:"Request validated. No server is connected yet, so it was not sent: set endpoint in CONFIG.",sent:"Thank you! Your request was sent.",fail:"Could not send. Please try later.",foot:"Premium Digital Studio",
p0:["Analysis","Goals, audience, processes."],p1:["Architecture","Structure, data, integrations."],p2:["Design","Visual language and prototypes."],p3:["Development","Code, 3D, automation."],p4:["Launch","Testing, release, support."]}};
const PJ=[{c:"#8B2BFF,#000",ru:["Концепт: сайт студии","Лендинг с 3D-объектом и сценарием прокрутки."],en:["Concept: studio site","Landing page with a 3D object and a scroll story."],s:"React · Three.js · GSAP"},
{c:"#9a9aa8,#101014",ru:["Концепт: панель заявок","Веб-приложение для обработки обращений."],en:["Concept: lead dashboard","Web app for handling inbound requests."],s:"React · TypeScript"},
{c:"#5b1fb0,#1b1b24",ru:["Концепт: ИИ-консультант","Чат-ассистент с передачей диалога менеджеру."],en:["Concept: AI consultant","Chat assistant with handoff to a manager."],s:"LLM API · Webhooks"},
{c:"#c9b3ff,#000",ru:["Концепт: CRM-связка","Автосоздание карточек клиентов из форм сайта."],en:["Concept: CRM bridge","Automatic client cards from website forms."],s:"CRM API · Automation"}];
let L=localStorage.getItem("rw")||(navigator.language.startsWith("ru")?"ru":"en");try{}catch(e){}
function setLang(l){L=l;try{localStorage.setItem("rw",l)}catch(e){}
document.documentElement.lang=l;$$("[data-i18n]").forEach(e=>{const v=D[l][e.dataset.i18n];if(v)e.textContent=v});
$$(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l));
$("#st").innerHTML=[0,1,2,3,4].map(i=>`<button class="step" data-i="${i}"><h3>${D[l]["p"+i][0]}</h3><p>${D[l]["p"+i][1]}</p></button>`).join("");
$("#pg").innerHTML=PJ.map((p,i)=>`<button class="pcard" data-i="${i}"><div class="art" style="--bg1:radial-gradient(circle at 30% 30%,${p.c.split(",")[0]},${p.c.split(",")[1]} 70%)"></div><div class="b"><span class="note">${D[l].demo}</span><h3>${p[l][0]}</h3><p>${p[l][1]}</p><span class="more">${p.s} →</span></div></button>`).join("");
$$(".pcard").forEach(b=>b.onclick=()=>openP(+b.dataset.i));
est();}
$$(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
$("#dc").onclick=()=>$("#dlg").close();$("#dlg").onclick=e=>{if(e.target.id==="dlg")e.target.close()};
$("#bg").onclick=()=>{const o=$("#nav").classList.toggle("open");$("#bg").setAttribute("aria-expanded",o)};
$$("#nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));

/* Mechanic 2: estimator */
function est(){const w=+$("#et").value+Math.ceil($("#ep").value/3)+$$(".out ~ *,.card input[type=checkbox]").filter(c=>c.checked).reduce((a,c)=>a+ +c.value,0);
$("#pv").textContent=$("#ep").value;$("#eout").textContent=w+"–"+(w+Math.ceil(w*.4))+" "+D[L].wk;return w}
$("#et").onchange=$("#ep").oninput=est;$$("#contact input[type=checkbox]").forEach(c=>c.onchange=est);
$("#use").onclick=()=>{const x=$$("#contact input[type=checkbox]").filter(c=>c.checked).map(c=>D[L][c.dataset.n]).join(", ");
$("#tx").value=`${$("#et").selectedOptions[0].textContent}, ${$("#ep").value}; ${x||"—"}; ${$("#eout").textContent}`;$("#tx").focus()};

/* Form */
$("#f").onsubmit=async e=>{e.preventDefault();const n=$("#nm").value.trim(),c=$("#cn").value.trim(),m=$("#tx").value.trim();
const ok=[[n.length>=2,"e1"],[/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||/^@?[\w]{4,}$/.test(c)||/^\+?[\d\s()-]{7,}$/.test(c),"e2"],[m.length>=10,"e3"]];
ok.forEach((o,i)=>$("#e"+(i+1)).textContent=o[0]?"":D[L][o[1]]);
if(ok.some(o=>!o[0]))return;
if(!CONFIG.endpoint){$("#msg").textContent=D[L].ok;return}
$("#f button[type=submit]").disabled=true;$("#f").classList.remove("done");try{const r=await fetch(CONFIG.endpoint,RWreq(n,c,m));
if(!r.ok)throw 0;const j=await r.json().catch(()=>({}));if(j.success==="false"||j.success===false)throw 0;$("#msg").textContent=D[L].sent;$("#f").classList.add("done");e.target.reset()}catch(_){mailFallback(n,c,m)}$("#f button[type=submit]").disabled=false};

/* Mechanic 3: lead flow simulation */
$("#run").onclick=()=>{const ns=$$(".node"),lg=$("#log");lg.innerHTML="";ns.forEach(n=>n.classList.remove("on"));
[0,1,2].forEach(i=>setTimeout(()=>{ns[i].classList.add("on");const li=document.createElement("li");li.textContent="✓ "+D[L]["l"+(i+1)];lg.appendChild(li);
if(!RM&&window.gsap)gsap.fromTo(ns[i],{y:-8},{y:0,duration:.5,ease:"back.out(3)"})},i*(RM?0:900))) };

/* Magnetic buttons + card light */
if(!RM&&matchMedia("(hover:hover)").matches){$$(".mag").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener("mouseleave",()=>b.style.transform="")})}
$$(".card").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}));

setLang(L);

/* GSAP: one unified system */
if(window.gsap&&window.ScrollTrigger&&!RM){gsap.registerPlugin(ScrollTrigger);
try{window.PL=!sessionStorage.getItem("rwp")}catch(e){window.PL=false}
gsap.from("h1 span i",{yPercent:110,duration:1.1,ease:"power4.out",stagger:.14,delay:PL?1.3:.2});
gsap.from("#hero .sub,#hero .row,#hero .forge,.tag",{opacity:0,y:20,duration:.9,stagger:.1,delay:PL?1.8:.7});
ScrollTrigger.batch("h2,.card,.about>div,.pcard,.step",{start:"top 88%",once:true,onEnter:b=>gsap.from(b,{opacity:0,y:40,duration:.9,stagger:.1,ease:"power3.out",overwrite:true})});
if(!MOB)$$(".orb").forEach(o=>gsap.to(o,{yPercent:-25,ease:"none",scrollTrigger:{trigger:o,scrub:true}}))}

/* Three.js: Roccet Core */
(function(){
const cv=$("#gl");let R;
try{if(!window.THREE)throw 0;R=new THREE.WebGLRenderer({canvas:cv,antialias:!MOB,alpha:true,powerPreference:"high-performance"})}catch(e){cv.style.display="none";$("#fb").style.display="block";return}
R.setPixelRatio(Math.min(devicePixelRatio,MOB?1.5:2));R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.1;
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,50);C.position.z=7;
/* procedural studio environment for chrome reflections */
const ec=document.createElement("canvas");ec.width=512;ec.height=256;const g=ec.getContext("2d");
let gr=g.createLinearGradient(0,0,0,256);gr.addColorStop(0,"#1a1a22");gr.addColorStop(.5,"#050507");gr.addColorStop(1,"#000");g.fillStyle=gr;g.fillRect(0,0,512,256);
g.fillStyle="#fff";[[40,50,90,40],[250,30,120,28],[420,70,60,90]].forEach(r=>g.fillRect(...r));
g.fillStyle="#8B2BFF";g.fillRect(150,110,70,60);g.fillRect(340,140,100,26);g.fillStyle="#b9b9c8";g.fillRect(0,200,512,6);
let envT;
const pm=new THREE.PMREMGenerator(R);
function mkEnv(col){g.fillStyle=col;g.fillRect(150,110,70,60);g.fillRect(340,140,100,26);const et=new THREE.CanvasTexture(ec);et.mapping=THREE.EquirectangularReflectionMapping;const o=envT;envT=pm.fromEquirectangular(et).texture;S.environment=envT;et.dispose();if(o)o.dispose()}
mkEnv('#8B2BFF');
const mat=new THREE.MeshStandardMaterial({color:0xffffff,metalness:1,roughness:.1,envMapIntensity:1.6});
const vm=new THREE.MeshStandardMaterial({color:0x8B2BFF,emissive:0x8B2BFF,emissiveIntensity:1.4,metalness:.4,roughness:.2});
const G=new THREE.Group();S.add(G);
const seg=MOB?[120,18]:[240,36];
const kg=new THREE.TorusKnotGeometry(1.15,.36,seg[0],seg[1],2,3),knot=new THREE.Mesh(kg,mat);G.add(knot);
const base=kg.attributes.position.array.slice(),nrm=kg.attributes.normal.array.slice();
const r1=new THREE.Mesh(new THREE.TorusGeometry(2.0,.07,24,160),mat),r2=new THREE.Mesh(new THREE.TorusGeometry(1.65,.05,24,140),vm);
G.add(r1,r2);
const pearls=[];for(let i=0;i<5;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.12+i*.02,24,24),i%2?mat:vm);G.add(m);pearls.push(m)}
const PN=MOB?160:520,pp=new Float32Array(PN*3);for(let i=0;i<PN;i++){const r=2.6+Math.random()*3.4,a=Math.random()*6.283,b=Math.acos(2*Math.random()-1);pp[i*3]=r*Math.sin(b)*Math.cos(a);pp[i*3+1]=r*Math.cos(b)*.7;pp[i*3+2]=r*Math.sin(b)*Math.sin(a)}
const pgm=new THREE.BufferGeometry();pgm.setAttribute('position',new THREE.BufferAttribute(pp,3));
const sc=document.createElement('canvas');sc.width=sc.height=32;const sg=sc.getContext('2d'),gg=sg.createRadialGradient(16,16,0,16,16,16);gg.addColorStop(0,'#fff');gg.addColorStop(1,'#fff0');sg.fillStyle=gg;sg.fillRect(0,0,32,32);
const pmat=new THREE.PointsMaterial({color:0x8B2BFF,size:.05,map:new THREE.CanvasTexture(sc),transparent:true,opacity:.75,depthWrite:false,blending:THREE.AdditiveBlending});
const pts=new THREE.Points(pgm,pmat);S.add(pts);let sv=0,ls=0;
const l1=new THREE.PointLight(0x8B2BFF,30,14);l1.position.set(3,2,4);S.add(l1);
const l2=new THREE.PointLight(0xffffff,12,12);l2.position.set(-4,-2,3);S.add(l2);
const ST=[{amp:.07,a:1.2,b:0,sc:1,v:1.4,sp:.25},{amp:.18,a:.2,b:1.3,sc:.85,v:2.6,sp:.5},{amp:.02,a:1.57,b:.6,sc:1.15,v:.8,sp:.15}];
let cur={...ST[0]},tgt={...ST[0]},mx=0,my=0,sp=0,scr=0,run=true,t=0;
$$(".forge button").forEach(b=>b.onclick=()=>{$$(".forge button").forEach(x=>x.classList.toggle("on",x===b));tgt={...ST[+b.dataset.st]}});
let boost=0;window.RW={burst(){boost=1},pos(){const v=G.position.clone().project(C);return[(v.x+1)/2*innerWidth,(1-v.y)/2*innerHeight]},theme(h){const c=new THREE.Color(h);l1.color.copy(c);vm.color.copy(c);vm.emissive.copy(c);pmat.color.copy(c);mkEnv(h)}};
addEventListener("pointermove",e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1},{passive:true});
function size(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}size();addEventListener("resize",size);
addEventListener("scroll",()=>{const m=document.documentElement.scrollHeight-innerHeight;scr=m>0?scrollY/m:0},{passive:true});
document.addEventListener("visibilitychange",()=>{run=!document.hidden;if(run)loop()});
const lerp=(a,b,k)=>a+(b-a)*k;
function loop(){if(!run)return;requestAnimationFrame(loop);t+=RM?0:.016;
for(const k in cur)cur[k]=lerp(cur[k],tgt[k],.04);
/* scroll: object glides right → left → centre, scales, changes form */
const px=MOB?0:Math.cos(scr*Math.PI*4)*2.1,py=MOB?(innerWidth<500?1.4:1):Math.sin(scr*Math.PI*3)*.5;
const ss=cur.sc*(MOB?.62:1)*(1-.25*Math.sin(scr*Math.PI*2)**2);
G.position.x=lerp(G.position.x,px,.06);G.position.y=lerp(G.position.y,py-scr*(MOB?1.5:0),.06);G.scale.setScalar(lerp(G.scale.x,ss,.06));
G.rotation.y=t*cur.sp+scr*Math.PI*2+mx*.5;G.rotation.x=lerp(G.rotation.x,my*.35+scr,.05);
r1.rotation.set(t*.3+cur.a,t*.2,0);r2.rotation.set(cur.b*1.5+t*.4,t*.35,t*.1);
pearls.forEach((p,i)=>{const a=t*(.6+i*.15)+i*1.3,r=2.3+i*.12;p.position.set(Math.cos(a)*r,Math.sin(a*.8)*1.1,Math.sin(a)*r*.6)});
boost*=.96;G.rotation.z=boost*6.28;const lv=window.RW&&RW.level?RW.level():0;knot.scale.setScalar(1+lv*.07);vm.emissiveIntensity=cur.v+boost*8+lv*3;l1.position.set(mx*5,-my*4,4);l1.intensity=22+cur.v*6;
if(!MOB||(t*60|0)%2===0){const p=kg.attributes.position.array;for(let i=0;i<p.length;i+=3){const n=Math.sin(base[i]*2.2+t*1.4)*Math.cos(base[i+1]*2.2+t)*cur.amp;p[i]=base[i]+nrm[i]*n;p[i+1]=base[i+1]+nrm[i+1]*n;p[i+2]=base[i+2]+nrm[i+2]*n}
kg.attributes.position.needsUpdate=true;kg.computeVertexNormals()}
const dv=Math.abs(scr-ls);ls=scr;sv=lerp(sv,Math.min(dv*40,1),.08);if(!RM){pts.rotation.y+=.0006+sv*.03;pts.rotation.x=my*.12;pmat.size=.05+sv*.06}pts.position.x=G.position.x*.7;pts.position.y=G.position.y*.5;
R.render(S,C)}
loop();
addEventListener("pagehide",()=>{run=false;[kg,r1.geometry,r2.geometry].forEach(x=>x.dispose());mat.dispose();vm.dispose();R.dispose()});
cv.addEventListener("webglcontextlost",e=>{e.preventDefault();run=false;cv.style.display="none";$("#fb").style.display="block"});
})();

/* PHASE 2 — extends phase 1; no competing render loops (3D stays in one rAF) */
Object.assign(D.ru,{snd:"Звук интерфейса",cf:"Конфигуратор проекта",cfl:"Соберите заявку по шагам. Сроки и цены определяются после анализа задачи.",cs0:"1. Тип проекта",cs1:"2. Возможности",cs2:"3. Детали",cs3:"4. Ваша заявка",nx:"Далее",bk:"Назад",desc:"Описание задачи",term:"Желаемый срок",budget:"Желаемый бюджет",cpy:"Скопировать",cpd:"Скопировано",tosend:"Передать в форму",cfh:"Заявка из конфигуратора RoccetWeb",copyq:"Скопировать заявку",egg:"Liquid Chrome разбужен",none:"не выбрано"});
Object.assign(D.en,{snd:"Interface sound",cf:"Project configurator",cfl:"Build your request step by step. Timelines and prices are set after we analyze the task.",cs0:"1. Project type",cs1:"2. Features",cs2:"3. Details",cs3:"4. Your request",nx:"Next",bk:"Back",desc:"Task description",term:"Desired deadline",budget:"Desired budget",cpy:"Copy",cpd:"Copied",tosend:"Send to form",cfh:"Request from the RoccetWeb configurator",copyq:"Copy request",egg:"Liquid Chrome awakened",none:"not selected"});
const CF={ru:{ty:["Лендинг","Корпоративный сайт","Интернет-магазин","Веб-приложение","Мобильное приложение","AI-ассистент","Telegram-бот","Автоматизация бизнеса","Индивидуальное решение"],ft:["Авторизация","Личный кабинет","Интеграция CRM","Платёжная система","AI-функциональность","Анимации","Административная панель","Внешние интеграции"]},en:{ty:["Landing page","Corporate site","Online store","Web application","Mobile app","AI assistant","Telegram bot","Business automation","Custom solution"],ft:["Authentication","User account","CRM integration","Payments","AI functionality","Animations","Admin panel","External integrations"]}};
const PD={ru:["Разбираем цели, аудиторию, текущие процессы и ограничения. Результат: понятная постановка задачи.","Проектируем структуру, данные и интеграции. Результат: схема решения и план работ.","Создаём визуальный язык и прототипы ключевых экранов. Результат: утверждаемый дизайн.","Пишем код, подключаем 3D, интеграции и автоматизацию. Результат: работающий продукт.","Тестируем, публикуем и настраиваем поддержку. Результат: решение в рабочей среде."],en:["We study goals, audience, current processes and constraints. Outcome: a clear problem statement.","We design structure, data and integrations. Outcome: a solution map and work plan.","We create the visual language and key-screen prototypes. Outcome: an approved design.","We write code and connect 3D, integrations and automation. Outcome: a working product.","We test, publish and set up support. Outcome: a solution in production."]};
const sel=i=>{const b=$(".forge button[data-st='"+i+"']");b&&b.click()};
const gs=()=>window.gsap&&!RM;
let pi=0,ps=0;
function procSel(i){ps=i;$$("button.step").forEach(b=>b.classList.toggle("on",+b.dataset.i===i));$("#pd").style.setProperty("--mx",i*25+"%");
$("#pd").innerHTML=`<div class="pbar"><i style="width:${(i+1)*20}%"></i></div><h3>${D[L]["p"+i][0]}</h3><p style="margin-top:10px">${PD[L][i]}</p>`;
sel([0,1,2,1,0][i]);if(gs()){gsap.from("#pd .pbar i",{width:0,duration:.8,ease:"power3.out"});gsap.fromTo("#pd h3,#pd p",{opacity:0,y:14},{opacity:1,y:0,duration:.5,stagger:.1,overwrite:true})}}
$("#st").addEventListener("click",e=>{const b=e.target.closest("button.step");if(b)procSel(+b.dataset.i)});
function openP(i){pi=(i+PJ.length)%PJ.length;const p=PJ[pi],d=$("#dlg");$("#dt").textContent=p[L][0];$("#dd").textContent=p[L][1];$("#ds").textContent=p.s;
$("#dart").style.setProperty("--bg1",`radial-gradient(circle at 30% 30%,${p.c.split(",")[0]},${p.c.split(",")[1]} 70%)`);if(!d.open)d.showModal();
if(gs())gsap.fromTo("#dart,#dt,#dd",{opacity:0,y:16},{opacity:1,y:0,duration:.5,stagger:.08,overwrite:true})}
$("#dp").onclick=()=>openP(pi-1);$("#dn").onclick=()=>openP(pi+1);
addEventListener("keydown",e=>{if($("#dlg").open){if(e.key==="ArrowLeft")openP(pi-1);if(e.key==="ArrowRight")openP(pi+1)}});
if(!RM&&matchMedia("(hover:hover)").matches){const pg=$("#pg");pg.addEventListener("pointermove",e=>{const c=e.target.closest(".pcard");if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-6px)`});pg.addEventListener("pointerout",e=>{const c=e.target.closest(".pcard");if(c)c.style.transform=""})}

/* Configurator */
const cfs={t:-1,f:new Set(),s:0,d:"",m:"",b:""};
function cfText(){const l=L,c=CF[l],n=D[l].none;return [D[l].cfh,D[l].cs0.slice(3)+": "+(cfs.t<0?n:c.ty[cfs.t]),D[l].cs1.slice(3)+": "+([...cfs.f].sort().map(i=>c.ft[i]).join(", ")||n),D[l].term+": "+(cfs.m||"—"),D[l].budget+": "+(cfs.b||"—"),D[l].desc+": "+(cfs.d||"—")].join("\n")}
function cfr(){const l=L,c=CF[l],s=cfs.s;let h=`<h3>${D[l]["cs"+s]}</h3>`;
if(s==0)h+=`<div class="chips">`+c.ty.map((x,i)=>`<button class="chip${cfs.t==i?" on":""}" data-t="${i}">${x}</button>`).join("")+`</div>`;
if(s==1)h+=`<div class="chips">`+c.ft.map((x,i)=>`<button class="chip${cfs.f.has(i)?" on":""}" data-f="${i}">${x}</button>`).join("")+`</div>`;
if(s==2)h+=`<br><label><span>${D[l].desc}</span><textarea id="cd" rows="4"></textarea></label><div class="cg2"><label><span>${D[l].term}</span><input id="cm"></label><label><span>${D[l].budget}</span><input id="cb"></label></div>`;
if(s==3)h+=`<pre id="cp"></pre><div class="row"><button class="btn" data-a="copy">${D[l].cpy}</button><button class="btn p" data-a="send">${D[l].tosend}</button></div>`;
h+=`<div class="row" style="margin-top:20px">`+(s>0?`<button class="btn" data-a="bk">${D[l].bk}</button>`:"")+(s<3?`<button class="btn p" data-a="nx"${s==0&&cfs.t<0?" disabled":""}>${D[l].nx}</button>`:"")+`</div>`;
$("#cfb").innerHTML=h;$("#cfbar").style.width=(s+1)*25+"%";
if(s==2){$("#cd").value=cfs.d;$("#cm").value=cfs.m;$("#cb").value=cfs.b}if(s==3)$("#cp").textContent=cfText();
$$('#cfb .chip').forEach((c,i)=>c.style.animationDelay=i*35+'ms')}
async function cp(t){try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement("textarea");a.value=t;document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(_){}a.remove()}}
function toast(t){const e=document.createElement("div");e.className="toast";e.setAttribute("role","status");e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),2200)}
$("#cfb").addEventListener("click",async e=>{const b=e.target.closest("button");if(!b)return;const d=b.dataset;
if(d.t!==undefined){cfs.t=+d.t;cfr();return}
if(d.f!==undefined){const i=+d.f;cfs.f.has(i)?cfs.f.delete(i):cfs.f.add(i);b.classList.toggle("on");return}
if(d.a==="nx")cfs.s++;if(d.a==="bk")cfs.s--;
if(d.a==="copy"){await cp(cfText());toast(D[L].cpd);return}
if(d.a==="send"){$("#tx").value=cfText();$("#f").scrollIntoView({behavior:"smooth",block:"center"});setTimeout(()=>$("#nm").focus({preventScroll:true}),600);return}
cfr()});
$("#cfb").addEventListener("input",e=>{const m={cd:"d",cm:"m",cb:"b"}[e.target.id];if(m)cfs[m]=e.target.value});
$("#cq").onclick=async()=>{const t=$("#tx").value.trim();await cp(`${$("#nm").value}\n${$("#cn").value}\n${t}`.trim());toast(D[L].cpd)};

/* language hook */
const _sl=setLang;setLang=l=>{_sl(l);$("#snd").setAttribute("aria-label",D[l].snd);cfr();procSel(ps);$$("#hero .btn,#contact .btn.p").forEach(b=>b.classList.add("arr"))};
setLang(L);

/* cursor (desktop only; native cursor kept) */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!RM){const c=$("#cur");let x=0,y=0,tx=0,ty=0,on=false;
function tick(){x+=(tx-x)*.18;y+=(ty-y)*.18;c.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(tick)}
addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY;c.classList.add("on");if(!on){on=true;x=tx;y=ty;tick()}},{passive:true});
document.addEventListener("mouseleave",()=>c.classList.remove("on"));
document.addEventListener("mouseover",e=>{const t=e.target.closest("a,button,.card,.pcard,input,textarea,select");c.classList.toggle("h",!!t);c.classList.toggle("c",!!(t&&t.closest(".card,.pcard")))})}else $("#cur").remove();

/* scroll: progress + core reacts to sections (extends existing 3D state system) */
addEventListener("scroll",()=>{const m=document.documentElement.scrollHeight-innerHeight;$("#prog").style.transform=`scaleX(${m>0?scrollY/m:0})`},{passive:true});
if(window.ScrollTrigger&&!RM){[["#hero",0],["#services",1],["#about",0],["#portfolio",2],["#config",1],["#contact",0]].forEach(([s,i])=>ScrollTrigger.create({trigger:s,start:"top 55%",end:"bottom 55%",onEnter:()=>sel(i),onEnterBack:()=>sel(i)}));
if(!MOB)$$("h2").forEach(h=>gsap.to(h,{y:-24,ease:"none",scrollTrigger:{trigger:h,scrub:true}}))}

/* sound: off by default, opt-in, very quiet */
let ac=null,sn=false;const sb=$("#snd");
function tone(f,d,v){if(!sn||!ac)return;const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f;g.gain.setValueAtTime(v,ac.currentTime);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+d);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}
sb.onclick=()=>{sn=!sn;if(sn&&!ac)ac=new(window.AudioContext||window.webkitAudioContext)();if(sn&&ac.state==="suspended")ac.resume();sb.setAttribute("aria-pressed",sn);sb.classList.toggle("on",sn);tone(660,.12,.04)};
document.addEventListener("mouseover",e=>{if(e.target.closest(".btn,.pcard,.step,.chip"))tone(880,.05,.012)});
document.addEventListener("click",e=>{if(e.target.closest(".btn,.pcard,.step,.chip"))tone(520,.09,.03)});

/* secret: type "roccet" or click the logo 5 times */
let buf="",lc=0,lt;
function egg(){window.RW&&RW.burst();const s=document.createElement("div");s.className="shock";document.body.appendChild(s);setTimeout(()=>s.remove(),1600);toast(D[L].egg);tone(330,.4,.05);tone(660,.5,.04)}
addEventListener("keydown",e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||!e.key)return;buf=(buf+e.key.toLowerCase()).slice(-6);if(buf==="roccet"){buf="";egg()}});
$(".logo").addEventListener("click",()=>{lc++;clearTimeout(lt);lt=setTimeout(()=>lc=0,900);if(lc>=5){lc=0;egg()}});

/* preloader: first visit per session only, never artificially long */
(function(){const p=$("#pl");let seen=0;try{seen=sessionStorage.getItem("rwp")}catch(e){}
if(RM||seen){p.remove();return}try{sessionStorage.setItem("rwp","1")}catch(e){}
const b=$("#pl .bar i"),t0=performance.now();let done=false;
const ld=new Promise(r=>document.readyState==="complete"?r():addEventListener("load",r));
(function f(){if(done)return;b.style.width=Math.min((performance.now()-t0)/10,90)+"%";requestAnimationFrame(f)})();
Promise.race([Promise.all([ld,new Promise(r=>setTimeout(r,900))]),new Promise(r=>setTimeout(r,2500))]).then(()=>{done=true;b.style.width="100%";setTimeout(()=>{p.classList.add("out");setTimeout(()=>p.remove(),1000)},250)})})();

/* PHASE 3: file absorb, light themes, dust particles, case pages, audio-reactive core */
Object.assign(D.ru,{ocase:'Открыть кейс',att:'Прикрепить файл',drop:'Отпустите файл на ядро',dropn:'Файл прикреплён к заявке и пока хранится только в браузере.',big:'Файл слишком большой (макс. 10 МБ)',lim:'Не более 5 файлов',tk:'Задача',ts:'Решение',tt:'Технологии',tn:'Это демонстрационный концепт, а не реализованный проект.',nxt:'Следующий кейс',cls:'Закрыть',atn:'Файлы отправляются вместе с заявкой при автоматической отправке. Если откроется почтовый клиент, приложите файлы к письму вручную.'});
Object.assign(D.en,{ocase:'Open case',att:'Attach a file',drop:'Drop the file onto the core',dropn:'File attached to the request and kept only in your browser for now.',big:'File is too large (10 MB max)',lim:'5 files maximum',tk:'Challenge',ts:'Solution',tt:'Technology',tn:'This is a demo concept, not a delivered project.',nxt:'Next case',cls:'Close',atn:'Files are sent with the request on automatic delivery. If your mail app opens instead, attach the files to the email manually.'});
const TL={ru:['Фиолетовый свет','Холодный свет','Тёплый свет'],en:['Violet light','Cold light','Warm light']};
const TH=[['#8B2BFF','139,43,255','#fff'],['#7fd0ff','127,208,255','#000'],['#ff9a3c','255,154,60','#000']];
const CS=[{ru:['Показать возможности студии с первого экрана без перегрузки.','Хромовое 3D-ядро, история на прокрутке и короткий путь к заявке.'],en:['Show the full range of the studio from the first screen without overload.','A chrome 3D core, a scroll story and a short path to a request.']},
{ru:['Собрать входящие обращения в одном месте и не терять их.','Панель со статусами, фильтрами и быстрыми ответами.'],en:['Gather inbound requests in one place and never lose them.','A dashboard with statuses, filters and quick replies.']},
{ru:['Отвечать на типовые вопросы сразу, а сложные передавать человеку.','Чат-ассистент с передачей диалога менеджеру.'],en:['Answer routine questions at once and hand complex ones to a person.','A chat assistant with handoff to a manager.']},
{ru:['Избавиться от ручного переноса заявок в CRM.','Автоматическое создание карточек клиентов из форм сайта.'],en:['Remove manual copying of leads into the CRM.','Automatic client cards created from website forms.']}];
/* to add a real project: put it in PJ and CS with real:true */


/* themes */
function thHtml(c){return `<div class='th ${c}' role='group'>`+TH.map((t,i)=>`<button data-th='${i}' style='background:${t[0]}'></button>`).join('')+'</div>'}
$('.right').insertAdjacentHTML('afterbegin',thHtml(''));$('#nav').insertAdjacentHTML('beforeend',thHtml('th2'));
function applyTheme(i,save){const t=TH[i]||TH[0],r=document.documentElement.style;r.setProperty('--v',t[0]);r.setProperty('--vg',`rgba(${t[1]},.35)`);r.setProperty('--vt',t[2]);
$$('.th button').forEach(b=>b.classList.toggle('on',+b.dataset.th===i));if(window.RW)RW.theme(t[0]);if(save)try{localStorage.setItem('rwt',i)}catch(e){}}
document.addEventListener('click',e=>{const b=e.target.closest('.th button');if(b)applyTheme(+b.dataset.th,true)});

/* attachments + absorb */
const files=[];
function renderAtt(){const u=$('#al');u.innerHTML='';files.forEach((f,i)=>{const li=document.createElement('li'),s=document.createElement('span'),x=document.createElement('button');s.textContent=f.name+' ('+Math.max(1,Math.round(f.size/1024))+' KB)';x.type='button';x.textContent='×';x.dataset.rm=i;x.setAttribute('aria-label','Remove');li.append(s,x);u.appendChild(li)})}
function addFiles(list){let ok=0;for(const f of list){if(files.length>=5){toast(D[L].lim);break}if(f.size>10485760){toast(D[L].big);continue}files.push(f);ok++}renderAtt();return ok}
const at=document.createElement('div');at.innerHTML=`<input type='file' id='fi' multiple hidden><button type='button' class='btn' id='fb2' data-i18n='att'></button><ul id='al'></ul><p class='atn' data-i18n='atn'></p>`;$('#f .row').before(at);
$('#fb2').onclick=()=>$('#fi').click();$('#fi').onchange=e=>{addFiles([...e.target.files]);e.target.value=''};
$('#al').onclick=e=>{const b=e.target.closest('button');if(b){files.splice(+b.dataset.rm,1);renderAtt()}};$('#f').addEventListener('reset',()=>{files.length=0;renderAtt()});
window.RWreq=(n,c,m)=>{const ex={_subject:'Заявка RoccetWeb',_template:'table',_captcha:'false'};if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))ex.email=c;if(!files.length)return{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:n,contact:c,message:m,...ex})};const fd=new FormData();fd.append('name',n);fd.append('contact',c);fd.append('message',m);for(const k in ex)fd.append(k,ex[k]);files.forEach(f=>fd.append('attachment',f));return{method:'POST',headers:{'Accept':'application/json'},body:fd}};
const ov=document.createElement('div');ov.id='dz';ov.innerHTML=`<div class='dzr'></div><p id='dzt'></p>`;document.body.appendChild(ov);
let dcnt=0;const hasF=e=>e.dataTransfer&&[...e.dataTransfer.types].includes('Files');
addEventListener('dragenter',e=>{if(!hasF(e))return;dcnt++;if(window.RW){const p=RW.pos(),r=$('.dzr');r.style.left=p[0]+'px';r.style.top=p[1]+'px'}else $('.dzr').style.cssText='left:50%;top:50%';ov.classList.add('on')});
addEventListener('dragleave',e=>{if(hasF(e)&&--dcnt<=0){dcnt=0;ov.classList.remove('on')}});
addEventListener('dragover',e=>{if(hasF(e))e.preventDefault()});
addEventListener('drop',e=>{if(!hasF(e))return;e.preventDefault();dcnt=0;ov.classList.remove('on');const fl=[...e.dataTransfer.files];if(!fl.length)return;
if(gs()&&window.RW){const f=document.createElement('div');f.className='fly';f.textContent=fl[0].name;document.body.appendChild(f);const p=RW.pos();
gsap.fromTo(f,{left:e.clientX,top:e.clientY,scale:1,opacity:1},{left:p[0],top:p[1],scale:0,opacity:.2,duration:.9,ease:'power3.in',onComplete:()=>{f.remove();RW.burst();if(addFiles(fl))toast(D[L].dropn)}})}else if(addFiles(fl))toast(D[L].dropn)});

/* case pages */
let ci=0;const cs=document.createElement('div');cs.id='cs';cs.setAttribute('role','dialog');cs.setAttribute('aria-modal','true');document.body.appendChild(cs);
function closeCase(){cs.classList.remove('on');document.body.style.overflow=''}
function openCase(i){ci=(i+PJ.length)%PJ.length;const p=PJ[ci],c=CS[ci][L],t=D[L];
cs.innerHTML=`<button class='btn' id='csx'>${t.cls}</button><div class='csh' style='--bg1:radial-gradient(circle at 30% 30%,${p.c.split(',')[0]},${p.c.split(',')[1]} 70%)'><div><span class='note'>${p.real?'':t.demo}</span><h2></h2></div></div><div class='csb'><section class='cs-s'><h3>${t.tk}</h3><p></p></section><section class='cs-s'><h3>${t.ts}</h3><p></p></section><section class='cs-s'><h3>${t.tt}</h3><div class='chips'></div></section>${p.real?'':`<p class='atn'>${t.tn}</p>`}<div class='row'><button class='btn p' id='csn'>${t.nxt}</button></div></div>`;
cs.querySelector('h2').textContent=p[L][0];const ps=cs.querySelectorAll('.cs-s p');ps[0].textContent=c[0];ps[1].textContent=c[1];
p.s.split(' · ').forEach(x=>{const s=document.createElement('span');s.className='chip';s.textContent=x;cs.querySelector('.chips').appendChild(s)});
if($('#dlg').open)$('#dlg').close();cs.classList.add('on');cs.scrollTop=0;document.body.style.overflow='hidden';$('#csx').focus();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in')}),{root:cs,threshold:.2});cs.querySelectorAll('.cs-s').forEach(s=>io.observe(s))}
cs.addEventListener('click',e=>{if(e.target.closest('#csx'))closeCase();if(e.target.closest('#csn'))openCase(ci+1)});
addEventListener('keydown',e=>{if(e.key==='Escape'&&cs.classList.contains('on'))closeCase()});
$('#dcase').onclick=()=>openCase(pi);

/* audio-reactive core: quiet drone, only after the person turns sound on */
let dr=null,lvl=0;
function drone(on){if(!ac)return;const T=ac.currentTime;if(on&&!dr){const m=ac.createGain(),an=ac.createAnalyser(),o1=ac.createOscillator(),o2=ac.createOscillator(),lf=ac.createOscillator(),lg=ac.createGain();an.fftSize=256;m.gain.setValueAtTime(0,T);o1.frequency.value=110;o2.frequency.value=164.81;lf.frequency.value=.3;lg.gain.value=.006;lf.connect(lg);lg.connect(m.gain);o1.connect(m);o2.connect(m);m.connect(an);an.connect(ac.destination);[o1,o2,lf].forEach(o=>o.start());m.gain.linearRampToValueAtTime(.014,T+1.2);dr={m,an,os:[o1,o2,lf],buf:new Uint8Array(an.fftSize)}}
else if(!on&&dr){const d=dr;dr=null;d.m.gain.cancelScheduledValues(T);d.m.gain.setValueAtTime(d.m.gain.value,T);d.m.gain.linearRampToValueAtTime(0,T+.4);setTimeout(()=>d.os.forEach(o=>o.stop()),500)}}
sb.addEventListener('click',()=>drone(sn));
document.addEventListener('visibilitychange',()=>{if(!ac)return;document.hidden?ac.suspend():(sn&&ac.resume())});
if(window.RW)RW.level=()=>{if(RM)return 0;if(!dr){lvl*=.9;return lvl<.01?0:lvl}dr.an.getByteTimeDomainData(dr.buf);let s=0;for(const b of dr.buf)s+=Math.abs(b-128);lvl+=(Math.min(1,s/dr.buf.length/128*45)-lvl)*.15;return lvl};

const _s3=setLang;setLang=l=>{_s3(l);$$('.th button').forEach(b=>b.setAttribute('aria-label',TL[l][b.dataset.th]));$('#dzt').textContent=D[l].drop;if(cs.classList.contains('on'))openCase(ci)};
let t0=0;try{t0=+localStorage.getItem('rwt')||0}catch(e){}
applyTheme(t0,false);setLang(L);

/* PHASE 4: chip fix, more concepts, email delivery */

Object.assign(D.ru,{mailfb:'Автоматическая отправка сейчас недоступна, поэтому открыт ваш почтовый клиент с готовым письмом: нажмите в нём «Отправить». Текст заявки также скопирован.',mailfa:'Файлы приложите к письму вручную.',mail:'Почта'});
Object.assign(D.en,{mailfb:'Automatic delivery is unavailable right now, so your mail app opened with a ready email: press Send there. The request text was also copied.',mailfa:'Attach the files to the email manually.',mail:'Email'});
function mailFallback(n,c,m){const b=`${D[L].fm}\n\n${D[L].fn}: ${n}\n${D[L].fc}: ${c}\n\n${m}`;cp(b);location.href='mailto:'+CONFIG.to+'?subject='+encodeURIComponent('Заявка RoccetWeb')+'&body='+encodeURIComponent(b);$('#msg').textContent=D[L].mailfb+(files.length?' '+D[L].mailfa:'')}
$('.final').insertAdjacentHTML('beforebegin',`<p class='atn' style='margin-top:28px'><span data-i18n='mail'></span>: <a href='mailto:${CONFIG.to}' style='color:#fff;text-decoration:underline'>${CONFIG.to}</a> <button type='button' class='chip' id='cpm'>${D[L].cpy}</button></p>`);
$('#cpm').onclick=async()=>{await cp(CONFIG.to);toast(D[L].cpd)};
PJ.push({c:'#b9b9c8,#1b1b24',ru:['Концепт: интернет-магазин','Витрина с 3D-просмотром товара и быстрым оформлением заказа.'],en:['Concept: online store','A storefront with a 3D product viewer and quick checkout.'],s:'React · Node · Payments API'},
{c:'#8B2BFF,#101014',ru:['Концепт: Telegram-бот записи','Бот для записи клиентов с напоминаниями и выгрузкой в таблицу.'],en:['Concept: booking Telegram bot','A bot that books clients, sends reminders and exports to a sheet.'],s:'Node · Telegram Bot API'},
{c:'#6b6b78,#2a1450',ru:['Концепт: мобильное приложение','Приложение сервиса с личным кабинетом и уведомлениями.'],en:['Concept: mobile app','A service app with an account area and notifications.'],s:'React Native · REST API'},
{c:'#d8c4ff,#101014',ru:['Концепт: личный кабинет клиента','Портал со статусами заказов, документами и перепиской.'],en:['Concept: client portal','A portal with order statuses, documents and messaging.'],s:'React · TypeScript · Auth'});
CS.push({ru:['Дать покупателю рассмотреть товар со всех сторон и быстро оформить заказ.','3D-просмотр товара, короткая корзина и интеграция с платёжным сервисом.'],en:['Let a shopper inspect a product from every side and check out fast.','A 3D product viewer, a short cart and a payment service integration.']},
{ru:['Убрать ручную запись клиентов по переписке.','Бот предлагает свободное время, подтверждает запись и напоминает о визите.'],en:['Remove manual booking through chat threads.','The bot offers free slots, confirms the booking and sends reminders.']},
{ru:['Сделать сервис доступным с телефона в одно касание.','Мобильное приложение с входом, личным кабинетом и пуш-уведомлениями.'],en:['Make a service reachable from a phone in one tap.','A mobile app with sign-in, an account area and push notifications.']},
{ru:['Дать клиентам видеть статус заказа без звонков менеджеру.','Личный кабинет со статусами, документами и перепиской по проекту.'],en:['Let clients see order status without calling a manager.','A portal with statuses, documents and project messaging.']});
setLang(L);

/* PHASE 5: richer case pages — before/after slider, concept visuals in site style */

Object.assign(D.ru,{ba:'Было / Стало',gl:'Визуалы концепта',was:'Было',now:'Стало',vn:'Иллюстрации нарисованы в стиле RoccetWeb и показывают идею концепта, а не готовый продукт.'});
Object.assign(D.en,{ba:'Before / After',gl:'Concept visuals',was:'Before',now:'After',vn:'The visuals are drawn in the RoccetWeb style and show the idea of the concept, not a finished product.'});
const I=(c,w,h,x)=>`<i class='${c}' style='width:${w}%;height:${h}px;${x||''}'></i>`;
function mk(t,a){const T=(w,h)=>I('t',w,h||6),B=(w,h)=>I('',w,h),H=(w,h,x)=>I('h',w,h,x);let s='';
if(t==='web')s=`<div class='r'>${T(12,8)}${T(28,5)}${H(16,10,'margin-left:auto')}</div><div class='r' style='flex:1'><div class='c'>${T(75,14)}${T(58,14)}${T(40,14)}${H(30,18)}</div><i class='o'></i></div><div class='r g'>${B(0,34)}${B(0,34)}${B(0,34)}</div>`;
if(t==='dash')s=`<div class='r' style='flex:1;align-items:stretch'><div class='c' style='width:18%;flex:none;justify-content:flex-start'>${T(90)}${T(70)}${T(80)}${T(60)}</div><div class='c' style='justify-content:flex-start;gap:8px'><div class='r g'>${B(0,26)}${B(0,26)}${H(0,26)}</div><div class='r' style='align-items:flex-end;height:42%'>${[40,65,50,85,60,95].map(h=>I(h>80?'h':'',0,0,'flex:1;height:'+h+'%')).join('')}</div>${T(100)}${T(85)}${T(92)}</div></div>`;
if(t==='chat')s=`<div class='c' style='gap:9px'><div class='r'>${B(46,22)}</div><div class='r' style='justify-content:flex-end'>${H(36,22)}</div><div class='r'>${B(58,22)}</div><div class='r' style='justify-content:flex-end'>${H(30,22)}</div></div><div class='r'>${B(80,14)}${H(14,14)}</div>`;
if(t==='phone')s=`<div class='r' style='flex:1;justify-content:center'><div class='ph'>${T(50)}${B(100,40)}${B(100,26)}${H(100,22)}</div></div>`;
return `<div class='mk ${a?'a':'b'}'>${s}</div>`}
const AR=['web','dash','chat','dash','web','chat','phone','dash'];
const BA={web:{ru:[['Перегруженный первый экран','Один акцент и чёткое действие'],['Плоские картинки без глубины','Хромовые 3D-объекты и свет'],['Запутанный путь к заявке','Заявка в два шага']],en:[['Overloaded first screen','One accent and a clear action'],['Flat images without depth','Chrome 3D objects and light'],['Tangled path to a request','A request in two steps']]},
dash:{ru:[['Таблицы без приоритетов','Статусы и фильтры на виду'],['Серый интерфейс без иерархии','Тёмная тема с акцентным цветом'],['Ручное обновление данных','Обновления без перезагрузки']],en:[['Tables without priorities','Statuses and filters in view'],['Grey interface without hierarchy','Dark theme with an accent colour'],['Manual data refresh','Updates without reloading']]},
chat:{ru:[['Ответы вручную','Типовые вопросы закрывает ассистент'],['Диалог теряется в переписке','Передача менеджеру с историей'],['Нет понятных кнопок','Быстрые ответы одним касанием']],en:[['Replies written by hand','The assistant handles routine questions'],['Dialogue lost in a thread','Handoff to a manager with history'],['No clear buttons','Quick replies in one tap']]},
phone:{ru:[['Мелкие элементы','Крупные карточки под большой палец'],['Один экран на всё','Разделы и понятная навигация'],['Нет уведомлений','Уведомления о важном']],en:[['Tiny elements','Large cards sized for a thumb'],['One screen for everything','Sections and clear navigation'],['No notifications','Notifications about what matters']]}};
function extra(i){const t=D[L],ar=AR[i]||'web',b=BA[ar][L],sec=document.createElement('div'),ref=cs.querySelectorAll('.cs-s')[1];
sec.innerHTML=`<section class='cs-s'><h3>${t.ba}</h3><div class='ba' style='--p:50%'>${mk(ar,0)}${mk(ar,1)}<span class='tg l'>${t.was}</span><span class='tg r2'>${t.now}</span></div><input type='range' min='5' max='95' value='50' aria-label='${t.ba}'><ul class='bl'>${b.map(x=>`<li><s>${x[0]}</s><b>${x[1]}</b></li>`).join('')}</ul></section><section class='cs-s'><h3>${t.gl}</h3><div class='gal'>${mk(ar,1)}${mk('phone',1)}<div class='orbt'><i></i></div></div><p class='atn'>${t.vn}</p></section>`;
[...sec.children].reverse().forEach(n=>ref.after(n));
const ba=cs.querySelector('.ba');cs.querySelector('.ba+input').oninput=e=>ba.style.setProperty('--p',e.target.value+'%');
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in')}),{root:cs,threshold:.15});cs.querySelectorAll('.cs-s:not(.in)').forEach(s=>io.observe(s))}
const _oc=openCase;openCase=i=>{_oc(i);extra(ci)};

/* PHASE 6: client-site showcase cases (fictional brands) + full device adaptation */

Object.assign(D.ru,{demo:'Демонстрационный проект',tn:'Демонстрационный проект для вымышленного бренда, а не реальный клиент.',pfl:'Примеры работ для вымышленных брендов: так студия подходит к разным отраслям.',vn:'Иллюстрации нарисованы в фирменных цветах бренда и показывают идею, а не готовый сайт.'});
Object.assign(D.en,{demo:'Demo project',tn:'A demo project for a fictional brand, not a real client.',pfl:'Sample work for fictional brands: this is how the studio approaches different industries.',vn:'The visuals are drawn in the brand colours and show the idea, not a finished site.'});
const _mk=mk;mk=(t,a,p)=>{const h=_mk(t,a);return(p&&a)?h.replace(`class='mk a'`,`class='mk a' style='--mbg:${p[0]};--msf:${p[1]};--mfg:${p[2]};--mac:${p[3]};--mo:${p[4]};--mr:${p[5]};--mln:${p[6]}'`):h};
const PAL={n:['#f3e9dc','#e2cfb6','#3b2a1e','#b4562b','radial-gradient(circle at 35% 30%,#e9b97d,#8a5226 60%,#3b2a1e)','14px','#0002'],l:['#f4fbfb','#d7eeee','#0d3b3d','#14b8b0','radial-gradient(circle at 35% 30%,#bff5f1,#14b8b0 55%,#0d3b3d)','22px','#0002'],a:['#0e1b33','#17284a','#f1ead8','#d4a94a','radial-gradient(circle at 35% 30%,#f5dd9a,#d4a94a 55%,#5a4310)','4px','#ffffff22'],p:['#0b0b0b','#1c1c1c','#ffffff','#c6ff3d','radial-gradient(circle at 35% 30%,#efffb8,#c6ff3d 55%,#3d5200)','6px','#ffffff22'],v:['#12281f','#1c3a2d','#f2ecd9','#e0b36a','radial-gradient(circle at 35% 30%,#f6dca4,#e0b36a 55%,#5a4420)','16px','#ffffff22'],k:['#ececec','#d4d4d6','#1f1f23','#8c1d2f','radial-gradient(circle at 35% 30%,#d97a8a,#8c1d2f 55%,#3a0a12)','2px','#0002']};
const mp=(n,k,ru,en,s,ar,ra,ea)=>({n,pal:PAL[k],c:PAL[k][3]+','+PAL[k][0],ru,en,s,act:{ru:ra,en:ea},ar});
const NEW=[mp('Nordbrew','n',['Nordbrew: интернет-магазин кофе','Магазин обжарщика с подпиской на зёрна и подбором помола.'],['Nordbrew: coffee online store','A roaster storefront with bean subscriptions and a grind picker.'],'React · Node · Payments API','web','оформления заказа','checkout'),
mp('Lumen Dental','l',['Lumen Dental: сайт стоматологии','Сайт клиники с онлайн-записью к врачу и каталогом услуг.'],['Lumen Dental: clinic website','A clinic site with online booking and a service catalog.'],'React · CMS · Booking','web','записи на приём','booking'),
mp('Atlas Realty','a',['Atlas Realty: каталог недвижимости','Каталог объектов с фильтрами, картой и заявкой на показ.'],['Atlas Realty: property catalog','A listings catalog with filters, a map and viewing requests.'],'React · TypeScript · Maps','dash','подбора объекта','finding a property'),
mp('Pulse Studio','p',['Pulse Studio: сайт фитнес-студии','Расписание занятий, абонементы и запись с телефона.'],['Pulse Studio: fitness studio site','Class schedule, memberships and booking from a phone.'],'React · Booking API','phone','записи на занятие','booking a class'),
mp('Verde Table','v',['Verde Table: сайт ресторана','Меню, фотогалерея и бронирование столика.'],['Verde Table: restaurant site','A menu, a photo gallery and table booking.'],'React · GSAP · Booking','web','бронирования стола','booking a table'),
mp('Kite Legal','k',['Kite Legal: сайт юридической фирмы','Корпоративный сайт с услугами и онлайн-консультацией.'],['Kite Legal: law firm website','A corporate site with services and online consultation.'],'React · CMS · Chat','chat','заявки юристу','contacting a lawyer')];
const NCS=[{ru:['Сделать покупку кофе быстрой и аппетитной на вид.','Тёплая витрина, подписка на зёрна и оформление в пару шагов.'],en:['Make buying coffee quick and appetizing.','A warm storefront, bean subscription and checkout in a few steps.']},
{ru:['Снять тревогу пациента и упростить запись.','Спокойный дизайн, понятный каталог услуг и онлайн-запись.'],en:['Ease patient anxiety and simplify booking.','A calm design, a clear service catalog and online booking.']},
{ru:['Помочь быстро найти нужный объект среди многих.','Фильтры, карта и короткая заявка на показ.'],en:['Help visitors find the right property among many.','Filters, a map and a short viewing request.']},
{ru:['Показать расписание и записать на занятие с телефона.','Энергичный мобильный интерфейс с записью в два касания.'],en:['Show the schedule and book a class from a phone.','An energetic mobile interface with two-tap booking.']},
{ru:['Передать атмосферу ресторана ещё до визита.','Фотогалерея, меню и бронирование столика на одной странице.'],en:['Convey the restaurant mood before the visit.','A gallery, a menu and table booking on one page.']},
{ru:['Вызвать доверие и упростить первое обращение.','Строгий корпоративный стиль и онлайн-консультация.'],en:['Build trust and simplify the first contact.','A restrained corporate style and online consultation.']}];
PJ.length=0;PJ.push(...NEW);CS.length=0;CS.push(...NCS);AR.length=0;AR.push(...NEW.map(x=>x.ar));
extra=function(i){const t=D[L],ar=AR[i]||'web',p=PJ[i],ac=p.act[L],pl=p.pal,ref=cs.querySelectorAll('.cs-s')[1],sec=document.createElement('div'),
b=L==='ru'?[['Устаревший вид без фирменного стиля','Единый фирменный стиль бренда'],['Неудобно на телефоне','Адаптивная вёрстка под все экраны'],['Сложный путь до '+ac,'Путь до '+ac+' короче и понятнее']]:[['Outdated look without a brand identity','A consistent brand identity'],['Awkward on a phone','Responsive layout for every screen'],['Complicated path to '+ac,'A shorter, clearer path to '+ac]];
sec.innerHTML=`<section class='cs-s'><h3>${t.ba}</h3><div class='ba' style='--p:50%'>${mk(ar,0)}${mk(ar,1,pl)}<span class='tg l'>${t.was}</span><span class='tg r2'>${t.now}</span></div><input type='range' min='5' max='95' value='50' aria-label='${t.ba}'><ul class='bl'>${b.map(x=>`<li><s>${x[0]}</s><b>${x[1]}</b></li>`).join('')}</ul></section><section class='cs-s'><h3>${t.gl}</h3><div class='gal'>${mk(ar,1,pl)}${mk('phone',1,pl)}<div class='orbt' style='background:${pl[0]};border-color:${pl[6]}'><div style='text-align:center'><i style='display:block;margin:0 auto 12px;width:56px;height:56px;aspect-ratio:auto;background:${pl[4]};box-shadow:0 0 30px ${pl[3]}66'></i><b style='color:${pl[2]};font:600 clamp(18px,3vw,28px) Unbounded,sans-serif'></b></div></div></div><p class='atn'>${t.vn}</p></section>`;
sec.querySelector('.orbt b').textContent=p.n;[...sec.children].reverse().forEach(n=>ref.after(n));
const ba=cs.querySelector('.ba');cs.querySelector('.ba+input').oninput=e=>ba.style.setProperty('--p',e.target.value+'%');
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in')}),{root:cs,threshold:.15});cs.querySelectorAll('.cs-s:not(.in)').forEach(s=>io.observe(s))};
const _op=openP;openP=i=>{_op(i);$('#dart').innerHTML=mk(AR[pi],1,PJ[pi].pal)};
const _s6=setLang;setLang=l=>{_s6(l);$$('.pcard .art').forEach((a,i)=>{a.innerHTML=mk(AR[i],1,PJ[i].pal)})};
setLang(L);

}
