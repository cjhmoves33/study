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
    // 1. HTM 요소 가져오기 (form, input, span)
    const form = document.querySelector('form') as HTMLFormElement;

    const usernameRef = document.querySelector(
      'input[type=text][name=username]'
    ) as HTMLInputElement;

    const usernameInvalidMessageRef = document.querySelector(
      '#username-invalid-notice'
    ) as HTMLSpanElement;

    // 2. 'username'에 해당하는 유효성검사 규칙 가져오기
    const { pattern, maxLength, invalidMessage, requireMessage } =
      getValidationRule('username');

    // 3. 유효성검사 플랜 제작
    const validationPlanBuilder = new ValidationPlanBuilder();
    const usernameValidationPlan = validationPlanBuilder.rules
      .pattern(pattern)
      .maxLength(maxLength)
      .invalidMessage(invalidMessage)
      .requireMessage(requireMessage)
      .refs.inputRef(usernameRef)
      .invalidMessageRef(usernameInvalidMessageRef)
      .build();

    usernameValidationPlan.log();

    // 4. 유효성검사 플랜에 맞는 검사기(hook) 제작
    const usernameValidator = new UseValidator(usernameValidationPlan);

    // 5. [input 입력시] 검사기로 유효성검사 및 Input에 유효한 값 입력.
    usernameRef.oninput = e => {
      const target = e.target as HTMLInputElement;
      usernameValidator.setValue(target.value).reportValidity();
    };

    // 5. [form 제출시] 검사기로 값 여부 확인 및 포커싱(필수입력 값일 시)
    form.onsubmit = e => {
      e.preventDefault();
      if (!usernameValidator.hasValue()) {
        usernameValidator.alert().focus();
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
