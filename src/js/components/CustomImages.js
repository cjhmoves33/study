class a extends HTMLElement{wrapper=document.createElement("div");constructor(){super()}initImage(){const a=this.getAttribute("image-size");const b=this.getAttribute("range");for(let c=0;c<=Number(b);c++){const d=document.createElement("img");d.classList.add("lazy");d.dataset.src="https://ik.imagekit.io/demo/default-image.jpg";d.style.width=a;d.style.height="600px";this.wrapper.appendChild(d)}}setImageSrc(a){const b=window.pageYOffset;const c=window.innerHeight;const d=b+c;if(a.offsetTop>b&&a.offsetTop<d){a.src=a.dataset.src;a.classList.remove("lazy")}}setLazyLoadListener(){const a=document.querySelectorAll("img.lazy");let b;const c=()=>{if(b)clearTimeout(b);b=setTimeout(()=>{a.forEach(this.setImageSrc)},10)};document.addEventListener("scroll",c);document.addEventListener("resize",c);screen.orientation.addEventListener("change",c)}setImageInViewport(){const a=document.querySelectorAll("img.lazy");a.forEach(this.setImageSrc)}connectedCallback(){this.appendChild(this.wrapper);this.initImage();document.addEventListener("DOMContentLoaded",this.setLazyLoadListener.bind(this));document.addEventListener("DOMContentLoaded",this.setImageInViewport.bind(this))}disconnectedCallback(){console.log("disconnectedCallback")}adoptedCallback(){console.log("adoptedCallback")}attributeChangedCallback(){console.log("attributeChangedCallback")}}function b(){customElements.define("custom-images",a)}b()