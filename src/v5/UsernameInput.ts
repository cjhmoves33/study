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

  private handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;

    target.value = target.value.replace(this.rule.pattern, '');
  };

  private observePatternValidity = (ref: HTMLSpanElement) => {
    ref.innerText = this.rule.invalidMessage;
  };

  connectedCallback() {
    if (this.isConnected) {
      const [input, invalidPatternMessageRef] = getValidationInputs('username');
      input.oninput = this.handleInput;
      input.oninput = () => this.observePatternValidity(invalidPatternMessageRef);
    }
  }
}

customElements.define('input-component', UsernameInput);
