export abstract class AccountTotal {
    private readonly name: string;
    private readonly accountNumber: number = 1;
    protected balance: number = 0;
    private readonly status = true;

    constructor(name: string, accountNumber: number, balance: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public abstract deposito(valor: number): void;

    public sacar(valor: number): void {
        if (this.balance >= valor) {
            this.balance -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    public emprestimo(valor: number): void {
        if (this.balance > 0 && this.balance >= valor && this.status === true) {
            this.balance -= valor;
            console.log(`Empréstimo de ${valor} reais realizado com sucesso.`);
        } else {
            console.log("Empréstimo não realizado. Saldo insuficiente.");
        }
    }
}