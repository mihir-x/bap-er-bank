document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount  = parseFloat(newDepositAmountString);
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        return alert('Please enter the correct ammount');
    }
    
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);

    const newDepositTotal = depositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const newTotalBalance = balanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newTotalBalance;
});