const wes = document.querySelector('.wes');
const signUpForm = document.querySelector('[name="signup"]');

wes.addEventListener('click', e => {
    console.log('You Clicked it');

    e.preventDefault();
});

signUpForm.addEventListener('click', e => {
    console.log(e);
});

signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.currentTarget.name.value);
});
