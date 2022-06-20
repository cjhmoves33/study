import { Plan } from '@/v4/type';

export class UseValidator {
  private readonly validationPlan: Plan;

  private isInValid = false;
  private isLengthExceeded = false;

  constructor(validationPlan: Plan) {
    this.validationPlan = validationPlan;
  }

  private get pattern() {
    return this.validationPlan.pattern;
  }

  private get maxLength() {
    return this.validationPlan.maxLength;
  }

  private get invalidValueMessage() {
    if (!this.validationPlan.invalidValueMessage) return '';
    return this.validationPlan.invalidValueMessage;
  }

  private get maxLengthMessage() {
    return this.validationPlan.maxLengthMessage;
  }

  private get requireMessage() {
    return this.validationPlan.requireMessage;
  }

  private get inputRef() {
    return this.validationPlan.inputRef;
  }

  private get invalidValueMessageRef() {
    return this.validationPlan.invalidValueMessageRef;
  }

  private get value() {
    return this.inputRef.value;
  }

  private set value(value: string) {
    this.inputRef.value = value;
  }

  private setValue(value: string) {
    const validValue = value.replace(this.pattern, '');
    this.value = validValue.slice(0, this.maxLength);
  }

  private setIsValid(value: string) {
    this.isInValid = !!value.match(this.pattern);
  }

  private setIsMaxLengthExceeded(isExceeded: boolean) {
    this.isLengthExceeded = isExceeded;
  }

  private reportValidity() {
    if (!this.invalidValueMessageRef) return;

    if (this.isInValid) {
      this.invalidValueMessageRef.innerText = this.invalidValueMessage;
    } else if (this.isLengthExceeded) {
      this.invalidValueMessageRef.innerText = this.maxLengthMessage;
    } else {
      this.invalidValueMessageRef.innerText = '';
    }
  }

  public startValidation() {
    this.setIsValid(this.value);
    this.setIsMaxLengthExceeded(false);

    if (this.value.length > this.maxLength) {
      this.setIsMaxLengthExceeded(true);
    }

    this.setValue(this.value);
    this.reportValidity();
  }

  public get hasValue() {
    return !!this.value;
  }

  public alertHasNoRequiredValue() {
    if (!this.requireMessage) return;

    alert(this.requireMessage);
  }

  public focus() {
    this.inputRef.focus();
  }
}
