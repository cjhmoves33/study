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

    const usernameValidator = new InputValidatorRequired({
      validationType: 'username',
      maxLength: 8,
      invalidMessage: '한글, 영문, 숫자만 입력가능합니다',
      requiredMessage: '이름을 입력하세요',
      ref: username,
    });

    username.oninput = e => {
      const target = e.target as HTMLInputElement;
      target.value = usernameValidator.getValidValue(target.value);
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
