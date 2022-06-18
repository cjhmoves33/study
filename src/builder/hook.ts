import { ValidationPlanInstance } from '@/builder/validatorBuilder';

export class UseValidator {
  private readonly validationPlan;

  private isValid = true;
  private validValue = '';

  constructor(validationPlan: ValidationPlanInstance) {
    this.validationPlan = validationPlan;
  }

  public setValue(value: string) {
    this.isValid = !value.match(this.validationPlan.pattern);
    this.validValue = value.replace(this.validationPlan.pattern, '');

    this.validationPlan.inputRef.value = this.validValue;

    return this;
  }

  public reportValidity() {
    if (this.isValid) {
      this.validationPlan.invalidMessageRef.innerText = '';
      return;
    } else {
      this.validationPlan.invalidMessageRef.innerText =
        this.validationPlan.invalidMessage;
      return;
    }
  }

  public hasValue() {
    return !!this.validValue;
  }

  public alert() {
    alert(this.validationPlan.requireMessage);
    return this;
  }

  public focus() {
    this.validationPlan.inputRef.focus();
  }
}
