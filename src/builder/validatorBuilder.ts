// ************* Validator *************

export class ValidationPlan {
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

export class ValidationPlanBuilder {
  protected validationPlan: ValidationPlan;

  constructor(validationPlan = new ValidationPlan()) {
    this.validationPlan = validationPlan;
  }

  public get rules() {
    return new ValidationRulesBuilder(this.validationPlan);
  }

  public get refs() {
    return new ValidationRefsBuilder(this.validationPlan);
  }

  public build() {
    return this.validationPlan;
  }
}

// ************* Rules Builder *************

class ValidationRulesBuilder extends ValidationPlanBuilder {
  constructor(validationPlan: ValidationPlan) {
    super(validationPlan);
  }

  public pattern(pattern: RegExp) {
    this.validationPlan.pattern = pattern;
    return this;
  }

  public maxLength(maxLength: number) {
    this.validationPlan.maxLength = maxLength;
    return this;
  }

  public invalidMessage(invalidMessage: string) {
    this.validationPlan.invalidMessage = invalidMessage;
    return this;
  }

  public requiredMessage(requiredMessage: string) {
    this.validationPlan.requiredMessage = requiredMessage;
    return this;
  }
}

// ************* Refs Builder *************

class ValidationRefsBuilder extends ValidationPlanBuilder {
  constructor(validationPlan: ValidationPlan) {
    super(validationPlan);
  }

  public inputRef(inputRef: HTMLInputElement) {
    this.validationPlan.inputRef = inputRef;
    return this;
  }

  public invalidMessageRef(invalidMessageRef: HTMLSpanElement) {
    this.validationPlan.invalidMessageRef = invalidMessageRef;
    return this;
  }
}
