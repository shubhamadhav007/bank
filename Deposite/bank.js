function CreateBankAccount(name,bankNumber,balance,type){
    this.name=name;
    this.bankNumber=bankNumber;
    this.balance=balance;
    this.type=type;

    this.deposite=function(amount){
        this.balance +=amount;
    }

  this.withdraw=function(amount){
    if(amount <= this.balance)  {
        this.balance -= amount
        console.log("succefully withdraw",this.balance)
    }
    else{
        console.log("you do not have sufficiant balance",this.balance)
    }
    this.getTotalBalance=function(){
        console.log('your balance is this  -',this.balance)
    }
    }
    
    

};



let ac1=new CreateBankAccount('shubham',3939494,9003030,'saving')
let ac2 = new CreateBankAccount('mirzot',33030,333444,'saving')
let ac3 = new CreateBankAccount('mazira',33394,4443,'current')

//console.log(ac1 ,"without depositing");
ac1.withdraw(900)
ac1.deposite(500)

ac2.deposite(73333)
ac2.withdraw(888)

ac3.withdraw(7333)
ac3.deposite(888)


let accounts=[ac1,ac2,ac3]

function getTotalBalance(accounts){
    let total=0
    for(let i=0;i<accounts.length;i++){
        total += accounts[i].balance
    }
    console.log(total)
}
getTotalBalance(accounts)
//ac1.deposite(800)
//console.log(ac1);

//ac1.withdraw(809)
//console.log(ac1);