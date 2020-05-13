const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const btn = document.querySelector('.accept');

const ob = new IntersectionObserver(
    e => {
        if (e[0].intersectionRatio === 1) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    },
    {
        root: terms,
        threshold: 1,
    }
);

ob.observe(terms.lastElementChild);
