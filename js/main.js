'use strict'

const MINES = '💣'
const EMPTY = ''

var gBoard = [{
    minesAroundCount: 4,
    isShown: false,
    isMine: false, 
    isMarked: true
}]

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

var minesCount

function onInit(){

    const gBoard = buildBoard()
    console.table(gBoard)
    renderBoard(gBoard)
    
}

function buildBoard(){
    //create matrix 4*4 with 2 MINES
    const board = []
    for (var i = 0; i < gLevel.SIZE ; i++) {
        board[i] = []
        for (var j = 0; j < gLevel.SIZE ; j++) {
            board[i][j] = gBoard
        }
    }
    board[1][1] = MINES
    board[2][2] = MINES
    
    
    return board
    //create matrix 8*8 with 14 MINES
    //create matrix 12*12 with 32 MINES
    

}


// var count = countMinesAround(gBoard, 0, 0)
// console.log('Found', count, 'mines around me')

// function countMinesAround(board, rowIdx, colIdx){
//     var minesCount = 0
//     for (var i = rowIdx -1 ; i <= rowIdx +1 ; i++) {
//         if(i < 0 || i >= board.length) continue
//         for (var j = colIdx -1; j <= colIdx +1 ; j++) {
//             if(i === rowIdx && j === colIdx) continue
//             if(j < 0 || j >= board[0].length) continue
//             var currCell = board[i][j]
//             if(currCell === MINES) minesCount++
//         }
//     }
//     return minesCount
// }

// var bestPos = findBestPos(gBoard)
// console.log('best pos', bestPos)

// function findBestPos(board){
//     var maxMinesCount = 0
//     var bestPos = null
//     for (var i = 0; i < board.length ; i++) {
//         for (var i = 0; i < board[0].length ; i++) {
//             if(board[i][j] === MINES) continue
//             var count = countMinesAround(board, i, j)
//             if(count > maxMinesCount) {
//                 maxMinesCount = count
//                 bestPos = { i:i, j:j }
//             }
//         }
//     }
//     return bestPos
// }


var count = setMinesNegsCount(gBoard)
console.log('Found', count, 'mines around me')
function setMinesNegsCount(board, rowId, colId){
    
    var minesCount = 0
    
    for (var i = rowId - 1; i <= rowId + 1; i++) {
      
        if (i < 0 || i > board.length - 1) continue 

        for (var j = colId - 1; j <= colId + 1; j++) {
            if (i === rowId && j === colId) continue
            
            if (j < 0 || j > board[0].length - 1) continue 
                var currCell = board[i][j]
            if (currCell === MINES){} minesCount++
        }
    }
    
    return minesCount
    
}


    function renderBoard(board){
                
        var strHTML = '<table><tbody>'
        for (var i = 0; i < board.length ; i++) {
            
            
            strHTML += '<tr>'
            for (var j = 0; j < board[0].length ; j++) {
                
                
                const res = setMinesNegsCount(gBoard)
                const cell = board[i][j]
                const className = `cell cell-${i}-${j}`
                strHTML += `<td class="${className}">${cell}</td>`  
                
            }
            strHTML += '</tr>'
        }
        strHTML += '</tbody></table>'
        
        const elBoard = document.querySelector('.board')
        elBoard.innerHTML = strHTML
        
      
        
    }
    
    function onCellClicked(elCell, i, j){
        
    }
    
    function onCellMarked(elCell){
        
    }
    
    function checkGameOver(){
        
    }
    
    function expandShown(board, elCell, i, j){
        
}