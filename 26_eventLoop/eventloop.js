// console.log('starting');
// setTimeout(() => {
//     console.log('running');
// }, 1000);

// console.log('ending');

const go = document.querySelector('.go');

go.addEventListener('click', ev => {
    const el = ev.currentTarget;
    el.textContent = 'Go!';
    setTimeout(() => {
        el.classList.add('circle');
        setTimeout(() => {
            el.classList.add('red');
            setTimeout(() => {
                el.classList.remove('circle');
                setTimeout(() => {
                    el.classList.remove('red');
                    el.classList.add('purple');
                    setTimeout(() => {
                        el.classList.add('fadeout');
                    }, 500);
                }, 500);
            }, 250);
        }, 500);
    }, 2000);
});
