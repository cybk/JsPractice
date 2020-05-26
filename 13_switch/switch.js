const turtle = document.querySelector('.turtle');
let y = 0;
let x = 0;
const speed = 5;

function handleClick(e) {
    if (!e.key.includes('Arrow')) return;

    switch (e.key) {
        case 'ArrowUp':
            y -= 1;
            break;
        case 'ArrowDown':
            y += 1;
            break;
        case 'ArrowRight':
            x += 1;
            break;
        case 'ArrowLeft':
            x -= 1;
            break;
        default:
            console.log('that is not a valid move');
            break;
    }

    console.log(`--x: ${x * speed}px;--y: ${y * speed}px`);

    turtle.setAttribute('style', `--x: ${x * speed}px;--y: ${y * speed}px`);
}

window.addEventListener('keydown', handleClick);
