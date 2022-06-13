// import FormValidator from '@/validator/formValidator';
import FormValidatorRequired from '@/validator/formValidatorRequired';

class App {
  // private ajaxCall() {
  //   return;
  // }

  private bindEvent() {
    const form = document.querySelector('form') as HTMLFormElement;
    form.onsubmit = e => e.preventDefault();

    const username = document.querySelector(
      'input[type=text][name=username]'
    ) as HTMLInputElement;

    username.oninput = e => {
      const target = e.target as HTMLInputElement;
      const formValidator = new FormValidatorRequired({
        validationType: 'username',
        maxLength: 8,
        invalidMessage: '한글, 영문, 숫자만 입력가능합니다',
        requiredMessage: '이름을 입력하세요',
      });

      const validValue = formValidator.getValidValue(target.value);
      target.value = validValue;
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
