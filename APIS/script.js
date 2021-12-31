const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const imageCat = document.querySelector('.cat');
const alterar = document.querySelector('.Alterar');

const getCats = async ()=>{
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        let dados={
            id: json.id,
            url: json.url,
            webpurl: json.webpurl,
            x: json.x,
            y: json.y
        }
        return dados;
    } catch (error) {
        console.log(error);
    }
}
const loadImg = async () => {
    let gatos= await getCats();
    imageCat.src = gatos.webpurl;
}

alterar.addEventListener('click',loadImg);

loadImg();