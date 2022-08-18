
//withdraw section
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //get input value
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawInputString = withdrawField.value;
    const withdrawInput = parseFloat(withdrawInputString);
    if (isNaN(withdrawInput)) {
        alert('please enter a valid number');
        withdrawField.value = '';
        return;
    }
    //get old balace
    const oldBalancedElement = document.getElementById('Balance-amount');
    const oldBalanceString = oldBalancedElement.innerText;
    const oldBalance = parseFloat(oldBalanceString);
    if (oldBalance < withdrawInput) {
        alert('you dont not have enough balance');
        withdrawField.value = '';
        return;
    }
    //get old withdraw value
    const oldWithdrawElement = document.getElementById('withdraw-amount');
    const oldWithdrawString = oldWithdrawElement.innerText;
    const oldWithdraw = parseFloat(oldWithdrawString);
    const currentWithdraw = withdrawInput + oldWithdraw;
    oldWithdrawElement.innerText = currentWithdraw;

    //set current balance

    const currentBalance = oldBalance - withdrawInput;
    oldBalancedElement.innerText = currentBalance;
    withdrawField.value = '';
});

