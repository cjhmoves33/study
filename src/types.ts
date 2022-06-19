export type ValidationType = 'username' | 'id' | 'password';
export interface ValidationRule {
  pattern: RegExp;
  maxLength: number;
  invalidMessage?: string;
  requireMessage?: string;
}

export type ValidationMap = Record<ValidationType, ValidationRule>;

export interface ValidationRefs {
  inputRef: HTMLInputElement;
  invalidMessageRef?: HTMLSpanElement;
}

// export interface InputConstructor {
//   validationType: ValidationType;
//   maxLength: number;
//   inputRef: HTMLInputElement;
//   invalidNoticeRef?: HTMLSpanElement;
//   invalidNotice?: string;
// }

// export interface InputConstructorRequired extends InputConstructor {
//   requiredMessage: string;
// }
