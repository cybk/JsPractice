const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

function handleClick() {
    console.log('It Got Clicked!!');
}

const hooray = () => console.log('Hooooorayy!!!!');

butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', hooray);

const buyButons = Array.from(document.querySelectorAll('.buy'));

const applyEvent = item => {
    item.addEventListener('click', () => console.log('Buying Something'));
};

buyButons.forEach(applyEvent);
