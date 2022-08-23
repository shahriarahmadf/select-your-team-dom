
function playerAdder(playerName){
    // where to add
    const selectedPlayers = document.getElementById('selected-players');
    
    // number of selected players
    const numberOfSelectedPlayers = numberOfPlayers();

    // error handling: check if number is already five
    if(numberOfSelectedPlayers>=5){
        alert('Error: Already selected five, cannot select more.');
        return false;
    }
    
    // what to add
    const li = document.createElement('li');
    li.innerText = playerName;

    // add the child
    selectedPlayers.appendChild(li);

    // update player number on top
    const playerNumberUpdate = document.getElementById('number-of-selected-players');
    playerNumberUpdate.innerText = 'Selected - ' + (numberOfSelectedPlayers + 1);
    return true;
}

function numberOfPlayers(){     
    const selectedPlayers = document.querySelectorAll('li');     
    const numberOfPlayers = selectedPlayers.length;     
    return numberOfPlayers; 
}
