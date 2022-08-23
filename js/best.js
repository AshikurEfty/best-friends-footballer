// ======== select player js part ========

// click of button
const playerList = document.getElementById("added-main");
document.getElementById('select-button-one').addEventListener('click', function(){
  document.getElementById('select-button-one').disabled = 'true';
  if(playerList.childElementCount < 5){
    const node = document.createElement("li");
    const textnode = document.getElementById("messi-name");
    node.textContent= textnode.textContent;
    playerList.appendChild(node);
  }
  else{
    alert('You can select only 5 Players')
  }
})
document.getElementById('select-button-two').addEventListener('click', function(){
  document.getElementById('select-button-two').disabled = 'true';
  if(playerList.childElementCount < 5){
    const node = document.createElement("li");
    const textnode = document.getElementById("neymar-name");
    node.textContent= textnode.textContent;
    playerList.appendChild(node);
  }
  else{
    alert('You can select only 5 Players')
  }
    
})
document.getElementById('select-button-three').addEventListener('click', function(){
  document.getElementById('select-button-three').disabled = 'true';
  if(playerList.childElementCount < 5){
    const node = document.createElement("li");
    const textnode = document.getElementById("kylian-name");
    node.textContent= textnode.textContent;
    playerList.appendChild(node);
  }
  else{
    alert('You can select only 5 Players')
  }
});   
document.getElementById('select-button-four').addEventListener('click', function(){
  document.getElementById('select-button-four').disabled = 'true';
  if(playerList.childElementCount < 5){
    const node = document.createElement("li");
    const textnode = document.getElementById("victor-name");
    node.textContent= textnode.textContent;
    playerList.appendChild(node);
  }
  else{
    alert('You can select only 5 Players')
  }
});
document.getElementById('select-button-five').addEventListener('click', function(){
  document.getElementById('select-button-five').disabled = 'true';
  if(playerList.childElementCount < 5){
    const node = document.createElement("li");
    const textnode = document.getElementById("sergio-name");
    node.textContent= textnode.textContent;
    playerList.appendChild(node);
  }
  else{
    alert('You can select only 5 Players')
  }
});
document.getElementById('select-button-six').addEventListener('click', function(){
  if(playerList.childElementCount < 5){
    const node = document.createElement("li");
    const textnode = document.getElementById("efty-name");
    node.textContent= textnode.textContent;
    playerList.appendChild(node);
  }
  else{
    alert('You can select only 5 Players')
  }
});

  // =========== calculate js part =============


  // create common function

function getCalculateTotalPrice(){
  const inputField = document.getElementById('price-input-field');
  const calculatePrice = inputField.value;
    const newCalculatePrice = parseFloat(calculatePrice);
    const totalNewCalculatePrice = newCalculatePrice * playerList.childElementCount;
    inputField.value = '';
    
    const expensesPrice = document.getElementById('expenses-price');
    expensesPrice.innerText = totalNewCalculatePrice ;
}

  document.getElementById('calculate').addEventListener('click', function(){
    getCalculateTotalPrice();
  })

  document.getElementById('calculate-total').addEventListener('click', function(){
    // input field of manager

    const managerInputField = document.getElementById('manager-input-field'); 
    const managerPriceString = managerInputField.value;
    const newManagerPrice = parseFloat(managerPriceString);
    managerInputField.value = '';
    
    // input field of coach

    const coachInputField = document.getElementById('coach-input-field');
    const coachPriceString = coachInputField.value;
    const newcoachPrice = parseFloat(coachPriceString);
    coachInputField.value = '';
    
    // collect expenses price

    const mainPrice = document.getElementById('expenses-price');
    const mainpriceString = mainPrice.innerText;
    const mainPriceNew = parseFloat(mainpriceString);

    // total price count

    const totalPrice = newManagerPrice + newcoachPrice + mainPriceNew;
    const mainTotalPrice = document.getElementById('total-price');
    mainTotalPrice.innerText = totalPrice;
  })

