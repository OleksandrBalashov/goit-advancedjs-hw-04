import{i as p,a as m,S as v}from"./assets/vendor-9b9f006a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w=()=>{p.show({title:"Sorry!",message:"There are no images matching your search query. Please try again.",color:"red",position:"topRight",maxWidth:400})},L=r=>{p.show({title:"Hoorey!",message:`We're found ${r} images`,color:"green",position:"topRight"})},h=r=>{p.show({title:"Hey!",message:"We're sorry, but you've reached the end of search results.",color:"orange",position:"topRight"})};m.defaults.baseURL="https://pixabay.com/api/";const $="19816759-3cdd4fc89a2e26e9cfb0ce197",g=async(r,o=1,s)=>{const n=new URLSearchParams({q:r,key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:o});try{const{data:e}=await m.get(`?${n}`);if(!e.hits.length)throw new Error;return s&&L(e.totalHits),e}catch{w()}},y=r=>r.map(({webformatURL:o,largeImageURL:s,likes:n,views:e,comments:t,downloads:a,type:d})=>`
      <li class="item">
        <a href="${s}" src="${o}" class="link">
          <img src="${o}" alt="${d}" class="image" />
          <div class="info">
            <p class="info-item">
              <b>Likes <span>${n}</span></b>
            </p>
            <p class="info-item">
              <b>Views <span>${e}</span></b>
            </p>
            <p class="info-item">
              <b>Comments <span>${t}</span></b>
            </p>
            <p class="info-item">
              <b>Downloads <span>${a}</span></b>
            </p>
          </div>
        </a>
      </li>
    `).join(""),i={form:document.querySelector("#search-form"),root:document.querySelector(".gallery"),guard:document.querySelector(".guard")};let f=1,c="",u=0,b;i.form.addEventListener("submit",async r=>{r.preventDefault(),l.unobserve(i.guard);const o=new FormData(i.form),s={};if(o.forEach((a,d)=>{s[d]=a}),i.root.innerHTML="",c=s.searchQuery.trim(),f=1,!c)return;const n=await g(c,f,!0);if(!n)return;const{hits:e,totalHits:t}=n;u=e.length,i.root.insertAdjacentHTML("beforeend",y(e)),b=new v(".gallery a",{overlay:!0,spinner:!0,overlayOpacity:.8}),t===u?(l.disconnect(),h()):l.observe(i.guard)});const S={root:null,rootMargin:"100px",threshold:1},l=new IntersectionObserver(H,S);function H(r){r.forEach(async o=>{if(o.isIntersecting){f+=1;const{hits:s,totalHits:n}=await g(c,f);u+=s.length,i.root.insertAdjacentHTML("beforeend",y(s)),b.refresh(),n===u&&(l.disconnect(),h())}})}
//# sourceMappingURL=commonHelpers.js.map
