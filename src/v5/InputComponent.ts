class InputComponent extends HTMLElement {
  private wrapper = document.createElement('div');
  private label = document.createElement('label');
  private input = document.createElement('input');
  private invalidMessage = document.createElement('span');

  constructor() {
    super();
  }

  connectedCallback() {
    // if (this.isConnected) {}
  }
}
