import{a as S,i as g,A as h,S as w,N as L,b as q}from"./assets/vendor-078316ac.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const a={form:document.querySelector("form"),email:document.querySelector("input[type='email']"),message:document.querySelector(".check__message")};a.email.addEventListener("input",()=>{a.email.validity.valid?x():M()});function E(){a.email.classList.remove("invalid"),a.email.classList.remove("valid"),a.message.textContent=""}function x(){a.email.classList.add("valid"),a.message.style.color="#3cbc81",a.message.textContent=" Success!"}function M(){a.email.validity.valid||(a.email.classList.add("invalid"),a.message.style.color="#e74a3b",a.message.textContent="Invalid email, try again")}const d={container:document.querySelector("#modal"),close:document.querySelector(".modal-button"),title:document.querySelector(".modal__title"),text:document.querySelector(".modal__text")};d.close.addEventListener("click",()=>{v()});d.container.addEventListener("click",e=>{e.target===d.container&&v()});document.addEventListener("keydown",e=>{e.code==="Escape"&&v()});function v(){d.container.style.display="none"}function A(e){d.container.style.display="flex",d.title.innerHTML=e.title,d.text.innerHTML=e.message}S.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function I(e){S.post("/requests",e).then(function(n){A(n.data)}).catch(function(n){})}g.settings({position:"topCenter"});const l={},f={form:document.querySelector("form")},b="userData",P=JSON.parse(localStorage.getItem(b));O(P);function O(e){e&&(Object.assign(l,e),f.form.email.value=l.email,f.form.comment.value=l.comment)}f.form.addEventListener("input",$);function $(e){l[e.target.name]=e.target.value.trim(),localStorage.setItem(b,JSON.stringify(l))}function _(){for(let e in l)l[e]="";f.form.reset(),localStorage.removeItem(b)}const p={form:document.querySelector("form"),email:document.querySelector('input[name="email"]'),comment:document.querySelector('input[name="comment"]')};p.form.addEventListener("submit",async function(e){if(e.preventDefault(),!p.email.value||!p.comment.value){g.warning({message:"Please fill all places"});return}await I(l),_(),E()});(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-mobile-menu"),o=document.querySelector(".js-close-mobile-menu"),r=document.querySelectorAll(".mobile-menu-link"),t=document.querySelector(".order-btn-menu"),s=document.body,i=()=>{const c=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!c),e.classList.toggle("is-open");const m=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[m](document.body),s.classList.toggle("no-scroll",e.classList.contains("is-open"))};r.forEach(c=>c.addEventListener("click",i)),n.addEventListener("click",i),o.addEventListener("click",i),t.addEventListener("click",i)})();(()=>{const e=document.querySelector(".js-desktop-menu"),n=document.querySelector(".js-open-desktop-menu"),o=e.querySelectorAll("a"),r=()=>{const t=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open")};n.addEventListener("click",t=>{t.stopPropagation(),r()}),o.forEach(t=>t.addEventListener("click",()=>{n.setAttribute("aria-expanded","false"),e.classList.remove("is-open")})),document.addEventListener("click",t=>{!e.contains(t.target)&&!n.contains(t.target)&&(n.setAttribute("aria-expanded","false"),e.classList.remove("is-open"))})})();const j=document.querySelector(".hero-list"),N=[{text:"IG",link:"https://www.instagram.com/goitclub/"},{text:"YT",link:"https://www.youtube.com/c/GoIT"},{text:"FB",link:"https://www.facebook.com/goITclub/"},{text:"GH",link:"https://github.com/tanyf5/portfolio-team-10"},{text:"lloydjefferson@gmail.com",link:"mailto:lloydjefferson@gmail.com",class:"hero-list-email"}];function C(e){const n=e.map(o=>`
      <li class="hero-list-item ${o.class}">
        <a href="${o.link}" class="hero-link " target="_blank">${o.text}</a>
      </li>
    `).join("");j.insertAdjacentHTML("beforeend",n)}C(N);const V=document.querySelectorAll(".hero-list-item");V.forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const o=this.querySelector(".hero-link").getAttribute("href");window.open(o,"_blank")})});const y="/portfolio-team-10/assets/icons-c732da97.svg",u={aboutAccordion:document.querySelector(".about-accordion"),swipSkill:document.querySelector(".about-swipe"),nextSlide:document.querySelector(".about-btn-next"),btnNext:document.querySelector(".about-btn-next")};//!==================== ACCORDION ======================
new h(u.aboutAccordion,{openOnInit:[0],duration:2e3,showMultiple:!0});u.aboutAccordion.addEventListener("click",e=>{const n=e.target.closest(".ac-trigger"),o=n.closest(".ac"),r=n.querySelector(".about-icon use"),t=n.closest(".is-active");if(o&&r){const s=t?"#icon-arrow-up":"#icon-arrow-down";r.setAttribute("href",`${y}${s}`)}});//!==================== SWIPER ======================
const B=new w(u.swipSkill,{modules:[L],navigation:{nextEl:u.btnNext},direction:"horizontal",spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!1,breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1}});u.btnNext.addEventListener("click",T);function T(){B.slideNext()}new w(".swiper-pr",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});new h(".accordion-container",{showMultiple:!0,duration:800});document.querySelector(".faq__list").addEventListener("click",e=>{const n=e.target.closest(".ac-trigger");if(!n)return;const o=n.closest(".ac"),r=n.querySelector(".faq__item-icon use"),t=o.querySelector(".typed"),s=o.querySelector(".typed__strings");if(r.setAttribute("href",o.classList.contains("is-active")?`${y}#icon-arrow-up`:`${y}#icon-arrow-down`),o.classList.contains("is-active")&&(o.typedInstance&&(o.typedInstance.stop(),o.typedInstance.destroy(),o.typedInstance=null),t.innerHTML=""),o.classList.contains("is-active")){t.innerHTML="";const i={typeSpeed:1,startDelay:250,stringsElement:s,showCursor:!1,onComplete:()=>{o.typedInstance=null}};o.typedInstance=new q(t,i)}});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("keydown",n=>{n.key==="Enter"&&e.click(),n.key==="Escape"&&e.closest(".ac").classList.contains("is-active")&&e.click()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".covers-img"),n=document.querySelector(".marquee-container");new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting?e.forEach(i=>{i.style.animationPlayState="running"}):e.forEach(i=>{i.style.animationPlayState="paused"})})},{threshold:.1}).observe(n);function r(t){if(t.target.nodeName!=="IMG")return;const s=t.target.parentElement,i=document.querySelectorAll(".marquee-row");t.target.style.animationPlayState==="paused"?Array.from(s.children).forEach(c=>{c.style.animationPlayState="running"}):(Array.from(s.children).forEach(c=>{c.style.animationPlayState="paused"}),i.forEach(c=>{c!==s&&Array.from(c.children).forEach(m=>{m.style.animationPlayState==="paused"&&(m.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",r)});const k=document.querySelector(".reviews-list"),D="https://portfolio-js.b.goit.study/api/reviews";function H(e,n,o,r){const t=`
      <li class="reviews-list-item swiper-slide" id='${e}'>
        <img src="${o}" alt="${n}" class="reviews-img">
        <div class="text-wrap">
          <h3 class="reviews-card-title">${n}</h3>
          <p class="reviews-text">${r}</p>
        </div>
      </li>
    `;k.insertAdjacentHTML("beforeend",t)}fetch(D).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{k&&e.map(({_id:n,author:o,avatar_url:r,review:t})=>{H(n,o,r,t)})}).catch(z);function z(){g.error({backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16px",position:"topRight",message:"Sorry, no information was found!"})}new w(".reviews-swiper",{direction:"horizontal",navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev "},slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4},keyboard:{enabled:!0,onlyInViewport:!1}}});
//# sourceMappingURL=commonHelpers.js.map
