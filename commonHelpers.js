import{A as u,S as d,N as m,i as f}from"./assets/vendor-30849186.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-mobile-menu"),n=document.querySelector(".js-close-mobile-menu"),s=document.querySelectorAll(".mobile-menu-link"),e=document.querySelector(".order-btn-menu"),r=()=>{const i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!i),o.classList.toggle("is-open");const p=i?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[p](document.body)};s.forEach(i=>i.addEventListener("click",r)),t.addEventListener("click",r),n.addEventListener("click",r),e.addEventListener("click",r)})();(()=>{const o=document.querySelector(".js-desktop-menu"),t=document.querySelector(".js-open-desktop-menu"),n=o.querySelectorAll("a"),s=()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!e),o.classList.toggle("is-visible"),setTimeout(()=>{o.classList.toggle("is-open")},10)};t.addEventListener("click",e=>{e.stopPropagation(),s()}),n.forEach(e=>e.addEventListener("click",()=>{t.setAttribute("aria-expanded","false"),o.classList.remove("is-open")})),document.addEventListener("click",e=>{!o.contains(e.target)&&!t.contains(e.target)&&(t.setAttribute("aria-expanded","false"),o.classList.remove("is-open"))})})();const y=document.querySelector(".hero-list"),g=[{text:"IG",link:"https://www.instagram.com/goitclub/"},{text:"YT",link:"https://www.youtube.com/c/GoIT"},{text:"FB",link:"https://www.facebook.com/goITclub/"},{text:"GH",link:"https://github.com/tanyf5/portfolio-team-10"},{text:"lloydjefferson@gmail.com",link:"mailto:lloydjefferson@gmail.com",class:"hero-list-email"}];function b(o){const t=o.map(n=>`
      <li class="hero-list-item ${n.class}">
        <a href="${n.link}" class="hero-link " target="_blank">${n.text}</a>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",t)}b(g);const w=document.querySelectorAll(".hero-list-item");w.forEach(o=>{o.addEventListener("click",function(t){t.preventDefault();const n=this.querySelector(".hero-link").getAttribute("href");window.open(n,"_blank")})});const a="/portfolio-team-10/assets/icons-c732da97.svg",c={aboutAccordion:document.querySelector(".about-accordion"),swipSkill:document.querySelector(".about-swipe"),nextSlide:document.querySelector(".about-btn-next"),btnNext:document.querySelector(".about-btn-next")};//!==================== ACCORDION ======================
new u(c.aboutAccordion,{openOnInit:[0],duration:2e3,showMultiple:!0});c.aboutAccordion.addEventListener("click",o=>{const t=o.target.closest(".ac-trigger"),n=t.closest(".ac"),s=t.querySelector(".about-icon use"),e=t.closest(".is-active");if(n&&s){const r=e?"#icon-arrow-up":"#icon-arrow-down";s.setAttribute("href",`${a}${r}`)}});//!==================== SWIPER ======================
const k=new d(c.swipSkill,{modules:[m],navigation:{nextEl:c.btnNext},direction:"horizontal",slidesPerView:2,spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});c.btnNext.addEventListener("click",S);function S(){k.slideNext()}new d(".swiper-pr",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});new u(".accordion-container",{showMultiple:!0,duration:250});document.querySelector(".faq__list").addEventListener("click",o=>{const t=o.target.closest(".ac-trigger");if(!t)return;const n=t.closest(".ac"),s=t.querySelector(".faq__item-icon use"),e=n.querySelector(".typed"),r=n.querySelector(".typed__strings");if(s.setAttribute("href",n.classList.contains("is-active")?`${a}#icon-arrow-up`:`${a}#icon-arrow-down`),n.classList.contains("is-active")&&(n.typedInstance&&(n.typedInstance.stop(),n.typedInstance.destroy(),n.typedInstance=null),e.innerHTML=""),n.classList.contains("is-active")){e.innerHTML="";const i={typeSpeed:0,startDelay:250,stringsElement:r,showCursor:!1,onComplete:()=>{n.typedInstance=null}};n.typedInstance=new f(e,i)}});document.querySelectorAll(".ac-trigger").forEach(o=>{o.addEventListener("keydown",t=>{t.key==="Enter"&&o.click()})});const l=document.querySelectorAll(".covers-img");document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".marquee-container");new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting?l.forEach(e=>{e.style.animationPlayState="running"}):l.forEach(e=>{e.style.animationPlayState="paused"})})},{threshold:.5}).observe(o)});function h(o){const t=o.target.parentElement;Array.from(t.children).forEach(n=>{n.style.animationPlayState==="paused"?n.style.animationPlayState="running":n.style.animationPlayState="paused"})}l.forEach(o=>{o.addEventListener("click",h)});
//# sourceMappingURL=commonHelpers.js.map
