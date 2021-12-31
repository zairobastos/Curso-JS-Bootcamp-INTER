const body = document.querySelector('body');
const button = document.querySelector('button');
const footer = document.querySelector('footer');
const h1 = document.querySelector('h1');

button.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    alterarTexto();
})

function alterarTexto() {
    if(button.classList.contains('dark-mode')){
        button.innerHTML="Light Mode";
        h1.innerHTML="Dark Mode ON";
        return;
    }
    button.innerHTML="Dark Mode";
    h1.innerHTML="Light Mode ON";
}

