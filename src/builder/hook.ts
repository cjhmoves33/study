import { Validator } from '@/builder/validatorBuilder';

export class UseValidation {
  private validator: Validator;
  constructor(validator: Validator) {
    this.validator = validator;
  }

  public setValue(value: string) {
    const isValid = !value.match(this.validator.pattern);
    if (isValid) {
      this.validator.invalidMessageRef.innerText = '';
      this.validator.inputRef.value = value;
      return;
    }
    this.validator.invalidMessageRef.innerText = this.validator.invalidMessage;
    this.validator.inputRef.value = value.replace(this.validator.pattern, '');
  }
}
