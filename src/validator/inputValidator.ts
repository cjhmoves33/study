// types
import { InputConstructor } from '@/validator/types';
// modules
import { getValidationMap } from '@/validator/module';

export default class InputValidator {
  // ************* constructors *************
  private readonly inputRef;
  private readonly invalidNotice;
  private readonly invalidNoticeRef;
  private readonly validationOption;

  // ************* states *************
  // private inputValue = '';
  private isValid = true;

  // ************* constructor *************
  constructor({
    validationType,
    maxLength,
    inputRef,
    invalidNoticeRef,
    invalidNotice,
  }: InputConstructor) {
    this.inputRef = inputRef;
    this.invalidNotice = invalidNotice;
    this.invalidNoticeRef = invalidNoticeRef;
    this.validationOption = getValidationMap(validationType, maxLength);
  }

  // ************* methods *************
  private isValidValue(value: string) {
    return !this.validationOption.regexp.test(value);
  }

  private throwInvalidNotice() {
    if (!this.invalidNoticeRef) return;
    this.invalidNoticeRef.innerText = this.invalidNotice ?? '';
  }

  private hideInvalidNotice() {
    if (!this.invalidNoticeRef) return;
    this.invalidNoticeRef.innerText = '';
  }

  // ************* interfaces *************
  public setValidValue(value: string) {
    const validValue = value.replace(this.validationOption.regexp, '');

    this.inputRef.value = validValue;
    this.isValid = this.isValidValue(value);

    return this;
  }

  public reportValidity() {
    if (this.isValid) {
      this.hideInvalidNotice();
      return;
    }

    this.throwInvalidNotice();
  }
}
