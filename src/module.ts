import { ValidationMap, ValidationType } from '@/types';

export const getValidationRule = (type: ValidationType) => {
  const validationMap: ValidationMap = {
    username: {
      pattern: /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/g,
      maxLength: 30,
      invalidMessage: '이름 똑바로 입렵하셈',
      requireMessage: '이름 필수 입력임',
    },
    id: {
      pattern: /[^a-zA-Z0-9/-]/g,
      maxLength: 20,
      invalidMessage: '아이디 똑바로 입렵하셈',
      requireMessage: '아이디 필수 입력임',
    },
    password: {
      pattern: /[^a-zA-Z-0-9!@#$%^&*()/-_+=]/g,
      maxLength: 30,
      invalidMessage: '비밀번호 똑바로 입렵하셈',
      requireMessage: '비밀번호 필수 입력임',
    },
  };

  return validationMap[type];
};
