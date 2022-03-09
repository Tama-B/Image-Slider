const img = document.querySelector('img');
const prevBtn = document.querySelector('#prev_btn');
const nxtBtn = document.querySelector('#nxt_btn');
const imgPaths = ['img/aragon.jpg', 'img/gollum.jpg', 'img/gimli.jpg'];
let imgNumber = 0;



function changeImage(previousOrNext) {
    console.log('test');
    if (previousOrNext == true) {
        imgNumber++;
        if (imgNumber > imgPaths.length - 1) {
            img.src = imgPaths[0];
            imgNumber = 0;
        }
        else {
            img.src = imgPaths[imgNumber];
        }
    }
    else if (previousOrNext == false) {
        imgNumber--;
        if (imgNumber < 0) {
            img.src = imgPaths[2];
            imgNumber = 2;
        }
        else {
            img.src = imgPaths[imgNumber];
        }
    }
}

nxtBtn.addEventListener('click', () => {
    changeImage(true);
})

prevBtn.addEventListener('click', () => {
    changeImage(false);
})




