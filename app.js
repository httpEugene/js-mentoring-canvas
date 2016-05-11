(function() {
    const backgroundCanvas = document.getElementById('background');
    const backgroundCtx = backgroundCanvas.getContext('2d');

    const platypusCanvas = document.getElementById('platypus');
    const platypusCtx = platypusCanvas.getContext('2d');

    let zoomState = false;
    let scaleValue = 1;
    let scalingCounter = 0;

    const starsImage = new Image();
    starsImage.src = "https://s-media-cache-ak0.pinimg.com/736x/74/f0/a5/74f0a561e09d83a10cb42e7ecafeb468.jpg";
    starsImage.onload = function () {
        backgroundCtx.drawImage(starsImage, 0, 0, starsImage.width, starsImage.height);
    };

    const platypusImage = new Image();
    platypusImage.src = "http://vignette1.wikia.nocookie.net/pokemon/images/e/e2/054Psyduck_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png";
    platypusImage.onload = function () {
        platypusCtx.translate(200, 150);
        platypusImage.width /= 10;
        platypusImage.height /= 10;
        animate();
    };

    function animate() {
        platypusCtx.clearRect(0, 0, platypusImage.width, platypusImage.height);
        rotate();
        scale();
        platypusCtx.drawImage(platypusImage, 0, 0, platypusImage.width, platypusImage.height);

        requestAnimationFrame(animate);
    }

    function rotate() {
        platypusCtx.translate(platypusImage.width / 2, platypusImage.height / 2);
        platypusCtx.rotate(Math.PI / 180);
        platypusCtx.translate(-platypusImage.width / 2, -platypusImage.height / 2);
    }

    function scale() {
        scaleValue = zoomState ? 1.01 : 0.99;
        if (scalingCounter === 60)  {
            zoomState = !zoomState;
            scalingCounter = 0;
        }
        scalingCounter++;
        platypusCtx.scale(scaleValue, scaleValue);
    }
})();