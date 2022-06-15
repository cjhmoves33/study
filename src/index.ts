import InputValidator from '@/validator/inputValidator';

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
      '#username-invalid-notice'
    ) as HTMLSpanElement;

    const usernameValidator = new InputValidator({
      validationType: 'username',
      maxLength: 8,
      inputRef: username,
      invalidNotice: '한글, 영문, 숫자만 입력가능합니다',
      invalidNoticeRef: usernameInvalidNotice,
    });

    username.oninput = e => {
      const target = e.target as HTMLInputElement;
      usernameValidator.setValidValue(target.value).reportValidity();
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
