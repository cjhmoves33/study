import { ValidationRule, Plan, PlanBuilder, RuleMap } from '@/v5/type';

class ValidationPlan implements Plan {
  private readonly __pattern__: RegExp;
  private readonly __maxLength__: number;
  private readonly __invalidValueMessage__: string;
  private readonly __maxLengthMessage__: string;
  private readonly __requireMessage__: string;

  constructor(rule: ValidationRule) {
    const {
      pattern,
      maxLength,
      invalidValueMessage,
      maxLengthMessage,
      requireMessage,
    } = rule;

    this.__pattern__ = pattern;
    this.__maxLength__ = maxLength;
    this.__invalidValueMessage__ = invalidValueMessage;
    this.__requireMessage__ = requireMessage;
    this.__maxLengthMessage__ = maxLengthMessage;
  }

  public get pattern() {
    return this.__pattern__;
  }

  public get maxLength() {
    return this.__maxLength__;
  }

  public get invalidValueMessage() {
    return this.__invalidValueMessage__;
  }

  public get maxLengthMessage() {
    return this.__maxLengthMessage__;
  }

  public get requireMessage() {
    return this.__requireMessage__;
  }
}

export class ValidationPlanBuilder implements PlanBuilder {
  private __Rule__ = {} as ValidationRule;

  public get rule() {
    const ruleMap: RuleMap = {
      pattern: (pattern: RegExp) => {
        this.__Rule__.pattern = pattern;
        return ruleMap;
      },
      maxLength: (maxLength: number) => {
        this.__Rule__.maxLength = maxLength;
        return ruleMap;
      },
      invalidValueMessage: (message: string) => {
        this.__Rule__.invalidValueMessage = message;
        return ruleMap;
      },
      maxLengthMessage: (message: string) => {
        this.__Rule__.maxLengthMessage = message;
        return ruleMap;
      },
      requireMessage: (message: string) => {
        this.__Rule__.requireMessage = message;
        return ruleMap;
      },
      next: () => {
        return this;
      },
    };
    return ruleMap;
  }

  // public get refs() {
  //   const refsMap: RefsMap = {
  //     inputRef: (inputRef: HTMLInputElement) => {
  //       this.__Refs__.inputRef = inputRef;
  //       return refsMap;
  //     },
  //     invalidValueMessageRef: (invalidValueMessageRef: HTMLSpanElement) => {
  //       this.__Refs__.invalidValueMessageRef = invalidValueMessageRef;
  //       return refsMap;
  //     },
  //     next: () => {
  //       return this;
  //     },
  //   };

  //   return refsMap;
  // }

  public build() {
    return new ValidationPlan(this.__Rule__);
  }
}
