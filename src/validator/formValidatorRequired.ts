// parent
import FormValidator from '@/validator/formValidator';
// types
import { FormConstructorRequired } from '@/validator/types';

export default class FormValidatorRequired extends FormValidator {
  private readonly requiredMessage: string;

  constructor({
    validationType,
    maxLength,
    invalidMessage,
    requiredMessage,
  }: FormConstructorRequired) {
    super({ validationType, maxLength, invalidMessage });
    this.requiredMessage = requiredMessage;
  }
}
