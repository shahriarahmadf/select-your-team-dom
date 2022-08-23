// number of selected players
const numberOfSelectedPlayers = document.getElementById('selected-players').getElementsByTagName('li').length;

// select messi
btnMessi = document.getElementById('btn-messi');
btnMessi.addEventListener('click',function(event){
    const run = playerAdder('Lionel Messi');
    if (run == true){
        btnMessi.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select neymar
btnNeymar = document.getElementById('btn-neymar');
btnNeymar.addEventListener('click',function(event){
    const run = playerAdder('Neymar JR');
    if (run == true){
        btnNeymar.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select mbappe
btnMbappe = document.getElementById('btn-mbappe');
btnMbappe.addEventListener('click',function(event){
    const run = playerAdder('Kylian Mbappe');
    if (run == true){
        btnMbappe.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select ramos
btnRamos = document.getElementById('btn-ramos');
btnRamos.addEventListener('click',function(event){
    const run = playerAdder('Sergio Ramos');
    if (run == true){
        btnRamos.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select renato
btnRenato = document.getElementById('btn-renato');
btnRenato.addEventListener('click',function(event){
    const run = playerAdder('Renato Sanchos');
    if (run == true){
        btnRenato.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select machado
btnMachado = document.getElementById('btn-machado');
btnMachado.addEventListener('click',function(event){
    const run = playerAdder('Renato Sanchos');
    if (run == true){
        btnMachado.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select hakimi
btnHakimi = document.getElementById('btn-hakimi');
btnHakimi.addEventListener('click',function(event){
    const run = playerAdder('Achraf Hakimi');
    if (run == true){
        btnHakimi.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select donnarumma
btnDonnarumma = document.getElementById('btn-donnarumma');
btnDonnarumma.addEventListener('click',function(event){
    const run = playerAdder('Donnarumma');
    if (run == true){
        btnDonnarumma.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});
// select marquinhos
btnMarquinhos = document.getElementById('btn-marquinhos');
btnMarquinhos.addEventListener('click',function(event){
    const run = playerAdder('Marquinhos');
    if (run == true){
        btnMarquinhos.setAttribute('disabled',true);
        event.target.style.backgroundColor = 'grey';
    }
});

// BUDGET SECTION

// per player expenses
document.getElementById('btn-calculate').addEventListener('click',function(){
    let numberOfSelectedPlayers = numberOfPlayers();

    const perPlayer = (document.getElementById('per-player'));
    const perPlayerCost = parseFloat(perPlayer.value);

    // error handling
    if ((numberOfSelectedPlayers<1) || (isNaN(perPlayerCost)) || (perPlayerCost<0)){
        // clear the textbox
        perPlayer.value = '';
        return alert('Error: No player selected, or per expense is negative or not written.');
    }

    const playerExpenses = perPlayerCost*numberOfSelectedPlayers;

    playerExpensesUpdate = document.getElementById('player-expenses');
    playerExpensesUpdate.innerText = playerExpenses;

});

// total expenses

document.getElementById('btn-total-calculate').addEventListener('click',function(){
    // get player cost
    const playerExpenses = parseFloat(document.getElementById('player-expenses').innerText);

    // manager cost
    const manager = (document.getElementById('manager-cost'));
    const managerCost = parseFloat(manager.value);
    // coach cost
    const coach = (document.getElementById('coach-cost'));
    const coachCost = parseFloat(coach.value);

    const totalCost = playerExpenses + managerCost + coachCost;

    // error handling
    if (isNaN(totalCost) || (playerExpenses<0) || (managerCost<0) || (coachCost<0)){
        // clear the textbox
        manager.value = '';
        coach.value = '';
        return alert('Error: Manager and/or coach expense is/are not added. Or any of the costs is/are negative.');
    }


    totalExpensesUpdate = document.getElementById('total-expenses');
    totalExpensesUpdate.innerText = totalCost;

});
