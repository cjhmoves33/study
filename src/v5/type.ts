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

export type Plan = Readonly<ValidationRule>;

export interface PlanBuilder {
  rule: RuleMap;
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
