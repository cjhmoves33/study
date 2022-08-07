export default class Form extends HTMLElement {
  private form = document.createElement('form');

  constructor() {
    super();
    // TODO: Form preventDefault를 하면서 인풋컴포넌트를 어떻게 넣을것인가..
    this.appendChild(this.form);
  }
}

customElements.define('form-component', Form);
