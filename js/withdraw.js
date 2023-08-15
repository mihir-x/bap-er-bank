document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        return alert('Please enter the correct ammount');
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    if(balanceTotal<newWithdrawAmount){
        
        return alert('ohho not gonna happen');
    }
    const newWithdrawTotal = withdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    const newTotalBalance = balanceTotal -newWithdrawAmount;
    balanceTotalElement.innerText = newTotalBalance;
})