var u=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);import{S as d,i}from"./assets/vendor-5b791d57.js";var b=u((q,c)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const p=new d(".gallery a");function f(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}" target="_blank">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
       <p><i class="img-text">Likes </i><span>${e.likes}</span></p>
        <p><i class="img-text">Views </i><span>${e.views}</span></p>
        <p><i class="img-text">Comments </i><span>${e.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${e.downloads}</span></p>
      </div>
    </div>
  `).join(""),p.refresh()}const m="42334631-07f239856d3b6a49db441bfb9";function y(o){const t=document.querySelector(".loader");t.style.display="block",fetch(`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),t.style.display="none",e.hits.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(e.hits)}).catch(e=>{console.error("Error fetching images:",e),t.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const h=document.querySelector("#search-form"),l=document.querySelector("#search-input");h.addEventListener("submit",o=>{o.preventDefault();const t=l.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query"});return}y(t),l.value=""});const g=require("path");c.exports={entry:"./src/main.js",output:{filename:"bundle.js",path:g.resolve(__dirname,"dist")},module:{rules:[{test:/\.css$/i,use:["style-loader","css-loader"]}]}}});export default b();
//# sourceMappingURL=commonHelpers.js.map
