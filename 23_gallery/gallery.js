function gallery(gallery) {
    if (!gallery) {
        throw new Error('No gallery found!');
    }

    const images = [...gallery.querySelectorAll('img')];
    const modal = document.querySelector('.modal');
    const prev = modal.querySelector('.prev');
    const next = modal.querySelector('.next');
    let currentImage;

    function openModal() {
        if (modal.matches('.open')) {
            console.info('Model already open');
            return;
        }

        modal.classList.add('open');
        window.addEventListener('keyup', handleKeyUp);
        next.addEventListener('click', showNextImage);
        prev.addEventListener('click', showPreviousImage);
    }

    function closeModal() {
        modal.classList.remove('open');
        window.removeEventListener('keyup', handleKeyUp);
        next.removeEventListener('click', showNextImage);
        prev.addEventListener('click', showPreviousImage);
    }

    function showNextImage() {
        currentImage = currentImage.nextElementSibling || gallery.firstElementChild;
        showImage(currentImage);
    }

    function showPreviousImage() {
        currentImage = currentImage.previousElementSibling || gallery.lastElementChild;
        showImage(currentImage);
    }

    function handleKeyUp(e) {
        if (e.key === 'Escape') {
            return closeModal();
        }
        if (e.key === 'ArrowRight') {
            return showNextImage();
        }
        if (e.key === 'ArrowLeft') {
            return showPreviousImage();
        }
    }

    function showImage(el) {
        if (!el) {
            console.log('No image to show');
        }

        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;

        openModal();
    }

    images.forEach(img =>
        img.addEventListener('click', ev => {
            showImage(ev.currentTarget);
        })
    );

    images.forEach(item => {
        item.addEventListener('keyup', ev => {
            if (ev.key === 'Enter') {
                showImage(ev.currentTarget);
            }
        });
    });

    modal.addEventListener('click', ev => {
        if (ev.currentTarget === ev.target) {
            closeModal();
        }
    });
}

const gallery1 = gallery(document.querySelector('.gallery1'));
const gallery2 = gallery(document.querySelector('.gallery2'));
