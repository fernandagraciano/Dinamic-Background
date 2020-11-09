const angles = [0, 60, 120, 180, 240, 300];
const timeDelay = 2000; // in miliseconds

function getRandomItem(fromArray) {
    return fromArray[Math.floor(Math.random() * fromArray.length)];
}

function getRandomSample(fromArray, withLength) {
    var result = [];
    var numItems = Math.floor(Math.random() * withLength || fromArray.length);
    
    for (var i = 0; i < numItems; i++) {
        result.push(getRandomItem(fromArray));
    }
    
    return result;
}


setInterval(function() {
    // var $patternItems = getRandomSample($('.masonry img'));
    var $patternItems = $('.masonry img');
    $.each($patternItems, function(imdex, value) {
       $(value).css('transform', 'rotate(' + getRandomItem(angles) + 'deg)');
    });
}, timeDelay)