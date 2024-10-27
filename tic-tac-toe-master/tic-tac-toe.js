document.addEventListener('DOMContentLoaded', () => {

    const squares  = document.querySelectorAll('#board > div');
    const status = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn'); 
    let xplayer = 'X';
    let state = Array(9).fill(null);
  

    
 
    squares.forEach((square,index)=>
        {
            square.classList.add('square');
            
            square.addEventListener('click',function(){
            checkclicks(square,index);
        });
            square.addEventListener('mouseenter', () => square.classList.add('hover'));
            square.addEventListener('mouseleave', () => square.classList.remove('hover'));
           
    });

    function isWinner()
      {
        const wincombo=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let combination of wincombo)
            {
                const[a,b,c] = combination;
                if (state[a]&& state[a]===state[b]&&state[a]===state[c] ) {
                    return state[a];
                }
           
             }
                return null;
      }



   function draw() 
    {
        return state.every(square => square !== null); 
    }


function checkclicks(element,index)
    {
        if(state[index] || isWinner()) return;
        state[index] = xplayer;
        element.textContent = xplayer;
        element.classList.add(xplayer);
        let otherplayer = 'O';

         const winner = isWinner();
            if(winner) 
                {
                status.classList.add('you-won');
                status.textContent = `Congratulations! ${winner} is the Winner!`
                
                
                }
            else if (draw())
                {
                status.classList.remove('you-won');
                status.textContent = `It's a draw, try again next time`
               
                }
            else 
                {
                    xplayer = xplayer === 'X' ? otherplayer : 'X';
                    status.textContent = `It's ${xplayer}'s turn`;
                    status.classList.remove('you-won');
                }

    }

    newGameBtn.addEventListener('click', () => 
        {
            state.fill(null); 
            
            squares.forEach(square => 
                {
                status.textContent = 'Move your mouse over a square and click to play an X or an O.';
                status.classList.remove('you-won');
                square.textContent = '';
                square.classList.remove('X', 'O'); 
                
                
               });

        });

});