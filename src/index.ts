// builder
import { ValidationPlanBuilder } from '@/builder/validatorBuilder';
// modules
import { getValidationRule } from '@/module';
// hooks
import { UseValidator } from '@/builder/hook';

class App {
  // private ajaxCall() {
  //   return;
  // }

  private bindEvent() {
    const form = document.querySelector('form') as HTMLFormElement;

    const usernameRef = document.querySelector(
      'input[type=text][name=username]'
    ) as HTMLInputElement;

    const usernameInvalidMessageRef = document.querySelector(
      '#username-invalid-notice'
    ) as HTMLSpanElement;

    const { pattern, maxLength, invalidMessage } =
      getValidationRule('username');

    const validationPlanBuilder = new ValidationPlanBuilder();
    const usernameValidationPlan = validationPlanBuilder.rules
      .pattern(pattern)
      .maxLength(maxLength)
      .invalidMessage(invalidMessage)
      .requiredMessage('필수입력 해야합니다.')
      .refs.inputRef(usernameRef)
      .invalidMessageRef(usernameInvalidMessageRef)
      .build();

    const usernameValidator = new UseValidator(usernameValidationPlan);

    usernameRef.oninput = e => {
      const target = e.target as HTMLInputElement;
      usernameValidator.setValue(target.value).reportValidity();
    };

    form.onsubmit = e => {
      e.preventDefault();
      if (!usernameValidator.hasValue()) {
        usernameValidator.focus();
      }
    };
  }

  // private render() {
  //   return;
  // }

  private init() {
    // this.ajaxCall();
    this.bindEvent();
    // this.render();
  }

  public created() {
    this.init();
  }
}

new App().created();
