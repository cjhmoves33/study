// // types
// import { InputConstructor } from '@/types';
// // modules
// import { getValidationRule } from '@/module';

// export default class InputValidator {
//   // ************* constructors *************
//   private readonly inputRef;
//   private readonly invalidNotice;
//   private readonly invalidNoticeRef;
//   private readonly validationRule;

//   // ************* states *************
//   private isValid = true;

//   // ************* constructor *************
//   constructor({
//     validationType,
//     inputRef,
//     invalidNoticeRef,
//     invalidNotice,
//   }: InputConstructor) {
//     this.inputRef = inputRef;
//     this.invalidNotice = invalidNotice;
//     this.invalidNoticeRef = invalidNoticeRef;
//     this.validationRule = getValidationRule(validationType);
//   }

//   // ************* private methods *************
//   private setIsValid(value: string) {
//     this.isValid = !value.match(this.validationRule.pattern);
//   }

//   private setValue(value: string) {
//     this.inputRef.value = value;
//   }

//   private throwInvalidNotice() {
//     if (!this.invalidNoticeRef) return; // invalidNoticeRef은 필수값이 아니여서.. 타입 가드용..
//     this.invalidNoticeRef.innerText = this.invalidNotice ?? '';
//   }

//   private hideInvalidNotice() {
//     if (!this.invalidNoticeRef) return; // invalidNoticeRef은 필수값이 아니여서.. 타입 가드용..
//     this.invalidNoticeRef.innerText = '';
//   }

//   // ************* interfaces *************
//   public setValidValue(value: string) {
//     const validValue = value.replace(this.validationRule.pattern, '');

//     this.setValue(validValue);
//     this.setIsValid(value);

//     return this;
//   }

//   public reportValidity() {
//     if (this.isValid) {
//       this.hideInvalidNotice();
//       return;
//     }

//     this.throwInvalidNotice();
//   }
// }
