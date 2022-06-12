import FormValidator from '@/validator/formValidator.js';

class App {
  private ajaxCall() {
    return;
  }

  private bindEvent() {
    const username = document.querySelector(
      'input[type=text][name=username]'
    ) as HTMLInputElement;

    username.oninput = e => {
      const target = e.target as HTMLInputElement;
      const formValidator = new FormValidator('username', 8);

      const validValue = formValidator.getValidValue(target.value);
      target.value = validValue;
    };
  }

  private render() {
    return;
  }

  private init() {
    this.ajaxCall();
    this.bindEvent();
    this.render();
  }

  public created() {
    this.init();
  }
}

new App().created();
