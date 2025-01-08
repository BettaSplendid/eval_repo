console.log('Happy developing ✨')

const rock = document.querySelector("#player_rock");
const paper = document.querySelector("#player_paper");
const scissor = document.querySelector("#player_scissor");
rock.addEventListener("click", function() {player_select('rock');});
paper.addEventListener("click", function() {player_select('paper');});
scissor.addEventListener("click", function() {player_select('scissor');});


function player_select(player){
    update_player_display(player)
    let opponent = random_opponent_pick();
    result_calculation(player, opponent)
    setTimeout(fancy_overflow_removal(), 1000)

}

function update_player_display(input){
    const player_selection = document.querySelector("#main_zone_middle_player");
    const image = document.createElement("img");
    const address=  'images/' + input + '.png'
    image.setAttribute('src', address);
    image.setAttribute('alt', input);
    image.setAttribute('height', '100vh')
    image.setAttribute('padding', '50vh')
    image.classList.add('player_pick');
    player_selection.appendChild(image);
}

function random_opponent_pick(){
    const random_number = Math.floor(Math.random() * 3) + 1
    let selection;
    switch(random_number){
        case 1:
            selection = "rock"
            break
        case 2:
            selection = "paper"
            break
        case 3:
            selection = "scissor"
            break
    }
    const opponent_section = document.querySelector("#main_zone_middle_opponent");
    const image = document.createElement("img");
    const address=  'images/' + selection + '.png'
    image.setAttribute('src', address);
    image.setAttribute('alt', selection);
    image.setAttribute('height', '100vh')
    image.setAttribute('padding', '50vh')
    image.classList.add('player_pick');
    opponent_section.prepend(image);
    return selection;
}

function result_calculation(player, opponent){
    console.log("Player : " + player)
    console.log("Opponent : " + opponent)
    let winner;
    if(opponent === player){
        console.log("No winners!")
        winner = 0;
    } else if(player === 'rock' && opponent === 'paper'){
        console.log("Lost!")
        winner = 'IA';
    } else if(player === 'paper' && opponent === 'scissor'){
        console.log("Lost!")
        winner = 'IA';
    } else if(player === 'scissor' && opponent === 'rock'){
        console.log("Lost!")
        winner = 'IA';
    } else {
        console.log("Win!")
        winner = 'player';
    }
    score_updating(winner);
}

function score_updating(winner){
    if(winner === 0){
        return;
    }
    const score_area = document.querySelector("#"+ winner + "_score");
    score_area.innerText = parseInt(score_area.innerText) + 1;
}

function fancy_overflow_removal(){
    const opponent_section = document.querySelector("#main_zone_middle_opponent");
    const player_selection = document.querySelector("#main_zone_middle_player");
    console.log(opponent_section.children.length)
    if(opponent_section.children.length > 4){
        // document.querySelector('#opponent_section').firstElementChild.classList.add('fancy_Leaving')
        opponent_section.lastChild.remove()
        let last_child = opponent_section.lastChild
        // last_child.className = "foo";
        // last_child.innerText = last_child.innerText
        last_child.classList.add("foo");
        last_child.setAttribute("class", "foo");
        console.log(
            opponent_section.children[4]
        )

    }
}

function clear_everything(){

}