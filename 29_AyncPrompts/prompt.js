function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    popup.remove();
    popup = null;
}

function ask(options) {
    return new Promise(async res => {
        // create a popup
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML(
            'afterbegin',
            `<fieldset>
                <label>${options.title}</label>
                <input type="text" name="input"></input>
                <button type="submit">Submit</button>
            </fieldset>`
        );

        if (options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            popup.firstChild.appendChild(skipButton);
            skipButton.addEventListener('click', ev => {
                res(null);
                destroyPopup(popup);
            });
        }

        popup.addEventListener(
            'submit',
            ev => {
                ev.preventDefault();
                res(ev.target.input.value);
                destroyPopup(popup);
            },
            { once: true }
        );

        // listen for the submit even
        // At submit, resolve the data that was on the input

        document.body.appendChild(popup);
        await wait(500);
        popup.classList.add('open');
    });
}

async function askQuestion(e) {
    const button = e.currentTarget;
    const shouldCancel = 'cancel' in button.dataset;
    const answer = await ask({ title: button.dataset.question, cancel: shouldCancel });
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(e => e.addEventListener('click', askQuestion));

const questions = [
    { title: 'What is your name?' },
    { title: 'What is your age?', cancel: true },
    { title: 'What is your dogs name' },
];
