function slider(slider) {
    if (!slider) {
        throw new Error('No Slider passed in');
    }

    // Create some variables for working with the slider
    let current;
    let prev;
    let next;

    // Select elements needed for slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function startSlider() {
        current = slides.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (direction === 'back') {
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }

        applyClasses();
    }

    startSlider();
    applyClasses();

    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', () => move('next'));
}

const slider1 = slider(document.querySelector('.slider'));
const slider2 = slider(document.querySelector('.dog-slider'));
