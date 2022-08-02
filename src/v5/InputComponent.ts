export default class InputComponent extends HTMLElement {
  private wrapper = document.createElement('div');
  private label = document.createElement('label');
  private input = document.createElement('input');
  private invalidMessageSpan = document.createElement('span');

  private pattern = this.getAttribute('pattern');
  private maxLength = this.getAttribute('maxLength');
  private invalidMessage = this.getAttribute('invalidMessage');
  private requireMessage = this.getAttribute('requireMessage');
  private maxLengthMessage = this.getAttribute('maxLengthMessage');

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.isConnected) {
      // this.getAttribute('pattern');
      // this.getAttribute('maxLength');
      // this.getAttribute('invalidMessage');
      // this.getAttribute('requireMessage');
      // this.getAttribute('maxLengthMessage');
    }
  }
}

customElements.define('input-component', InputComponent);
