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
        text: "Soyez qui vous êtes et dites ce que vous ressentez, parce que ceux qui s’en soucient n’ont pas d’importance, et ceux qui comptent ne s’en soucient pas.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Vous devez danser comme s’il n’y avait personne qui regardait, aimer comme si vous ne seriez jamais blessé, chanter comme s’il n’y avait personne qui écoutait, et vivre comme si c’était le paradis sur terre.",
        author: "William W. Purkey"
    },
    {
        text: "Tant de livres, si peu de temps.",
        author: "Frank Zappa"
    },
    {
        text: "Un ami est quelqu’un qui sait tout de vous et qui vous aime toujours.",
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

/* Generate radom key */
let key = Math.floor(Math.random() * 10);

// console.log(Messages[key]);

/**
 * Block code to put text quote and author in index page
 */
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
quote.innerHTML = Messages[key].text;
author.innerHTML = Messages[key].author;


// Code is poetry