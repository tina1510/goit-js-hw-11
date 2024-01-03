import{i as l,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=document.querySelector("form"),p=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(){c.classList.remove("hidden")}function a(){c.classList.add("hidden")}a();h.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.query.value;t.length<=3?l.error({message:"Your length is not enough. Min 3 letters",position:"topRight"}):L(t)});const y=(s="")=>{const t=new URLSearchParams({key:"41516813-c0516a6d5bb80b940f21213c5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(o=>{if(o.ok)return o.json();throw new Error("Error")})};function v(s){const t=s.reduce((o,{webformatURL:n,largeImageURL:e,tags:r,likes:i,views:d,comments:u,downloads:m})=>o+`
            <div class="gallery-item">
                <a href="${e}" data-lightbox="image">
                    <img src="${n}" data-source="${e}" alt="${r}">
                </a>
                <div class="text">
                <div class="text-item"><p class="likes">Likes:</p>
                <p class="likes"> ${i}</p></div>
                
               <div  class="text-item"> <p class="views">Views: </p>
                <p class="views">${d}</p></div>
               <div  class="text-item"> <p class="comments">Comments:</p>
                <p class="comments"> ${u}</p></div>
               <div  class="text-item"><p class="downloads">Downloads:</p>
                <p class="downloads"> ${m}</p></div>
                
                </div>
                
            </div>`,"");p.insertAdjacentHTML("afterbegin",t)}function L(s){g(),y(s).then(t=>{a(),t.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(v(t.hits),new f(".gallery a",{}).refresh())}).catch(t=>{a(),alert(t)})}
//# sourceMappingURL=commonHelpers.js.map
