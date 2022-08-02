import { getValidationRule } from '@/module/module';
import { ValidationType } from '@/module/types';

export default class InputComponent extends HTMLElement {
  // private wrapper = document.createElement('div');
  // private label = document.createElement('label');
  // private input = document.createElement('input');
  // getValidationInputs('username')

  private invalidMessageSpan = document.createElement('span');

  private ruleOption = this.getAttribute('validationRule') as ValidationType;
  private rule = getValidationRule(this.ruleOption);
  // private rule!: ValidationRule;

  constructor() {
    super();

    const template = document.getElementById(
      '#input-template'
    ) as HTMLTemplateElement;
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  private setHtml() {
    // this.appendChild(this.wrapper);
    // this.wrapper.appendChild(this.label);
    // this.wrapper.appendChild(this.input);
    // this.wrapper.appendChild(this.invalidMessageSpan);
  }

  private init() {
    this.setHtml();
  }

  connectedCallback() {
    if (this.isConnected) {
      this.init();

      // this.rule = getValidationRule(this.ruleOption);
    }
  }
}

customElements.define('input-component', InputComponent);
