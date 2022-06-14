// types
import { ValidationOption, InputConstructor } from '@/validator/types';
// modules
import { getValidationMap, getInvalidMessageRef } from '@/validator/module';

export default class InputValidator {
  // ************* constructors *************
  private readonly invalidMessage?: string;
  private readonly invalidMessageRef: HTMLSpanElement;
  private readonly validationOption: ValidationOption;

  // ************* states *************
  private inputValue = '';

  // ************* constructor *************
  constructor({ validationType, maxLength, invalidMessage }: InputConstructor) {
    this.invalidMessage = invalidMessage;
    this.invalidMessageRef = getInvalidMessageRef(validationType);
    this.validationOption = getValidationMap(validationType, maxLength);
  }

  // ************* methods *************
  private isInvalidValue(value: string) {
    return this.validationOption.regexp.test(value);
  }

  private throwInvalidMessage(invalidMessage: string) {
    this.invalidMessageRef.innerText = invalidMessage;
  }

  private hideInvalidMessage() {
    this.invalidMessageRef.innerText = '';
  }

  // ************* apis *************
  public getValidValue(value: string) {
    const validValue = value.replace(this.validationOption.regexp, '');
    this.inputValue = validValue;

    return validValue;
  }

  public reportValidity() {
    this.hideInvalidMessage();

    if (this.isInvalidValue(this.inputValue)) {
      this.throwInvalidMessage(this.invalidMessage ?? '');
    }
  }
}
