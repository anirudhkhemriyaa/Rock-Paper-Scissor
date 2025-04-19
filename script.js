let button1=document.querySelector("#button1")
let button2=document.querySelector("#button2")
let button3=document.querySelector("#button3")
let start = document.querySelector("#start")
let restart = document.querySelector('#restart')
let result = document.querySelector("#result")


//Taking Bot sign as second player
let select_sign =['Rock' , 'Paper' , 'Scissor'];
let Bot_sign = select_sign[Math.floor(Math.random()*3)]
console.log(Bot_sign)


//if user press rock then this will check the winner
button1.addEventListener('click' , ()=>{
    start.addEventListener('click' , () =>{
        if (Bot_sign == 'Rock'){
            console.log("draw!")
            result.innerText = "it`s a draw ! "
            result.style.opacity = 1;

        }else if (Bot_sign == 'Paper'){
            console.log("lost")
            result.innerText = " You lose "
            result.style.opacity = 1;
        }
        else if (Bot_sign == 'Scissor'){
            console.log("won")
            result.innerText = " You won !"
            result.style.opacity = 1;
        }
    })
})


//if user press Paper then this will check the winner
button2.addEventListener('click' , ()=>{
    start.addEventListener('click' , () =>{
        if (Bot_sign == 'Rock'){
            console.log("won")
            result.innerText = " You won ! "
            result.style.opacity = 1;
        }else if (Bot_sign == 'Paper'){
            console.log("draw")
            result.innerText = "it`s a draw ! "
            result.style.opacity = 1;
        }
        else if (Bot_sign == 'Scissor'){
            console.log("lost")
            result.innerText = " You lose "
            result.style.opacity = 1;
        }

    })
})


//if user press scissor then this will check the winner

button3.addEventListener('click' , ()=>{
    start.addEventListener('click' , () =>{
        if (Bot_sign == 'Rock'){
            console.log("lost")
            result.innerText = " You lose "
            result.style.opacity = 1;
        }else if (Bot_sign == 'Paper'){
            console.log("won")
            result.innerText = " You won ! "
            result.style.opacity = 1;
        }
        else if (Bot_sign == 'Scissor'){
            console.log("draw")
            result.innerText = "it`s a draw !"
            result.style.opacity = 1;
        }
    })
})

restart.addEventListener('click' , () => {
    location.reload()
})