import { ValidationMap, ValidationType } from '@/types';

export const getValidationRule = (type: ValidationType) => {
  const validationMap: ValidationMap = {
    username: {
      pattern: /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/g,
      maxLength: 10,
      invalidMessage: '이름 똑바로 입렵하셈',
      maxLengthMessage: '이름은 최대 10글자입니다.',
      requireMessage: '이름 필수 입력임',
    },
    id: {
      pattern: /[^a-zA-Z0-9/-]/g,
      maxLength: 12,
      invalidMessage: '아이디 똑바로 입렵하셈',
      maxLengthMessage: '아이디는 최대 12글자입니다.',
      requireMessage: '아이디 필수 입력임',
    },
    password: {
      pattern: /[^a-zA-Z-0-9!@#$%^&*()/-_+=]/g,
      maxLength: 14,
      invalidMessage: '비밀번호 똑바로 입렵하셈',
      maxLengthMessage: '비밀번호는 최대 14글자입니다.',
      requireMessage: '비밀번호 필수 입력임',
    },
  };

  return validationMap[type];
};
