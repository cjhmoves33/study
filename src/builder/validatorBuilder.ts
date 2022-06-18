// ************* Validator *************

export class Validator {
  // rules
  public pattern!: RegExp;
  public maxLength!: number;
  public invalidMessage!: string;
  public requiredMessage!: string;
  // refs
  public inputRef!: HTMLInputElement;
  public invalidMessageRef!: HTMLSpanElement;

  public log() {
    console.log('pattern: ', this.pattern);
    console.log('maxLength: ', this.maxLength);
    console.log('inputRef: ', this.inputRef);
    console.log('invalidMessage: ', this.invalidMessage);
    console.log('invalidMessageRef: ', this.invalidMessageRef);
    console.log('requiredMessage: ', this.requiredMessage);
  }
}

// ************* Builder *************

export class ValidatorBuilder {
  protected validator: Validator;

  constructor(validator = new Validator()) {
    this.validator = validator;
  }

  public get rules() {
    return new ValidatorRulesBuilder(this.validator);
  }

  public get refs() {
    return new ValidatorRefsBuilder(this.validator);
  }

  public build() {
    return this.validator;
  }
}

// ************* Rules Builder *************

class ValidatorRulesBuilder extends ValidatorBuilder {
  constructor(validator: Validator) {
    super(validator);
  }

  public pattern(pattern: RegExp) {
    this.validator.pattern = pattern;
    return this;
  }

  public maxLength(maxLength: number) {
    this.validator.maxLength = maxLength;
    return this;
  }

  public invalidMessage(invalidMessage: string) {
    this.validator.invalidMessage = invalidMessage;
    return this;
  }

  public requiredMessage(requiredMessage: string) {
    this.validator.requiredMessage = requiredMessage;
    return this;
  }
}

// ************* Refs Builder *************

class ValidatorRefsBuilder extends ValidatorBuilder {
  constructor(validator: Validator) {
    super(validator);
  }

  public inputRef(inputRef: HTMLInputElement) {
    this.validator.inputRef = inputRef;
    return this;
  }

  public invalidMessageRef(invalidMessageRef: HTMLSpanElement) {
    this.validator.invalidMessageRef = invalidMessageRef;
    return this;
  }
}
