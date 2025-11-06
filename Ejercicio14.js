class Cuenta {
  #saldo; 
  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }
  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depositado: ${monto}. Saldo actual: ${this.#saldo}`);
    } else {
      console.log("Monto de depósito inválido.");
    }
  }
  retirar(monto) {
    if (monto > 0 && this.#saldo >= monto) {
      this.#saldo -= monto;
      console.log(`Retirado: ${monto}. Saldo actual: ${this.#saldo}`);
      return true;
    } else {
      console.log("Fondos insuficientes o monto inválido.");
      return false;
    }
  }
  getSaldo() {
    return this.#saldo;
  }
  transferir(cuentaDestino, monto) {
    if (this.retirar(monto)) {
      cuentaDestino.depositar(monto);
      console.log(`Transferencia de ${monto} realizada.`);
    } else {
      console.log("Transferencia fallida.");
    }
  }
}
class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (monto > 0 && this.getSaldo() >= monto) {
      super.retirar(monto); // Llama al método base
      return true;
    } else {
      console.log("Fondos insuficientes en cuenta de ahorro. No se permite sobregiro.");
      return false;
    }
  }
}
class CuentaCorriente extends Cuenta {
  retirar(monto) {
    const limiteSobregiro = 1000;
    if (monto > 0 && this.getSaldo() - monto >= -limiteSobregiro) {
      super.retirar(monto); // Llama al método base
      return true;
    } else {
      console.log("Sobregiro excedido en cuenta corriente (límite: -1000).");
      return false;
    }
  }
}
const ahorro = new CuentaAhorro(500);
const corriente = new CuentaCorriente(200);
console.log("Cuenta Ahorro inicial:", ahorro.getSaldo());
console.log("Cuenta Corriente inicial:", corriente.getSaldo());
ahorro.depositar(100);
ahorro.retirar(700); 
ahorro.retirar(300);

corriente.retirar(500);
corriente.retirar(800); 

ahorro.transferir(corriente, 200); 
