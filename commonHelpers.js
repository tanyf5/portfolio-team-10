import{a as h,i as p,A as k,S as w,N as q,b as x}from"./assets/vendor-078316ac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const a={form:document.querySelector("form"),email:document.querySelector("input[type='email']"),message:document.querySelector(".check__message")};a.email.addEventListener("input",()=>{a.email.validity.valid?(a.email.classList.add("valid"),a.message.style.color="#3cbc81",a.message.textContent=" Success!"):A()});a.form.addEventListener("submit",e=>{if(!a.email.value||!a.message.value){e.preventDefault();return}a.email.classList.remove("invalid"),a.email.classList.remove("valid"),a.message.textContent=""});function A(){a.email.validity.valid||(a.email.classList.add("invalid"),a.message.style.color="#e74a3b",a.message.textContent="Invalid email, try again")}let y={};h.defaults.baseURL="https://portfolio-js.b.goit.study/api";function M(e){h.post("/requests",e).then(function(t){y=t.data}).catch(function(t){p.error({title:"Error",message:t.status})})}const d={container:document.querySelector("#modal"),close:document.querySelector(".modal-button"),title:document.querySelector(".modal__title"),text:document.querySelector(".modal__text")};d.close.addEventListener("click",()=>{v()});d.container.addEventListener("click",e=>{e.target===d.container&&v()});document.addEventListener("keydown",e=>{e.code==="Escape"&&v()});function v(){d.container.style.display="none"}function I(){d.container.style.display="flex",d.title.innerHTML=y.title,d.text.innerHTML=y.message}p.settings({position:"topCenter"});const l={},u={form:document.querySelector("form")},b="userData",P=JSON.parse(localStorage.getItem(b));O(P);u.form.addEventListener("input",j);u.form.addEventListener("submit",_);function O(e){e&&(Object.assign(l,e),u.form.email.value=l.email,u.form.comment.value=l.comment)}function j(e){l[e.target.name]=e.target.value.trim(),localStorage.setItem(b,JSON.stringify(l))}function _(e){if(e.preventDefault(),!l.email||!l.comment){p.warning({message:"Please fill all places"});return}M(l),I();for(let t in l)l[t]="";u.form.reset(),localStorage.removeItem(b)}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-mobile-menu"),n=document.querySelector(".js-close-mobile-menu"),r=document.querySelectorAll(".mobile-menu-link"),o=document.querySelector(".order-btn-menu"),s=document.body,i=()=>{const c=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open");const f=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[f](document.body),s.classList.toggle("no-scroll",e.classList.contains("is-open"))};r.forEach(c=>c.addEventListener("click",i)),t.addEventListener("click",i),n.addEventListener("click",i),o.addEventListener("click",i)})();(()=>{const e=document.querySelector(".js-desktop-menu"),t=document.querySelector(".js-open-desktop-menu"),n=e.querySelectorAll("a"),r=()=>{const o=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",o=>{o.stopPropagation(),r()}),n.forEach(o=>o.addEventListener("click",()=>{t.setAttribute("aria-expanded","false"),e.classList.remove("is-open")})),document.addEventListener("click",o=>{!e.contains(o.target)&&!t.contains(o.target)&&(t.setAttribute("aria-expanded","false"),e.classList.remove("is-open"))})})();const $=document.querySelector(".hero-list"),N=[{text:"IG",link:"https://www.instagram.com/goitclub/"},{text:"YT",link:"https://www.youtube.com/c/GoIT"},{text:"FB",link:"https://www.facebook.com/goITclub/"},{text:"GH",link:"https://github.com/tanyf5/portfolio-team-10"},{text:"lloydjefferson@gmail.com",link:"mailto:lloydjefferson@gmail.com",class:"hero-list-email"}];function C(e){const t=e.map(n=>`
      <li class="hero-list-item ${n.class}">
        <a href="${n.link}" class="hero-link " target="_blank">${n.text}</a>
      </li>
    `).join("");$.insertAdjacentHTML("beforeend",t)}C(N);const B=document.querySelectorAll(".hero-list-item");B.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=this.querySelector(".hero-link").getAttribute("href");window.open(n,"_blank")})});const g="/portfolio-team-10/assets/icons-c732da97.svg",m={aboutAccordion:document.querySelector(".about-accordion"),swipSkill:document.querySelector(".about-swipe"),nextSlide:document.querySelector(".about-btn-next"),btnNext:document.querySelector(".about-btn-next")};//!==================== ACCORDION ======================
new k(m.aboutAccordion,{openOnInit:[0],duration:2e3,showMultiple:!0});m.aboutAccordion.addEventListener("click",e=>{const t=e.target.closest(".ac-trigger"),n=t.closest(".ac"),r=t.querySelector(".about-icon use"),o=t.closest(".is-active");if(n&&r){const s=o?"#icon-arrow-up":"#icon-arrow-down";r.setAttribute("href",`${g}${s}`)}});//!==================== SWIPER ======================
const T=new w(m.swipSkill,{modules:[q],navigation:{nextEl:m.btnNext},direction:"horizontal",spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!1,breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1}});m.btnNext.addEventListener("click",V);function V(){T.slideNext()}new w(".swiper-pr",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});new k(".accordion-container",{showMultiple:!0,duration:250});document.querySelector(".faq__list").addEventListener("click",e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const n=t.closest(".ac"),r=t.querySelector(".faq__item-icon use"),o=n.querySelector(".typed"),s=n.querySelector(".typed__strings");if(r.setAttribute("href",n.classList.contains("is-active")?`${g}#icon-arrow-up`:`${g}#icon-arrow-down`),n.classList.contains("is-active")&&(n.typedInstance&&(n.typedInstance.stop(),n.typedInstance.destroy(),n.typedInstance=null),o.innerHTML=""),n.classList.contains("is-active")){o.innerHTML="";const i={typeSpeed:0,startDelay:250,stringsElement:s,showCursor:!1,onComplete:()=>{n.typedInstance=null}};n.typedInstance=new x(o,i)}});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("keydown",t=>{t.key==="Enter"&&e.click(),t.key==="Escape"&&e.closest(".ac").classList.contains("is-active")&&e.click()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".covers-img"),t=document.querySelector(".marquee-container");new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?e.forEach(i=>{i.style.animationPlayState="running"}):e.forEach(i=>{i.style.animationPlayState="paused"})})},{threshold:.1}).observe(t);function r(o){if(o.target.nodeName!=="IMG")return;const s=o.target.parentElement,i=document.querySelectorAll(".marquee-row");o.target.style.animationPlayState==="paused"?Array.from(s.children).forEach(c=>{c.style.animationPlayState="running"}):(Array.from(s.children).forEach(c=>{c.style.animationPlayState="paused"}),i.forEach(c=>{c!==s&&Array.from(c.children).forEach(f=>{f.style.animationPlayState==="paused"&&(f.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",r)});const L=document.querySelector(".reviews-list"),S="https://portfolio-js.b.goit.study/api/reviews";console.log(S);function E(e,t,n,r){const o=`
      <li class="reviews-list-item swiper-slide" id='${e}'>
        <img src="${n}" alt="${t}" class="reviews-img">
        <div class="text-wrap">
          <h3 class="reviews-card-title">${t}</h3>
          <p class="reviews-text">${r}</p>
        </div>
      </li>
    `;L.insertAdjacentHTML("beforeend",o)}E(S);fetch(S).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log("Отримані відгуки:",e),L&&e.map(({_id:t,author:n,avatar_url:r,review:o})=>{E(t,n,r,o)})}).catch(D);function D(){p.error({backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16px",position:"topRight",message:"Sorry, no information was found!"})}new w(".reviews-swiper",{direction:"horizontal",navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev "},slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4},keyboard:{enabled:!0,onlyInViewport:!1}}});
//# sourceMappingURL=commonHelpers.js.map
