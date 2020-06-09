function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No gallery found!');
    }

    this.gallery = gallery;

    this.images = [...gallery.querySelectorAll('img')];
    this.modal = document.querySelector('.modal');
    this.prev = this.modal.querySelector('.prev');
    this.next = this.modal.querySelector('.next');

    this.showNextImage = this.showNextImage.bind(this);
    this.showPreviousImage = this.showPreviousImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.images.forEach(img =>
        img.addEventListener('click', ev => {
            this.showImage(ev.currentTarget);
        })
    );

    this.images.forEach(item => {
        item.addEventListener('keyup', ev => {
            if (ev.key === 'Enter') {
                this.showImage(ev.currentTarget);
            }
        });
    });

    this.modal.addEventListener('click', ev => {
        if (ev.currentTarget === ev.target) {
            this.closeModal();
        }
    });
}

Gallery.prototype.openModal = function() {
    if (this.modal.matches('.open')) {
        this.console.info('Model already open');
        return;
    }

    this.modal.classList.add('open');
    window.addEventListener('keyup', this.handleKeyUp);
    this.next.addEventListener('click', this.showNextImage);
    this.prev.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.closeModal = function() {
    this.modal.classList.remove('open');
    window.removeEventListener('keyup', this.handleKeyUp);
    this.next.removeEventListener('click', this.showNextImage);
    this.prev.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.showNextImage = function() {
    this.currentImage = this.currentImage.nextElementSibling || this.gallery.firstElementChild;
    this.showImage(this.currentImage);
};

Gallery.prototype.showPreviousImage = function() {
    this.currentImage = this.currentImage.previousElementSibling || this.gallery.lastElementChild;
    this.showImage(this.currentImage);
};

Gallery.prototype.handleKeyUp = function(e) {
    if (e.key === 'Escape') {
        return this.closeModal();
    }
    if (e.key === 'ArrowRight') {
        return this.showNextImage();
    }
    if (e.key === 'ArrowLeft') {
        return this.showPreviousImage();
    }
};

Gallery.prototype.showImage = function(el) {
    if (!el) {
        console.log('No image to show');
    }

    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p').textContent = el.dataset.description;
    this.currentImage = el;

    this.openModal();
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
