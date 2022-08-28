export default class CustomImagesTimeout extends HTMLElement {
    wrapper = document.createElement("div");
    constructor(){
        super();
    }
    initImage() {
        const imageSize = this.getAttribute("image-size");
        const imageRange = this.getAttribute("range");
        for(let i = 0; i <= Number(imageRange); i++){
            const lazyImage = document.createElement("img");
            lazyImage.classList.add("lazy");
            lazyImage.dataset.src = "https://ik.imagekit.io/demo/default-image.jpg";
            lazyImage.style.width = imageSize;
            lazyImage.style.height = "600px";
            this.wrapper.appendChild(lazyImage);
        }
    }
    setImageSrc(lazyImg) {
        const scrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const viewport = scrollY + viewportHeight;
        if (lazyImg.offsetTop > scrollY && lazyImg.offsetTop < viewport) {
            lazyImg.src = lazyImg.dataset.src;
            lazyImg.classList.remove("lazy");
        }
    }
    setLazyLoadListener() {
        const lazyImgs = document.querySelectorAll("img.lazy");
        let lazyLoadThrottle;
        const lazyLoad = ()=>{
            if (lazyLoadThrottle) clearTimeout(lazyLoadThrottle);
            lazyLoadThrottle = setTimeout(()=>{
                lazyImgs.forEach(this.setImageSrc);
            }, 10);
        };
        document.addEventListener("scroll", lazyLoad);
        document.addEventListener("resize", lazyLoad);
        screen.orientation.addEventListener("change", lazyLoad);
    }
    setImageInViewport() {
        const lazyImgs = document.querySelectorAll("img.lazy");
        lazyImgs.forEach(this.setImageSrc);
    }
    connectedCallback() {
        this.appendChild(this.wrapper);
        this.initImage();
        document.addEventListener("DOMContentLoaded", this.setLazyLoadListener.bind(this));
        document.addEventListener("DOMContentLoaded", this.setImageInViewport.bind(this));
    }
    disconnectedCallback() {
        console.log("disconnectedCallback");
    }
    adoptedCallback() {
        console.log("adoptedCallback");
    }
    attributeChangedCallback() {
        console.log("attributeChangedCallback");
    }
};
function __createCustomElement__() {
    customElements.define("custom-images", CustomImagesTimeout);
}
__createCustomElement__();
