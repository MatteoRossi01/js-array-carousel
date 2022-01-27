const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsRef = document.getElementsByClassName('container-big')[0];
const thumbsRef = document.getElementsByClassName('container-small')[0];

let col = '';
let imgPrincipale = '';
let active = 1;

for (let i = 0; i < items.length; i++) {

    /* Posizionameno slide dinamico */
    col += 
            `<div class="col">
                <img id="select" class="img-small" src="${items[i]}">
            </div>`;

    /* Posizionamento info e immagine dinamico */
    imgPrincipale +=
                    `<div class="item">
                        <img class="img-big" src="${items[i]}" alt="">
                        <div class="col-big">
                            <h2 class="title-img">${title[i]}</h2>
                            <span class="info-img">${text[i]}</span>
                        </div> 
                    </div>`;                
}

//creo le slide
thumbsRef.innerHTML = col;
document.getElementsByClassName('col')[active].classList.add('active');

//creo la sezione princiale
itemsRef.innerHTML = imgPrincipale;
document.getElementsByClassName('item')[active].classList.add('active');
