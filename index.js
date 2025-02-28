import{a as v,i as d,S as x}from"./assets/vendor-C_7oAj77.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector("#loading");async function g(t,a){try{u.classList.add("loader");const o={key:"48946065-1d1345988ab2399d45be7b206",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:40},i=await v.get("https://pixabay.com/api/",{params:o});return i.data.hits.length===0&&d.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",theme:"dark",messageSize:"16",backgroundColor:"#ef4040",messageColor:"#fafafb",iconColor:"#fafafb"}),u.classList.remove("loader"),i.data}catch(o){d.error({title:"Unexpected Error",message:`${o}`,position:"topRight",maxWidth:"432px",theme:"dark",messageSize:"16",backgroundColor:"#ef4040",messageColor:"#fafafb",iconColor:"#fafafb"}),u.classList.remove("loader")}}function b(t){const{webformatURL:a,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:y}=t;return`
        <a class="gallery-item" href="${o}">
            <img class="gallery-image" src="${a}" alt="${i}" data-source="${o}" />
            <div class="image-features">
                <div class="features-text-field">
                    <p class="image-feature-text">Likes</p>
                    <p class="image-feature-text">${e}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Views</p>
                    <p class="image-feature-text">${r}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Comments</p>
                    <p class="image-feature-text">${n}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Downloads</p>
                    <p class="image-feature-text">${y}</p>
                </div>
            </div>
        </a>
    `}function p(t){return t.map(b).join("")}const L={form:document.querySelector(".search-form"),formInput:document.querySelector(".input-field"),gallery:document.querySelector(".gallery"),loadButton:document.querySelector(".load-btn")},{form:S,formInput:c,gallery:l,loadButton:f}=L,s={query:"",page:1,total:100,perPage:40,maxPage:10};let m=new x(".gallery a");S.addEventListener("submit",async t=>{if(t.preventDefault(),c.value.trim()===""){c.value="";return}document.querySelector(".gallery").innerHTML="",s.page=1,s.query=c.value.trim();const a=await g(s.query,s.page);s.total=a.totalHits,s.maxPage=Math.ceil(s.total/s.perPage);const o=p(a.hits);l.innerHTML=o,c.value="",m.refresh(),h()});f.addEventListener("click",async t=>{q()});l.addEventListener("click",t=>{t.preventDefault(),t.target!==l&&m.open(t.target)});async function q(){s.page+=1;const t=await g(s.query,s.page),a=p(t.hits);l.insertAdjacentHTML("beforeend",a),P(),m.refresh(),h()}function h(){s.page>=s.maxPage?(f.classList.add("visually-hidden"),d.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"432px",messageSize:"16"})):f.classList.remove("visually-hidden")}function P(){const a=l.firstElementChild.getBoundingClientRect().height;scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
