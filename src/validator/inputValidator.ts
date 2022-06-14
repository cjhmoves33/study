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
  private inputValue = '';

  // ************* constructor *************
  constructor({
    validationType,
    maxLength,
    inputRef,
    invalidNotice,
    invalidNoticeRef,
  }: InputConstructor) {
    this.inputRef = inputRef;
    this.invalidNotice = invalidNotice;
    this.invalidNoticeRef = invalidNoticeRef;
    this.validationOption = getValidationMap(validationType, maxLength);
  }

  // ************* methods *************
  private isInvalidValue(value: string) {
    return this.validationOption.regexp.test(value);
  }

  private throwInvalidNotice(invalidNotice: string) {
    if (!this.invalidNoticeRef) return;
    this.invalidNoticeRef.innerText = invalidNotice;
  }

  private hideInvalidNotice() {
    if (!this.invalidNoticeRef) return;
    this.invalidNoticeRef.innerText = '';
  }

  // ************* apis *************
  public setValidValue(value: string) {
    const validValue = value.replace(this.validationOption.regexp, '');

    this.inputValue = validValue;
    this.inputRef.value = validValue;
  }

  public reportValidity() {
    console.log(this.inputValue);
    // NOTE: this.setValidValue() 에서 바로 유효한값으로 만들기때문에 report가 되지않음.
    this.hideInvalidNotice();

    if (this.isInvalidValue(this.inputValue)) {
      this.throwInvalidNotice(this.invalidNotice ?? '');
    }
  }
}
