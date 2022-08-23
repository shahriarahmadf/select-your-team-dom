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
    const perPlayer = (document.getElementById('per-player'));
    const perPlayerCost = parseFloat(perPlayer.value);

    const playerExpenses = perPlayerCost*5;

    playerExpensesUpdate = document.getElementById('player-expenses');
    playerExpensesUpdate.innerText = '$' + playerExpenses;
    // clear the textbox
    perPlayer.value = '';
});

