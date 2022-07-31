export default class ValidationPlanBuilder {
  private __pattern__ = /./g;
  private __maxLength__ = 255;
  private __invalidValueMessage__ = '';
  private __maxLengthMessage__ = '';
  private __requireMessage__ = '';

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
