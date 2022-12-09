const gameBoard = (() => {
    const topLeft = document.querySelector('.topLeft');
    const topMid = document.querySelector('.topMid');
    const topRight = document.querySelector('.topRight');
    const midLeft = document.querySelector('.midLeft');
    const midMid = document.querySelector('.midMid');
    const midRight = document.querySelector('.midRight');
    const botLeft = document.querySelector('.botLeft');
    const botMid = document.querySelector('.botMid');
    const botRight = document.querySelector('.botRight');
    const para = document.querySelector('.para');
    para.textContent = '';
    let player = 'p1';
    gameOver = false;
   
    document.querySelectorAll('.grid').forEach(item => {

        item.addEventListener('click', event => {
         if (player == 'p1' && event.target.textContent == '' && gameOver == false) {event.target.textContent = 'x';
        player = 'p2';}
         else if (player == 'p2' && event.target.textContent == '' && gameOver == false) {event.target.textContent = 'o'
        player = 'p1'};
    if ((topLeft.textContent == topMid.textContent && topMid.textContent == topRight.textContent && topLeft.textContent == 'x') || (midLeft.textContent == midMid.textContent && midMid.textContent == midRight.textContent && midMid.textContent == 'x') || (botLeft.textContent == botMid.textContent && botMid.textContent == botRight.textContent && botRight.textContent == 'x') || (topLeft.textContent == midLeft.textContent && midLeft.textContent == botLeft.textContent && topLeft.textContent == 'x') || (topMid.textContent == midMid.textContent && midMid.textContent == botMid.textContent && topMid.textContent == 'x') || (topRight.textContent == midRight.textContent && midRight.textContent == botRight.textContent && topRight.textContent == 'x') || (topLeft.textContent == midMid.textContent && midMid.textContent == botRight.textContent && topLeft.textContent == 'x') || (topRight.textContent == midMid.textContent && midMid.textContent == botLeft.textContent && botLeft.textContent == 'x')) {para.textContent = 'player 1 won!';
    gameOver = true;}
    else if ((topLeft.textContent == topMid.textContent && topMid.textContent == topRight.textContent && topLeft.textContent == 'o') || (midLeft.textContent == midMid.textContent && midMid.textContent == midRight.textContent && midMid.textContent == 'o') || (botLeft.textContent == botMid.textContent && botMid.textContent == botRight.textContent && botRight.textContent == 'o') || (topLeft.textContent == midLeft.textContent && midLeft.textContent == botLeft.textContent && topLeft.textContent == 'o') || (topMid.textContent == midMid.textContent && midMid.textContent == botMid.textContent && topMid.textContent == 'o') || (topRight.textContent == midRight.textContent && midRight.textContent == botRight.textContent && topRight.textContent == 'o') || (topLeft.textContent == midMid.textContent && midMid.textContent == botRight.textContent && topLeft.textContent == 'o') || (topRight.textContent == midMid.textContent && midMid.textContent == botLeft.textContent && botLeft.textContent == 'o')) {para.textContent = 'player 2 won!';
    gameOver = true;}
    else if (topLeft.textContent.length == '1' && topMid.textContent.length == '1' && topRight.textContent.length == '1' && midLeft.textContent.length == '1' && midMid.textContent.length == '1' && midRight.textContent.length == '1' && botLeft.textContent.length == '1' && botMid.textContent.length == '1' && botRight.textContent.length == '1' && gameOver == false) {para.textContent = 'tie'}
})
})
})();


