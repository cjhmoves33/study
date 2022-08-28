// builder
import { ValidationPlanBuilder } from '@/v3/validatorBuilderV3';
// modules
import { getValidationRule } from '@/module/module';
// hooks
import { UseValidator } from '@/v3/hook';

class App {
  // private ajaxCall() {
  //   return;
  // }

  private bindEvent() {
    // 1. HTM 요소 가져오기 (form, input, span)
    const form = document.querySelector('form') as HTMLFormElement;

    const usernameRef = document.querySelector(
      'input[type=text][id=username-input]'
    ) as HTMLInputElement;

    const usernameInvalidValueMessageRef = document.querySelector(
      'span[id=username-invalid-value-message]'
    ) as HTMLSpanElement;

    // 2. 'username'에 해당하는 유효성검사 규칙 가져오기
    const usernameRule = getValidationRule('username');

    // 3. 유효성검사 플랜 제작
    const usernameValidationPlan = new ValidationPlanBuilder()
      .setRule({
        pattern: usernameRule.pattern,
        maxLength: usernameRule.maxLength,
        invalidMessage: usernameRule.invalidMessage,
        maxLengthMessage: usernameRule.maxLengthMessage,
        requireMessage: usernameRule.requireMessage,
      })
      .setRefs({
        inputRef: usernameRef,
        invalidMessageRef: usernameInvalidValueMessageRef,
      })
      .build();

    // 4. 유효성검사 플랜에 맞는 검사기(hook) 제작
    const usernameValidator = new UseValidator(usernameValidationPlan);

    // 5. [input 입력시] 검사기로 유효성검사 및 Input에 유효한 값 입력.
    usernameRef.oninput = () => {
      usernameValidator.validate();
    };

    // 5. [form 제출시] 검사기로 값 여부 확인 및 포커싱(필수입력 값일 시)
    form.onsubmit = e => {
      e.preventDefault();
      if (!usernameValidator.hasValue) {
        usernameValidator.alertHasNoRequiredValue();
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
