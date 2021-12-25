//gameboard module
const gameBoard = (function() {
    //display gameboard
    let board = Array.from(document.querySelectorAll('.boardfield'));
    let playerX = true;
    let count = 0;
    let restart = document.querySelector('.restart');
    let X = document.querySelector('#X')
    let O = document.querySelector('#O')

    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const addMarker = () => board.forEach((element) => {
        element.addEventListener('click', () => {
            if (element.innerHTML == '') {
                switch (playerX) {
                    case true :
                        board[element.id].innerHTML = "X"
                        playerX = false;
                        O.classList.toggle('active')
                        X.classList.toggle('active')
                        break;
                    case false :
                        board[element.id].innerHTML = "O"
                        playerX = true;
                        X.classList.toggle('active')
                        O.classList.toggle('active')
                        break;
                }
            }
            count++
            checkWinner()
        });
    });
    
    const checkWinner = () => {
        if (count == 9) {
            setTimeout(function(){alert("It's a tie");},50)
            setTimeout(function(){restarter();}, 50);
        } else  {
            for (let i = 0; i <= 7; i++) {
                if ((board[winner[i][0]].innerHTML == "X" || board[winner[i][0]].innerHTML == "O") && board[winner[i][0]].innerHTML == board[winner[i][1]].innerHTML && board[winner[i][1]].innerHTML == board[winner[i][2]].innerHTML) {
                    playerX == false ? setTimeout(function() {alert("Player X has won");}, 50) : setTimeout(function() {alert("Player O has won");}, 50)
                    setTimeout(function(){restarter();}, 50);
                    break;
                }
            }
        }
    }

    const restartByChoice = () => {
        restart.addEventListener('click', () => {
        restarter()
    })
}

    const restarter = () => {
        gameBoard.get.forEach((element) => {
            element.innerHTML = ""
            })
        playerX = true;
        count = 0;
        X.classList.add('active');
        O.classList.remove('active');
    }

    const getBoard = () => {
        return board
    }
    
    return {
        addMarker : addMarker(),
        get : getBoard(),
        restart : restartByChoice(),
    }
})();



