import { ValidationRule, ValidationRefs } from '@/types';

export type ValidationPlanV3Instance = InstanceType<
  typeof ValidationPlanBuilderV3
>;
// ************* Validator *************

class ValidationPlan {
  // rules
  protected pattern!: RegExp;
  protected maxLength!: number;
  protected invalidMessage!: string;
  protected requireMessage!: string;
  // refs
  protected inputRef!: HTMLInputElement;
  protected invalidMessageRef!: HTMLSpanElement;

  // log
  public log() {
    console.log('pattern: ', this.pattern);
    console.log('maxLength: ', this.maxLength);
    console.log('inputRef: ', this.inputRef);
    console.log('invalidMessage: ', this.invalidMessage);
    console.log('invalidMessageRef: ', this.invalidMessageRef);
    console.log('requireMessage: ', this.requireMessage);
  }
}

// ************* Builder *************

export class ValidationPlanBuilderV3 extends ValidationPlan {
  public setRules({
    pattern,
    maxLength,
    invalidMessage,
    requireMessage,
  }: ValidationRule) {
    this.pattern = pattern;
    this.maxLength = maxLength;
    this.invalidMessage = invalidMessage;
    this.requireMessage = requireMessage;
    return this;
  }

  public setRefs({ inputRef, invalidMessageRef }: ValidationRefs) {
    this.inputRef = inputRef;
    this.invalidMessageRef = invalidMessageRef;
    return this;
  }

  public build() {
    return this;
  }
}
