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

  private handleInput = (e: Event, invalidPatternMessageRef: HTMLSpanElement) => {
    const target = e.target as HTMLInputElement;
    const isValidPattern = !target.value.match(this.rule.pattern);

    if (isValidPattern) {
      this.throwInvalidPatternMessage(invalidPatternMessageRef, '');
    } else {
      this.throwInvalidPatternMessage(invalidPatternMessageRef, this.rule.invalidMessage);
    }

    this.onInput(target, this.rule.pattern);
  };

  private onInput = (target: HTMLInputElement, pattern: RegExp) => {
    target.value = target.value.replace(pattern, '');
  };

  private throwInvalidPatternMessage = (ref: HTMLSpanElement, message: string) => {
    ref.innerText = message;
  };

  connectedCallback() {
    if (this.isConnected) {
      const [input, invalidPatternMessageRef] = getValidationInputs('username');
      input.oninput = (e: Event) => this.handleInput(e, invalidPatternMessageRef);
    }
  }
}

customElements.define('input-component', UsernameInput);
