export type ValidationType = 'username' | 'id' | 'password';
export interface ValidationOption {
  regexp: RegExp;
  maxLength: number;
}

export type ValidationMap = {
  [key in ValidationType]: () => ValidationOption;
};

export interface FormConstructor {
  validationType: ValidationType;
  maxLength: number;
  invalidMessage?: string;
}

export interface FormConstructorRequired extends FormConstructor {
  requiredMessage: string;
}
