document.querySelector('.depositBtn').addEventListener('click', function(){
    let depositInput = document.querySelector('.depositInput');
    let depositAmount = depositInput.value;
    let depositAmountNum = parseFloat(depositAmount);
    
    let deposittotal = document.querySelector('.depositTotal');
    let depositTotalText = deposittotal.innerText;
    let depositTotalNum = parseFloat(depositTotalText);

    let depositTotal = depositAmountNum + depositTotalNum;
    deposittotal.innerText = depositTotal;
    
    let balanceTotal = document.querySelector('.balanceTotal');
    let balanceTotalText = balanceTotal.innerText;
    let balanceTotalNum = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalNum + depositAmountNum;


    depositInput.value = ''
})

document.querySelector('.withdrawbtn').addEventListener('click', function(){
    let withdrawInput = document.querySelector('.withdrawInput');
    let withdrawInputText = withdrawInput.value;
    let withdrawInputNum = parseFloat(withdrawInputText);



    let withdrawTotal = document.querySelector('.withdrawTotal');
    let withdrawTotalText = withdrawTotal.innerText;
    let withdrawTotalNum = parseFloat(withdrawTotalText);

    let finalWithdrawTotal = withdrawInputNum + withdrawTotalNum;

    withdrawTotal.innerText = finalWithdrawTotal;

    withdrawInput.value = ''



    let balanceTotal = document.querySelector('.balanceTotal');
    let balanceTotalText = balanceTotal.innerText;
    let balanceTotalNum = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalNum - withdrawInputNum;

    
})