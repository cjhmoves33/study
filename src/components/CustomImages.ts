class CustomImages extends HTMLElement {
  private wrapper = document.createElement("div");

  constructor() {
    super(); // 반드시 super를 호출해야한다.

    // this.attachShadow({ mode: "open" }); // 'close'모드라면 'myCustomElem.shadowRoot'로 접근할 수 없다. 하지만 상당히 쉽게 우회가능.
    // this.shadowRoot?.appendChild(this.wrapper);
  }

  private initImage() {
    const imageSize = this.getAttribute("image-size") as string;
    const imageRange = this.getAttribute("range") as string;

    for (let i = 0; i <= Number(imageRange); i++) {
      const lazyImage = document.createElement("img");

      lazyImage.classList.add("lazy");
      lazyImage.dataset.src = "https://ik.imagekit.io/demo/default-image.jpg";
      lazyImage.style.width = imageSize;
      lazyImage.style.height = "600px";

      this.wrapper.appendChild(lazyImage);
    }
  }

  static setImageSrc(lazyImg: HTMLImageElement) {
    const scrollY = window.pageYOffset; // 원점으로 부터 스크롤된 픽셀값.
    const viewportHeight = window.innerHeight; // 브라우저가 가지는 높이. 뷰포트 height;
    const viewport = scrollY + viewportHeight; // HTMLElement의 상단부가 해당페이지에서 가지는 y축값

    if (lazyImg.offsetTop > scrollY && lazyImg.offsetTop < viewport) {
      lazyImg.src = lazyImg.dataset.src as string;
      lazyImg.classList.remove("lazy");
    }
  }

  private setLazyLoadListener() {
    const lazyImgs = document.querySelectorAll<HTMLImageElement>("img.lazy"); // NodeListOf<T>

    let lazyLoadThrottle: ReturnType<typeof setTimeout>;

    const lazyLoad = () => {
      if (lazyLoadThrottle) clearTimeout(lazyLoadThrottle);

      lazyLoadThrottle = setTimeout(() => {
        lazyImgs.forEach(CustomImages.setImageSrc);
      }, 10);
    };

    document.addEventListener("scroll", lazyLoad);
    document.addEventListener("resize", lazyLoad);
    screen.orientation.addEventListener("change", lazyLoad); // https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation#browser_compatibility
  }

  private setImageInViewport() {
    const lazyImgs = document.querySelectorAll<HTMLImageElement>("img.lazy");
    lazyImgs.forEach(CustomImages.setImageSrc);
  }

  // 생명주기 콜백
  connectedCallback() {
    // 사용자 정의 요소가 문서에 연결된 요소에 추가될 때마다 호출.
    // 이것은 노드가 이동될 때마다 발생할 것이며, 요소의 내용이 "완전히 해석되기 전"에 발생할 지도 모름.
    // connectedCallback은 요소가 더 이상 연결되지 않았을 떄 호출될 수도 있으므로, 확실하게 하기위해선 Node.isConnected를 사용해야함.
    this.appendChild(this.wrapper);
    this.initImage();

    document.addEventListener("DOMContentLoaded", this.setLazyLoadListener);
    document.addEventListener("DOMContentLoaded", this.setImageInViewport);
  }

  disconnectedCallback() {
    // 사용자 정의 요소가 document의 DOM에서 연결 해제되었을 때마다 호출.
    console.log("disconnectedCallback");
  }

  adoptedCallback() {
    // 사용자 정의 요소가 새로운 document로 이동되었을 때마다 호출.
    console.log("adoptedCallback");
  }

  attributeChangedCallback() {
    // 사용자 정의 요소의 특성들 중 하나가 추가되거나, 제거되거나, 변경될 때마다 호출,
    // 어떤 특성이 변경에 대해 알릴지는 'static get observedAttributes' 메서드에서 명시됨.
    console.log("attributeChangedCallback");
  }
}

function __createCustomElement__() {
  customElements.define("custom-images", CustomImages);
}

__createCustomElement__();
