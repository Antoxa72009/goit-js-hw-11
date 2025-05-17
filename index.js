import{a as p,S as m}from"./assets/vendor-dsYlHsC8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const y="50340161-8d0ce27979907a55c95fc2abe",g="https://pixabay.com/api/";async function h(o){const s={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await p.get(g,{params:s})).data}catch(e){throw new Error("Failed to fetch images: "+e.message)}}const l=document.querySelector(".gallery"),d=document.querySelector("#loaderBox"),v=new m(".gallery a");function L(o){const s=o.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="image-details">
        <div class="info-titles">
          <span>Likes</span>
          <span>Views</span>
          <span>Comments</span>
          <span>Downloads</span>
        </div>
        <div class="info-values">
          <span>${e.likes}</span>
          <span>${e.views}</span>
          <span>${e.comments}</span>
          <span>${e.downloads}</span>
        </div>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",s),v.refresh()}function b(){l.innerHTML=""}function w(){d.classList.add("is-visible")}function E(){d.classList.remove("is-visible")}const u=document.querySelector(".form"),S=u.querySelector(".search-input"),n=document.getElementById("errorBox");document.getElementById("loaderBox");u.addEventListener("submit",async o=>{o.preventDefault(),f();const s=S.value.trim();if(!s){i("Please enter a search term.");return}b(),w();try{const e=await h(s);e.hits.length===0?i("Sorry, there are no images matching your search query. Please, try again!"):L(e.hits)}catch(e){i(e.message)}finally{E()}});function i(o){n.style.display="block",n.innerHTML=`
    <div class="error-content">
      <svg class="icon-error" width="24" height="24">
        <use href="./img/symbol-defs.svg#icon-Group"></use>
      </svg>
      <span>${o}</span>
      <button class="error-close" aria-label="Close error message">
        <svg class="icon-close" width="16" height="16">
          <use href="./img/symbol-defs.svg#icon-bi_x-lg"></use>
        </svg>
      </button>
    </div>
  `,n.querySelector(".error-close").addEventListener("click",()=>{f()})}function f(){n.style.display="none",n.innerHTML=""}
//# sourceMappingURL=index.js.map
