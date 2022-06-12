import { ValidationMap, ValidationType } from '@/validator/types';

export const getValidationMap = (type: ValidationType, maxLength: number) => {
  const validationMap: ValidationMap = {
    username() {
      return {
        regexp: /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/g,
        maxLength,
      };
    },
    id() {
      return {
        regexp: /[^a-zA-Z0-9/-]/g,
        maxLength,
      };
    },
    password() {
      return {
        regexp: /[^a-zA-Z-0-9!@#$%^&*()/-_+=]/g,
        maxLength,
      };
    },
  };

  return validationMap[type]();
};

export const getRef = (type: ValidationType) => {
  return document.querySelector(
    `input[type=text][name=${type}]`
  ) as HTMLInputElement;
};
