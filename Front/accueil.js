let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;// affichage 1ère image

let nbr_img = img_slider.length; // nombre d'images dans le slider

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages(){
    for (let i=0; i< nbr_img; i++){
        img_slider[i].classList.remove('active'); //rechercher à l'intérieur mes images et je supprime celle indiquée comme active
    }
}

suivant.addEventListener('click', function(){
    etape++;
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})


