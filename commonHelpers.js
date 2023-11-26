import{i as d,a as p,S as v}from"./assets/vendor-9b9f006a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w=()=>{d.show({title:"Sorry!",message:"There are no images matching your search query. Please try again.",color:"red",position:"topRight",maxWidth:400})},L=r=>{d.show({title:"Hoorey!",message:`We're found ${r} images`,color:"green",position:"topRight"})},m=r=>{d.show({title:"Hey!",message:"We're sorry, but you've reached the end of search results.",color:"orange",position:"topRight"})};p.defaults.baseURL="https://pixabay.com/api/";const $="19816759-3cdd4fc89a2e26e9cfb0ce197",h=async(r,o=1,s)=>{const n=new URLSearchParams({q:r,key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:o});try{const{data:e}=await p.get(`?${n}`);if(!e.hits.length)throw new Error;return s&&L(e.totalHits),e}catch{w()}},g=r=>r.map(({webformatURL:o,largeImageURL:s,likes:n,views:e,comments:t,downloads:a,type:b})=>`
      <li class="item">
        <a href="${s}" src="${o}" class="link">
          <img src="${o}" alt="${b}" class="image" />
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
    `).join(""),i={form:document.querySelector("#search-form"),root:document.querySelector(".gallery"),guard:document.querySelector(".guard")};let f=1,c="",u=0,y;i.form.addEventListener("submit",async r=>{r.preventDefault(),l.unobserve(i.guard);const o=new FormData(i.form),s={};if(o.forEach((t,a)=>{s[a]=t}),i.root.innerHTML="",c=s.searchQuery.trim(),f=1,!c)return;const{hits:n,totalHits:e}=await h(c,f,!0);u=n.length,i.root.insertAdjacentHTML("beforeend",g(n)),y=new v(".gallery a",{overlay:!0,spinner:!0,overlayOpacity:.8}),e===u?(l.disconnect(),m()):l.observe(i.guard)});const S={root:null,rootMargin:"100px",threshold:1},l=new IntersectionObserver(H,S);function H(r){r.forEach(async o=>{if(o.isIntersecting){f+=1;const{hits:s,totalHits:n}=await h(c,f);u+=s.length,i.root.insertAdjacentHTML("beforeend",g(s)),y.refresh(),n===u&&(l.disconnect(),m())}})}
//# sourceMappingURL=commonHelpers.js.map
