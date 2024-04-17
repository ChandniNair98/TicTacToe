currentPlayer='X';
board=['','','','','','','','','']



function begin(index){

    if(board[index]==='')
    {
        board[index]=currentPlayer;
        display();

        if(winner())
        {
            message(currentPlayer+'wins');
            disable();
        }
        else if(draw())
        {
            message('its a draw');
            disable();
        }
        else
        {
            currentPlayer=currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function winner()
{
    winning=[
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ]

    for(i of winning)
    {
        console.log('i is',i);
       
        [a,b,c]=i
        console.log('a is',a);
        console.log('b is',b);
        console.log('c is',c);
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false
}

function draw()
{
    // for(i of board)
    // {

    // }

    return board.every(cell => cell !== '');
}

function display()
{
    
    cells=document.querySelectorAll('.cell')
    cells.forEach((cell,index)=> {
        cell.textContent=board[index]
    });
}


function message(m)
{
    document.getElementById('message').textContent=m
}

function disable()
{
    document.querySelectorAll('.cell').forEach(cell => {
        cell.removeEventListener('click', cellClickHandler);
    });
}

function reset()
{
    currentPlayer='X';
    board=['','','','','','','','','']

    display();
    message('');

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', cellClickHandler);
    });
}


function cellClickHandler() {
    const cellIndex = this.dataset.index;
    console.log(cellIndex);
    begin(cellIndex);
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', cellClickHandler);
});

document.getElementById('reset-btn').addEventListener('click', reset);

display();