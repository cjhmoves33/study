import { Plan } from '@/v5/type';

export default class ValidationPlanBuilder {
  private __pattern__ = /./g;
  private __maxLength__ = 255;
  private __invalidValueMessage__ = '';
  private __maxLengthMessage__ = '';
  private __requireMessage__ = '';

  get plan(): Plan {
    return {
      pattern: this.__pattern__,
      maxLength: this.__maxLength__,
      invalidValueMessage: this.__invalidValueMessage__,
      maxLengthMessage: this.__maxLengthMessage__,
      requireMessage: this.__requireMessage__,
    };
  }

  pattern(pattern: RegExp) {
    this.__pattern__ = pattern;
    return this;
  }

  maxLength(maxLength: number) {
    this.__maxLength__ = maxLength;
    return this;
  }

  invalidValueMessage(message: string) {
    this.__invalidValueMessage__ = message;
    return this;
  }

  maxLengthMessage(message: string) {
    this.__maxLengthMessage__ = message;
    return this;
  }

  requireMessage(message: string) {
    this.__requireMessage__ = message;
    return this;
  }
}
