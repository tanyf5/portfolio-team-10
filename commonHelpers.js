import{A as a,S as u,N as d,i as p}from"./assets/vendor-30849186.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const f=document.querySelector(".hero-list"),m=[{text:"IG",link:"https://www.instagram.com/goitclub/"},{text:"YT",link:"https://www.youtube.com/c/GoIT"},{text:"FB",link:"https://www.facebook.com/goITclub/"},{text:"GH",link:"https://github.com/tanyf5/portfolio-team-10"},{text:"lloydjefferson@gmail.com",link:"mailto:lloydjefferson@gmail.com",class:"hero-list-email"}];function y(r){const o=r.map(e=>`
      <li class="hero-list-item ${e.class}">
        <a href="${e.link}" class="hero-link " target="_blank">${e.text}</a>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",o)}y(m);const w=document.querySelectorAll(".hero-list-item");w.forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();const e=this.querySelector(".hero-link").getAttribute("href");window.open(e,"_blank")})});const l="/portfolio-team-10/assets/icons-22d1648d.svg",c={aboutAccordion:document.querySelector(".about-accordion"),swipSkill:document.querySelector(".about-swipe"),nextSlide:document.querySelector(".about-btn-next"),btnNext:document.querySelector(".about-btn-next")};//!==================== ACCORDION ======================
new a(c.aboutAccordion,{openOnInit:[0],collapse:!1,duration:2e3,showMultiple:!0});c.aboutAccordion.addEventListener("click",r=>{const o=r.target.closest(".ac"),e=o.classList.contains("is-active");let i=o.querySelector(".about-icon use");if(i&&o){const t=e?"./img/icons.svg#icon-arrow-up":"./img/icons.svg#icon-arrow-down";i.setAttribute("href",`${t}`)}});//!==================== SWIPER ======================
const g=new u(c.swipSkill,{modules:[d],navigation:{nextEl:c.btnNext},direction:"horizontal",slidesPerView:2,spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});c.btnNext.addEventListener("click",b);function b(){g.slideNext()}new u(".swiper-pr",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});new a(".accordion-container",{showMultiple:!0,duration:250});document.querySelector(".faq__list").addEventListener("click",r=>{const o=r.target.closest(".ac-trigger");if(!o)return;const e=o.closest(".ac"),i=o.querySelector(".faq__item-icon use"),t=e.querySelector(".typed"),n=e.querySelector(".typed__strings");if(i.setAttribute("href",e.classList.contains("is-active")?`${l}#icon-arrow-up`:`${l}#icon-arrow-down`),e.classList.contains("is-active")&&(e.typedInstance&&(e.typedInstance.stop(),e.typedInstance.destroy(),e.typedInstance=null),t.innerHTML=""),e.classList.contains("is-active")){t.innerHTML="";const s={typeSpeed:0,startDelay:250,stringsElement:n,showCursor:!1,onComplete:()=>{e.typedInstance=null}};e.typedInstance=new p(t,s)}});document.querySelectorAll(".ac-trigger").forEach(r=>{r.addEventListener("keydown",o=>{o.key==="Enter"&&r.click()})});
//# sourceMappingURL=commonHelpers.js.map
