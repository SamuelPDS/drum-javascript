function playKey(idKey) {
    const element = document.querySelector(idKey);
    if(element){
        element.play();
    }
        else{
            console.error('element nof found')
        }
    
}

const btns = document.querySelectorAll('.btn')

    for (i = 0; i < btns.length; i++) {
        const key = btns[i];
        const keyCode = key.classList[1];
        // console.log(key.classList[1]);
        const idKey = `#btn-${keyCode}`;
        // console.log(idKey)
    
        key.onclick = function() {
        //  console.log(key)    
        playKey(idKey);
        }
        
    
        key.onkeydown = e => {
            // console.log(e)
            if(e.key === 'e' || e.key === 'r' ){
                playKey(idKey)
            }
        }
    
    }




