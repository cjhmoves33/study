// modules
import { getValidationRule, getValidationInputs } from '@/module/module';
// hooks
// import { UseValidator } from '@/v5/hook';

const USER_NAME = 'username';
class App {
  private bindEvent() {
    const [usernameRef, usernameInvalidValueMessageRef] =
      getValidationInputs(USER_NAME);

    // 1. 'username'에 해당하는 유효성검사 규칙 가져오기
    const usernameRule = getValidationRule(USER_NAME);

    // 2. 유효성검사 플랜에 맞는 검사기(hook) 제작
    // const usernameValidator = new UseValidator();

    // 5. [input 입력시] 검사기로 유효성검사 및 Input에 유효한 값 입력.
    usernameRef.oninput = () => {
      // usernameValidator.validation();
    };
  }

  public init() {
    this.bindEvent();
  }
}

new App().init();
