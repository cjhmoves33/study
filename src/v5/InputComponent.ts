import { getValidationRule } from '@/module/module';
import { ValidationType } from '@/module/types';

export default class InputComponent extends HTMLElement {
  private ruleOption = this.getAttribute('validationRule') as ValidationType;
  private rule = getValidationRule(this.ruleOption);

  constructor() {
    super();

    const template = document.getElementById(
      'input-template'
    ) as HTMLTemplateElement;
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    if (this.isConnected) {
      // this.rule = getValidationRule(this.ruleOption);
    }
  }
}

customElements.define('input-component', InputComponent);
