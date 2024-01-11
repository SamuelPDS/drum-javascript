const btns = document.querySelectorAll('.btn')
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        const idKey = btn.getAttribute('data-key');
       playKey(idKey); 
    }) 
})

    function playKey(idKey) {
        const audio = document.querySelector(`audio[data-key="${idKey}"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        } else {
            console.error('element not found')
        }
    }
    
    document.addEventListener('keydown', (e) => {
        const idKey = e.keyCode.toString();
        playKey(idKey)    
})


    // for (i = 0; i < btns.length; i++) {
    //     const key = btns[i];
    //     const keyCode = key.classList[1];
    //     const idKey = `#btn-${keyCode}`;
        
    //     key.onclick = function () {
    //         playKey(idKey);
    //     }
    
    //     key.onkeydown = e => {
    //         console.log(e)
    //         if (e.key === 'e' || e.key === 'r') {
    //             playKey(idKey)
    //         }
    //     }
    
    // }







