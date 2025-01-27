'use strict'

const MINES = '💣'
const EMPTY = ''

var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secPassed: 0
}

function onInit(){

    const gBoard = buildBoard()
    console.table(gBoard)
    renderBoard(gBoard)
}

function buildBoard(){
    //create matrix 4*4 with 2 MINES
    const board = []
    for (var i = 0; i < 4 ; i++) {
        board[i] = []
        for (var j = 0; j < 4 ; j++) {
            board[i][j] = EMPTY
        }
    }
    board[1][1] = MINES
    board[2][2] = MINES
    return board
    //create matrix 8*8 with 14 MINES
    //create matrix 12*12 with 32 MINES
    
}

function setMinesNegsCount(board){}{
    
}


// function renderBoard(board){
//     var strHTML = ''
//     for (var i = 0; i < board.length ; i++) {
//         const row = board[i]
//         strHTML += '<tr>'
//         for (var j = 0; j < row.length ; j++) {
//             var cell = row[j]
//             var className = 'white'
//             const tdId = `cell-${i}-${j}`
//             strHTML += `<td id ="${tdId}"
//                         onclick=onCellClicked(this)" 
//                         class="${className}">
//                             ${cell} 
//                         </td>`
//         }
//         strHTML += '</tr>'
//     }

//     console.log(strHTML)

//     const elBoard = document.querySelector('.board')
//     elBoard.innerHTML = strHTML
   
//     console.log(elBoard)
    
// }

function renderBoard(board){
    var strHTML = ''
    for (var i = 0; i < board.length ; i++) {
        strHTML += '<table>'

        for (var j = 0; j < board[0].length ; j++) {
           strHTML += `<td>${MINES}
           </td>`     
           console.log(strHTML) 
        }

        strHTML += '</table>'
    }

    // console.log(strHTML)

    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
   
    // console.log(elBoard)
    
}

function onCellClicked(elCell, i, j){

}

function onCellMarked(elCell){

}

function checkGameOver(){

}

function expandShown(board, elCell, i, j){

}