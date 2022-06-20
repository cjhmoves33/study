// export type ValidationPlanV3Instance = InstanceType<typeof ValidationPlan>;

interface ValidationRefs {
  inputRef: HTMLInputElement;
  invalidValueMessageRef?: HTMLSpanElement;
}

interface ValidationRule {
  pattern: RegExp;
  maxLength: number;
  invalidMessage?: string;
  requireMessage?: string;
}

interface Rule {
  pattern: RegExp;
  maxLength: number;
  invalidMessage?: string;
  requireMessage?: string;
}
interface Refs {
  inputRef: HTMLInputElement;
  invalidValueMessageRef?: HTMLSpanElement;
}

interface PlanBuilder {
  rule: InstanceType<typeof RuleBuilder>;
  refs: InstanceType<typeof RefsBuilder>;
  // build(): InstanceType<typeof ValidationPlan>;
}

// ************* Plan *************

class RulePlan implements Rule {
  private readonly __pattern__!: RegExp;
  private readonly __maxLength__!: number;
  private readonly __invalidMessage__?: string;
  private readonly __requireMessage__?: string;

  get pattern() {
    return this.__pattern__;
  }
  get maxLength() {
    return this.__maxLength__;
  }
  get invalidMessage() {
    return this.__invalidMessage__;
  }
  get requireMessage() {
    return this.__requireMessage__;
  }
}

class RefsPlan implements Refs {
  private readonly __inputRef__!: HTMLInputElement;
  private readonly __invalidValueMessageRef__?: HTMLSpanElement;

  get inputRef() {
    return this.__inputRef__;
  }
  get invalidValueMessageRef() {
    return this.__invalidValueMessageRef__;
  }
}

// ************* sub builder *************

class RuleBuilder {
  private __Rule__;

  constructor(rule: ValidationRule) {
    this.__Rule__ = rule;
  }

  public pattern(pattern: RegExp) {
    this.__Rule__.pattern = pattern;
    return this;
  }

  public maxLength(maxLength: number) {
    this.__Rule__.maxLength = maxLength;
    return this;
  }

  public invalidValueMessage(message: string) {
    this.__Rule__.invalidMessage = message;
    return this;
  }

  public requireMessage(message: string) {
    this.__Rule__.requireMessage = message;
    return this;
  }
}

class RefsBuilder {
  private __Refs__;

  constructor(refs: ValidationRefs) {
    this.__Refs__ = refs;
  }

  public inputRef(inputRef: HTMLInputElement) {
    this.__Refs__.inputRef = inputRef;
    return this;
  }

  public invalidValueMessageRef(invalidValueMessageRef: HTMLSpanElement) {
    this.__Refs__.invalidValueMessageRef = invalidValueMessageRef;
    return this;
  }
}

// ************* Builder *************

export class ValidationPlanBuilder implements PlanBuilder {
  private __Rule__!: ValidationRule;
  private __Refs__!: ValidationRefs;

  get rule() {
    this.__Rule__ = new RulePlan();
    return new RuleBuilder(this.__Rule__);
  }

  get refs() {
    this.__Refs__ = new RefsPlan();
    return new RefsBuilder(this.__Refs__);
  }

  // public build() {
  //   return new ValidationPlan(this.rule, this.refs);
  // }
}
