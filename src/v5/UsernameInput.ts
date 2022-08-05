import { getValidationInputs, getValidationRule } from '@/module/module';
import { ValidationType } from '@/module/types';

export default class UsernameInput extends HTMLElement {
  private ruleType = this.getAttribute('validationRule') as ValidationType;
  private rule = getValidationRule(this.ruleType);

  constructor() {
    super();

    const template = document.getElementById('username') as HTMLTemplateElement;

    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.isConnected) {
      const [input, invalidValueMessageRef] = getValidationInputs('username');
      input.oninput = (e: Event) => {
        const target = e.target as HTMLInputElement;

        target.value = target.value.replace(this.rule.pattern, '');
        invalidValueMessageRef.innerText = this.rule.invalidMessage;
      };
      // this.rule = getValidationRule(this.ruleOption);
    }
  }
}

customElements.define('input-component', UsernameInput);
