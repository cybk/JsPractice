const wait = (ms = 0) => new Promise(res => setTimeout(res, ms));

wait(2000).then(() => console.log('Done!'));

const go = document.querySelector('.go');

async function animate(ev) {
    const el = ev.currentTarget;
    el.textContent = 'Go!';
    await wait(2000);
    el.classList.add('circle');
    await wait(500);
    el.classList.add('red');
    await wait(250);
    el.classList.remove('circle');
    await wait(500);
    el.classList.remove('red');
    el.classList.add('purple');
    await wait(500);
    el.classList.add('fadeout');
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
