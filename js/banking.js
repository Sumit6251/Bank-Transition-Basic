document.querySelector('.depositBtn').addEventListener('click',function(){

    let depositeInput = document.querySelector('.depositInput');
    
    let depositTotal = document.querySelector('.depositTotal');
    let depositeAmountText = depositeInput.value;
    let depositeAmount = parseFloat(depositeAmountText);

    let currentDepositText = depositTotal.innerHTML;
    let currentDeposit = parseFloat(currentDepositText);
    let newDepositTotal =currentDeposit + depositeAmount;
    depositTotal.innerHTML = newDepositTotal;
     
    let balanceTotal = document.querySelector('.balanceTotal').innerHTML;
    let balanceTotalText = balanceTotal.innerText
    let balance = parseFloat(balanceTotalText);
    
    let Totalbalance = balanceTotal + newDepositTotal;

    balanceTotal.innerHTML = Totalbalance;



    depositeInput.value = ''
})