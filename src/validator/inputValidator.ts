// types
import { InputConstructor } from '@/validator/types';
// modules
import { getValidationMap } from '@/validator/module';

export default class InputValidator {
  // ************* constructors *************
  private readonly inputRef;
  private readonly invalidNotice;
  private readonly invalidNoticeRef;
  private readonly validationMap;

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
    this.validationMap = getValidationMap(validationType, maxLength);
  }

  // ************* methods *************
  private setIsValid(value: string) {
    this.isValid = !value.match(this.validationMap.regexp);
  }

  private setValue(value: string) {
    this.inputRef.value = value;
  }

  private throwInvalidNotice() {
    if (!this.invalidNoticeRef) return; // invalidNoticeRef은 필수값이 아니여서.. 수정해볼까
    this.invalidNoticeRef.innerText = this.invalidNotice ?? '';
  }

  private hideInvalidNotice() {
    if (!this.invalidNoticeRef) return; // invalidNoticeRef은 필수값이 아니여서.. 수정해볼까
    this.invalidNoticeRef.innerText = '';
  }

  // ************* interfaces *************
  public setValidValue(value: string) {
    const validValue = value.replace(this.validationMap.regexp, '');

    this.setValue(validValue);
    this.setIsValid(value);

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
