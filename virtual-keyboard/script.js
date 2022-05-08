const arrLang = [
  {
    ru: 'ё', code: 'Backquote', charcode: 192, en: '`', ruShift: 'Ё', enShift: '~',
  },
  {
    ru: '1', code: 'Digit1', charcode: 49, en: '1', ruShift: '!', enShift: '!',
  },
  {
    ru: '2', code: 'Digit2', charcode: 50, en: '2', ruShift: '"', enShift: '@',
  },
  {
    ru: '3', code: 'Digit3', charcode: 51, en: '3', ruShift: '№', enShift: '#',
  },
  {
    ru: '4', code: 'Digit4', charcode: 52, en: '4', ruShift: ';', enShift: '$',
  },
  {
    ru: '5', code: 'Digit5', charcode: 53, en: '5', ruShift: '%', enShift: '%',
  },
  {
    ru: '6', code: 'Digit6', charcode: 54, en: '6', ruShift: ':', enShift: '^',
  },
  {
    ru: '7', code: 'Digit7', charcode: 55, en: '7', ruShift: '?', enShift: '&',
  },
  {
    ru: '8', code: 'Digit8', charcode: 56, en: '8', ruShift: '*', enShift: '*',
  },
  {
    ru: '9', code: 'Digit9', charcode: 57, en: '9', ruShift: '(', enShift: '(',
  },
  {
    ru: '0', code: 'Digit0', charcode: 48, en: '0', ruShift: ')', enShift: ')',
  },
  {
    ru: '-', code: 'Minus', charcode: 189, en: '-', ruShift: '_', enShift: '_',
  },
  {
    ru: '=', code: 'Equal', charcode: 187, en: '=', ruShift: '+', enShift: '+',
  },
  {
    ru: 'Backspace', code: 'Backspace', charcode: 8, en: 'Backspace', ruShift: 'Backspace', enShift: 'Backspace',
  },
  {
    ru: 'Tab', code: 'Tab', charcode: 9, en: 'Tab', ruShift: 'Tab', enShift: 'Tab',
  },
  {
    ru: 'й', code: 'KeyQ', charcode: 81, en: 'q', ruShift: 'Й', enShift: 'Q',
  },
  {
    ru: 'ц', code: 'KeyW', charcode: 87, en: 'w', ruShift: 'Ц', enShift: 'W',
  },
  {
    ru: 'у', code: 'KeyE', charcode: 69, en: 'e', ruShift: 'У', enShift: 'E',
  },
  {
    ru: 'к', code: 'KeyR', charcode: 82, en: 'r', ruShift: 'К', enShift: 'R',
  },
  {
    ru: 'е', code: 'KeyT', charcode: 84, en: 't', ruShift: 'Е', enShift: 'T',
  },
  {
    ru: 'н', code: 'KeyY', charcode: 89, en: 'y', ruShift: 'Н', enShift: 'Y',
  },
  {
    ru: 'г', code: 'KeyU', charcode: 85, en: 'u', ruShift: 'Г', enShift: 'U',
  },
  {
    ru: 'ш', code: 'KeyI', charcode: 73, en: 'i', ruShift: 'Ш', enShift: 'I',
  },
  {
    ru: 'щ', code: 'KeyO', charcode: 79, en: 'o', ruShift: 'Щ', enShift: 'O',
  },
  {
    ru: 'з', code: 'KeyP', charcode: 80, en: 'p', ruShift: 'З', enShift: 'P',
  },
  {
    ru: 'х', code: 'BracketLeft', charcode: 219, en: '[', ruShift: 'Х', enShift: '{',
  },
  {
    ru: 'ъ', code: 'BracketRight', charcode: 221, en: ']', ruShift: 'Ъ', enShift: '}',
  },
  {
    ru: '\\', code: 'Backslash', charcode: 220, en: '\\', ruShift: '|', enShift: '|',
  },
  {
    ru: 'Del', code: 'Delete', charcode: 46, en: 'Del', ruShift: 'Del', enShift: 'Del',
  },
  {
    ru: 'CapsLock', code: 'CapsLock', charcode: 20, en: 'CapsLock', ruShift: 'CapsLock', enShift: 'CapsLock',
  },
  {
    ru: 'ф', code: 'KeyA', charcode: 65, en: 'a', ruShift: 'Ф', enShift: 'A',
  },
  {
    ru: 'ы', code: 'KeyS', charcode: 83, en: 's', ruShift: 'Ы', enShift: 'S',
  },
  {
    ru: 'в', code: 'KeyD', charcode: 68, en: 'd', ruShift: 'В', enShift: 'D',
  },
  {
    ru: 'а', code: 'KeyF', charcode: 70, en: 'f', ruShift: 'А', enShift: 'F',
  },
  {
    ru: 'п', code: 'KeyG', charcode: 71, en: 'g', ruShift: 'П', enShift: 'G',
  },
  {
    ru: 'р', code: 'KeyH', charcode: 72, en: 'h', ruShift: 'Р', enShift: 'H',
  },
  {
    ru: 'о', code: 'KeyJ', charcode: 74, en: 'j', ruShift: 'О', enShift: 'J',
  },
  {
    ru: 'л', code: 'KeyK', charcode: 75, en: 'k', ruShift: 'Л', enShift: 'K',
  },
  {
    ru: 'д', code: 'KeyL', charcode: 76, en: 'l', ruShift: 'Д', enShift: 'L',
  },
  {
    ru: 'ж', code: 'Semicolon', charcode: 186, en: ';', ruShift: 'Ж', enShift: ':',
  },
  {
    ru: 'э', code: 'Quote', charcode: 222, en: "'", ruShift: 'Э', enShift: '"',
  },
  {
    ru: 'Enter', code: 'Enter', charcode: 13, en: 'Enter', ruShift: 'Enter', enShift: 'Enter',
  },
  {
    ru: 'Shift', code: 'ShiftLeft', charcode: 16, en: 'Shift', ruShift: 'Shift', enShift: 'Shift',
  },
  {
    ru: 'я', code: 'KeyZ', charcode: 90, en: 'z', ruShift: 'Я', enShift: 'Z',
  },
  {
    ru: 'ч', code: 'KeyX', charcode: 88, en: 'x', ruShift: 'Ч', enShift: 'X',
  },
  {
    ru: 'с', code: 'KeyC', charcode: 67, en: 'c', ruShift: 'С', enShift: 'С',
  },
  {
    ru: 'м', code: 'KeyV', charcode: 86, en: 'v', ruShift: 'М', enShift: 'V',
  },
  {
    ru: 'и', code: 'KeyB', charcode: 66, en: 'b', ruShift: 'И', enShift: 'B',
  },
  {
    ru: 'т', code: 'KeyN', charcode: 78, en: 'n', ruShift: 'Т', enShift: 'N',
  },
  {
    ru: 'ь', code: 'KeyM', charcode: 77, en: 'm', ruShift: 'Ь', enShift: 'M',
  },
  {
    ru: 'б', code: 'Comma', charcode: 188, en: ',', ruShift: 'Б', enShift: '<',
  },
  {
    ru: 'ю', code: 'Period', charcode: 190, en: '.', ruShift: 'Ю', enShift: '>',
  },
  {
    ru: '.', code: 'Slash', charcode: 191, en: '/', ruShift: ',', enShift: '?',
  },
  {
    ru: '▲', code: 'ArrowUp', charcode: 38, en: '▲', ruShift: '▲', enShift: '▲',
  },
  {
    ru: 'Shift', code: 'ShiftRight', charcode: 16, en: 'Shift', ruShift: 'Shift', enShift: 'Shift',
  },
  {
    ru: 'Ctrl', code: 'ControlLeft', charcode: 17, en: 'Ctrl', ruShift: 'Ctrl', enShift: 'Ctrl',
  },
  {
    ru: 'Win', code: 'MetaLeft', charcode: 91, en: 'Win', ruShift: 'Win', enShift: 'Win',
  },
  {
    ru: 'Alt', code: 'AltLeft', charcode: 18, en: 'Alt', ruShift: 'Alt', enShift: 'Alt',
  },
  {
    ru: ' ', code: 'Space', charcode: 32, en: ' ', ruShift: ' ', enShift: ' ',
  },
  {
    ru: 'Alt', code: 'AltRight', charcode: 18, en: 'Alt', ruShift: 'Alt', enShift: 'Alt',
  },
  {
    ru: '◄', code: 'ArrowLeft', charcode: 37, en: '◄', ruShift: '◄', enShift: '◄',
  },
  {
    ru: '▼', code: 'ArrowDown', charcode: 40, en: '▼', ruShift: '▼', enShift: '▼',
  },
  {
    ru: '►',
    code: 'ArrowRight',
    charcode: 39,
    en: '►',
    ruShift: '►',
    enShift: '►',
  },
  {
    ru: 'Ctrl', code: 'ControlRight', charcode: 17, en: 'Ctrl', ruShift: 'Ctrl', enShift: 'Ctrl',
  },
];

const body = document.querySelector('body');
localStorage.setItem('capslock', 'off');
localStorage.setItem('shift', 'off');

class Keyboard {
  constructor(bodyy) {
    this.body = bodyy;
  }

  setLocalStorage() {
    const lang = localStorage.getItem('language');
    localStorage.setItem('language', lang);
    return this.lang;
  }

  getLocalStorage() {
    const lang = localStorage.getItem('language');
    if (lang) {
      localStorage.getItem('language');
    } else {
      localStorage.setItem('language', 'en');
    }
    return this.lang;
  }

  addSkelet() {
    const bodyWrapper = document.createElement('div');
    bodyWrapper.classList.add('body-wrapper');
    this.body.prepend(bodyWrapper);
    const title = document.createElement('h1');
    title.textContent = 'Virtual keyboard';
    bodyWrapper.append(title);
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.textContent = '';
    bodyWrapper.append(textarea);
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('keyboard-wrapper');
    bodyWrapper.append(keyboardWrapper);
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Keyboard was created in operation system Windows.';
    bodyWrapper.append(description);
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'To switch the language(en/rus) use combination: ctrl + alt.';
    bodyWrapper.append(info);
    return keyboardWrapper;
  }

  addButton() {
    const keyboardWrapper = this.addSkelet();
    for (let i = 0; i < arrLang.length; i += 1) {
      const {
        ru, code, en, ruShift, enShift,
      } = arrLang[i];
      const keyboardButton = document.createElement('div');
      keyboardButton.classList.add('keyboard-button');
      keyboardButton.classList.add(`${code}`);
      keyboardButton.setAttribute('data-ru', `${ru}`);
      keyboardButton.setAttribute('data-en', `${en}`);
      keyboardButton.setAttribute('data-ruShift', `${ruShift}`);
      keyboardButton.setAttribute('data-enShift', `${enShift}`);
      keyboardWrapper.append(keyboardButton);
      keyboardButton.textContent = arrLang[i][`${localStorage.getItem('language')}`];
      if (code === 'Backspace' || code === 'Delete' || code === 'Enter' || code === 'ShiftRight') {
        const div = document.createElement('div');
        div.classList.add('clear');
        keyboardWrapper.append(div);
      }
    }
  }

  toggleActive(button) {
    button.classList.toggle('active');
    return this.button;
  }

  addClassActive(button) {
    button.classList.add('active');
    return this.button;
  }

  switchCapsLock() {
    const capsLock = document.querySelector('.CapsLock');
    this.toggleActive(capsLock);
    const buttons = document.querySelectorAll('.keyboard-button');
    const language = localStorage.getItem('language');
    const caps = localStorage.getItem('capslock');
    const shift = localStorage.getItem('shift');
    if (caps === 'off' && shift === 'off') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (language === 'en') {
          buttons[i].textContent = buttons[i].dataset.enshift;
        } else {
          buttons[i].textContent = buttons[i].dataset.rushift;
        }
      }
      localStorage.setItem('capslock', 'on');
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (language === 'en') {
          buttons[i].textContent = buttons[i].dataset.en;
        } else {
          buttons[i].textContent = buttons[i].dataset.ru;
        }
      }
      localStorage.setItem('capslock', 'off');
    }
    return this.buttons;
  }

  typeLetters(target, event) {
    const textarea = document.querySelector('.textarea');
    const cursor = textarea.selectionStart;
    event.preventDefault();
    textarea.focus();
    textarea.textContent += target;
    textarea.setSelectionRange(cursor + 1, cursor + 1);
    return this.cursor;
  }

  specialButtons(target, event) {
    const textarea = document.querySelector('.textarea');
    const cursor = textarea.selectionStart;
    event.preventDefault();
    textarea.focus();
    if (target === 'Delete') {
      textarea.textContent = textarea.textContent.slice(0, cursor)
      + textarea.textContent.slice(cursor + 1, textarea.textContent.length);
      textarea.setSelectionRange(cursor, cursor);
    }
    if (target === 'Enter') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)}\n${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
    if (target === 'Tab') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)}    ${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 4, cursor + 4);
    }
    if (target === 'Space') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)} ${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
    if (target === 'Backspace') {
      textarea.textContent = textarea.textContent.slice(0, cursor - 1)
      + textarea.textContent.slice(cursor, textarea.textContent.length);
      textarea.setSelectionRange(cursor - 1, cursor - 1);
    }
    if (target === 'ArrowLeft') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)}◄${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
    if (target === 'ArrowRight') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)}►${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
    if (target === 'ArrowUp') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)}▲${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
    if (target === 'ArrowDown') {
      textarea.textContent = `${textarea.textContent.slice(0, cursor)}▼${
        textarea.textContent.slice(cursor, textarea.textContent.length)}`;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
    return this.cursor;
  }

  shiftDown(target) {
    const caps = localStorage.getItem('capslock');
    const shift = localStorage.getItem('shift');
    const buttons = document.querySelectorAll('.keyboard-button');
    if (target === 'Shift') {
      if (caps === 'off' && shift === 'off') {
        localStorage.setItem('shift', 'on');
        for (let i = 0; i < buttons.length; i += 1) {
          if (localStorage.getItem('language') === 'en') {
            buttons[i].textContent = buttons[i].dataset.enshift;
          } else {
            buttons[i].textContent = buttons[i].dataset.rushift;
          }
        }
      }
      if (caps === 'on' && shift === 'off') {
        localStorage.setItem('shift', 'on');
        for (let i = 0; i < buttons.length; i += 1) {
          if (localStorage.getItem('language') === 'en') {
            buttons[i].textContent = buttons[i].dataset.en;
          } else {
            buttons[i].textContent = buttons[i].dataset.ru;
          }
        }
      }
    }
    return this.caps;
  }

  shiftUp(target) {
    const caps = localStorage.getItem('capslock');
    const shift = localStorage.getItem('shift');
    const buttons = document.querySelectorAll('.keyboard-button');
    if (target === 'Shift') {
      if (caps === 'off' && shift === 'on') {
        localStorage.setItem('shift', 'off');
        for (let i = 0; i < buttons.length; i += 1) {
          if (localStorage.getItem('language') === 'en') {
            buttons[i].textContent = buttons[i].dataset.en;
          } else {
            buttons[i].textContent = buttons[i].dataset.ru;
          }
        }
      }
      if (caps === 'on' && shift === 'on') {
        localStorage.setItem('shift', 'off');
        for (let i = 0; i < buttons.length; i += 1) {
          if (localStorage.getItem('language') === 'en') {
            buttons[i].textContent = buttons[i].dataset.enshift;
          } else {
            buttons[i].textContent = buttons[i].dataset.rushift;
          }
        }
      }
    }
    return this.caps;
  }

  changeLanguage(target, event) {
    const buttons = document.querySelectorAll('.keyboard-button');
    if ((event.ctrlKey && target === 'Alt') || (event.altKey && target === 'Control')) {
      if (localStorage.getItem('language') === 'en') {
        localStorage.setItem('language', 'ru');
        for (let i = 0; i < buttons.length; i += 1) {
          if (localStorage.getItem('capslock') === 'off') {
            buttons[i].textContent = buttons[i].dataset.ru;
          } else {
            buttons[i].textContent = buttons[i].dataset.rushift;
          }
        }
      } else {
        localStorage.setItem('language', 'en');
        for (let i = 0; i < buttons.length; i += 1) {
          if (localStorage.getItem('capslock') === 'off') {
            buttons[i].textContent = buttons[i].dataset.en;
          } else {
            buttons[i].textContent = buttons[i].dataset.enshift;
          }
        }
      }
    }
    return this.target;
  }
}

const keyboard = new Keyboard(body);
const keyboard1 = new Keyboard();
keyboard.addButton();

document.addEventListener('click', (event) => {
  if (event.target.innerHTML === 'CapsLock') { keyboard1.switchCapsLock(); }
  if (event.target.innerHTML.length === 1 && event.target.innerHTML !== ' ' && event.target.innerHTML !== '◄' && event.target.innerHTML !== '►' && event.target.innerHTML !== '▼' && event.target.innerHTML !== '▲') {
    keyboard1.typeLetters(event.target.innerHTML, event);
  }
  if (event.target.innerHTML.length !== 1 || event.target.innerHTML === ' ' || event.target.innerHTML === '◄' || event.target.innerHTML === '►' || event.target.innerHTML === '▼' || event.target.innerHTML === '▲') {
    keyboard1.specialButtons(event.target.classList[1], event);
  }
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') { keyboard1.switchCapsLock(); }
  if (event.key.length === 1 && event.code !== 'Space' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'ArrowDown' && event.code !== 'ArrowUp') {
    keyboard1.typeLetters(document.querySelector(`.${event.code}`).textContent, event);
  }
  if (event.key === 'Shift') { keyboard1.shiftDown(event.key); }
  if (event.key.length !== 1 || event.code === 'Space' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'ArrowDown' || event.code === 'ArrowUp') {
    keyboard1.specialButtons(event.code, event);
  }
  keyboard1.changeLanguage(event.key, event);
  if (event.key !== 'CapsLock') {
    keyboard1.addClassActive(document.querySelector(`.${event.code}`));
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') { keyboard1.shiftUp(event.key); }
  if (event.key !== 'CapsLock') {
    keyboard1.toggleActive(document.querySelector(`.${event.code}`));
  }
});
document.addEventListener('mousedown', (event) => {
  keyboard1.shiftDown(event.target.innerHTML);
  if (event.target.innerHTML !== 'CapsLock') { keyboard1.toggleActive(event.target); }
});
document.addEventListener('mouseup', (event) => {
  keyboard1.shiftUp(event.target.innerHTML);
  if (event.target.innerHTML !== 'CapsLock') { keyboard1.toggleActive(event.target); }
});
window.addEventListener('beforeunload', keyboard1.setLocalStorage);
window.addEventListener('load', keyboard1.getLocalStorage);
