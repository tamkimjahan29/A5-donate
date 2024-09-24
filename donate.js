document.getElementById('donate-now-btn').addEventListener('click',function(){
    const balance=parseFloat(document.getElementById('balance').innerText);
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    const donationAmountStudent = parseFloat(document.getElementById('donation-amount-student').innerText);

    const newBalance = balance - donationAmount ;
    document.getElementById('balance').innerText = newBalance
    
    const newDonationAmount = donationAmountStudent + donationAmount;
    document.getElementById('donation-amount-student').innerText =newDonationAmount;
    
})

document.getElementById('button-donate').addEventListener('click',function(){

const balance=parseFloat(document.getElementById('balance').innerText);
const donationStudent= parseFloat(document.getElementById('donation-student').innerText);
const amountDonate = parseFloat(document.getElementById('amount-donate').value);

const newBalance = balance - amountDonate ;
document.getElementById('balance').innerText = newBalance;

const newAmountDonate = amountDonate + donationStudent ;
document.getElementById('donation-student').innerText=newAmountDonate;


})

document.getElementById('donate').addEventListener('click',function(){

    const balance=parseFloat(document.getElementById('balance').innerText);
const donation= parseFloat(document.getElementById('donation').innerText);
const amount = parseFloat(document.getElementById('amount').value);

const newBalance = balance - amount ;
document.getElementById('balance').innerText = newBalance;

const newAmountDonate = amount+ donation ;
document.getElementById('donation').innerText=newAmountDonate;

})



