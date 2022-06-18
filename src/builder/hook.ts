import { Validator } from '@/builder/validatorBuilder';

export class UseValidation {
  private readonly validator: Validator;
  private isValid = true;

  constructor(validator: InstanceType<typeof Validator>) {
    this.validator = validator;
  }

  public setValue(value: string) {
    this.isValid = !value.match(this.validator.pattern);

    if (this.isValid) {
      this.validator.inputRef.value = value;
      return this;
    }
    this.validator.inputRef.value = value.replace(this.validator.pattern, '');
    return this;
  }

  public reportValidity() {
    if (this.isValid) {
      this.validator.invalidMessageRef.innerText = '';
      return;
    }
    this.validator.invalidMessageRef.innerText = this.validator.invalidMessage;
    return;
  }
}
