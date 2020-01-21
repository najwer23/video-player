window.onload = function () {

    const inputRange = document.querySelector('#videoDanceAtBarcelona .videoBar');
    inputRange.addEventListener('input', function () {
        inputRange.style.setProperty('--val', +inputRange.value)
    }, false);

    const video = document.querySelector('#videoDanceAtBarcelona #video');
    const playButton = document.querySelector('#videoDanceAtBarcelona #play');
    const pauseButton = document.querySelector('#videoDanceAtBarcelona #pause');
    const fullScreenButtonOn = document.querySelector('#videoDanceAtBarcelona #fullScreenOn');
    const fullScreenButtonOff = document.querySelector('#videoDanceAtBarcelona #fullScreenOff');
    const videoWrapper = document.querySelector('#videoWrapper');
    const videoControls = document.querySelector('.videoControls');
   
    playButton.addEventListener("click", e => {
        if (video.paused) {
            video.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
        }   
    });

    pauseButton.addEventListener("click", e => {
        if (!video.paused) {
            video.pause();
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
    });

    fullScreenButtonOn.addEventListener("click", function () {
        if (video.requestFullscreen) {
            videoWrapper.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            videoWrapper.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            videoWrapper.webkitRequestFullscreen(); // Chrome and Safari
        } else {
        }
    });

    fullScreenButtonOff.addEventListener("click", function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }   
    });
   
    document.addEventListener("fullscreenchange", function (e) {
        if (document.fullscreenElement) {
            fullScreenButtonOn.style.display = "none";
            fullScreenButtonOff.style.display = "block";
        } else {
            fullScreenButtonOn.style.display = "block";
            fullScreenButtonOff.style.display = "none";
        }  
    });


    window.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == 27) { // esc
            // videoControls.style.bottom = "5px";
        }
    }
}