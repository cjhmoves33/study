// parent
import InputValidator from '@/validator/inputValidator';
// types
import { InputConstructorRequired } from '@/validator/types';

export default class InputValidatorRequired extends InputValidator {
  private readonly requiredMessage: string;
  private readonly ref: HTMLElement;

  constructor({
    validationType,
    maxLength,
    invalidMessage,
    requiredMessage,
    ref,
  }: InputConstructorRequired) {
    super({ validationType, maxLength, invalidMessage });
    this.requiredMessage = requiredMessage;
    this.ref = ref;
  }
}
