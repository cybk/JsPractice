function wait(ms = 0) {
    return new Promise(res => setTimeout(res, ms));
}

function getRandomBetween(min = 20, max = 150) {
    return Math.floor(Math.random() * (max - min) + min);
}

// async function draw(elem) {
//     const text = elem.textContent;
//     let soFar = '';
//     for (const letter of text) {
//         soFar += letter;
//         elem.textContent = soFar;
//         // wait some mout of time
//         const { typeMin, typeMax } = elem.dataset;
//         await wait(getRandomBetween(typeMin, typeMax));
//     }
// }

function draw(el) {
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset;
    async function drawLetter() {
        el.textContent = text.slice(0, index);
        index += 1;

        if (index <= text.length) {
            await wait(10);
            drawLetter();
        }
    }

    drawLetter();
}

Array.from(document.querySelectorAll('[data-type]')).forEach(draw);
