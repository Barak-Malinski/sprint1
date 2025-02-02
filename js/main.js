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
    

   //     //create matrix 8*8 with 14 MINES
//     //create matrix 12*12 with 32 MINES
 
    console.log('board11]',board[1][1])
    console.log('board11]',board[2][1])
    // console.log(board)
    console.table(board)
    return board
    //create matrix 8*8 with 14 MINES
    //create matrix 12*12 with 32 MINES
    
}

    function renderBoard(board){
                
        var strHTML = '<table><tbody>'
        for (var i = 0; i < board.length ; i++) {
            
            
            strHTML += '<tr>'
            for (var j = 0; j < board[0].length ; j++) {
                
                
                // const res = setMinesNegsCount(gBoard)
                const cell = board[i][j]
                const className = `cell cell ${i}-${j} cover`
                const infoCell = cell.isMine ? MINES : setMinesNegsCount(i, j, board)
                // const hiddenCell = cell.isCovered ? EMPTY : infoCell
               
                // const hiddenCell = cell.isCovered ? EMPTY : true
                
                
                // strHTML += `<td onclick = "onCellClicked(this)"="${className}">${infoCell}</td>`  
                strHTML += `<td onclick = "onCellClicked(this)"="${className}">${infoCell}</td>`
                
                
                // strHTML += `<button class="onCell" onclick="onCellClicked(this)">${setMinesNegsCount()}</button>`  
                console.log(strHTML)
                console.log(className)
                console.log(cell)
            }
            strHTML += '</tr>'
        }
        strHTML += '</tbody></table>'
        
        const elBoard = document.querySelector('.board')
        elBoard.innerHTML = strHTML


        // const elHideCell = document.querySelector('cover')
        // elHideCell.style.display = 'none'
        // elHideCell.style.color = ''

        // console.log('g', elHideCell)
        

        
        
        
        
        
    }

function setMinesNegsCount(cellI, cellJ, board) {
    console.log('hello set mines neig')
    var minesAroundCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= board[i].length) continue
            var neighborCell = board[i][j]
            if (neighborCell.isMine) minesAroundCount++
        }
    }
    board[cellI][cellJ].minesAroundCount = minesAroundCount
    console.log('minesAround', minesAroundCount)
    return minesAroundCount
}
    
    // onCellClicked()
    function onCellClicked(elCell, i, j){
        console.log(elCell)
        
        var clickedNum = +elCell.innerText
         console.log(clickedNum)
    }
    
    function onCellMarked(elCell){
        
    }
    
    function checkGameOver(){
        
    }
    
    function expandShown(board, elCell, i, j){
        
}

// addMines()
// function addMines() {

// 	var i = getRandomInt(1, gBoard.length - 1)
// 	var j = getRandomInt(1, gBoard[0].length - 1)
// 	var minesLocation = { i, j }
// 	if (gBoard[i][j].isMine === false) {
//         renderCell(minesLocation, MINES)
		
// 	}
// }


// var randomMines = getRandomInt()
// function getRandomInt(min, max){
//     min = Math.ceil(min)
//     max = Math.ceil(max)
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

