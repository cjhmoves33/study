import { ValidationMap, ValidationType } from '@/validator/types';

export const getValidationRule = (type: ValidationType) => {
  const validationMap: ValidationMap = {
    username() {
      return {
        pattern: /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/g,
        maxLength: 30,
        invalidMessage: '똑바로 입렵하셈',
      };
    },
    id() {
      return {
        pattern: /[^a-zA-Z0-9/-]/g,
        maxLength: 20,
        invalidMessage: '똑바로 입렵하셈',
      };
    },
    password() {
      return {
        pattern: /[^a-zA-Z-0-9!@#$%^&*()/-_+=]/g,
        maxLength: 30,
        invalidMessage: '똑바로 입렵하셈',
      };
    },
  };

  return validationMap[type]();
};
