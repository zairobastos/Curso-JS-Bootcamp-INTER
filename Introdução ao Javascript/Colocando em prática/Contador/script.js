let val = document.querySelector('.valor');
let c = 0;

const aumenta = document.querySelector('.increment').addEventListener('click',()=>{
    c++;
    val.innerHTML = c;
    mudarCor(c);
});

const diminui = document.querySelector('.decrement').addEventListener('click',()=>{
    c--;
    val.innerHTML = c;
    mudarCor(c);
});

const mudarCor = (cont) => {
    if (cont<0) {
        val.style.color = 'red';
    }else{
        val.style.color ='black';
    }
}
