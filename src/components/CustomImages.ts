class CustomImages extends HTMLElement {
  #wrapper = document.createElement("div");
  #img = document.createElement("img");
  #text = document.createElement("p");

  constructor() {
    super(); // 반드시 super를 호출해야한다.
    this.attachShadow({ mode: "open" });
    // 'close'모드라면 'myCustomElem.shadowRoot'로 접근할 수 없다. 하지만 상당히 쉽게 우회가능.

    this.#text.innerText = "hello world";

    this.#img.src = "https://ik.imagekit.io/demo/default-image.jpg";
    this.#img.style.width = "200px";

    this.#wrapper.appendChild(this.#img);
    this.#wrapper.appendChild(this.#text);

    this.shadowRoot?.appendChild(this.#wrapper);
  }

  // 생명주기 콜백
  connectedCallback() {
    // 사용자 정의 요소가 문서에 연결된 요소에 추가될 때마다 호출.
    // 이것은 노드가 이동될 때마다 발생할 것이며, 요소의 내용이 완전히 해석되기 전에 발생할 지도 모름.
    // connectedCallback은 요소가 더 이상 연결되지 않았을 떄 호출될 수도 있으므로, 확실하게 하기위해선 Node.isConnected를 사용해야함.
    console.log("connectedCallback");
    console.log(this.getAttribute("range"));
  }

  disconnectedCallback() {
    // 사용자 정의 요소가 document의 DOM에서 연결 해제되었을 때마다 호출.
    console.log("disconnectedCallback");
  }

  adoptedCAllback() {
    // 사용자 정의 요소가 새로운 document로 이동되었을 때마다 호출.
    console.log("adoptedCAllback");
  }

  attributeChangedCallback() {
    // 사용자 정의 요소의 특성들 중 하나가 추가되거나, 제거되거나, 변경될 때마다 호출,
    // 어떤 특성이 변경에 대해 알릴지는 'static get observedAttributes' 메서드에서 명시됨.
    console.log("attributeChangedCallback");
  }
}

function __init__() {
  customElements.define("custom-images", CustomImages);
}

__init__();
