// types
import { ValidationType, ValidationOption } from '@/validator/types';
// modules
import { getValidationMap, getRef } from '@/validator/module.js';

export default class FormValidator {
  // constructors
  private readonly type: ValidationType;
  private readonly maxLength: number;
  private readonly validationOption: ValidationOption;
  private readonly inputRef: HTMLInputElement;

  // states
  private inputValue = '';

  constructor(type: ValidationType, maxLength: number) {
    this.type = type;
    this.maxLength = maxLength;
    this.inputRef = getRef(type);
    this.validationOption = getValidationMap(type, maxLength);
  }

  private isInvalidValue(value: string) {
    return value.match(this.validationOption.regexp);
  }

  private reportValidity(invalidMessage = '') {
    this.inputRef.setCustomValidity(invalidMessage);
    this.inputRef.reportValidity();
  }

  private set validValue(value: string) {
    if (this.isInvalidValue(value)) {
      this.reportValidity('입력 확인 하셈.');
    } else {
      this.reportValidity();
    }

    this.inputValue = value.replace(this.validationOption.regexp, '');
  }

  private get validValue() {
    return this.inputValue;
  }

  public getValidValue(value: string) {
    this.validValue = value;
    return this.validValue;
  }
}
