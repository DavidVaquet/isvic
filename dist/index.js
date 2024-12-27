function toggleAccordion(n){const e=document.getElementById(`content-${n}`),t=document.getElementById(`icon-${n}`),o=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `,l=`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;e.style.maxHeight&&e.style.maxHeight!=="0px"?(e.style.maxHeight="0",t.innerHTML=l):(e.style.maxHeight=e.scrollHeight+"px",t.innerHTML=o)}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".carousel-track"),e=n.querySelectorAll(".carousel-item");for(let t=0;t<e.length;t++){const o=e[t].cloneNode(!0);n.appendChild(o)}});
