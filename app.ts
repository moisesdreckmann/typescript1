import { AccountTotal } from './Account1';

class Account extends AccountTotal {
    constructor(name: string, balance: number, accountNumber: number = 1) {
        super(name, accountNumber, balance);
    }

    public deposito(valor: number): void {
        this.balance += valor;
    }
}

const account: Account = new Account('moises', 500);
account.deposito(400);
account.sacar(100);
account.emprestimo(1000)
console.log(account);