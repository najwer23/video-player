window.onload = function () {

    const inputRange = document.querySelector('#videoDanceAtBarcelona .videoBar');

    inputRange.addEventListener('input', function () {
        inputRange.style.setProperty('--val', +inputRange.value)
    }, false);
    
}