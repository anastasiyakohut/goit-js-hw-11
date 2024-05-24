import{i as n,S as m}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="https://pixabay.com/api",h="43997901-59e2ef8a5969ad3162d77619c",f=r=>{const i=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},p=r=>r.map(({webformatURL:i,largeImageURL:s,tags:o,likes:e,views:t,comments:l,downloads:d})=>`
            <li class="item-list">
                <a href="${s}" class="item-list-link">
                    <img class="item-list-img" src="${i}" alt="${o}">
                </a>
                <div class='markup-info'>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Likes</h3>
                        <p class="item-list-text">${e}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Views</h3>
                        <p class="item-list-text">${t}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Comments</h3>
                        <p class="item-list-text">${l}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Downloads</h3>
                        <p class="item-list-text">${d}</p>
                    </div>
                </div>
            </li>`).join(""),a=document.querySelector(".gallery"),y=document.querySelector(".search-field"),g=document.querySelector(".form"),c=document.querySelector(".loader");function L(r){r.preventDefault();const i=y.value.trim();if(i===""){a.innerHTML="",r.target.reset(),n.error({title:"Error",message:"Illegal operation",position:"topRight",color:"#EF4040"});return}a.innerHTML="",c.classList.remove("is-hidden"),f(i).then(s=>{if(c.classList.add("is-hidden"),s.totalHits===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040"});return}a.innerHTML=p(s.hits),new m(".gallery a").refresh()}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),c.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
