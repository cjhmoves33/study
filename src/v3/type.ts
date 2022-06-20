export interface ValidationRule {
  pattern: RegExp;
  maxLength: number;
  invalidMessage: string;
  maxLengthMessage: string;
  requireMessage: string;
}
export interface ValidationRefs {
  inputRef: HTMLInputElement;
  invalidMessageRef?: HTMLSpanElement;
}

export interface PlanBuilder {
  rule: ValidationRule;
  refs: ValidationRefs;
  setRule(rule: ValidationRule): PlanBuilder;
  setRefs(refs: ValidationRefs): PlanBuilder;
  build(): Plan;
}

export interface Plan {
  rule: ValidationRule;
  refs: ValidationRefs;
  log(): void;
}
// ************* Validator *************
