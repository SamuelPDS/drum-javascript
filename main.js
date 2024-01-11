document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();

    // if(key === 'e'){
    //     playKey(idKey)
    // }

    function playKey(idKey) {
        const element = document.querySelector(idKey);
        if (element) {
            element.play();
        } else {
            console.error('element nof found')
        }
    }
    
    const btns = document.querySelectorAll('.btn')
    for (i = 0; i < btns.length; i++) {
        const key = btns[i];
        const keyCode = key.classList[1];
        const idKey = `#btn-${keyCode}`;
    
        key.onclick = function () {
            playKey(idKey);
        }
    
        key.onkeydown = e => {
            if (e.key === 'e' || e.key === 'r') {
                playKey(idKey)
            }
        }
    
    }
})






