export type ValidationType = 'username' | 'id' | 'password';
export interface ValidationOption {
  regexp: RegExp;
  maxLength: number;
}

export type ValidationMap = {
  [key in ValidationType]: () => ValidationOption;
};

export interface InputConstructor {
  validationType: ValidationType;
  maxLength: number;
  invalidMessage?: string;
}

export interface InputConstructorRequired extends InputConstructor {
  requiredMessage: string;
  ref: HTMLElement;
}
