import{i as p,a as m,S as w}from"./assets/vendor-9b9f006a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L=()=>{p.show({title:"Sorry!",message:"There are no images matching your search query. Please try again.",color:"red",position:"topRight",maxWidth:400})},v=r=>{p.show({title:"Hoorey!",message:`We're found ${r} images`,color:"green",position:"topRight"})},S=document.querySelector(".loader");function u(r){S.style.display=r?"block":"none"}m.defaults.baseURL="https://pixabay.com/api/";const $="19816759-3cdd4fc89a2e26e9cfb0ce197",h=async(r,s=1)=>{const n=new URLSearchParams({q:r,key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:s});try{u(!0);const{data:o}=await m.get(`?${n}`);if(!o.hits.length)throw new Error;return v(o.totalHits),o}catch{L()}finally{u(!1)}},g=r=>r.map(({webformatURL:s,largeImageURL:n,likes:o,views:e,comments:t,downloads:a,type:d})=>`
      <li class="item">
        <a href="${n}" src="${s}" class="link">
          <img src="${s}" alt="${d}" class="image" />
          <div class="info">
            <p class="info-item">
              <b>Likes <span>${o}</span></b>
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
    `).join(""),i={form:document.querySelector("#search-form"),root:document.querySelector(".gallery"),guard:document.querySelector(".guard")};let c=1,y="",l=0,b;i.form.addEventListener("submit",async r=>{r.preventDefault();const s=new FormData(i.form),n={};s.forEach((a,d)=>{n[d]=a}),i.root.innerHTML="",y=n.searchQuery,c=1;const{hits:o,totalHits:e}=await h(n.searchQuery,c);l=o.length,i.root.insertAdjacentHTML("beforeend",g(o)),b=new w(".gallery a",{overlay:!0,spinner:!0,overlayOpacity:.8});const{height:t}=i.root.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),e===l?f.disconnect():f.observe(i.guard)});const E={root:null,rootMargin:"50px",threshold:1},f=new IntersectionObserver(H,E);function H(r){r.forEach(async s=>{if(s.isIntersecting){c+=1;const{hits:n,totalHits:o}=await h(y,c);l+=n.length,i.root.insertAdjacentHTML("beforeend",g(n)),b.refresh(),o===l&&f.disconnect()}})}
//# sourceMappingURL=commonHelpers.js.map
