'use strict'

const MINES = '💣'
const EMPTY = ''

var gBoard 



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

    // const gBoard = buildBoard()
    // console.table(gBoard)
    gBoard = buildBoard()
    renderBoard(gBoard)
    // onCellClicked(elCell)
}

function createMat(ROWS, COLS){
    const mat = []
    for (var i = 0; i < ROWS ; i++) {
        const row = []
        for (var j = 0; j < COLS ; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function buildBoard(){
    //create matrix 4*4 with 2 MINES
    const board = createMat(4,4)
    
    for (var i = 0; i < board.length ; i++) {
        for (var j = 0; j < board[0].length ; j++) {
            board[i][j] = {
               minesAroundCount: 0,
               isCovered: true,
               isMine: false, 
               isMarked: false
            }
            
            // board[i][j] = player
        }
    }
    
    board[1][1].isMine = true
    board[2][2].isMine = true
    
   
 

    //random mines 

   

    console.log('board11]',board[1][1])
    console.log('board11]',board[2][1])
    // console.log(board)
    console.log('board', board)
    return board
    //create matrix 8*8 with 14 MINES
    //create matrix 12*12 with 32 MINES
    
}

// function buildBoard(){
//     //create matrix 4*4 with 2 MINES
//     const board = []
//     for (var i = 0; i < gLevel.SIZE ; i++) {
//         board[i] = []
//         for (var j = 0; j < gLevel.SIZE ; j++) {
//             board[i][j] = { minesAroundCount: 4}
//         }
//     }
//     board[1][1] = MINES
//     board[2][2] = MINES
    
    
//     return board
//     //create matrix 8*8 with 14 MINES
//     //create matrix 12*12 with 32 MINES
    

// }


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



console.log('Found', count, 'mines around me')
function setMinesNegsCount(board, rowId, colId){
    
    

    var minesCount = 0
    
    for (var i = rowId - 1; i <= rowId + 1; i++) {
      
        if (i < 0 || i > board.length - 1) continue 

        for (var j = colId - 1; j <= colId + 1; j++) {
            if (i === rowId && j === colId) continue
            
            if (j < 0 || j > board[0].length - 1) continue 
                // var currCell = board[i][j]
            if (currCell === MINES) minesCount++
        }
    }
    
    return minesCount
    
}


    function renderBoard(board){
                
        var strHTML = '<table><tbody>'
        for (var i = 0; i < board.length ; i++) {
            
            
            strHTML += '<tr>'
            for (var j = 0; j < board[0].length ; j++) {
                
                
                // const res = setMinesNegsCount(gBoard)
                const cell = board[i][j]
                const infoCell = cell.isMine ? MINES : setMinesNegsCount()
                const className = `cell cell${i}-${j}`
                // strHTML += `<td class="${className}">${infoCell}</td>`  
                strHTML += `<td onclick = "onCellClicked(this)"="${className}">${infoCell}</td>`  
                // strHTML += `<button class="onCell" onclick="onCellClicked(this)">${setMinesNegsCount()}</button>`  
                console.log(className)
                console.log(cell)
            }
            strHTML += '</tr>'
        }
        strHTML += '</tbody></table>'
        
        const elBoard = document.querySelector('.board')
        elBoard.innerHTML = strHTML
        
      
        
    }
    
    onCellClicked()
    function onCellClicked(elCell, i, j){
        
        var clickedNum = +elCell.innerText
         console.log(clickedNum)
    }
    
    function onCellMarked(elCell){
        
    }
    
    function checkGameOver(){
        
    }
    
    function expandShown(board, elCell, i, j){
        
}

addMines()
function addMines() {
    //TO DO: Add new ball on random empty ceBll every few second.
    
    
	var i = getRandomInt(1, gBoard.length - 1)
	var j = getRandomInt(1, gBoard[0].length - 1)
	var minesLocation = { i, j }
	if (gBoard[i][j].isMine === false) {
        renderCell(minesLocation, MINES)
		
	}
}

var randomMines = getRandomInt()
function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

