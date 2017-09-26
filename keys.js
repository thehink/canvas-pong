var keys = {};


(function(){

    function keyDown(event) {
        keys[event.key.toLowerCase()] = true;
    }

    function keyUp(event) {
        keys[event.key.toLowerCase()] = false;
    }

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);    
})();