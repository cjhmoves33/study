export type ValidationType = 'username' | 'id' | 'password';
export interface ValidationOption {
  pattern: RegExp;
  maxLength: number;
  invalidMessage: string;
  requireMessage: string;
}

export type ValidationMap = Record<ValidationType, ValidationOption>;

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
