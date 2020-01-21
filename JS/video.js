window.onload = function () {

    const inputRange = document.querySelector('#videoDanceAtBarcelona .videoBar');
    inputRange.addEventListener('input', function () {
        inputRange.style.setProperty('--val', +inputRange.value)
    }, false);

    const video = document.querySelector('#videoDanceAtBarcelona #video');
    const playButton = document.querySelector('#videoDanceAtBarcelona #play');
    const pauseButton = document.querySelector('#videoDanceAtBarcelona #pause');
   
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
}