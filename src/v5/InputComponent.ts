import { getValidationRule } from '@/module/module';
import { ValidationType, ValidationRule } from '@/module/types';

export default class InputComponent extends HTMLElement {
  private wrapper = document.createElement('div');
  private label = document.createElement('label');
  private input = document.createElement('input');
  private invalidMessageSpan = document.createElement('span');

  private ruleOption = this.getAttribute('validationRule') as ValidationType;
  private rule!: ValidationRule;

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.isConnected) {
      this.rule = getValidationRule(this.ruleOption);
    }
  }
}

customElements.define('input-component', InputComponent);
