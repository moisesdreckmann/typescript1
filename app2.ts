import { AccountTotal } from "./Account1";

class Account2 extends AccountTotal {
    constructor(name: string, balance: number, accountNumber: number) {
        super(name, accountNumber, balance);
    }

    public deposito(valor: number): void {
        this.balance += valor;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account2: Account2 = new Account2('moises2', 1000, 2);
account2.deposito(500)
console.log("Saldo atual:", account2.getBalance())
