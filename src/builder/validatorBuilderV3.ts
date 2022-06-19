import { ValidationRules, ValidationRefs } from '@/types';

export type ValidationPlanV3Instance = InstanceType<
  typeof ValidationPlanBuilder
>;

interface PlanBuilder {
  rules: ValidationRules;
  refs: ValidationRefs;
  setRules(rules: ValidationRules): PlanBuilder;
  setRefs(refs: ValidationRefs): PlanBuilder;
  build(): InstanceType<typeof ValidationPlan>;
}

interface Plan {
  rules: ValidationRules;
  refs: ValidationRefs;
  log(): void;
}
// ************* Validator *************

class ValidationPlan implements Plan {
  private __Rules__!: ValidationRules;
  private __Refs__!: ValidationRefs;

  constructor(rules: ValidationRules, refs: ValidationRefs) {
    this.__Rules__ = { ...rules };
    this.__Refs__ = { ...refs };
  }

  get rules() {
    return this.__Rules__;
  }

  get refs() {
    return this.__Refs__;
  }

  // log
  public log() {
    console.log('Rules: ');
    console.table(this.rules);
    console.log('Refs: ');
    console.table(this.refs);
  }
}

// ************* Builder *************

export class ValidationPlanBuilder implements PlanBuilder {
  private __Rules__!: ValidationRules;
  private __Refs__!: ValidationRefs;

  get rules() {
    return this.__Rules__;
  }

  get refs() {
    return this.__Refs__;
  }

  public setRules(rules: ValidationRules) {
    this.__Rules__ = { ...rules };
    return this;
  }

  public setRefs(refs: ValidationRefs) {
    this.__Refs__ = { ...refs };
    return this;
  }

  public build() {
    return new ValidationPlan(this.rules, this.refs);
  }
}
