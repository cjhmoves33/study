// import InputValidator from '@/validator/inputValidator';
import InputValidatorRequired from '@/validator/inputValidatorRequired';

class App {
  // private ajaxCall() {
  //   return;
  // }

  private bindEvent() {
    const form = document.querySelector('form') as HTMLFormElement;

    const username = document.querySelector(
      'input[type=text][name=username]'
    ) as HTMLInputElement;

    const usernameInvalidNotice = document.querySelector(
      'span[id=username-invalid-notice]'
    ) as HTMLSpanElement;

    const usernameValidator = new InputValidatorRequired({
      validationType: 'username',
      maxLength: 8,
      inputRef: username,
      invalidNotice: '한글, 영문, 숫자만 입력가능합니다',
      invalidNoticeRef: usernameInvalidNotice,
      requiredMessage: '이름을 입력하세요',
    });

    username.oninput = e => {
      const target = e.target as HTMLInputElement;
      usernameValidator.setValidValue(target.value);
      usernameValidator.reportValidity();
    };

    form.onsubmit = e => {
      e.preventDefault();
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
