export interface ValidationRefs {
  inputRef: HTMLInputElement;
  invalidValueMessageRef?: HTMLSpanElement;
}

export interface ValidationRule {
  pattern: RegExp;
  maxLength: number;
  invalidValueMessage: string;
  maxLengthMessage: string;
  requireMessage: string;
}

export interface Plan
  extends Readonly<ValidationRule>,
    Readonly<ValidationRefs> {}

export interface PlanBuilder {
  rule: RuleMap;
  refs: RefsMap;
  build(): Plan;
}

export interface RuleMap {
  pattern(pattern: RegExp): RuleMap;
  maxLength(maxLength: number): RuleMap;
  invalidValueMessage(message: string): RuleMap;
  maxLengthMessage(message: string): RuleMap;
  requireMessage(message: string): RuleMap;
  next(): PlanBuilder;
}

export interface RefsMap {
  inputRef(inputRef: HTMLInputElement): RefsMap;
  invalidValueMessageRef(invalidValueMessageRef: HTMLSpanElement): RefsMap;
  next(): PlanBuilder;
}
