function Slider(slider) {
    if (!slider) {
        throw new Error('No Slider passed in');
    }

    // Select elements needed for slider
    this.prevButton = slider.querySelector('.goToPrev');
    this.slides = slider.querySelector('.slides');
    this.nextButton = slider.querySelector('.goToNext');

    this.StartSlider();
    this.applyClasses();

    this.prevButton.addEventListener('click', () => this.move('back'));
    this.nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.StartSlider = function() {
    this.current = this.slides.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);

    if (direction === 'back') {
        [this.prev, this.current, this.next] = [
            this.prev.previousElementSibling || this.slides.lastElementChild,
            this.prev,
            this.current,
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current,
            this.next,
            this.next.nextElementSibling || this.slides.firstElementChild,
        ];
    }

    this.applyClasses();
};

const slider1 = new Slider(document.querySelector('.slider'));
const slider2 = new Slider(document.querySelector('.dog-slider'));
