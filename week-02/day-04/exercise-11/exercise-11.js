'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
//console.log(accounts);


function re_name_balance (arr){
  arr.forEach(function(element){
    console.log(element.client_name+" "+element.balance);
  });
}


re_name_balance(accounts);




function transfer(accounts,from_account,to_account,ba){
  var f_number = -1;
  var t_number = -1;
  for(var i = 0 ; i < accounts.length ; i++){
    if(accounts[i].account_number===from_account){
      f_number=i;
    }
    if(accounts[i].account_number===to_account){
      t_number=i;
    }
  }
  if(f_number === -1 || t_number === -1){
    console.log("404 Not Found");
  }
  console.log(f_number);
  accounts[f_number].balance-=ba;
  accounts[t_number].balance+=ba;
  console.log(accounts);
}

transfer(accounts,11234543,43546731,99.2);


