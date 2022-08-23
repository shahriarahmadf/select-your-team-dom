// number of selected players
const numberOfSelectedPlayers = document.getElementById('selected-players').getElementsByTagName('li').length;

// select messi
btnMessi = document.getElementById('btn-messi');
btnMessi.addEventListener('click',function(event){
    playerAdder('Lionel Messi');
    btnMessi.setAttribute('disabled',true);
    event.target.style.backgroundColor = 'grey';
});
// select neymar
btnNeymar = document.getElementById('btn-neymar');
btnNeymar.addEventListener('click',function(event){
    playerAdder('Neymar JR');
    btnNeymar.setAttribute('disabled',true);
    event.target.style.backgroundColor = 'grey';
});
// select mbappe
btnMbappe = document.getElementById('btn-mbappe');
btnMbappe.addEventListener('click',function(event){
    playerAdder('Kylian Mbappe');
    btnMbappe.setAttribute('disabled',true);
    event.target.style.backgroundColor = 'grey';
});
// select ramos
btnRamos = document.getElementById('btn-ramos');
btnRamos.addEventListener('click',function(event){
    playerAdder('Sergio Ramos');
    btnRamos.setAttribute('disabled',true);
    event.target.style.backgroundColor = 'grey';
});
// select renato
btnRenato = document.getElementById('btn-renato');
btnRenato.addEventListener('click',function(event){
    playerAdder('Renato Sanchos');
    btnRenato.setAttribute('disabled',true);
    event.target.style.backgroundColor = 'grey';
});
// select machado
btnMachado = document.getElementById('btn-machado');
btnMachado.addEventListener('click',function(event){
    playerAdder('Renato Sanchos');
    btnMachado.setAttribute('disabled',true);
    event.target.style.backgroundColor = 'grey';
});


// BUDGET SECTION

// per player expenses
document.getElementById('btn-calculate').addEventListener('click',function(){
    let numberOfSelectedPlayers = numberOfPlayers();

    const perPlayer = (document.getElementById('per-player'));
    const perPlayerCost = parseFloat(perPlayer.value);

    // error handling
    if ((numberOfSelectedPlayers<1) || (isNaN(perPlayerCost))){
        // clear the textbox
        perPlayer.value = '';
        return alert('Error: No player selected or per player expense is not written.');
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
    if (isNaN(totalCost)){
        // clear the textbox
        manager.value = '';
        coach.value = '';
        return alert('Error: Manager and/or coach expense is/are not added.');
    }


    totalExpensesUpdate = document.getElementById('total-expenses');
    totalExpensesUpdate.innerText = totalCost;

});
