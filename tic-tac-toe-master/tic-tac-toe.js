document.addEventListener('DOMContentLoaded', () =>{

    const squares = document.querySelectorAll('#board > div');
    const square = document.getElementsByClassName("square");
    const button = document.getElementsByClassName("btn");

    const game  = document.getElementById("game");
    const staus = document.getElementById("status");
    const board = document.getElementById("board");

    squares.forEach((div)=> {
        div.classList.add("square");
    });




});





