const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let score_user = 0;
let score_comp = 0;

let round_result = '';

function return_random(){
    let index = Math.floor(Math.random()*10)%3;
    //console.log(index);
    let options = ["Rock","Paper","Scissors"];
    return options[index];
}

function play(player_selection,computer = return_random()){
    if(player_selection=="rock"){
        if(computer=='Rock'){
            round_result = "Tie!";
        }else if(computer=='Paper'){
            round_result = "You lose! " + computer + " beats " + player_selection;
            score_comp++;
        }else{
            round_resutl = "You win! " + player_selection + " beats " + computer;
            score_user++;
        }
    }else if(player_selection=='paper'){
        if(computer=='Paper'){
            round_result = "Tie!";
        }else if(computer=='Scissors'){
            round_result = "You lose! " + computer + " beats " + player_selection;
            score_comp++;
        }else{
            round_result = "You win! " + player_selection + " beats " + computer;
            score_user++;
        }
    }else if(player_selection=='scissors'){
        if(computer=='Scissors'){
            round_result = "Tie!";
        }else if(computer=='Rock'){
            round_result = "You lose! " + computer + " beats " + player_selection;
            score_comp++;
        }else{
            round_result = "You win! " + player_selection + " beats " + computer;
            score_user++;
        }
    }else{
        console.log("Invalid selection");
    }

    update_score();
    round_winner();

    if(score_comp==5){
        alert("Computer wins!");
        score_user=0;
        score_comp=0;
    }else if(score_user==5){
        alert("User wins!");
        score_user=0;
        score_comp=0;
    }

}

rock.addEventListener('click',function(){
    play("rock");
});
paper.addEventListener('click',function(){
    play("paper");
});
scissors.addEventListener('click',function(){
    play('scissors');
});


const user = document.querySelector('.user');
const comp = document.querySelector('.comp');

function update_score(){
    user.textContent = `User: ${score_user}`;
    comp.textContent = `Computer: ${score_comp}`;
}

const result = document.querySelector('.result');

function round_winner(){

    if(round_result.indexOf("win")!=-1){
        result.style.color = 'green';
    }else if(round_result.indexOf('lose')!=-1){
        result.style.color = 'red';
    }else{
        result.style.color = 'black';
    }

    result.textContent = round_result;
}

