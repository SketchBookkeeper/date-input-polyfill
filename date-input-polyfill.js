import './date-input-polyfill.scss';
import Input from './input.js';

window.datePicker = function(el) {
  if (Input.supportsDateInput()) return;

  return new Input(el);
}
