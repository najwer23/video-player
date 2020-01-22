window.onload = function () {

    const inputRange = document.querySelector('#videoDanceAtBarcelona .videoBar');
    const video = document.querySelector('#videoDanceAtBarcelona .video');
    const playButton = document.querySelector('#videoDanceAtBarcelona .play');
    const pauseButton = document.querySelector('#videoDanceAtBarcelona .pause');
    const fullScreenButtonOn = document.querySelector('#videoDanceAtBarcelona .fullScreenOn');
    const fullScreenButtonOff = document.querySelector('#videoDanceAtBarcelona .fullScreenOff');
    const videoWrapper = document.querySelector('#videoDanceAtBarcelona .videoWrapper');
    const seekBar = document.querySelector('#videoDanceAtBarcelona .seekBar');
    const videoTime = document.querySelector('#videoDanceAtBarcelona .videoTime');
    
    inputRange.addEventListener('input', function () {
        inputRange.style.setProperty('--val', +inputRange.value)
    });
   
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

    seekBar.addEventListener("change", function () {
        let time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
        inputRange.style.setProperty('--val', +inputRange.value)
        videoTime.innerHTML = timeInHours(video.currentTime) + " / " + timeInHours(video.duration)
    });


    video.addEventListener("timeupdate", function () {
        let value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
        inputRange.style.setProperty('--val', +inputRange.value)
        videoTime.innerHTML = timeInHours(video.currentTime) + " / " + timeInHours(video.duration)
        if (video.currentTime == video.duration) {
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
            
    });

    function timeInHours(timeInSeconds) {
        let seconds = Math.floor(+timeInSeconds.toFixed())
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(seconds / 3600);

        seconds = seconds == 60 ? 0 : seconds;
        minutes = minutes == 60 ? 0 : minutes;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds
    }

    window.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == 27) { // esc
            // videoControls.style.bottom = "5px";
        }
    }
}