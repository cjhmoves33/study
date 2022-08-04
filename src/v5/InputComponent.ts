import { getValidationRule } from '@/module/module';
import { ValidationType } from '@/module/types';

export default class InputComponent extends HTMLElement {
  private ruleOption = this.getAttribute('validationRule') as ValidationType;
  private rule = getValidationRule(this.ruleOption);

  constructor() {
    super();

    const template = document.getElementById('username') as HTMLTemplateElement;

    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.isConnected) {
      const input = document.querySelector(
        '#username-input'
      ) as HTMLInputElement;

      input.oninput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        console.log(target.value);
      };
      // this.rule = getValidationRule(this.ruleOption);
    }
  }
}

customElements.define('input-component', InputComponent);
