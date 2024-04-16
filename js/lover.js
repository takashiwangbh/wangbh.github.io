let oMain = document.querySelector('#main');
let oMask = document.querySelector('mask');
let aImg = document.querySelector('#main div');
let aButton = document.querySelector('span');
let speed = -15;

oMain.innerHTML += oMain.innerHTML;
let move = () => {
    if(oMain.offsetLeft < - oMain.offsetWidth / 2){
        oMain.style.left = '0';
    }
    if(oMain.offsetLeft > 0){
        oMain.style.left = - oMain.offsetWidth / 2 + 'px';
    }
    oMain.style.left = oMain.offsetLeft + speed + 'px';
}
let timer = setInterval(move,30);
oMask.addEventListener('mouseover',() => {
    clearInterval(timer);
});
oMask.addEventListener('mouseout',() => {
    timer = setInterval(move,30);
});
aButton[0].onclick = () => {
    speed = -15;
}
aButton[1].onclick = () => {
    speed = 15;
}