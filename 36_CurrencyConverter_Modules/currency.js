import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handles.js';
import { fromSelect, toSelect, form } from './elements.js';

const optionsHtml = generateOptions(currencies);
fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;

form.addEventListener('input', handleInput);
