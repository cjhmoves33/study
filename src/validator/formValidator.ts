// types
import {
  ValidationType,
  ValidationOption,
  FormConstructor,
} from '@/validator/types';
// modules
import {
  getValidationMap,
  getInputRef,
  getInvalidMessageRef,
} from '@/validator/module';

export default class FormValidator {
  // ************* constructors *************
  private readonly validationType: ValidationType;
  private readonly maxLength: number;
  private readonly invalidMessage?: string;

  private readonly validationOption: ValidationOption;
  private readonly inputRef: HTMLInputElement;
  private readonly invalidMessageRef: HTMLSpanElement;

  // ************* states *************
  private inputValue = '';

  // ************* constructor *************
  constructor({ validationType, maxLength, invalidMessage }: FormConstructor) {
    this.validationType = validationType;
    this.maxLength = maxLength;
    this.invalidMessage = invalidMessage;
    this.inputRef = getInputRef(validationType);
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

  private reportValidity(value: string, invalidMessage = '') {
    this.hideInvalidMessage();

    if (this.isInvalidValue(value)) {
      this.throwInvalidMessage(invalidMessage);
    }
  }

  // ************* Getter / Setter *************
  private get validValue() {
    return this.inputValue;
  }

  private set validValue(value: string) {
    this.reportValidity(value, this.invalidMessage);

    this.inputValue = value.replace(this.validationOption.regexp, '');
  }

  // ************* apis *************
  public getValidValue(value: string) {
    this.validValue = value;
    return this.validValue;
  }
}
