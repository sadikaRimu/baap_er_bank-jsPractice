
document.getElementById('btn-deposit').addEventListener('click', function () {
    //get value from input
    const depositField = document.getElementById('deposit-field');
    const depositInputString = depositField.value;
    const depositInput = parseFloat(depositInputString);
    if (isNaN((depositInput))) {
        alert('please enter a valid number');
        depositField.value = '';
        return;
    }
    //get deposit old value
    const oldDepositElement = document.getElementById('deposit-display');
    const oldDepositString = oldDepositElement.innerText;
    const oldDeposit = parseFloat(oldDepositString);
    //set current deposit value
    const currentDeposit = depositInput + oldDeposit;
    oldDepositElement.innerText = currentDeposit;
    //get old balance
    const oldBalancedElement = document.getElementById('Balance-amount');
    const oldBalanceString = oldBalancedElement.innerText;
    const oldBalance = parseFloat(oldBalanceString);
    //set current balance
    const currentBalance = oldBalance + depositInput;
    oldBalancedElement.innerText = currentBalance;
    depositField.value = '';
})