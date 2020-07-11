import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromAmount, fromSelect, toSelect, toEl } from './elements.js';

export async function handleInput() {
    const rawAmount = await convert(fromAmount.value, fromSelect.value, toSelect.value);
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
