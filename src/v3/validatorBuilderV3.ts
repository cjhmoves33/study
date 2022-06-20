import { ValidationRule, ValidationRefs, PlanBuilder, Plan } from '@/v3/type';

export type ValidationPlanV3Instance = InstanceType<typeof ValidationPlan>;
// ************* Validator *************

class ValidationPlan implements Plan {
  private __Rule__!: ValidationRule;
  private __Refs__!: ValidationRefs;

  constructor(rule: ValidationRule, refs: ValidationRefs) {
    this.__Rule__ = { ...rule };
    this.__Refs__ = { ...refs };
  }

  get rule() {
    return this.__Rule__;
  }

  get refs() {
    return this.__Refs__;
  }

  // log
  public log() {
    console.log('Rule: ');
    console.table(this.rule);
    console.log('Refs: ');
    console.table(this.refs);
  }
}

// ************* Builder *************

export class ValidationPlanBuilder implements PlanBuilder {
  private __Rule__!: ValidationRule;
  private __Refs__!: ValidationRefs;

  get rule() {
    return this.__Rule__;
  }

  get refs() {
    return this.__Refs__;
  }

  public setRule(rule: ValidationRule) {
    this.__Rule__ = { ...rule };
    return this;
  }

  public setRefs(refs: ValidationRefs) {
    this.__Refs__ = { ...refs };
    return this;
  }

  public build() {
    return new ValidationPlan(this.rule, this.refs);
  }
}
