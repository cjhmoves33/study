import { ValidationPlanV3Instance } from '@/builder/validatorBuilderV3';
import { ValidationRefs, ValidationRule } from '@/types';

export class UseValidator {
  private __Rule__!: ValidationRule;
  private __Refs__!: ValidationRefs;

  private isValid = true;
  private validValue = '';

  constructor(validationPlan: ValidationPlanV3Instance) {
    this.__Rule__ = validationPlan.rule;
    this.__Refs__ = validationPlan.refs;
  }

  private get rule() {
    return this.__Rule__;
  }

  private get refs() {
    return this.__Refs__;
  }

  private setValue(value: string) {
    this.validValue = value.replace(this.rule.pattern, '');
    this.refs.inputRef.value = this.validValue;
  }

  private setIsValid(value: string) {
    this.isValid = !value.match(this.rule.pattern);
  }

  private reportValidity() {
    if (!this.refs.invalidMessageRef) return;

    if (this.isValid) {
      this.refs.invalidMessageRef.innerText = '';
      return;
    } else {
      this.refs.invalidMessageRef.innerText = this.rule.invalidMessage ?? '';
      return;
    }
  }

  public validate() {
    const value = this.refs.inputRef.value;

    this.setIsValid(value);
    this.setValue(value);
    this.reportValidity();
  }

  public alertHasNoValue() {
    if (!this.rule.requireMessage) return;

    alert(this.rule.requireMessage);
  }

  public focus() {
    this.refs.inputRef.focus();
  }

  public get hasValue() {
    return !!this.validValue;
  }
}
