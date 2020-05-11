// Select the elements on the page - canvas and shake button
const canvas = document.querySelector('#etch');
const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 10;

const btn = document.querySelector('.shake');

// setup our canvas for drawing
const { width, height } = canvas;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
    ctx.beginPath();
    ctx.moveTo(x, y);

    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            y = y < 0 ? 0 : y;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            y = y > height ? height : y;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            x = x < 0 ? 0 : x;
            break;
        default:
            x += MOVE_AMOUNT;
            x = x > height ? height : x;
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        draw({ key: e.key });
    }
}

// clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        () => {
            canvas.classList.remove('shake');
        },
        { once: true }
    );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
btn.addEventListener('click', clearCanvas);
