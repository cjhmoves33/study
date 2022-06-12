export type ValidationType = 'username' | 'id' | 'password';
export interface ValidationOption {
  regexp: RegExp;
  maxLength: number;
}

export type ValidationMap = {
  [key in ValidationType]: () => ValidationOption;
};
