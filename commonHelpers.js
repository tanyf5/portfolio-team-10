import{A as n}from"./assets/vendor-8f98089f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="/portfolio-team-10/assets/icons-22d1648d.svg";new n(".accordion-container",{showMultiple:!0,duration:250});document.querySelector(".faq__list").addEventListener("click",c=>{const r=c.target.closest(".ac-trigger");if(!r)return;const s=r.closest(".ac"),o=r.querySelector(".faq__item-icon use");if(s&&o){const t=s.classList.contains("is-active")?"#icon-arrow-up":"#icon-arrow-down";o.setAttribute("href",`${l}${t}`)}});
//# sourceMappingURL=commonHelpers.js.map
