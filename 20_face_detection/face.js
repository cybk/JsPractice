const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new window.FaceDetector();
const SMALL_SIZE = 10;
const SCALE = 1.5;

// function to populate users video
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
    });

    video.srcObject = stream;
    await video.play();
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

function drawFace(face) {
    const { width, height, top, left } = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ffc600';
    ctx.lineWidth = 2;

    ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
    // draw small face
    faceCtx.imageSmoothingEnabled = false;
    faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    faceCtx.drawImage(
        // 5 source arrays
        video, // where to take the image
        face.x,
        face.y,
        face.width,
        face.height,
        // 4 draw args
        face.x,
        face.y,
        SMALL_SIZE,
        SMALL_SIZE
    );

    const width = face.width * SCALE;
    const height = face.height * SCALE;

    // take face back out and draw it back at normal size
    faceCtx.drawImage(
        // 5 source arrays
        faceCanvas, // where to take the image
        face.x,
        face.y,
        SMALL_SIZE,
        SMALL_SIZE,
        // 4 draw args
        face.x - (width - face.width) / 2,
        face.y - (height - face.height) / 2,
        width,
        height
    );
}

async function detect() {
    const faces = await faceDetector.detect(video);
    // asks browser when the next animation frame is, and tell it to run detect for us

    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame(detect);
}

populateVideo().then(detect);
