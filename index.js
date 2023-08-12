/**
 * Array of Quotes
 */
let Messages = [
    {
        text: "Soyez vous-même; tous les autres sont déjà pris",
        author: "Oscar Wilde"
    },
    {
        text: "Tant de livres, si peu de temps. ",
        author: "Frank Zappa"
    },
    {
        text: "Une pièce sans livres est comme un corps sans âme.",
        author: "Marcus Tullius Cicéron"
    },
    {
        text: "Deux choses sont infinies : l'univers et la stupidité humaine ; et je ne suis pas sûr de l'univers.",
        author: "Albert Einstein"
    },
    {
        text: "Soyez qui vous êtes et dites ce que vous ressentez, parce que ceux qui s'en soucient n'ont pas d'importance, et ceux qui comptent ne s'en soucient pas.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Vous devez danser comme s'il n'y avait personne qui regardait, aimer comme si vous ne seriez jamais blessé, chanter comme s'il n'y avait personne qui écoutait, et vivre comme si c'était le paradis sur terre.",
        author: "William W. Purkey"
    },
    {
        text: "Tant de livres, si peu de temps.",
        author: "Frank Zappa"
    },
    {
        text: "Un ami est quelqu'un qui sait tout de vous et qui vous aime toujours.",
        author: "Elbert Hubbard"
    }, 
    {
        text: "Pardonnez toujours à vos ennemis ; Rien ne les ennuie autant.",
        author: "Oscar Wilde"
    }, 
    {
        text: "Sans musique, la vie serait une erreur.",
        author: "Friedrich Nietzsche"
    }, 
];

// console.log(Messages[key]);

/**
 * Block code to put text quote and author in index page
 */
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

function getQuote() {
    /* Generate radom key */
    let key = Math.floor(Math.random() * 10);
    quote.innerHTML = Messages[key].text;
    author.innerHTML = Messages[key].author;
}

window.onload = function() {
    getQuote();
    videoAction();
}

let findQuote = document.querySelector("#findquote");
let loader = document.querySelector("#loader");
let bgImage = document.querySelector(".bgimage");
let bgVideo = document.getElementById("bgvideo");

function actionBefore() {
    findQuote.style.opacity = "0.5";
    quote.style.opacity = "0";
    author.style.opacity = "0";
    loader.style.display = "initial";
    bgImage.classList.add('bgAnimate');
    if (bgImage.style.visibility = "hidden") {
        bgVideo.classList.add('bgAnimate');
    }
}

function actionAfter() {
    findQuote.style.opacity = "1";
    quote.style.opacity = "1";
    author.style.opacity = "1";
    loader.style.display = "none";
    bgImage.classList.remove('bgAnimate');
    bgVideo.classList.remove('bgAnimate');
}

// let nclick = 0;
findQuote.onclick = function(e) {
    e.preventDefault();
    actionBefore();
    setTimeout(function() {
        getQuote();
        actionAfter();
    }, 2000);

    // nclick++;
    // if (nclick === 3) {
    //     alert('work');
    // }
}


function videoAction() {
    bgVideo.volume = 0.2;
    bgVideo.load();
    bgVideo.addEventListener("timeupdate", function() {
        if (bgVideo.currentTime >= 1) {
            bgVideo.style.opacity = "0.1";
            bgImage.style.visibility = "hidden";
        }
    });
}


let videoPp = document.getElementById("videopp");
videoPp.onclick = function(e) {
    e.preventDefault();
    if (bgVideo.paused) {
        bgVideo.play();
    } else {
        bgVideo.pause();
    }
}

let colorsLists = document.querySelectorAll('.color-list');
colorsLists.forEach((colorList) => {
    colorList.onclick = changeBgColor;
    let colorCode = colorList.getAttribute("data-color-code");
    colorList.innerHTML = `<span style="background: ${colorCode}"></span>`;
});
let mainElement = document.querySelector('main');

function changeBgColor(e) {
    e.preventDefault();
    let color = e.currentTarget.getAttribute("data-color");
    setTimeout(function() {
        mainElement.style.background = `var(--main-bg-color-${color})`;
    }, 1000)
    mainElement.style.animationName = "entrance";
    mainElement.style.animationDuration = "2s";
    setTimeout(function() {
        mainElement.style.animationName = "";
    }, 2000)
}



// Code is poetry