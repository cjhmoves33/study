import { ValidationPlan } from '@/builder/validatorBuilder';

export class UseValidator {
  private readonly validationPlan: ValidationPlan;
  private isValid = true;
  private validValue = '';

  constructor(validationPlan: InstanceType<typeof ValidationPlan>) {
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

  public focus() {
    alert(this.validationPlan.requiredMessage);
    this.validationPlan.inputRef.focus();
  }
}
