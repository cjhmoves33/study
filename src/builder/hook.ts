import { ValidationPlan } from '@/builder/validatorBuilder';

export class UseValidator {
  private readonly validator: ValidationPlan;
  private isValid = true;

  constructor(validator: InstanceType<typeof ValidationPlan>) {
    this.validator = validator;
  }

  public setValue(value: string) {
    this.isValid = !value.match(this.validator.pattern);

    if (this.isValid) {
      this.validator.inputRef.value = value;
      return this;
    } else {
      this.validator.inputRef.value = value.replace(this.validator.pattern, '');
      return this;
    }
  }

  public reportValidity() {
    if (this.isValid) {
      this.validator.invalidMessageRef.innerText = '';
      return;
    } else {
      this.validator.invalidMessageRef.innerText =
        this.validator.invalidMessage;
      return;
    }
  }
}
