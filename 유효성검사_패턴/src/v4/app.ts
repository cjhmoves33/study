// builder
import { ValidationPlanBuilder } from '@/v4/validatorBuilderV4';
// modules
import { getValidationRule, getValidationInputs } from '@/module/module';
// hooks
import { UseValidator } from '@/v4/hook';

class App {
  private bindEvent() {
    const USER_NAME = 'username';

    // 1. HTML 요소 가져오기 (form, input, span)
    const form = document.querySelector('form') as HTMLFormElement;

    const [usernameRef, usernameInvalidValueMessageRef] =
      getValidationInputs(USER_NAME);

    // 2. 'username'에 해당하는 유효성검사 규칙 가져오기
    const usernameRule = getValidationRule(USER_NAME);

    // 3. 유효성검사 플랜 제작
    const usernameValidationPlan = new ValidationPlanBuilder().rule
      .pattern(usernameRule.pattern)
      .maxLength(usernameRule.maxLength)
      .invalidValueMessage(usernameRule.invalidMessage)
      .requireMessage(usernameRule.requireMessage)
      .maxLengthMessage(usernameRule.maxLengthMessage)
      .next()
      .refs.inputRef(usernameRef)
      .invalidValueMessageRef(usernameInvalidValueMessageRef)
      .next()
      .build();

    // 4. 유효성검사 플랜에 맞는 검사기(hook) 제작
    const usernameValidator = new UseValidator(usernameValidationPlan);

    // 5. [input 입력시] 검사기로 유효성검사 및 Input에 유효한 값 입력.
    usernameRef.oninput = () => {
      usernameValidator.validation();
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

  private init() {
    this.bindEvent();
  }

  public created() {
    this.init();
  }
}

new App().created();
