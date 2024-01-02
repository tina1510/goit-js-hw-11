import{i as u,S as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=document.querySelector("form"),h=document.querySelector(".gallery"),l=document.querySelector(".loader");function p(){l.classList.remove("hidden")}function a(){l.classList.add("hidden")}a();f.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.query.value;t.length<2?alert("Your length is not enough. Min 3 letters"):v(t)});const g=(s="")=>{const t=new URLSearchParams({key:"41516813-c0516a6d5bb80b940f21213c5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(o=>{if(o.ok)return o.json();throw new Error("Error")})};function y(s){h.innerHTML=s.reduce((t,{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:c,downloads:d})=>t+`
            <div class="gallery-item">
                <a href="${i}" data-lightbox="image">
                    <img src="${o}" data-source="${i}" alt="${e}">
                </a>
                <div class="text">
                <div class="text-item"><p class="likes">Likes:</p>
                <p class="likes"> ${r}</p></div>
                
               <div  class="text-item"> <p class="views">Views: </p>
                <p class="views">${n}</p></div>
               <div  class="text-item"> <p class="comments">Comments:</p>
                <p class="comments"> ${c}</p></div>
               <div  class="text-item"><p class="downloads">Downloads:</p>
                <p class="downloads"> ${d}</p></div>
                
                </div>
                
            </div>`,"")}function v(s){p(),g(s).then(t=>{a(),t.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(y(t.hits),new m(".gallery a",{}).refresh())}).catch(t=>{a(),alert(t)})}
//# sourceMappingURL=commonHelpers.js.map
