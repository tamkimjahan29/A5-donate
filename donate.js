// donate now btn for nowakhali

document.getElementById('donate-now-btn').addEventListener('click', function () {
    const balance = parseFloat(document.getElementById('balance').innerText);
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    const donationAmountStudent = parseFloat(document.getElementById('donation-amount-student').innerText);

    if (donationAmount>balance || donationAmount<0  || isNaN(donationAmount) ) {
        alert('type a valid amount')
        return;
    }

    const newBalance = balance - donationAmount;
    document.getElementById('balance').innerText = newBalance

    const newDonationAmount = donationAmountStudent + donationAmount;
    document.getElementById('donation-amount-student').innerText = newDonationAmount;


    const nowakhaliText = document.getElementById('nowakhali-text').innerText;
    let currentDate = new Date();
   

    const historySection = document.getElementById('history-section')
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="p-4 my-2 border-2 border-gray-200">
    <p>${donationAmount} BDT donate for ${nowakhaliText}</p>
    <p>${currentDate}</p>
    </div>
    `
    historySection.appendChild(div);

    
     // modal code
     const modal = document.getElementById('modal-section')
     modal.classList.remove('hidden')
     my_modal_4.showModal()


})




document.getElementById('button-donate').addEventListener('click', function () {

    const balance = parseFloat(document.getElementById('balance').innerText);
    const donationStudent = parseFloat(document.getElementById('donation-student').innerText);
    const amountDonate = parseFloat(document.getElementById('amount-donate').value);

    if ( amountDonate>balance || amountDonate<0 || isNaN(amountDonate)) {
        alert('type a valid amount');
        return;
    }

    const newBalance = balance - amountDonate;
    document.getElementById('balance').innerText = newBalance;

    const newAmountDonate = amountDonate + donationStudent;
    document.getElementById('donation-student').innerText = newAmountDonate;



    // create element
    
    const feniText = document.getElementById('feni-text').innerText;
    let currentDate = new Date();
   

    const historySection = document.getElementById('history-section')
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="p-4 my-2 border-2 border-gray-200">
    <p>${amountDonate} BDT donate for ${feniText}</p>
    <p>${currentDate}</p>
    </div>
    `
    historySection.appendChild(div);

    // modal code
    const modal = document.getElementById('modal-section')
    modal.classList.remove('hidden')
    my_modal_4.showModal()
})



document.getElementById('donate').addEventListener('click', function () {

    const balance = parseFloat(document.getElementById('balance').innerText);
    const donation = parseFloat(document.getElementById('donation').innerText);
    const amount = parseFloat(document.getElementById('amount').value);


    if ( amount>balance || amount<0 || isNaN(amount)) {
        alert('type a valid amount');
        return;
    }

    const newBalance = balance - amount;
    document.getElementById('balance').innerText = newBalance;

    const newAmountDonate = amount + donation;
    document.getElementById('donation').innerText = newAmountDonate;

    // create element
    
    // create element
    
    const studnetText = document.getElementById('studnet-text').innerText;
    let currentDate = new Date();
   

    const historySection = document.getElementById('history-section')
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="p-4 my-2 border-2 border-gray-200">
    <p>${amount} BDT donate for ${studnetText}</p>
    <p>${currentDate}</p>
    </div>
    `
    historySection.appendChild(div);

    // modal code
    const modal = document.getElementById('modal-section')
    modal.classList.remove('hidden')
    my_modal_4.showModal()
})


// history tab functionality

document.getElementById('historyTab').addEventListener('click', function () {

    const historyTab = document.getElementById('historyTab')
   
    historyTab.classList.add (
        "bg-green-500",
        "text-black",
        "font-semibold"
    );

    const donationTab=document.getElementById('donationTab');
        donationTab.classList.remove ("bg-green-500","text-black","font-semibold");

    // hidden donation section
    const sectionContainer =document.getElementById('section-container');
    sectionContainer.classList.add('hidden');


    // remove history section hidden class

    const  historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
        

        
});


// donation button

document.getElementById('donationTab').addEventListener('click',function(){
    const historyTab = document.getElementById('historyTab')
    historyTab.classList.remove("bg-green-500","text-black","font-semibold");

    const donationTab= document.getElementById('donationTab');
    donationTab.classList.add("bg-green-500","text-black","font-semibold");
    
    const sectionContainer =document.getElementById('section-container');
    sectionContainer.classList.remove('hidden');

    const  historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');

});



// modal remove after confirmation
document.getElementById('modal-btn').addEventListener('click', function () {
    const modal = document.getElementById('modal-section');
    modal.classList.add('hidden')
})





 






