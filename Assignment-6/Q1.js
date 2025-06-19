// Create a class with properties and methods as given

class BankAccount{
    // Constructor
    constructor(bal, owner){
        this.balance = bal;
        this.owner = owner;
    }

    // Adds into balance
    deposite(amount){
        this.balance += amount;
    }

    // Subtracts from balance
    withdraw(amount){
        // If amount is greater than balance
        if(amount > this.balance){
            console.log("Enter a valid amount: ")
        }
        this.balance -= amount;
    }

    // Displays total balance into bank account
    displayBalance(){
        console.log(this.balance);
    }
}

// Instance of a class
const account1 = new BankAccount(10000, "Akhil");
account1.displayBalance();