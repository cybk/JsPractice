const wait = (ms = 0) => new Promise(res => setTimeout(res, ms));

wait(2000).then(() => console.log('Done!'));

const go = document.querySelector('.go');

function animate(ev) {
    const el = ev.currentTarget;
    el.textContent = 'Go!';
    wait(2000)
        .then(() => {
            el.classList.add('circle');
            return wait(500);
        })
        .then(() => {
            el.classList.add('red');
            return wait(250);
        })
        .then(() => {
            el.classList.remove('circle');
            return wait(500);
        })
        .then(() => {
            el.classList.remove('red');
            el.classList.add('purple');
            return wait(500);
        })
        .then(() => el.classList.add('fadeout'));
}

go.addEventListener('click', animate);

// go.addEventListener('click', ev => {
//     setTimeout(() => {
//         el.classList.add('circle');
//         setTimeout(() => {
//             el.classList.add('red');
//             setTimeout(() => {
//                 el.classList.remove('circle');
//                 setTimeout(() => {
//                     el.classList.remove('red');
//                     el.classList.add('purple');
//                     setTimeout(() => {
//                         el.classList.add('fadeout');
//                     }, 500);
//                 }, 500);
//             }, 250);
//         }, 500);
//     }, 2000);
// });
